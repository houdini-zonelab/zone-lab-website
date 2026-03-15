# CLAUDE.md — Zone Lab 官網開發指令

## 任務

從頭重做 zone lab 官網。刪除現有的 src/ 和 messages/ 內容，重新開發。

## Spec

完整 spec 在：`/Users/j.a.s.o.n/.openclaw/workspace-team/specs/zone-lab-website-v1.md`
開始前先讀完整份 spec。

## 核心需求

### 頁面
1. **Landing Page** (`/`)：Hero + Vision + Products + Team 預覽 + Footer
2. **Team Page** (`/team`)：8 人詳細介紹（Jason + 7 位成員）

### 雙語 (i18n)
- 路徑前綴：`/zh/`（繁中）、`/en/`（英文）
- 使用 `next-intl`（已安裝）
- 語言切換按鈕在右上角
- 預設語言：zh
- 翻譯檔放 `messages/zh.json`、`messages/en.json`

### Layout Guideline
- 內容最大寬度：1280px，置中
- Section 間距：80px（手機）/ 120px（桌面）
- H1：48px（手機）/ 72px（桌面），line-height 1.2，letter-spacing -0.02em
- H2：36px（手機）/ 56px（桌面）
- Body：16px（手機）/ 18px（桌面），line-height 1.6
- 響應式斷點：768px / 1024px / 1440px

### 設計
- 深色系（黑底）+ 螢光色點綴（cyan、purple、green）
- 字體：Space Grotesk（標題）+ DM Sans（內文），用 Google Fonts
- Glass morphism 卡片風格
- Hero 背景：漸層光球 + 微妙網格
- Hover 微互動（卡片浮起、顏色變化）
- Framer Motion 動畫（fade in up、stagger）

### Products Section
- Marawanna（Live）— 突出顯示，App Store 連結：https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB
- 2 個佔位產品（Coming Soon），低透明度

### Team Section
- Landing Page：8 人小卡（頭像 + 名字 + 職稱），點擊進 /team
- Team Page：詳細卡片（頭像 + 名字 + 職稱 + 引言 + 介紹）
- Jason：用真實照片 `/jason-photo.png`，圓形裁切，object-fit cover
- 其他 7 人：用 gradient 背景 + Lucide icon 作為 avatar（暫時方案）
- 照片容器統一尺寸，不能跑版

### 團隊成員資料（中文版）
| key | 名字 | 職稱 | 引言 | 介紹 |
|-----|------|------|------|------|
| jason | Jason | 創辦人 | 我拍板、我負責、我實驗。 | Zone lab 的創辦人。相信精實團隊 + 高效協作是未來的工作模式。不做 pitch deck，直接做產品。 |
| northstar | North Star | 產品經理 | 我不只報告市場，我告訴你我們該做什麼。 | 負責市場訊號蒐集與產品方向。有主見、不怕爭議。 |
| houdini | Houdini | 全端工程師 | 我把 spec 變成可以動的東西。 | 負責產品開發，從前端到後端。喜歡乾淨的架構與優雅的解法。 |
| watchdog | WatchDog | DevOps 工程師 | 我確保東西不會炸掉。 | 負責基礎設施、部署與監控。 |
| vampire | Vampire | 數據分析師 | 我從數據裡吸取真相。 | 負責產品數據分析與使用者行為洞察。 |
| echo | Echo | 客戶支援 | 我聽使用者在說什麼，也聽他們沒說的。 | 負責使用者回饋收集與支援。 |
| thomas | Thomas | 營運專員 | 我追蹤進度，你們專心做事。 | 負責營運追蹤與週報彙整。 |
| godin | Godin | 行銷內容 | 我把產品變成故事。 | 負責行銷內容與對外溝通。 |

## 技術棧

- Next.js 16（已安裝）
- Tailwind CSS v4（已安裝，用 `@import "tailwindcss"` 語法）
- Framer Motion（已安裝）
- next-intl v4（已安裝）
- Lucide React（已安裝）

## 靜態資源

已在 `public/` 目錄：
- `zone-lab-logo.png` — logo
- `jason-photo.png` — Jason 照片

## 重要規範

1. **不要用動態 Tailwind class**（如 `bg-${color}-500`），Tailwind JIT 掃不到。用完整的 class name 或 inline style。
2. **語意化 HTML**：用 `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
3. **所有圖片要有 alt text**
4. **WCAG AA 對比度**：文字對比至少 4.5:1
5. **開發完成後跑 `pnpm build` 確認 build 通過**
6. **用 `@theme inline` 定義 Tailwind 自訂 theme**（Tailwind v4 語法）

## 檔案結構預期

```
src/
  app/
    layout.tsx          # root layout (passthrough)
    globals.css
    [locale]/
      layout.tsx        # i18n layout with NextIntlClientProvider
      page.tsx          # landing page
      team/
        page.tsx        # team page
  i18n/
    routing.ts
    request.ts
    navigation.ts
  components/
    LanguageSwitcher.tsx
  middleware.ts
messages/
  zh.json
  en.json
```

## 完成後

跑 `pnpm build`，確認無錯誤。
