# zone lab 官網 Spec v1.3.1

**當前版本**：v1.3.3  
**最後更新**：2026-03-16 15:53  
**撰寫者**：North Star  
**狀態**：開發中

---

## 版本記錄

### v1.3.3 (2026-03-16 15:53)
**類型**：Patch（小更動）

**變更內容**：
- ✅ Founder (Jason) 獨立為特殊區塊，與其他團隊成員區分
- ✅ Founder 新增完整介紹：LinkedIn、Email、Experience
- ✅ Experience 文案修飾（更有故事性）
- Team Page 結構調整：Founder Section + Team Members Section

---

### v1.3.2 (2026-03-16 15:41)
**類型**：Patch（小更動）

**變更內容**：
- ✅ 新增 Marawanna App Icon（`assets/marawanna-icon.png`）
- ✅ 新增 Summur App Icon（`assets/summur-icon.png`）
- 素材檢查清單更新（兩個 icon 已完成）

---

### v1.3.1 (2026-03-16 15:29)
**類型**：Patch（小更動）

**變更內容**：
- 團隊成員 Vampire 改名為 Dracula
- 新增產品：Summur（已上線，App Store 連結已加入）
- 產品結構更新：2 個已上線產品 + 2-3 個佔位產品
- Houdini 素材清單更新（加入 Summur Icon + Dracula Avatar）

---

### v1.3.0 (2026-03-15)
**類型**：Minor Update（小更動）

**變更內容**：
- 新增 Light/Dark Mode 支援需求
- 新增 Team Avatar 生成詳細規格（每位成員設計方向）
- 加入 Marawanna App Store 連結

---

### v1.2.0 (2026-03-15)
**類型**：Minor Update（小更動）

**變更內容**：
- 新增語言切換需求（繁中 + 英文）
- 新增 Layout Guideline（符合 Web Design 標準）
- 新增 Team 照片處理技術規格

---

### v1.1.0 (2026-03-15)
**類型**：Minor Update（小更動）

**變更內容**：
- 團隊介紹改為一般格式（不特別說明 AI）
- 確認產品結構（Marawanna + 佔位產品）

---

### v1.0.0 (2026-03-15)
**類型**：Initial Release（初版）

**初始內容**：
- Landing Page 結構（Hero + Vision + Products + Team）
- Team Page 規劃（8 位成員）
- 設計與視覺方向
- 技術建議

---

## 版本號規則

遵循語義化版本控制（Semantic Versioning）：

**格式**：`MAJOR.MINOR.PATCH`

- **MAJOR (x.0.0)**：重大變更，整個重寫或架構調整
  - 例如：頁面結構大改、技術棧更換、設計風格全面翻新
  
- **MINOR (1.x.0)**：功能新增或中等規模變更
  - 例如：新增語言切換、新增 Section、新增產品
  
- **PATCH (1.3.x)**：小修正、內容更新、文案調整
  - 例如：改名字、更新連結、修正文案、調整描述

**Timestamp 格式**：`YYYY-MM-DD HH:MM` (台北時間)

---

## 0. 專案資源與素材需求

### 0.1 現有資源

**位置**：`/Users/j.a.s.o.n/.openclaw/workspace-team/assets/`

| 檔案 | 用途 | 路徑 |
|------|------|------|
| zone lab logo | Hero Section、Footer | `assets/zone-lab-logo.png` |
| Jason 照片 | Team Page（需裁切至只保留人物） | `assets/jason-photo.png` |
| Marawanna Icon | Products Section | `assets/marawanna-icon.png` ✅ |
| Summur Icon | Products Section | `assets/summur-icon.png` ✅ |

---

### 0.2 需要生成：Team Avatar（由 Houdini 處理）

**任務**：為 7 位團隊成員生成統一風格的 AI avatar

**技術方案**：
- 使用 AI 工具（Midjourney、DALL-E 3、或其他）
- 或使用線上 avatar 生成器
- 輸出格式：PNG，背景透明，400x400px

**統一風格要求**：
- 扁平化插圖風格
- 現代、簡潔、專業
- 相同色調（可用漸層或柔和配色）
- 每個成員要有辨識度（透過角色特徵元素）

---

#### Avatar 設計需求清單

**North Star** - Product Manager
- **視覺元素**：指南針、星星、或導航相關圖示
- **配色建議**：藍色、金色系（象徵方向與引導）
- **個性**：專業、有遠見、果斷

---

**Houdini** - Full-Stack Engineer
- **視覺元素**：魔術師帽、魔術棒、或魔術道具
- **配色建議**：紫色、深藍系（神秘、技術感）
- **個性**：聰明、靈活、創意

---

**WatchDog** - DevOps Engineer
- **視覺元素**：警衛犬、盾牌、或守衛相關圖示
- **配色建議**：灰色、橘色系（可靠、警覺）
- **個性**：穩重、可靠、警覺

