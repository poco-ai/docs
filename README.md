# poco-docs

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

## Quick Start

Run development server:

```bash
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

Useful scripts:

```bash
pnpm lint
pnpm lint:fix
pnpm types:check
pnpm build
```

## Project Structure

In the project, you can see:

- `content/docs/{en,zh}`: bilingual documentation content (`.mdx` files)
- `app/[lang]/[[...slug]]`: localized docs pages mounted on `/{lang}`
- `lib/source.ts`: Fumadocs source loader, reads from `content/docs`
- `source.config.ts`: MDX collection config (schema/custom options)
- `lib/layout.shared.tsx`: shared nav/github layout options

| Route                     | Description                                   |
| ------------------------- | --------------------------------------------- |
| `app/[lang]/[[...slug]]`  | The localized documentation layout and pages. |
| `app/api/search/route.ts` | The Route Handler for search.                 |

## Fumadocs 使用说明

### 1) 内容来源

- 文档目录是 `content/docs/{en,zh}`
- 每个 `.mdx` 文件会自动变成一个页面
- `content/docs/zh/index.mdx` 对应 `/zh`
- `content/docs/en/features/index.mdx` 对应 `/en/features`

### 2) 添加新文档

1. 在 `content/docs/en` 或 `content/docs/zh` 下新建文件，例如 `features/getting-started.mdx`
2. 写入 frontmatter（至少 `title`、`description`）
3. 写正文（支持 Markdown + MDX 组件）
4. 运行 `pnpm dev` 预览

示例：

```mdx
---
title: Getting Started
description: Quick setup guide
---

# Getting Started

欢迎使用文档站。
```

### 3) 文档排序与分组（可选）

可在 `content/docs/en/meta.json`、`content/docs/zh/meta.json` 以及各子目录的 `meta.json` 里定义导航顺序、分组和标题覆写。没配置时默认按文件结构生成导航。

### 4) 常见开发流

```bash
pnpm dev          # 本地预览
pnpm lint         # ESLint 检查
pnpm types:check  # 类型检查
```

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
