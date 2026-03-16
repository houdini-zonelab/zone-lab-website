# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

1. **使用真實 App Icon**：`public/marawanna-icon.png` 和 `public/summur-icon.png` 已就位，替換掉 Products Section 中 Marawanna 和 Summur 的佔位 icon（Lucide icon 或漸層色塊）
2. 確認兩個 Live 產品卡片都用 `<Image src="/marawanna-icon.png">` 和 `<Image src="/summur-icon.png">`（圓角方形，標準 app icon 樣式）

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
2. `git add -A && git commit -m "feat: use real app icons for Marawanna and Summur"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website updated — real app icons for Marawanna & Summur" --mode now`