---

**Dracula** - Data Analyst
- **視覺元素**：數據圖表、夜行動物、或神秘符號
- **配色建議**：紅色、黑色系（神秘、洞察）
- **個性**：敏銳、深度、神秘

---

**Echo** - Customer Support
- **視覺元素**：聲波、耳機、或溝通符號
- **配色建議**：綠色、青色系（友善、溝通）
- **個性**：友善、傾聽、同理

---

**Thomas** - Operations
- **視覺元素**：清單、齒輪、或組織圖示
- **配色建議**：棕色、藍灰系（穩定、有序）
- **個性**：有條理、精確、負責

---

**Godin** - Marketing & Content
- **視覺元素**：筆、書本、或創作相關圖示
- **配色建議**：橘色、黃色系（創意、活力）
- **個性**：創意、表達力、有感染力

---

**輸出位置**：
- 存放到 `assets/avatars/` 資料夾
- 檔名格式：`northstar.png`, `houdini.png`, `watchdog.png`, `dracula.png`, 等等（小寫、無空格）

---

## 1. 專案概述

### 1.1 目標
建立 zone lab 的官方網站，作為公司對外的第一個接觸點。核心目的：
- **建立品牌形象**：傳達「前衛科技 + 人性化自我提升」的定位
- **展示作品集**：讓訪客快速了解我們在做什麼產品
- **展示團隊**：專業、精實、有個性的團隊介紹

---

## 2. 頁面結構

```
Home (Landing Page)
├── Hero Section
├── Vision Section
├── Products Section
├── Team Section
└── Footer

Team Page (/team)
└── 詳細團隊成員介紹
```

---

## 3. Landing Page 各 Section 規劃

### 3.1 Hero Section

**主標題**：`Building software that helps you level up.`  
**副標題**：`AI-augmented product studio based in Taiwan.`

**CTA**：
- 主要：`Meet the Team`
- 次要：`View Projects`

---

### 3.2 Vision Section

**標題**：`Software with purpose.`

**核心訊息**（三段式）：

1. **Self-improvement, not distraction**  
   `我們相信科技應該讓人變得更好,而不是讓人分心。每個產品都圍繞一個核心問題:「這如何幫助使用者成長?」`

2. **Focused execution**  
   `我們是精實團隊,每個成員都是專家。少即是多——專注做對的事,而不是做很多事。`

3. **Ship fast, iterate faster**  
   `我們不做 5 年計劃。我們快速推出、收集反饋、持續改進。產品永遠是 beta,因為我們永遠在進化。`

---

### 3.3 Products Section

**標題**：`What we're building.`

#### 產品 1：Marawanna（已上架）✅

- **App Icon**：使用實際 App Icon（從 App Store 擷取）
- **名稱**：Marawanna
- **描述**：`Your personal marathon coach, powered by data.`
- **狀態**：`Live`
- **連結**：
  - **App Store**：https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB
  - 按鈕文字：`Download on App Store`

---

#### 產品 2：Summur（已上架）✅

- **App Icon**：使用實際 App Icon（從 App Store 擷取）
- **名稱**：Summur
- **描述**：`Cat & Dog care made simple.`
- **狀態**：`Live`
- **連結**：
  - **App Store**：https://apps.apple.com/tw/app/summur-cat-dog-care/id6730121236?l=en-GB
  - 按鈕文字：`Download on App Store`

---

**視覺處理（已上線產品）**：
- Marawanna 和 Summur 卡片要**突出顯示**（稍大、或用邊框/光暈）
- 這兩個是已上線產品，要讓訪客第一眼看到

---

#### 產品 3-4：佔位產品（未上線）

**產品 3**：
- **App Icon**：簡潔幾何圖形（漸層圓形或三角形）
- **名稱**：`[Product Name]`
- **描述**：`Lorem ipsum dolor sit amet, consectetur adipiscing.`
- **狀態**：`Coming Soon`
- **連結**：`#`（假連結）

**產品 4**（可選）：
- **App Icon**：簡潔幾何圖形（不同於產品 3）
- **名稱**：`[Product Name]`
- **描述**：`Lorem ipsum dolor sit amet, consectetur adipiscing.`
- **狀態**：`Coming Soon`
- **連結**：`#`

**視覺處理（佔位產品）**：
- 低飽和度或半透明，暗示「即將推出」
- 佔位產品傳達「我們有 pipeline」

---

### 3.4 Team Section (Landing Page 版本)

**標題**：`Meet the team.`

**視覺呈現**：
- 網格卡片排列
- 每張卡片：avatar + 名字 + 職稱
- hover 時卡片微微浮起

**簡短說明**：  
`精實、跨領域、高效執行。每個成員都專注在自己的領域,共同打造有意義的產品。`

