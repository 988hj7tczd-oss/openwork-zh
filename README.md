<div align="center">

# OpenWork 中文社区版

**100% 简体中文界面的 AI 工作流共享桌面应用 · 非官方社区汉化版**

[![GitHub stars](https://img.shields.io/github/stars/988hj7tczd-oss/openwork-zh?style=flat-square)](https://github.com/988hj7tczd-oss/openwork-zh/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg?style=flat-square)](#下载安装)

**简体中文** | [English](./README_EN.md)

> ⚠️ **非官方社区版**：本项目基于 [different-ai/openwork](https://github.com/different-ai/openwork)（18.8k ⭐）的 MIT 开源代码，由中文社区维护的汉化版本，与官方无隶属关系。

</div>

## 🎯 为什么有这个版本

官方 OpenWork 内置简体中文，但**只翻译了约 63% 的界面文案**，大量设置项、连接向导、诊断页面仍是英文。本项目在官方基础上：

- ✅ **100% 简体中文界面**：补齐官方缺失的 718 条翻译，覆盖率 63% → **100%**
- ✅ **修复官方遗留英文**：补译官方漏翻的 25 处界面文案（运行时配置、服务器端点、云设置等）
- ✅ **保留官方全部功能**：与官方完全同源，不含 `ee/` 企业版目录
- ✅ **持续同步官方更新**：定期 merge upstream，汉化不回退

## ✨ 功能亮点

| 功能 | 说明 |
|---|---|
| 🖥️ 桌面应用 | macOS / Windows / Linux，双击选文件夹即用 |
| 🤖 AI 工作流共享 | 复用 skills、MCP、命令，与团队共享 |
| 🔌 任意 Agent 接入 | OpenWork MCP 可接入 Codex、Claude Code、Cursor、opencode |
| 📱 聊天集成 | WhatsApp / Telegram 远程操作 |
| 👥 团队管理 | OpenWork Den 控制平面（组织/成员/模型权限） |
| 🧠 记忆库 | 跨会话保存智能体记住的事实 |

## 📥 下载安装

从 [Releases](https://github.com/988hj7tczd-oss/openwork-zh/releases) 下载对应平台安装包：

| 平台 | 文件 | 说明 |
|---|---|---|
| macOS | `openwork-darwin-*.dmg` | 未签名，首次打开需 **右键 → 打开**（与官方同款） |
| Windows | `openwork-win-*.exe` | NSIS 安装包 |
| Linux | `openwork-linux-*.AppImage` | 需 `chmod +x` 后运行 |

> 🚀 国内加速：Gitee 镜像（备用下载通道）

## 🚀 快速开始

1. 下载并安装对应平台安装包
2. 打开 OpenWork，**选择一个文件夹**作为工作区
3. 点击左下角设置 → **外观 → 语言**，选择 **简体中文**
4. 在设置中连接你的模型提供商（OpenAI / Anthropic / DeepSeek 等）
5. 在输入框输入任务，开始使用

## 🔄 与官方的关系

- **代码来源**：fork 自 [different-ai/openwork](https://github.com/different-ai/openwork)，核心代码遵循 MIT 协议
- **翻译回馈**：本项目的简体中文翻译已提交 PR 回官方，随官方版本发布
- **同步策略**：定期合并上游更新；每次同步后重新验证汉化覆盖率
- **不含企业版**：不包含 `ee/` 目录（Fair Source 许可，仅官方分发）

## 🤝 参与贡献

- **翻译纠错**：发现任何界面仍是英文或翻译不当，提 Issue 或 PR
- **代码贡献**：功能开发请优先贡献给[官方仓库](https://github.com/different-ai/openwork)
- **宣传支持**：Star 本项目，或分享给需要中文版的朋友

## 🌐 中文社区

- 📊 [AI House 排行榜](https://www.aibunkhouse.com/rankings/) — 云端大模型 / 本地部署 / Agent 工具真实用户投票排行
- 🧰 [AI House 技能 & 工具库](https://www.aibunkhouse.com/tools/) — 更多中文 AI 技能与开源工具
- 🗣️ [AI House 论坛](https://www.aibunkhouse.com/forum/) — 交流 AI 使用心得与工具推荐

## 📄 版权声明

- 核心代码版权归 [Different AI, Inc.](https://github.com/different-ai) 所有，采用 **MIT 许可证**
- **OpenWork** 是 different-ai 的商标，本项目仅作描述性引用
- 本项目由社区志愿者维护，与官方无隶属、背书关系
