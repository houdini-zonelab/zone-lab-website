# CLAUDE.md — Zone Lab 官網 v2.0 全面重新設計

## 任務

**全面重新設計** Zone Lab 官網的視覺與前端。不是微調，是從設計層面重做。
使用你的 `frontend-design` skill（`.claude/skills/frontend-design/SKILL.md`），產出令人驚艷、有記憶點的網站。

## 核心要求

### 品牌定位
Zone Lab = 前衛科技 × 人性化自我提升。一間精實、有態度的軟體公司。
網站要傳達：我們不一樣，我們很酷，我們認真做產品。

### 設計方向
- **禁止**使用 Space Grotesk、Inter、Roboto 等 AI slop 常見字體
- **禁止**紫色漸層白底、千篇一律的 SaaS landing page 風格
- 選一個大膽的美學方向並貫徹到底（brutalist? editorial? retro-futuristic? luxury minimal? 你決定）
- 要有一個讓人記住的視覺記憶點
- Light/Dark Mode 都要好看（用 next-themes，Tailwind `dark:` modifier）
- 動畫要有衝擊力，不是隨便 fade-in

### 頁面結構（必須保留）
1. **Landing Page** (`/[locale]/page.tsx`)
   - Hero：Zone Lab logo + 標語 + CTA
   - Vision：我們的理念
   - Products：Marawanna（主打，有 App Store 連結）+ 2 個佔位產品
   - Team Preview：8 位成員預覽
   - Footer

2. **Team Page** (`/[locale]/team/page.tsx`)
   - 8 位成員詳細介紹（名字、職稱、quote、bio）
   - Jason 用真實照片（`/public/jason-photo.png`，圓形裁切）
   - 其他 7 位用漸層 + Lucide icon placeholder

### 雙語 i18n
- 已有 next-intl 設定，保留 `messages/zh.json` 和 `messages/en.json` 結構
- 路徑前綴：`/zh/`、`/en/`，預設 `zh`
- 右上角語言切換 + 主題切換按鈕

## Spec 參考

完整 spec：`/Users/j.a.s.o.n/.openclaw/workspace-team/specs/zone-lab-website-v1.md`

### 團隊成員資料

| # | 名字 | 英文名 | 職稱 | Quote |
|---|------|--------|------|-------|
| 1 | 李冠廷 | Jason Li | 創辦人暨執行長 | 在混亂中找到秩序，在秩序中創造混亂 |
| 2 | 林芷萱 | Emily Lin | 產品經理 | 用戶不會告訴你他要什麼，但會告訴你他不要什麼 |
| 3 | 張竣凱 | Kevin Chang | 全端工程師 | 最好的程式碼是不需要寫的程式碼 |
| 4 | 王思涵 | Hannah Wang | UI/UX 設計師 | 好設計是隱形的，壞設計無處不在 |
| 5 | 陳柏宇 | Brian Chen | iOS 工程師 | 每個 pixel 都是一次跟用戶的對話 |
| 6 | 吳欣怡 | Cindy Wu | 數據分析師 | 數字不會說謊，但會說不同的故事 |
| 7 | 黃子軒 | Alex Huang | DevOps 工程師 | 自動化一切可以自動化的事 |
| 8 | 謝宜蓁 | Zoe Hsieh | 行銷專員 | 好故事不需要行銷，但好行銷需要好故事 |

### 產品資料

**Marawanna**（主打）：
- 大麻合法資訊與社群平台
- App Store：https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB
- 強調：合法教育、去污名化、社群連結

**佔位產品 1**：ZoneFlow — AI 生產力工具（開發中）
**佔位產品 2**：MindPulse — 心理健康追蹤（規劃中）

## 技術棧
- Next.js 16、Tailwind CSS v4、Framer Motion、next-intl v4、Lucide React、next-themes
- 字體用 Google Fonts（next/font/google）
- 不要用動態 Tailwind class（如 `bg-${color}-500`）

## 資源檔案
- Logo：`public/zone-lab-logo.png`（已在 public/）
- Jason 照片：`public/jason-photo.png`（已在 public/）

## 完成後
1. 跑 `pnpm build`，確認無錯誤
2. 用 `git add -A && git commit -m "feat: v2.0 — full redesign with frontend-design skill"` commit
