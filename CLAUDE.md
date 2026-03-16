# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

Testimonial Section 視覺優化，增量修改：

1. **Testimonial 輪播加 peek 效果**：
   - 中間 1 個完整卡片 + 左右各顯示部分相鄰卡片（桌面 20-30%、平板 15-20%、手機 10-15%）
   - 過渡動畫用平滑滑動（ease-in-out）
   - 讓用戶知道「還有更多評價」

2. **Testimonial Section 寬度調整**：
   - 整體寬度改為 **90% 螢幕寬度**（最大 1400px），比其他 section（1280px）更寬
   - 這是為了 peek 效果需要更多橫向空間

3. **卡片尺寸規格**：
   - 桌面：寬 600-700px
   - 平板：寬 400-500px
   - 手機：寬 300-350px
   - 陰影：box-shadow: 0 4px 20px rgba(0,0,0,0.1)
   - Hover：translateY(-4px)

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
2. `git add -A && git commit -m "feat: testimonial peek carousel, 90% width"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.4.1 — testimonial peek effect + wider layout" --mode now`
