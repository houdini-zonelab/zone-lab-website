# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

Testimonial 卡片視覺一致性修復，增量修改：

1. **卡片高度統一**：
   - 所有卡片（包括 peek 卡片）固定相同高度
   - 桌面：280-320px、平板：260-300px、手機：240-280px
   - peek 卡片只縮放寬度不縮放高度（用 `scaleX(0.95)` 而非 `scale(0.95)`，或用 width 調整）

2. **評價文字溢出處理**：
   - 評價內容用 `line-clamp: 4`（最多 4 行）
   - 超出部分截斷顯示 ellipsis
   - CSS: `display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;`

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
2. `git add -A && git commit -m "fix: testimonial card uniform height, text overflow clamp"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.4.2 — uniform card height + text clamp" --mode now`
