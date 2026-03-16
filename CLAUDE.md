# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

**Team Page 結構調整**（見 SPEC.md §4.2 和 §4.3）：

1. **Founder Section**：Jason 獨立為大區塊（左照片 + 右介紹），包含：
   - 更長的介紹文案（兩段，見 spec）
   - Experience 列表（🎓🏢🤖🚀 四項）
   - LinkedIn 按鈕（https://www.linkedin.com/in/qazwsx521943）
   - Email 按鈕（jasonchungdev@gmail.com）
   - 用不同背景色與 Team Members 區分
2. **Team Members Section**：其他 7 位成員維持原本卡片格式，標題改為 `The Team`
3. 更新 `zh.json` 和 `en.json` 的 team page 相關文案

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
2. `git add -A && git commit -m "feat: founder section with full bio, links, experience"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website — Founder section added with bio, LinkedIn, email" --mode now`
