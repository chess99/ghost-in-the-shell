<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: <https://ai.studio/apps/drive/1fVc5eU_Fcs79ROG6RVlbMICCZ3ZZ6-UU>

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

### 自动部署（推荐）

1. 确保你的仓库已经推送到 GitHub
2. 在 GitHub 仓库设置中：
   - 进入 **Settings** → **Pages**
   - 在 **Source** 中选择 **GitHub Actions**
3. 推送代码到 `main` 分支，GitHub Actions 会自动构建并部署

### 手动部署

如果你想手动部署：

1. 构建项目：

   ```bash
   npm run build
   ```

2. 如果仓库名不是根路径，需要设置 base path：

   ```bash
   GITHUB_PAGES_BASE=/your-repo-name/ npm run build
   ```

3. 将 `dist` 目录的内容推送到 `gh-pages` 分支，或使用 GitHub Pages 的其他部署方式

### 自定义域名

如果你使用自定义域名，在 `vite.config.ts` 中将 `base` 设置为 `'/'`。
