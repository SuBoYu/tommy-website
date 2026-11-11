# Tommy 學長官網

獨立靜態網站，保留 16 則學生紀錄（15 則完整心得）及 Moonshot EP21 播放器與平台連結。

## 本機

Node.js 22，無外部 npm 依賴。修改 src/index.html，執行 `npm run build`。本機預覽執行 `npm run preview`。
建置檢查導覽、JavaScript、心得原文完整性及 Podcast 連結，輸出 dist/index.html。新增心得時同步更新 testimonials.json 與檢查數量。

## Cloudflare Pages Git integration

- GitHub repo：https://github.com/SuBoYu/tommy-website
- Production branch: main
- Framework preset: None
- Root directory: repo 根目錄
- Build command: npm run build
- Build output directory: dist
- Node.js: 22

在 Workers & Pages 建立 Pages，選 Connect to Git；不使用 Direct Upload。授權上述 repo，保留其他 repo 的既有權限。啟用 main 自動部署與非 main 預覽部署。

測試分支 → PR → GitHub Actions 檢查 → Cloudflare 預覽 → 合併 main → 核對 production commit 與實際網址。未設定分支規則時，GitHub 檢查失敗不會阻擋合併；Cloudflare 的 build command 也會執行相同檢查。

先使用免費 pages.dev；實際網址以 Cloudflare 成功部署回傳為準。目前不需修改 DNS。回復時先 rollback 正常部署，再 revert 問題 commit。

## 狀態

已完成：最新版原始碼、建置腳本、GitHub Actions 設定、本機檢查（Node.js 24.7.0）。CI 指定 Node.js 22；實際執行結果請見 GitHub Actions。
Cloudflare 連接、首次部署、PR preview、main 自動部署與正式網址仍待驗證。

舊 Sites 網站保留，與本專案不會自動同步。此專案不含 Sites 設定、Git 記錄、token 或憑證。
