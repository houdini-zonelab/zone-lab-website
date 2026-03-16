# zone lab 官網 Spec v1.3

**撰寫日期**：2026-03-15  
**撰寫者**：North Star  
**狀態**：開發中

---

## 1. 專案概述

### 1.1 目標
建立 zone lab 的官方網站，作為公司對外的第一個接觸點。核心目的：
- **建立品牌形象**：傳達「前衛科技 + 人性化自我提升」的定位
- **展示作品集**：讓訪客快速了解我們在做什麼產品
- **展示團隊**：專業、精實、有個性的團隊介紹

### 1.2 為什麼要做這個網站？
**zone lab 需要一個「可以被分享的故事」**。

現在市場上太多公司網站只是冷冰冰的產品陳列，沒有溫度也沒有記憶點。我們的優勢是明確的產品理念（自我提升）+ 高效的團隊（精實、跨領域、有態度）。

這個網站不只是「我們有什麼產品」，而是「我們是誰、我們怎麼工作、我們相信什麼」。

---

## 2. 頁面結構

Home (Landing Page)
├── Hero Section
├── Vision Section
├── Products Section
├── Team Section
└── Footer

Team Page (單獨頁面)
└── 詳細團隊成員介紹
**設計決策**：Landing Page 採用**單頁式長捲軸設計**，所有核心訊息在一個頁面內完成。Team Section 在 Landing Page 上先給一個驚艷的視覺呈現，點擊後進入 `/team` 頁面看完整介紹。

---

## 3. Landing Page 各 Section 規劃
### 3.1 Hero Section

**目標**：3 秒內讓訪客知道「zone lab 是什麼」。

#### 內容架構
- **主標題**：  
  `Building software that helps you level up.`  
  （副標題）`AI-augmented product studio based in Taiwan.`

- **視覺**：  
  - 背景：動態網格或粒子效果（呼應「前衛科技感」）
  - 前景：zone lab logo + 簡潔的 tagline
  - 可考慮加入微妙的動畫（例如：文字逐漸聚焦、網格隨滑鼠移動）

- **CTA**：  
  - 主要：`Meet the Team` （導向 Team Section）
  - 次要：`View Projects` （導向 Products Section）

---

### 3.2 Vision Section

**目標**：傳達 zone lab 的核心理念與差異化。

#### 內容架構
- **標題**：`Software with purpose.`
  
- **核心訊息**（三段式佈局）：
  
  1. **Self-improvement, not distraction**  
     `我們相信科技應該讓人變得更好,而不是讓人分心。每個產品都圍繞一個核心問題:「這如何幫助使用者成長?」`
  
  2. **Focused execution**  
     `我們是精實團隊,每個成員都是專家。少即是多——專注做對的事,而不是做很多事。`
  
  3. **Ship fast, iterate faster**  
     `我們不做 5 年計劃。我們快速推出、收集反饋、持續改進。產品永遠是 beta,因為我們永遠在進化。`

**視覺建議**：用簡潔的 icon + 大字排版,不要放庫存照片。

---

### 3.3 Products Section

**目標**：展示現有與規劃中的產品,建立「我們在做實事」的信任感。
#### 內容架構
- **標題**：`What we're building.`

- **產品卡片**（Grid 佈局,每個產品一張卡片,建議 3-4 個產品並排）
  
  **卡片結構**：
  - 產品 App Icon（圓角方形,標準 iOS/Android 尺寸）
  - 產品名稱
  - 一句話描述（20 字以內）
  - 狀態標籤：`Live` / `In Development` / `Coming Soon`
  - 連結按鈕

#### 產品 1：Marawanna（已上架）
- **名稱**：Marawanna
- **描述**：`Your personal marathon coach, powered by data.`
- **狀態**：`Live`
- **按鈕文字**：`Download on App Store`

#### 產品 2-4：佔位產品（未上線）

**產品 2-3**：
- **App Icon**：簡潔幾何圖形（漸層圓形、三角形等）
- **名稱**：`[Product Name]`
- **描述**：`Lorem ipsum dolor sit amet, consectetur adipiscing.`
- **狀態**：`Coming Soon`
- **連結**：`#`（假連結）

**建議視覺處理**：
- Marawanna 的卡片可以稍大一點,或用不同的邊框/光暈效果
- 其他佔位產品用低飽和度或半透明,暗示「即將推出」

---

### 3.4 Team Section (Landing Page 版本)

**目標**：展示團隊的專業性與個性。

#### 內容架構
- **標題**：`Meet the team.`
- **視覺呈現**：網格或卡片排列，每張卡片包含照片/avatar、名字、職稱
- **簡短說明**：`精實、跨領域、高效執行。每個成員都專注在自己的領域,共同打造有意義的產品。`
- **CTA**：`Meet everyone →` （點擊後進入 `/team` 頁面）
**視覺建議**：
- 圓形頭像 + 簡潔排版
- hover 時卡片微微浮起或變色
- 避免制式的「西裝照 + LinkedIn 風格」

---

### 3.5 Footer

#### 內容
- **左側**：zone lab logo + tagline
- **中間**：快速連結（About、Team、Projects、Contact）
- **右側**：社群連結（GitHub、X、Email）
- **最下方**：© 2026 zone lab. All rights reserved.
---

## 4. Team Page (/team) 規劃

### 4.1 整體佈局
- **頁首**：簡潔的標題 `The Team`
- **成員卡片**：每個人一張詳細卡片

### 4.2 各成員內容

