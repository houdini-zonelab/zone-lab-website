# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

新增 Co-founder，Founder → Founders 雙創辦人，增量修改：

1. **Landing Page Team Section**（見 SPEC.md §3.5.1）：
   - Founder 卡片改為 **Founders 雙卡片並排**（桌面）或上下排列（手機）
   - 新增 Yu-Ya Lin (Co-founder) 卡片：
     - 照片：`/yuya-photo.jpg`（已在 public/）
     - 一句話：`我看細節、做決策、讓事情發生。`
     - 簡短介紹：`Zone lab 的共同創辦人。從光電工程到產品開發，跨領域思維讓她能從不同角度思考問題。相信好產品需要清晰的願景與紮實的執行。`
     - 快速連結：暫時不顯示（待補充）
   - 兩張卡片視覺重量相同（平等地位）

2. **Team Page Founders Section**（見 SPEC.md §4.2）：
   - Founder Section → Founders Section
   - 新增 Yu-Ya Lin 完整介紹（與 Jason 並列）
   - 更新 `zh.json` 和 `en.json`

3. 所有出現「Founder」的標題/文案改為「Founders」（複數）

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
2. `git add -A && git commit -m "feat: add co-founder Yu-Ya Lin, dual founders layout"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.5.0 — co-founder Yu-Ya Lin added, dual founders layout" --mode now`
