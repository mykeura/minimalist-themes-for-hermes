# SPDX-License-Identifier: MIT
# Copyright (c) 2026 Miguel Euraque
"""Offline checks for the packaged Agent skill."""
import importlib.util
from pathlib import Path
import unittest
import yaml

ROOT = Path(__file__).resolve().parents[1]


class SkillTests(unittest.TestCase):
    def test_agent_registers_existing_namespaced_skill(self):
        spec = importlib.util.spec_from_file_location("minimalist_theme_plugin", ROOT / "__init__.py")
        assert spec is not None and spec.loader is not None
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        registrations = []

        class Context:
            def register_skill(self, name, path, description="", frontmatter=None):
                registrations.append((name, Path(path), description))

        module.register(Context())
        self.assertEqual(len(registrations), 1)
        name, path, description = registrations[0]
        self.assertEqual(name, "profile-themes")
        self.assertTrue(path.is_file())
        text = path.read_text()
        metadata = yaml.safe_load(text.split("---", 2)[1])
        self.assertEqual(metadata["name"], name)
        self.assertEqual(metadata["description"], description)
        self.assertLessEqual(len(description), 60)
        self.assertTrue(description.endswith("."))
        self.assertNotIn("/home/miguel", text)
        for section in ["When to Use", "Prerequisites", "Procedure", "Pitfalls", "Verification"]:
            self.assertIn("## " + section, text)


if __name__ == "__main__":
    unittest.main()
