# CLAUDE.md — Zone Lab 官網

## 你的任務

根據 `SPEC.md` 更新 zone lab 官方網站。這是一個**增量更新**，不要重寫整個專案。

## 本次更新重點

增量修改，不要重寫整個專案：

1. **新增 Testimonial Section**（見 SPEC.md §3.4）：
   - 放在 Products 和 Team Section 之間
   - 10 則假評價，輪播展示（每 5 秒切換，可手動切）
   - 卡片：用戶頭像 80x80 + 名字 + 評分(星星) + 評語 + 使用產品
   - 標題中文「用戶怎麼說」英文「What our users say」
   - 假資料要看起真實（有 4 星的、不同身份、不要太完美）

2. **補齊中文翻譯**（zh.json 大量缺失）：
   - Hero: 主標題「打造讓你變得更好的軟體」副標題「台灣的 AI 驅動產品工作室」CTA「認識團隊」「查看專案」
   - Vision: 標題「有意義的軟體」+ 三段英文翻譯
   - Products: 標題「我們在做什麼」、狀態「已上線」「即將推出」、按鈕「前往 App Store」
   - Marawanna 中文描述「你的個人馬拉松教練，用數據驅動訓練」
   - Summur 中文描述「貓狗照護，簡單搞定」
   - Team Section: 標題「認識團隊」CTA「認識所有成員 →」
   - 詳見 SPEC.md 各 section 的中英文對照

3. **Footer 改版**（見 SPEC.md §3.6）：
   - 左側：logo + tagline（中英文）
   - 中間：About/Team/Projects（不要 Contact）
   - 右側：新增「Get in touch / 聯繫我們」+ LinkedIn/Instagram/Email 圖示按鈕
   - 底部：© 2026 zone lab

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
2. `git add -A && git commit -m "feat: testimonial section, i18n zh translations, footer redesign"`
3. `git push origin main`
4. `openclaw system event --text "Done: Zone lab website v1.4.0 — testimonial carousel, zh translations, footer with contact" --mode now`
