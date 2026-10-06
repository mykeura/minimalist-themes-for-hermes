// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import vm from 'node:vm'

const entries = ['desktop/plugin.js']
function load(entry) {
  const source = readFileSync(new URL(`../${entry}`, import.meta.url), 'utf8')
  const registered = [], styles = [], disposers = []
  const sandbox = {
    THEMES_AREA: 'themes',
    document: { getElementById: () => null, createElement: () => ({ remove() {} }), head: { append: style => styles.push(style) } },
  }
  vm.createContext(sandbox)
  vm.runInContext(source.replace(/^import .*$/m, '').replace('export default {', 'globalThis.plugin = {'), sandbox)
  sandbox.plugin.register({ storage: { get: () => {}, set: () => {}, remove: () => {} }, register: item => registered.push(item), onDispose: fn => disposers.push(fn) })
  return { registered, styles, sandbox }
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
}
