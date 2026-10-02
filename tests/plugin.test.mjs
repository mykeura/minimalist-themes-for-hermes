// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import vm from 'node:vm'

const entries = ['desktop/plugin.js', 'desktop-plugins/minimalist-themes/plugin.js']
function load(entry, { legacy = {}, native = {}, global = null, nativeGlobal = null, profile = 'default' } = {}) {
  const source = readFileSync(new URL(`../${entry}`, import.meta.url), 'utf8')
  const pluginStore = new Map([['profile-themes', legacy], ['global-theme', global]])
  const local = new Map([['hermes-desktop-profile-themes-v1', JSON.stringify(native)]])
  if (nativeGlobal !== null) local.set('hermes-desktop-theme-v2', nativeGlobal)
  const registered = [], applied = [], styles = [], disposers = []
  const sandbox = {
    THEMES_AREA: 'themes',
    host: { state: { profile: { get: () => profile, subscribe: fn => { fn(profile); return () => {} } } } },
    requestTheme: name => { applied.push(name); return true },
    document: { getElementById: () => null, createElement: () => ({ remove() {} }), head: { append: style => styles.push(style) } },
    localStorage: { getItem: key => local.get(key) ?? null, setItem: (key, value) => local.set(key, value) },
    window: { dispatchEvent() {} },
    StorageEvent: class { constructor(type, props) { Object.assign(this, props); this.type = type } },
    MutationObserver: class { observe() {} disconnect() {} },
    requestAnimationFrame: fn => { fn(); return 1 }, cancelAnimationFrame() {},
  }
  vm.createContext(sandbox)
  vm.runInContext(source.replace(/^import .*$/m, '').replace('export default {', 'globalThis.plugin = {'), sandbox)
  sandbox.plugin.register({ storage: { get: (key, fallback) => pluginStore.get(key) ?? fallback, set: (key, value) => pluginStore.set(key, value), remove: key => pluginStore.delete(key) }, register: item => registered.push(item), onDispose: fn => disposers.push(fn) })
  return { registered, applied, styles, pluginStore, local, sandbox }
}
for (const entry of entries) {
  test(`${entry}: exposes a neutral catalog description`, () => {
    const { sandbox } = load(entry)
    assert.equal(sandbox.plugin.description, '18 warm, readable palettes for Hermes Desktop.')
    const manifest = readFileSync(new URL('../plugin.yaml', import.meta.url), 'utf8')
    assert.ok(manifest.includes('description: "18 warm, readable palettes for Hermes Desktop."'))
  })
  test(`${entry}: registers palettes without custom profile controls or hidden plugin info`, () => {
    const source = readFileSync(new URL(`../${entry}`, import.meta.url), 'utf8')
    assert.doesNotMatch(source, /installProfileThemeSettings|hideAgentToggle|profile-theme-settings|#plugin-minimalist-themes/)
    const result = load(entry)
    assert.equal(result.registered.length, 18)
    assert.ok(result.styles.length > 0)
  })
  test(`${entry}: migrates missing native assignments once without overwriting existing picks`, () => {
    const result = load(entry, { legacy: { coder: 'mint', writer: 'yuzu', default: 'mango', invalid: 'unknown' }, native: { writer: 'mono' }, nativeGlobal: 'slate', global: 'horchata', profile: 'coder' })
    assert.deepEqual(JSON.parse(result.local.get('hermes-desktop-profile-themes-v1')), { writer: 'mono', coder: 'mint' })
    assert.equal(result.local.get('hermes-desktop-theme-v2'), 'slate')
    assert.equal(result.pluginStore.get('native-themes-migrated-v1'), true)
    assert.equal(result.pluginStore.get('profile-themes').coder, 'mint')
    assert.equal(result.applied.length, 0, 'migration must not call requestTheme and overwrite an active native pick')
    result.local.set('hermes-desktop-profile-themes-v1', JSON.stringify({ writer: 'mono' }))
    result.sandbox.plugin.register({ storage: { get: (key, fallback) => result.pluginStore.get(key) ?? fallback, set: (key, value) => result.pluginStore.set(key, value) }, register() {}, onDispose() {} })
    assert.deepEqual(JSON.parse(result.local.get('hermes-desktop-profile-themes-v1')), { writer: 'mono' })
  })
}