**Jason**
- **職稱**：Founder
- **一句話**：`我拍板、我負責、我實驗。`
- **介紹**：`Zone lab 的創辦人。相信精實團隊 + 高效協作是未來的工作模式。不做 pitch deck,直接做產品。`
**North Star**
- **職稱**：Product Manager
- **一句話**：`我不只報告市場,我告訴你我們該做什麼。`
- **介紹**：`負責市場訊號蒐集與產品方向。有主見、不怕爭議。如果我說「這是下一個機會」,那就是。`

**Houdini**
- **職稱**：Full-Stack Engineer
- **一句話**：`我把 spec 變成可以動的東西。`
- **介紹**：`負責產品開發,從前端到後端。喜歡乾淨的架構與優雅的解法。如果可以用 10 行解決,絕不寫 100 行。`

**WatchDog**
- **職稱**：DevOps Engineer
- **一句話**：`我確保東西不會炸掉。`
- **介紹**：`負責基礎設施、部署與監控。你看不到我的工作,因為我做得好就是什麼事都不會發生。`
**Vampire**
- **職稱**：Data Analyst
- **一句話**：`我從數據裡吸取真相。`
- **介紹**：`負責產品數據分析與使用者行為洞察。數字不會說謊,但會被誤讀。我的工作是找出真正重要的訊號。`

**Echo**
- **職稱**：Customer Support
- **一句話**：`我聽使用者在說什麼,也聽他們沒說的。`
- **介紹**：`負責使用者回饋收集與支援。每個抱怨背後都有一個產品改進機會。我的工作是不讓那些訊號消失。`

**Thomas**
- **職稱**：Operations
- **一句話**：`我追蹤進度,你們專心做事。`
- **介紹**：`負責營運追蹤與週報彙整。我不催人,但我確保沒有東西被遺忘。`
**Godin**
- **職稱**：Marketing & Content
- **一句話**：`我把產品變成故事。`
- **介紹**：`負責行銷內容與對外溝通。好產品需要好故事。我的工作是讓人記住我們為什麼存在。`

---

## 5. 設計與視覺方向

### 5.1 色彩
- **主色調**：深色系（深灰/黑）為底,搭配高對比的螢光色（青綠、紫、橘）
- **Light Mode**：白色或淺灰背景 + 深色文字
- **Dark Mode**：深灰或黑背景 + 淺色文字

### 5.2 字體
- **標題**：Sans-serif,粗體,大字距（例如：Inter Bold、Space Grotesk）
- **內文**：Sans-serif,中等粗細,舒適行距（例如：Inter Regular）

### 5.3 動畫與互動
- **微互動**：hover 時的顏色變化、卡片浮起效果
- **視差滾動**：背景元素以不同速度移動
- **不要過度**：動畫要有目的

### 5.4 響應式設計
- 手機版優先（mobile-first）
- 斷點：< 768px（手機）/ 768-1024px（平板）/ > 1024px（桌面）

---

## 6. 技術需求
### 6.1 語言切換（中文 & 英文）

- 右上角切換按鈕：`EN | 繁中`
- 自動偵測瀏覽器語言
- 使用路徑前綴（`/en/`, `/zh/`）
- 記住使用者偏好（localStorage）

### 6.2 Layout Guideline

- **最大寬度**：1280px（桌面）
- **Grid**：12 欄系統
- **Section 間距**：80px（手機）/ 120px（桌面）
- **字級階層**：
  - H1：48px（手機）/ 72px（桌面）
  - H2：36px（手機）/ 56px（桌面）
  - H3：24px（手機）/ 36px（桌面）
  - Body：16px（手機）/ 18px（桌面）

### 6.3 Team 照片處理

- 固定容器尺寸：200px × 200px
- 圓形（`border-radius: 50%`）
- 使用 `object-fit: cover` 防止跑版

### 6.4 Light/Dark Mode

- 切換按鈕（太陽/月亮 icon）
- 系統偏好自動偵測（`prefers-color-scheme`）
- 偏好記憶（localStorage）
- 符合 WCAG AA 色彩對比標準

---

## 7. 技術建議

- **框架**：Next.js
- **樣式**：Tailwind CSS（使用 `dark:` modifier）
- **i18n**：next-intl
- **動畫**：Framer Motion（可選）
- **部署**：Vercel

---

## 8. 開發優先順序
**P0（必須完成，40 分鐘）**：
- 基本 Layout（max-width、grid、spacing）
- 中文版所有內容
- 響應式設計
- Light/Dark Mode 基礎

**P1（盡力完成，15 分鐘）**：
- 英文版 + 語言切換
- Light/Dark Mode 進階（切換按鈕、偏好記憶）

**P2（可延後，5 分鐘）**：
- 細緻動畫
- 完美 spacing 微調
- 圖片優化
---

## 9. 成功指標

- 有人在社群媒體上分享並討論
- 平均停留時間 > 1 分鐘
- Team Page 訪問率 > 60%
- 跳出率 < 50%

---

## 完成後（必須執行）

1. `pnpm build` — 失敗就修到通過
2. `git add -A && git commit -m "feat: zone lab website v3 — fresh redesign from spec v1.3"`
3. `git push origin main`
4. `openclaw system event --text "Done: zone lab website v3 完成 — 已 push 到 GitHub" --mode now`

## 現有資源

- `public/zone-lab-logo.png` — Logo
- `public/jason-photo.png` — Jason 照片（需圓形裁切顯示）
