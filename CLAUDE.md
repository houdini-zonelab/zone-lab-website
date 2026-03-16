# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

三個變更，都是增量修改：

1. **Landing Page Team Section 改版**（見 SPEC.md §3.4）：
   - Founder 獨立大卡片（2倍寬或獨立一行）：左照片150x150 + 右簡短介紹 + LinkedIn/Instagram/Email 小圖示按鈕
   - 下方 Team Members 網格（7位成員，維持原卡片格式）
   - Founder 卡片用不同背景色/邊框區分

2. **Team Page Founder Section 新增 Instagram**：
   - https://www.instagram.com/cx_870630?igsh=MTJma3dodm95aDhlbA%3D%3D&utm_source=qr
   - 按鈕文字：`Follow on Instagram`

3. **Footer 移除 Contact 連結**（聯繫方式已在 Founder Section）

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
2. `git add -A && git commit -m "feat: landing page founder card, Instagram link, remove footer contact"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.3.4 — landing founder card, Instagram, footer cleanup" --mode now`
