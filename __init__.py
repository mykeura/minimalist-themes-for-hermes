# SPDX-License-Identifier: MIT
# Copyright (c) 2026 Miguel Euraque
"""Register the agent workflow; visual themes live in desktop/plugin.js."""
from pathlib import Path


def register(ctx):
    """Expose one read-only skill without adding tools or changing profiles."""
    ctx.register_skill(
        "profile-themes",
        Path(__file__).parent / "skills" / "profile-themes" / "SKILL.md",
        description="Assign Minimalist Desktop themes to Hermes profiles.",
    )
