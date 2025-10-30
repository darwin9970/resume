# 个人简历站点（Vue3 + Vite）

一个用于在线展示与导出 PDF 的个人简历站点。已接入页面级内容维护、打印样式与“一键下载 PDF 简历”。

## 主要功能

- 页面化简历：左侧个人信息与技能，右侧工作/项目经历
- 一键下载 PDF：基于 html2canvas + jsPDF 直接生成当前页面 PDF
- 自适应打印样式：`src/styles/print.css` 调整为 A4 版式
- 移动端兼容：简化交互与按钮在移动端隐藏/收起

## 快速开始

```bash
pnpm i
pnpm dev
```

构建/预览：

```bash
pnpm build
pnpm preview
```

## 内容维护位置

- 个人信息/教育/技能：`src/views/aside/Aside.vue`
- 工作经历：`src/views/content/work/Work.vue`
- 项目经历：`src/views/content/project/Project.vue`
- 打印样式（A4、隐藏按钮等）：`src/styles/print.css`
- 下载按钮与导出逻辑：`src/components/pdf-button/PDFButton.vue`

> 头像等静态资源放在 `src/assets/`，如需替换请保持图片为本地资源以避免跨域导致的 PDF 空白问题。

## PDF 导出说明

- 目前采用“实时截图并拼页”的方式导出 PDF，导出内容与当前页面保持一致
- 依赖：`html2canvas`、`jspdf`（已本地安装并通过 ESM 引入）
- 导出入口：右下角“下载PDF简历”，对应实现见 `PDFButton.vue`
- 如需更高清晰度，可在 `PDFButton.vue` 调整 `html2canvas({ scale: 2 })` 的缩放值

## 常见问题

- 导出出现多余白边：已在导出逻辑中按页面与 A4 比例自适应并居中，仍有白边可再调节边距或 `scale`
- 远程图片不显示：请改为本地资源或确保允许 CORS；`html2canvas` 对跨域资源有限制
- 仍想使用静态 PDF：将文件放入 `public/pdf/resume.pdf`，并在 `PDFButton.vue` 改回静态下载逻辑

## 部署

项目为纯前端，可直接构建后将 `dist/` 部署到任意静态服务器（如 GitHub Pages、Vercel、Netlify）。

```bash
pnpm build
# 将 dist 上传/部署
```

## 许可

本项目仅用于个人简历展示，可自由克隆与二次定制。