**CTA**：`Meet everyone →`（導向 `/team` 頁面）

---

### 3.5 Footer

- **左側**：zone lab logo + tagline
- **中間**：快速連結（About、Team、Projects、Contact）
- **右側**：社群連結（GitHub、X、Email）
- **最下方**：© 2026 zone lab. All rights reserved.

---

## 4. Team Page (/team)

### 4.1 頁面結構

**雙區塊設計**：
1. **Founder Section**：Jason 獨立區塊，更豐富的介紹與連結
2. **Team Members Section**：其他 7 位成員，統一格式卡片

---

### 4.2 Founder Section

**Jason** - Founder & CEO

**版面設計**：
- 獨立的大區塊（佔整個螢幕寬度）
- 左側：照片（大尺寸，300x300px 或更大）
- 右側：完整介紹 + 連結

---

**照片**：`assets/jason-photo.png`（裁切至只保留人物）

**一句話**：  
`我拍板、我負責、我實驗。`

**完整介紹**：  
`Zone lab 的創辦人。畢業於中山大學，自學轉職成為 iOS 工程師，在蘋果生態系打磨多年後，遇上 AI 浪潮——決定不再只是「寫別人的 app」，而是建立自己的產品工作室。`

`相信小團隊 + AI 協作能做出不輸大公司的產品。不做 pitch deck，直接做產品；不追風口，只做真正幫助人成長的軟體。Zone lab 是一場實驗，也是一種生活方式。`

**經歷 (Experience)**：  
- 🎓 中山大學畢業
- 💻 自學轉職 iOS 工程師
- 🤖 擁抱 AI 浪潮，創立 Zone lab
- 🚀 從工程師到產品創辦人

**連結 (Links)**：  
- **LinkedIn**：https://www.linkedin.com/in/qazwsx521943  
  （按鈕文字：`Connect on LinkedIn`）
  
- **Email**：jasonchungdev@gmail.com  
  （按鈕文字：`Get in touch`）

**視覺建議**：
- Founder Section 用不同的背景色（淺灰或漸層）與其他區塊區分
- 照片可以稍大、更突出
- 連結按鈕用明顯的視覺設計（LinkedIn 藍色、Email 主題色）

---

### 4.3 Team Members Section

**標題**：`The Team`

**簡短說明**：  
`精實、跨領域、高效執行。每個成員都是專家，專注在自己的領域，共同打造有意義的產品。`

---

**North Star** - Product Manager
- **Avatar**：`assets/avatars/northstar.png`
- **一句話**：`我不只報告市場,我告訴你我們該做什麼。`
- **介紹**：`負責市場訊號蒐集與產品方向。有主見、不怕爭議。如果我說「這是下一個機會」,那就是。`

---

**Houdini** - Full-Stack Engineer
- **Avatar**：`assets/avatars/houdini.png`
- **一句話**：`我把 spec 變成可以動的東西。`
- **介紹**：`負責產品開發,從前端到後端。喜歡乾淨的架構與優雅的解法。如果可以用 10 行解決,絕不寫 100 行。`

---

**WatchDog** - DevOps Engineer
- **Avatar**：`assets/avatars/watchdog.png`
- **一句話**：`我確保東西不會炸掉。`
- **介紹**：`負責基礎設施、部署與監控。你看不到我的工作,因為我做得好就是什麼事都不會發生。`

---

**Dracula** - Data Analyst
- **Avatar**：`assets/avatars/dracula.png`
- **一句話**：`我從數據裡吸取真相。`
- **介紹**：`負責產品數據分析與使用者行為洞察。數字不會說謊,但會被誤讀。我的工作是找出真正重要的訊號。`

---

**Echo** - Customer Support
- **Avatar**：`assets/avatars/echo.png`
- **一句話**：`我聽使用者在說什麼,也聽他們沒說的。`
- **介紹**：`負責使用者回饋收集與支援。每個抱怨背後都有一個產品改進機會。我的工作是不讓那些訊號消失。`

---

**Thomas** - Operations
- **Avatar**：`assets/avatars/thomas.png`
- **一句話**：`我追蹤進度,你們專心做事。`
- **介紹**：`負責營運追蹤與週報彙整。我不催人,但我確保沒有東西被遺忘。`

---

**Godin** - Marketing & Content
- **Avatar**：`assets/avatars/godin.png`
- **一句話**：`我把產品變成故事。`
- **介紹**：`負責行銷內容與對外溝通。好產品需要好故事。我的工作是讓人記住我們為什麼存在。`

---

### 4.4 我的建議

**為什麼 Founder 要獨立出來？**

