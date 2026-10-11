# gc-or.github.io 发布说明

此版本用于审阅。保留了 noindex，尚未绑定 can-gong.com。

## 审阅后发布

1. 在 GitHub 打开 gc-or/gc-or.github.io 的 Settings → Pages。
2. 将 Build and deployment → Source 设置为 GitHub Actions。
3. 确认允许公开页面内容后，上传 website-preview-cartoon 分支并将其拉取请求合并到 main。
4. 等待 Publish academic homepage 工作流完成。
5. 通过 https://gc-or.github.io/ 检查网页。

自动流程只发布 dist/client 中的静态文件；原始简历和临时提取内容不在此发布分支中。website-preview-cartoon 从原始 main 创建，头像使用虚构二次元角色，不包含旧真人照片的提交历史。旧 website-preview 分支含有真人照片，请勿上传。

## 正式域名

网站确认后，再验证并在 GitHub Pages 设置中添加 can-gong.com。阿里云 DNS 的 www CNAME 目标是 gc-or.github.io；根域名 A 记录按 GitHub 官方说明配置。此次准备不添加 CNAME 文件、不修改 DNS、不启用搜索收录。

正式发布前，将 app/layout.tsx 的 robots 改为允许收录，检查英文文案和学校邮箱，并复核依赖告警。仓库为公开仓库，源代码和其中的联系信息可被访问；noindex 不是访问控制。

## 本地开发

```sh
npm ci
npm run dev
npm run build
```

修改内容：app/page.tsx；修改样式：app/globals.css。头像：public/portrait.png。
