<div align="center">

# OpenWork Chinese Community Edition

**AI workflow sharing desktop app with a 100% Simplified Chinese UI · Unofficial community localization**

[![GitHub stars](https://img.shields.io/github/stars/988hj7tczd-oss/openwork-zh?style=flat-square)](https://github.com/988hj7tczd-oss/openwork-zh/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg?style=flat-square)](#download)

[简体中文](../README.md) | **English**

> ⚠️ **Unofficial community edition**: This project is based on the MIT-licensed source of [different-ai/openwork](https://github.com/different-ai/openwork) (18.8k ⭐), maintained by the Chinese community. Not affiliated with the official project.

</div>

## 🎯 Why this edition exists

Official OpenWork ships with Simplified Chinese, but **only ~63% of the UI is translated** — many settings, connection wizards, and diagnostics pages remain in English. This project builds on the official codebase to fix that:

- ✅ **100% Simplified Chinese UI**: 718 missing translations added, coverage 63% → **100%**
- ✅ **Fixed leftover English**: 25 untranslated UI strings the official version missed (runtime config, server endpoints, cloud settings, etc.)
- ✅ **All official features preserved**: fully source-compatible with upstream, excluding the `ee/` enterprise directory
- ✅ **Keeps up with upstream**: periodic merges with official updates, localization coverage re-verified after each sync

## ✨ Features

| Feature | Description |
|---|---|
| 🖥️ Desktop app | macOS / Windows / Linux, pick a folder and go |
| 🤖 AI workflow sharing | Reuse skills, MCPs, and commands with your team |
| 🔌 Any agent integration | OpenWork MCP works with Codex, Claude Code, Cursor, opencode |
| 📱 Chat integration | Remote control via WhatsApp / Telegram |
| 👥 Team management | OpenWork Den control plane (org / members / model permissions) |
| 🧠 Memory bank | Facts the agent remembers, persisted across sessions |

## 📥 Download

Grab the installer for your platform from [Releases](https://github.com/988hj7tczd-oss/openwork-zh/releases):

| Platform | File | Notes |
|---|---|---|
| macOS | `openwork-mac-arm64-*.dmg` (Apple Silicon) / `openwork-mac-x64-*.dmg` (Intel) | Unsigned — first launch: **right-click → Open** (same as official) |
| Windows | `openwork-win-*.exe` | NSIS installer |
| Linux | `openwork-linux-*.AppImage` / `*.tar.gz` | AppImage: `chmod +x` first |

> 🚀 China mirror: [Gitee](https://gitee.com/jerryweizhihao/openwork-zh) (faster downloads inside mainland China)

## 🚀 Quick start

1. Download and install the installer for your platform
2. Open OpenWork and **pick a folder** as your workspace
3. The UI is Simplified Chinese by default on Chinese systems (switch manually via Settings → Appearance → Language if needed)
4. Connect a model provider (OpenAI / Anthropic / DeepSeek / etc.) in Settings
5. Type a task and start working

## 🔄 Relationship with upstream

- **Codebase**: forked from [different-ai/openwork](https://github.com/different-ai/openwork), core code under MIT
- **Translation contribution**: the Simplified Chinese translations are submitted back upstream via PR (merged into official releases)
- **Sync strategy**: periodically merge upstream; re-verify localization coverage after every sync
- **No enterprise code**: the `ee/` directory (Fair Source licensed, official distribution only) is excluded

## 🤝 Contributing

- **Translation fixes**: spotted English text or poor wording? Open an issue or PR
- **Code contributions**: please contribute features to the [official repo](https://github.com/different-ai/openwork) first
- **Spread the word**: star this repo or share it with Chinese-speaking users

## 🌐 Chinese community

- 📊 [AI House Rankings](https://www.aibunkhouse.com/rankings/) — real user voting on cloud LLMs / local models / agent tools
- 🧰 [AI House Skills & Tools](https://www.aibunkhouse.com/tools/) — more Chinese AI skills and open-source tools
- 🗣️ [AI House Forum](https://www.aibunkhouse.com/forum/) — discuss AI tips and tool recommendations

## 📄 License & trademarks

- Core code copyright © [Different AI, Inc.](https://github.com/different-ai), licensed under **MIT**
- **OpenWork** is a trademark of different-ai; used here for descriptive purposes only
- This project is maintained by community volunteers with no affiliation or endorsement from the official project