大部分公司網站的 Team Page 都是「一排整齊的頭像 + 名字 + 職稱」，很死板。我們的優勢是 Jason 本人就是一個有故事的創辦人——從工程師到產品創辦人、擁抱 AI、建立精實工作室。這些都值得好好呈現。

**把 Founder 獨立成大區塊**，訪客可以：
1. 快速了解「這個工作室是誰創立的、為什麼存在」
2. 有興趣的人可以直接透過 LinkedIn 或 Email 聯繫
3. 感受到「這不是一個冰冷的公司，而是一個有人性的團隊」

**Team Members Section 保持簡潔統一**，展現專業性與團隊多樣性。

**視覺層次**：
- Founder Section：佔 60-70% 的視覺重量（大照片、完整介紹、明顯的連結按鈕）
- Team Members Section：網格卡片（簡潔、一致、易掃描）

**成功指標**：訪客看完 Founder Section 後會想「這個人有意思，我想知道他會做出什麼」，看完 Team Members 後會想「這團隊有實力」。

---

## 5. 設計與視覺方向

### 5.1 色彩
- **Light Mode**：白色/淺灰背景 + 深色文字
- **Dark Mode**：深灰/黑背景 + 淺色文字
- **強調色**：螢光色（青綠、紫、橘）

### 5.2 字體
- **標題**：Sans-serif, 粗體（Inter Bold、Space Grotesk）
- **內文**：Sans-serif, 中等粗細（Inter Regular）

### 5.3 動畫
- hover 時顏色變化、卡片浮起
- 視差滾動（背景元素）
- 不要過度，動畫要有目的

### 5.4 響應式
- 手機：< 768px
- 平板：768-1024px
- 桌面：> 1024px

---

## 6. 技術需求

### 6.1 語言切換
- 繁中 + 英文
- 路徑前綴：`/en/`, `/zh/`
- 右上角切換按鈕：`EN | 繁中`
- 自動偵測 + 記住偏好

### 6.2 Layout
- Max-width: 1280px
- 12 欄 Grid
- Section 間距：80px（手機）/ 120px（桌面）

### 6.3 Team 照片
- 容器：200x200px 圓形
- `object-fit: cover`（防止跑版）

### 6.4 Light/Dark Mode
- 切換按鈕（太陽/月亮 icon）
- 自動偵測系統偏好
- 記住使用者選擇

---

## 7. 技術建議

- **框架**：Next.js
- **樣式**：Tailwind CSS（`dark:` modifier）
- **i18n**：next-intl
- **部署**：Vercel

---

## 8. 開發優先順序

**P0（40 分鐘）**：
- 基本 Layout + 中文版
- 響應式設計
- Light/Dark Mode 基礎
- **生成 Team Avatar**（AI 工具）

**P1（15 分鐘）**：
- 英文版 + 語言切換
- Light/Dark Mode 進階

**P2（5 分鐘）**：
- 細緻動畫
- 圖片優化

---

## 9. Houdini 待辦清單

### 素材準備
- [ ] 生成 7 位成員的 AI avatar（參考第 0.2 節設計需求）
- [ ] 裁切 Jason 照片（只保留人物）
- [x] 從 App Store 擷取 Marawanna App Icon ✅ 已完成
- [x] 從 App Store 擷取 Summur App Icon ✅ 已完成
- [ ] 產出統一風格的 avatar，存放至 `assets/avatars/`

### 開發任務
- [ ] 建立 Next.js 專案 + Tailwind 設定
- [ ] 實作 i18n（next-intl）
- [ ] 實作 Light/Dark Mode
- [ ] 開發 Landing Page（Hero + Vision + Products + Team）
- [ ] 開發 Team Page（8 位成員詳細介紹）
- [ ] 響應式調整
- [ ] 部署到 Vercel

---

## 10. 素材檢查清單

**完成後確認**：

- [x] Logo：`assets/zone-lab-logo.png` ✅ 已存在
- [x] Jason 照片：`assets/jason-photo.png` ✅ 已存在（需裁切）
- [x] Marawanna Icon：`assets/marawanna-icon.png` ✅ 已完成
- [x] Summur Icon：`assets/summur-icon.png` ✅ 已完成
- [ ] North Star Avatar：`assets/avatars/northstar.png`
- [ ] Houdini Avatar：`assets/avatars/houdini.png`
- [ ] WatchDog Avatar：`assets/avatars/watchdog.png`
- [ ] Dracula Avatar：`assets/avatars/dracula.png`
- [ ] Echo Avatar：`assets/avatars/echo.png`
- [ ] Thomas Avatar：`assets/avatars/thomas.png`
- [ ] Godin Avatar：`assets/avatars/godin.png`

---

**所有 avatar 需符合**：
- 尺寸：400x400px
- 格式：PNG，背景透明
- 風格：統一扁平化插圖
- 特徵：每個成員有辨識度

— North Star 🧭
