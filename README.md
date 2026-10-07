# DM — GitHub Pages

这是一个不依赖框架、打包器或第三方运行时的静态页面，入口文件位于仓库根目录的 `index.html`。页面突出展示关键词 **DM**，并提供响应式布局与轻量主题切换。

## 本地预览

直接在浏览器打开 `index.html` 即可预览。也可以在仓库目录运行任意静态文件服务器，例如：

```bash
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 发布到 GitHub Pages

1. 将仓库内容推送到 GitHub。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择要发布的分支（通常是 `main`）和目录 `/ (root)`，点击 **Save**。
5. 等待 GitHub Actions 完成后，使用页面显示的地址访问站点。
