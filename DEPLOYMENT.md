# 部署指南 / Deployment Guide

## GitHub Pages 部署

### 前置步骤

1. **在 GitHub 仓库设置中启用 Pages**：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

2. **推送代码到 GitHub**：
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/CityExperience-AI-web.git
   git push -u origin main
   ```

3. **自动部署**：
   - 推送代码后，GitHub Actions 会自动运行
   - 在仓库的 Actions 标签页可以查看部署进度
   - 部署完成后，网站会在 `https://YOUR_USERNAME.github.io/CityExperience-AI-web` 上线

### 注意事项

- 如果仓库名不是 `CityExperience-AI-web`，需要修改 `next.config.js` 中的 `basePath` 和 `assetPrefix`
- 首次部署可能需要几分钟时间
- 每次推送到 `main` 分支都会自动重新部署

---

## Vercel 部署（推荐）

### 更简单的部署方式

1. **访问 [vercel.com](https://vercel.com)**
2. **使用 GitHub 账号登录**
3. **导入仓库**：
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测 Next.js 项目
4. **一键部署**：
   - 点击 "Deploy"
   - 几分钟后网站就会上线
   - 会获得一个 `your-project.vercel.app` 的域名

### Vercel 的优势

- ✅ 自动部署（每次 push 自动更新）
- ✅ 免费 SSL 证书
- ✅ 全球 CDN
- ✅ 自定义域名支持
- ✅ 无需修改代码配置
- ✅ Next.js 官方推荐平台

---

## 本地测试静态导出

在部署前，可以本地测试静态导出：

```bash
npm run build
```

构建完成后，会在 `out` 文件夹生成静态文件。可以使用任何静态服务器测试：

```bash
npx serve out
```

