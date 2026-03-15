# CLAUDE.md — Zone Lab 官網 v2.0 重新設計

## 你的任務

**用你的 `frontend-design` skill 重新設計 Zone Lab 官網**。目前的版本 layout 不好看，視覺缺乏記憶點。你需要：

1. **先讀你的 skill**：`.claude/skills/frontend-design/SKILL.md`
2. **再讀完整 spec**：`/Users/j.a.s.o.n/.openclaw/workspace-team/specs/zone-lab-website-v2.md`
3. **用 skill 裡的 Design Thinking 流程**，先想清楚美學方向，再動手寫 code

## 設計要求（最重要）

### 用 frontend-design skill 的方式思考

在寫任何 code 之前，先回答這些問題：
- **Purpose**：Zone Lab 是台灣的 AI 驅動產品工作室，目標受眾是科技圈、早期嘗鮮者
- **Tone**：活潑、有能量、前衛但不冷冰冰。不是企業網站，是有態度的小團隊
- **Differentiation**：什麼讓這個網站令人難忘？找到一個記憶點並貫徹

### 絕對不要做的事
- ❌ 不要用 Inter 當標題字體（太無聊，AI slop）
- ❌ 不要用千篇一律的 SaaS landing page 排版
- ❌ 不要用紫色漸層白底
- ❌ 不要所有 section 都長一樣（同樣的 padding、同樣的卡片、同樣的動畫）
- ❌ 不要用 `bg-${color}-500` 這類動態 Tailwind class（JIT 會壞）

### 要做到的事
- ✅ **Typography 要有個性**：選一個有記憶點的標題字體（不是 Inter、Roboto、Space Grotesk）配一個易讀的 body 字體。中文用 Noto Sans TC 沒問題，但英文標題要有特色
- ✅ **Layout 要有節奏感**：不同 section 要有不同的視覺重量和佈局。Hero 要震撼，Vision 要呼吸感，Products 要實用，Team 要有溫度
- ✅ **色彩要大膽但克制**：spec 定義了 Teal/Purple/Orange，但不要三個顏色到處亂灑。選一個主色調貫穿，其他當點綴
- ✅ **動畫要有衝擊力**：不是隨便 fade-in-up。要有一個主打動畫效果讓人記住
- ✅ **空間感**：善用 negative space，不要塞滿
- ✅ **Light/Dark Mode 都要好看**，不是「Dark Mode 加個白底就是 Light Mode」

## Spec 核心內容（從 v2.0 spec 摘要）

### 頁面結構
1. **Navbar** — sticky 毛玻璃，左 logo / 中 nav links / 右語言+主題切換，手機漢堡選單
2. **Hero** — "Building software that helps you level up." / "打造讓你變更好的軟體。" + CTA
3. **Vision** — "Software with purpose." 三段：Self-improvement / Focused execution / Ship fast
4. **Products** — Marawanna (Live, 突出) + Project Alpha (Coming Soon) + Project Beta (In Dev)
5. **Team Preview** — 簡潔 grid，CTA 到 /team
6. **Footer** — logo + links + social + copyright
7. **Team Page** (`/team`) — 8 位成員詳細卡片

### 色彩（spec 定義，作為參考但你可以微調）
- Primary: Teal — cyan-500 `#06B6D4` / cyan-400 `#22D3EE`
- Secondary: Purple — purple-500 `#A855F7` / purple-400 `#C084FC`
- Accent: Orange — orange-500 `#F97316` / orange-400 `#FB923C`
- Light bg: `#FFFFFF` / `#F9FAFB`，Dark bg: `#0F172A` / `#1E293B`

### 產品資料
- **Marawanna** (Live)：馬拉松教練 app
  - App Store: https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB
  - 英: "Your personal marathon coach, powered by data."
  - 中: "你的個人馬拉松教練，數據驅動。"
- **Project Alpha** (Coming Soon)：習慣養成
  - 英: "Helping you build better habits, one day at a time."
  - 中: "每天一點進步，養成更好的習慣。"
- **Project Beta** (In Development)：間隔學習
  - 英: "Making learning stick, with spaced repetition."
  - 中: "用間隔重複，讓學習真正記住。"

### 團隊成員（8 位）
所有成員的中英文 quote、bio、職稱都在 spec Section 9.5，**請直接從 spec 讀取**，不要自己編。

| 名字 | 職稱 | Avatar |
|------|------|--------|
| Jason | Founder/創辦人 | 真實照片 `public/jason-photo.png` 圓形 |
| North Star | Product Manager/產品經理 | 漸層+icon (青綠) |
| Houdini | Full-Stack Engineer/全端產品工程師 | 漸層+icon (紫) |
| WatchDog | DevOps Engineer/DevOps 工程師 | 漸層+icon (深藍) |
| Vampire | Data Analyst/數據分析師 | 漸層+icon (深紅紫) |
| Echo | Customer Support/客戶支援專員 | 漸層+icon (青) |
| Thomas | Operations/營運專員 | 漸層+icon (灰藍) |
| Godin | Marketing & Content/行銷內容創作者 | 漸層+icon (橘紅) |

## 技術棧（已安裝）
- Next.js 16、Tailwind CSS v4、Framer Motion、next-intl v4、Lucide React、next-themes
- 字體用 `next/font/google`（選什麼字體你決定，但要有個性）
- Light/Dark Mode 用 next-themes + Tailwind `dark:` modifier

## 現有架構（保留）
- i18n 設定已完成（next-intl routing, middleware, navigation）
- `messages/zh.json` 和 `messages/en.json` — 需更新翻譯內容
- 路徑前綴 `/zh/`、`/en/`，預設 `zh`
- 資源：`public/zone-lab-logo.png`、`public/jason-photo.png`

## 重要
- 確認 `public/zone-lab-logo.png` 和 `public/jason-photo.png` 存在，如果不在，從 `/Users/j.a.s.o.n/.openclaw/workspace-team/assets/` 複製
- 所有翻譯內容從 spec 讀取，不要自己編

## 完成後
1. `pnpm build` 確認無錯誤
2. `git add -A && git commit -m "feat: v2.0 — redesign with frontend-design skill, improved layout and aesthetics"`
3. `git push origin main`
4. 完成後執行：`openclaw system event --text "Done: v2.0 redesign complete — improved layout and design" --mode now`
