# Frontend Design Skill

## 觸發條件
當開發網頁、Landing Page、或任何前端 UI 時，先讀完此 skill 再動手。

## Design Thinking 流程

在寫任何 code 之前，先回答這三個問題：
1. **Purpose** — 這個網站/頁面要傳達什麼？目標受眾是誰？
2. **Tone** — 視覺調性是什麼？（活潑/專業/極簡/前衛）
3. **Differentiation** — 什麼讓這個網站與眾不同？找到一個記憶點。

## 技術標準

### 元件庫
- **UI 元件**：shadcn/ui（Button, Card, Badge, etc.）
- **動畫**：Framer Motion
- **Icon**：Lucide React
- 不自己造輪子，優先用 shadcn/ui 元件

### Layout 強制規則

#### 容器
- 所有 section 用 `<Section>` 元件包裝（如果存在）
- 否則用 `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- 禁止內容超過 1280px
- 禁止內容貼齊螢幕邊緣

#### 響應式（強制）
- mobile (< 768px)：單欄
- tablet (768-1024px)：可雙欄
- desktop (> 1024px)：最多 3-4 欄
- Grid 範例：`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 間距：`gap-4 md:gap-6 lg:gap-8`

#### Section 間距
- section 之間：`py-16 md:py-24`
- section 標題到內容：`mb-10 md:mb-16`

#### Typography
- H1：`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
- H2：`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight`
- H3：`text-lg md:text-xl font-bold`
- Body：`text-base md:text-lg`（最小 16px）
- 標題一律 `text-center`
- 段落最大寬度 `max-w-2xl mx-auto`
- 行距：標題 `leading-tight`，內文 `leading-relaxed`

#### 圖片
- 人像：`aspect-square rounded-full object-cover` + 固定寬高
- 所有圖片必須有 alt text

### 色彩
- Light/Dark 都要設計
- 使用 `dark:` modifier
- 文字對比度符合 WCAG AA（4.5:1）
- 不要用動態 Tailwind class（如 `bg-${color}-500`）
- 用靜態 class 或 CSS 變數

### 動畫原則
- 用 Framer Motion `motion.div`
- fade-in-up 作為基本入場動畫
- stagger children 0.05-0.1s
- duration 0.4-0.6s
- ease: `[0.4, 0, 0.2, 1]`
- 不要過度動畫，每個動畫要有目的

### 禁止事項
- ❌ 不準用固定 px 寬度
- ❌ 不準用 `w-screen` 或 `100vw`
- ❌ 不準在 mobile 下用超過 2 欄的 grid
- ❌ 不準繞過容器系統自己寫 max-width
- ❌ 不準用 Inter 當唯一標題字體（太常見）
- ❌ 不準所有 section 用一模一樣的 padding 和佈局

## 檢查清單（完成後自查）
- [ ] 所有 section 有一致的 max-width 容器
- [ ] mobile 下所有 grid 為單欄
- [ ] 標題置中、段落有 max-width
- [ ] 手機字級 ≥ 16px
- [ ] Light 和 Dark mode 都檢查過
- [ ] 所有互動元素可 keyboard 操作
- [ ] 所有圖片有 alt text
