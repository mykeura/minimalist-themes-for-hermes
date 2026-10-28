# SPDX-FileCopyrightText: 2026 Miguel Euraque
# SPDX-License-Identifier: MIT

"""Hermes Agent compatibility entrypoint for a Desktop-only theme pack.

The palettes are registered by ``desktop/plugin.js`` inside Hermes Desktop.
Hermes Agent imports every installed plugin directory through this module, so
without it the loader records ``No __init__.py`` as a registration failure at
startup and in ``hermes plugins doctor``, even though there is nothing to
register on the Agent side. Keeping this entrypoint inert satisfies the
contract and exposes no tools, hooks or settings.
"""


def register(ctx):
    """Satisfy Hermes Agent's plugin contract without registering capabilities."""
    del ctx
