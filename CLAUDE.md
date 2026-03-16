# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

Products Section 更新，增量修改：

1. **移除 Coming Soon 佔位產品**，替換為 3 個 Archived 產品：
   - **Poop Hub**：icon `/poophub-icon.png`，描述 en `Track your digestive health with data.` zh `用數據記錄你的腸道健康`
   - **ReCycle**：icon `/recycle-icon.png`，描述 en `Cycling tracker for your rides.` zh `記錄每一趟騎行旅程`
   - **FlavorFlash**：icon `/flavorflash-icon.jpg`，描述 en `Capture your taste memories.` zh `捕捉你的味蕾記憶`

2. **Archived 狀態**：en `Archived` zh `已封存`，不顯示任何連結按鈕

3. **視覺處理**：Archived 卡片用灰階/低飽和度或半透明（opacity 0.7-0.8）與 Live 產品區分

4. 更新 `zh.json` 和 `en.json` 的產品資料（icon 已複製到 `public/`）

## 開發前必讀

1. **讀 Spec**：`SPEC.md` — 完整需求（重點看 §3.3 Products 和 §4.1 Team）
2. 看現有 code 結構，找到需要改的地方

## 技術棧

- Next.js + Tailwind CSS v4 + Framer Motion + next-intl + Lucide React + next-themes
- **UI 元件庫：shadcn/ui**
- **動畫：Framer Motion**
- **Icon：Lucide React**
- Light/Dark Mode 用 next-themes + Tailwind `dark:` modifier
- i18n 用 next-intl，路徑前綴 `/zh/`、`/en/`，預設 `zh`

## 資源

- Logo：`/Users/j.a.s.o.n/.openclaw/workspace-team/assets/zone-lab-logo.png` → 複製到 `public/`
- Jason 照片：`/Users/j.a.s.o.n/.openclaw/workspace-team/assets/jason-photo.png` → 複製到 `public/`
- 其他團隊成員用漸層 + Lucide icon 作為 avatar

## 完成後（必須全部執行）

1. `pnpm build` — 如果失敗，修好再 build
2. `git add -A && git commit -m "feat: replace placeholder products with 3 archived apps"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.4.3 — 3 archived products (Poop Hub, ReCycle, FlavorFlash)" --mode now`
