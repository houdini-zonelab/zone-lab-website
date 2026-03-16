# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 開發 zone lab 官方網站。

## 開發前必讀

1. **先讀 Skill**：`.claude/skills/frontend-design/SKILL.md` — Layout 規則、元件標準
2. **再讀 Spec**：`SPEC.md` — 完整需求
3. **用 Skill 的 Design Thinking 流程**，先想清楚再動手

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
2. `git add -A && git commit -m "feat: zone lab website v1.3"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.3 built and pushed" --mode now`
