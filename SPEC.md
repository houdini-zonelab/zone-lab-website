# zone lab 官網 Spec v1.3.1

**當前版本**：v1.5.0  
**最後更新**：2026-03-16 19:38  
**撰寫者**：North Star  
**狀態**：開發中

---

## 版本記錄

### v1.5.0 (2026-03-16 19:38)
**類型**：Minor Update（組織架構調整）

**變更內容**：
- ✅ 新增 Co-founder：林玉雅（Yu-Ya Lin）
- ✅ Team Page 結構調整：Founder Section → **Founders Section**（雙創辦人）
- ✅ Landing Page Team Section 調整：Founders 卡片（Jason + Yu-Ya）獨立顯示
- ✅ Co-founder 照片素材：`assets/yuya-photo.jpg`
- 組織架構：2 位 Founders + 7 位 Team Members

---

### v1.4.3 (2026-03-16 18:37)
**類型**：Patch（小更動）

**變更內容**：
- ✅ 新增 3 個 Archived 產品：Poop Hub、ReCycle、FlavorFlash
- ✅ 產品總數：2 個已上線 + 3 個 Archived（展示過往作品）
- ✅ Archived 產品不顯示連結（狀態標示為 Archived）
- App Icon 素材已完成（poophub-icon.png、recycle-icon.png、flavorflash-icon.jpg）

---

### v1.4.2 (2026-03-16 17:19)
**類型**：Patch（小更動）

**變更內容**：
- ✅ Testimonial 卡片高度統一：前後 peek 卡片與中間卡片保持相同高度
- ✅ 文字溢出處理：固定高度 + 自動截斷（text-overflow: ellipsis）
- 視覺一致性優化

---

### v1.4.1 (2026-03-16 16:50)
**類型**：Patch（小更動）

**變更內容**：
- ✅ Testimonial Section 視覺優化：輪播加入 peek 效果（可看到部分上一個/下一個評價）
- ✅ Testimonial Section 寬度調整為 90%（比其他 section 更寬，更有視覺重點）
- 補充完整的視覺規格與實作建議

---

### v1.4.0 (2026-03-16 16:26)
**類型**：Minor Update（功能新增）

**變更內容**：
- ✅ 新增 Testimonial Section（客戶評價區塊，位於 Products 和 Teams 之間）
- ✅ Testimonial 包含 10 個假資料，輪播展示
- ✅ 補充所有缺少的中文翻譯
- ✅ Footer 調整：移除獨立 Connect 區塊，改為 Founder 聯絡資訊
- 頁面結構調整：Hero → Vision → Products → **Testimonial** → Team → Footer

---

### v1.3.4 (2026-03-16 16:07)
**類型**：Patch（小更動）

**變更內容**：
- ✅ Founder 新增 Instagram 連結
- ✅ Footer 移除 Contact 快速連結
- ✅ Landing Page Team Section 調整：Founder 獨立顯示，加入更多資訊
- Landing Page 現在有「Founder 小卡片」+「Team Members 網格」

---

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
├── Testimonial Section (新增 v1.4.0)
├── Team Section
└── Footer

Team Page (/team)
└── 詳細團隊成員介紹
```

---

## 3. Landing Page 各 Section 規劃

### 3.1 Hero Section

**主標題（英文）**：`Building software that helps you level up.`  
**主標題（中文）**：`打造讓你變得更好的軟體`

**副標題（英文）**：`AI-augmented product studio based in Taiwan.`  
**副標題（中文）**：`台灣的 AI 驅動產品工作室`

**CTA**：
- 主要（英文）：`Meet the Team`
- 主要（中文）：`認識團隊`
- 次要（英文）：`View Projects`
- 次要（中文）：`查看專案`

---

### 3.2 Vision Section

**標題（英文）**：`Software with purpose.`  
**標題（中文）**：`有意義的軟體`

**核心訊息**（三段式）：

1. **Self-improvement, not distraction（自我提升，而非分心）**  
   **中文**：`我們相信科技應該讓人變得更好,而不是讓人分心。每個產品都圍繞一個核心問題:「這如何幫助使用者成長?」`  
   **英文**：`We believe technology should make you better, not distracted. Every product centers on one question: "How does this help users grow?"`

2. **Focused execution（專注執行）**  
   **中文**：`我們是精實團隊,每個成員都是專家。少即是多——專注做對的事,而不是做很多事。`  
   **英文**：`We're a lean team where every member is an expert. Less is more — focus on doing the right things, not many things.`

3. **Ship fast, iterate faster（快速推出，更快迭代）**  
   **中文**：`我們不做 5 年計劃。我們快速推出、收集反饋、持續改進。產品永遠是 beta,因為我們永遠在進化。`  
   **英文**：`We don't do 5-year plans. We ship fast, collect feedback, and iterate constantly. Products are always in beta because we're always evolving.`

---

### 3.3 Products Section

**標題（英文）**：`What we're building.`  
**標題（中文）**：`我們在做什麼`

#### 產品 1：Marawanna（已上架）✅

- **App Icon**：使用實際 App Icon（從 App Store 擷取）
- **名稱**：Marawanna
- **描述（英文）**：`Your personal marathon coach, powered by data.`
- **描述（中文）**：`你的個人馬拉松教練，用數據驅動訓練`
- **狀態（英文）**：`Live`
- **狀態（中文）**：`已上線`
- **連結**：
  - **App Store**：https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB
  - 按鈕文字（英文）：`Download on App Store`
  - 按鈕文字（中文）**：`前往 App Store`

---

#### 產品 2：Summur（已上架）✅

- **App Icon**：使用實際 App Icon（從 App Store 擷取）
- **名稱**：Summur
- **描述（英文）**：`Cat & Dog care made simple.`
- **描述（中文）**：`貓狗照護，簡單搞定`
- **狀態（英文）**：`Live`
- **狀態（中文）**：`已上線`
- **連結**：
  - **App Store**：https://apps.apple.com/tw/app/summur-cat-dog-care/id6730121236?l=en-GB
  - 按鈕文字（英文）：`Download on App Store`
  - 按鈕文字（中文）**：`前往 App Store`

---

**視覺處理（已上線產品）**：
- Marawanna 和 Summur 卡片要**突出顯示**（稍大、或用邊框/光暈）
- 這兩個是已上線產品，要讓訪客第一眼看到

---

#### 產品 3-5：Archived 產品（過往作品）

**產品 3：Poop Hub** 💩

- **App Icon**：`assets/poophub-icon.png`（手繪風格，黑底白字）
- **名稱**：Poop Hub
- **描述（英文）**：`Track your digestive health with data.`
- **描述（中文）**：`用數據記錄你的腸道健康`
- **狀態（英文）**：`Archived`
- **狀態（中文）**：`已封存`
- **連結**：無（專案已封存）

---

**產品 4：ReCycle** 🚴

- **App Icon**：`assets/recycle-icon.png`（綠色無限符號 ∞）
- **名稱**：ReCycle
- **描述（英文）**：`Cycling tracker for your rides.`
- **描述（中文）**：`記錄每一趟騎行旅程`
- **狀態（英文）**：`Archived`
- **狀態（中文）**：`已封存`
- **連結**：無（專案已封存）

---

**產品 5：FlavorFlash** 🍦

- **App Icon**：`assets/flavorflash-icon.jpg`（綠色冰淇淋造型）
- **名稱**：FlavorFlash
- **描述（英文）**：`Capture your taste memories.`
- **描述（中文）**：`捕捉你的味蕾記憶`
- **狀態（英文）**：`Archived`
- **狀態（中文）**：`已封存`
- **連結**：無（專案已封存）

---

**視覺處理（Archived 產品）**：
- **與 Live 產品區分**：
  - Archived 產品卡片用**灰階或低飽和度**處理（暗示「過去的專案」）
  - 或加入半透明效果（opacity: 0.7-0.8）
  - 狀態標籤用灰色（而非綠色）
  
- **不顯示連結按鈕**：
  - Archived 產品沒有「前往 App Store」按鈕
  - 只顯示狀態標籤「Archived / 已封存」
  
- **排列順序**：
  - Live 產品在前（Marawanna、Summur）
  - Archived 產品在後（Poop Hub、ReCycle、FlavorFlash）
  
- **說明用途**：
  - 展示 Jason 過往的產品實驗與學習歷程
  - 傳達「持續嘗試、快速迭代」的工作方式
  - 增加產品多樣性（不只是「只有 2 個產品」）

**我的建議**：
Archived 產品的存在很有價值：
1. **展示經驗**：讓訪客知道 Jason 不是新手，有多個產品經驗
2. **傳達態度**：不怕失敗、勇於嘗試、快速學習
3. **增加豐富度**：產品類型多樣（跑步、寵物、健康、騎行、美食）

視覺上要明確區分 Live 和 Archived，但不要「藏起來」——過往作品也是實力的證明。

---

### 3.4 Testimonial Section (客戶評價)

**目標**：展示用戶真實評價，建立信任感與社交證明。

**標題（中文）**：`用戶怎麼說`  
**標題（英文）**：`What our users say`

---

#### 內容架構

**整體寬度**：
- **90% 螢幕寬度**（比其他 section 更寬，最大 1400px）
- 超寬螢幕上內容置中，兩側留白
- 這個設計讓 Testimonial Section 更有視覺重點，與其他 section 區分

---

**輪播展示**：
- **顯示方式**：主要卡片居中 + 部分顯示上一個/下一個卡片（peek 效果）
  - 桌面：中間 1 個完整卡片 + 左右各顯示 20-30% 的相鄰卡片
  - 平板：中間 1 個完整卡片 + 左右各顯示 15-20% 的相鄰卡片
  - 手機：中間 1 個完整卡片 + 左右各顯示 10-15% 的相鄰卡片
- **自動輪播**：每 5 秒切換
- **手動切換**：箭頭按鈕（左右兩側）或滑動手勢
- **進度指示**：底部顯示進度點（dots indicator）
- **過渡動畫**：平滑滑動（ease-in-out）

**Peek 效果的好處**：
- 讓訪客知道「還有更多評價」
- 視覺上更動態、更有深度
- 引導用戶主動切換（提高互動性）

---

**評價卡片結構**：
- 用戶頭像（圓形，80x80px）
- 評價內容（1-3 句話）
- 用戶名字
- 用戶身份/職業（選填）
- 星級評分（5 星制）

---

#### 假資料內容（10 個）

**評價 1**：
- **頭像**：使用假頭像（例如：UI Faces 或漸層色塊 + 首字母）
- **內容（中文）**：`Marawanna 改變了我的訓練方式，數據分析讓我知道哪裡需要改進。從完賽到突破 PB，感謝這個 app！`
- **內容（英文）**：`Marawanna transformed my training. The data insights showed me exactly where to improve. From finishing to hitting PRs, thank you!`
- **用戶名**：Kevin Chen
- **身份**：Marathon Runner 跑者
- **星級**：⭐⭐⭐⭐⭐

---

**評價 2**：
- **內容（中文）**：`作為新手跑者，Marawanna 的訓練計劃讓我從 0 到完成半馬。介面簡潔，數據清楚，推薦！`
- **內容（英文）**：`As a beginner, Marawanna's training plan took me from zero to half marathon. Simple interface, clear data, highly recommend!`
- **用戶名**：Sarah Lin
- **身份**：Beginner Runner 新手跑者
- **星級**：⭐⭐⭐⭐⭐

---

**評價 3**：
- **內容（中文）**：`Summur 讓我第一次養貓不再手忙腳亂。提醒功能超實用，健康記錄一目了然。`
- **內容（英文）**：`Summur made my first time as a cat owner so much easier. The reminders are super helpful, health records are crystal clear.`
- **用戶名**：Alex Wu
- **身份**：Cat Owner 貓主人
- **星級**：⭐⭐⭐⭐⭐

---

**評價 4**：
- **內容（中文）**：`終於有一個寵物 app 不會塞滿廣告和複雜功能。Summur 簡單、乾淨、有用。`
- **內容（英文）**：`Finally a pet app without ads and bloated features. Summur is simple, clean, and useful.`
- **用戶名**：Jamie Lee
- **身份**：Dog Owner 狗主人
- **星級**：⭐⭐⭐⭐

---

**評價 5**：
- **內容（中文）**：`Marawanna 的配速分析讓我知道自己到底跑得對不對。數據不會騙人，進步看得見！`
- **內容（英文）**：`Marawanna's pace analysis showed me if I'm running right. Data doesn't lie, progress is visible!`
- **用戶名**：Daniel Park
- **身份**：Ultra Runner 超馬跑者
- **星級**：⭐⭐⭐⭐⭐

---

**評價 6**：
- **內容（中文）**：`用過很多跑步 app，Marawanna 是少數真的在乎『訓練品質』而不是『跑多遠』的。`
- **內容（英文）**：`Tried many running apps, Marawanna is one of the few that cares about training quality, not just distance.`
- **用戶名**：Emily Chang
- **身份**：Running Coach 跑步教練
- **星級**：⭐⭐⭐⭐⭐

---

**評價 7**：
- **內容（中文）**：`Summur 的疫苗提醒救了我好幾次，不用再擔心忘記帶貓去打針。`
- **內容（英文）**：`Summur's vaccine reminders saved me multiple times. No more worrying about missing appointments.`
- **用戶名**：Chris Huang
- **身份**：Cat Owner 貓主人
- **星級**：⭐⭐⭐⭐⭐

---

**評價 8**：
- **內容（中文）**：`介面設計很用心，不會像其他 app 那麼雜亂。Zone lab 的產品都有這種『剛剛好』的感覺。`
- **內容（英文）**：`Thoughtful UI design, not cluttered like other apps. Zone lab's products have this 'just right' feeling.`
- **用戶名**：Lisa Wang
- **身份**：Designer 設計師
- **星級**：⭐⭐⭐⭐⭐

---

**評價 9**：
- **內容（中文）**：`從來沒想過一個 app 可以讓我更了解自己的狗。Summur 做到了。`
- **內容（英文）**：`Never thought an app could help me understand my dog better. Summur did it.`
- **用戶名**：Mike Tsai
- **身份**：Dog Owner 狗主人
- **星級**：⭐⭐⭐⭐

---

**評價 10**：
- **內容（中文）**：`Marawanna 不只是跑步 app，更像是一個智慧教練。每次訓練後的分析都讓我有收穫。`
- **內容（英文）**：`Marawanna isn't just a running app, it's like having a smart coach. Every post-run analysis teaches me something.`
- **用戶名**：Ryan Liu
- **身份**：Triathlete 鐵人三項選手
- **星級**：⭐⭐⭐⭐⭐

---

#### 視覺建議

**整體 Section 設計**：
- **寬度**：90% 螢幕寬度（最大 1400px）
- **為什麼更寬**：
  - 讓 Testimonial 成為視覺焦點
  - 與其他 section（最大 1280px）區分
  - Peek 效果需要更多橫向空間
- **背景**：
  - 可選：使用不同背景色（淺灰或漸層）與其他 section 區分
  - 或保持同色，用寬度本身做區隔

---

**配色**：
- Light Mode：白色卡片 + 淺灰背景
- Dark Mode：深灰卡片 + 黑色背景

---

**卡片設計**：
- **尺寸**：
  - 桌面：寬度約 600-700px（根據容器寬度調整）
  - 平板：寬度約 400-500px
  - 手機：寬度約 300-350px
  - **高度**：**固定高度，所有卡片一致**
    - 桌面：約 280-320px
    - 平板：約 260-300px
    - 手機：約 240-280px
    - **重要**：前後 peek 卡片與中間卡片保持相同高度（不因縮放而改變高度）
- **圓角**：16px
- **陰影**：柔和、細緻（box-shadow: 0 4px 20px rgba(0,0,0,0.1)）
- **Hover 效果**：微微浮起（transform: translateY(-4px)）
- **評價內容**：用引號包裹（視覺化引用）

---

**文字溢出處理**（重要）：
- **評價內容區域**：
  - 固定最大高度（例如：120px）
  - 超出部分自動截斷：`overflow: hidden; text-overflow: ellipsis;`
  - 可選：顯示「...」表示有更多內容
  - 或使用 `line-clamp` 限制行數（例如：最多 4 行）
  
- **範例 CSS**：
  ```css
  .testimonial-content {
    max-height: 120px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;  /* 最多顯示 4 行 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  ```

- **為什麼要固定高度**：
  - 保持視覺一致性（卡片高度統一）
  - Peek 效果更整齊（不會因為內容長短而高度不一）
  - 用戶體驗更好（滑動時不會跳動）

- **內容長度建議**：
  - 評價內容應控制在 1-3 句話（約 80-120 字）
  - 如果假資料太長，請縮短或分成多個評價

---

**Peek 效果實作細節**：
- **相鄰卡片透明度**：0.5-0.7（半透明，暗示「不是焦點」）
- **相鄰卡片縮放**：0.9-0.95（稍微小一點，**只縮放寬度，高度保持一致**）
  - 使用 `transform: scaleX(0.95)` 而非 `scale(0.95)`
  - 或使用 `width` 調整而非 `transform: scale()`
  - **關鍵**：確保所有卡片（中間、左側、右側）高度完全相同
- **過渡動畫**：平滑滑動（transition: all 0.3s ease-in-out）
- **滑動時**：當前卡片滑出、下一張卡片滑入並恢復完整大小與透明度
- **高度一致性**：無論卡片內容長短，所有可見卡片的高度必須相同（使用固定高度 + 文字截斷）

**視覺範例**（桌面版）：
```
[  20%上一張  ] [     100%當前     ] [  20%下一張  ]
   (半透明)          (完整)            (半透明)
```

---

**頭像處理**：
- 如果沒有真實頭像：用漸層色塊 + 首字母
- 配色可以用產品的主題色（Marawanna 相關評價用綠黃橘色系，Summur 用黃色系）

---

**星級顯示**：
- 使用星星 icon（⭐）或 SVG
- 金色填充（#FFD700 或類似）
- 未滿分用灰色空心星星（#D1D5DB）

---

**進度指示**：
- 底部中央顯示小圓點（dots）
- 當前評價用實心點（主題色）
- 其他用空心點或灰色點
- 可點擊跳轉到特定評價
- Hover 時放大（scale: 1.2）

---

**箭頭按鈕**：
- 左右兩側各一個（← / →）
- 圓形或圓角方形背景
- 半透明背景（backdrop-blur）
- Hover 時完全不透明
- 手機版可以隱藏（只用滑動手勢）

---

**技術建議（給 Houdini）**：
- 推薦使用現成 carousel library：
  - **Swiper.js**（功能強大、支援 peek 效果）
  - **Embla Carousel**（輕量、可客製化）
  - **Keen Slider**（效能好、支援 peek）
- Peek 效果設定範例（Swiper）：
  ```js
  slidesPerView: 1.2,  // 顯示 1.2 個卡片（中間 1 個 + 兩側各 0.1）
  centeredSlides: true,  // 當前卡片居中
  spaceBetween: 24,  // 卡片間距
  ```
- 響應式斷點：
  - 手機：slidesPerView: 1.15
  - 平板：slidesPerView: 1.2
  - 桌面：slidesPerView: 1.25

---

#### 我的建議

**為什麼要加 Testimonial Section？**

社交證明（Social Proof）是建立信任最有效的方式之一。訪客看到「真實用戶的正面評價」會更願意嘗試產品。

**為什麼放在 Products 和 Team 之間？**

流程設計：
1. **Products Section**：訪客看到「我們做了什麼產品」
2. **Testimonial Section**：訪客看到「別人怎麼評價這些產品」（建立信任）
3. **Team Section**：訪客看到「是誰做出這些產品」（加深信任）

這個順序符合「產品 → 證明 → 團隊」的邏輯流程。

**假資料的作用**：
- 現階段產品可能還沒有大量真實評價
- 先用假資料佔位，展示「這個 section 長什麼樣」
- 之後可以逐步替換成真實用戶評價
- 假資料要「看起來真實」（不要太完美、有 4 星評價、不同用戶身份）

**輪播的好處**：
- 展示更多評價（10 個）但不佔太多空間
- 動態效果吸引注意力
- 用戶可以主動切換，增加互動性

---

### 3.5 Team Section (Landing Page 版本)

**標題（英文）**：`Meet the team.`  
**標題（中文）**：`認識團隊`

**結構**：雙區塊設計

---

#### 3.5.1 Founders 卡片（特殊區塊）

**兩位創辦人並列展示**

**版面設計**：
- 兩張並排的大卡片（桌面版）或上下排列（手機版）
- 比其他成員卡片**更大更突出**
- 每張卡片：
  - 左側：照片（中等尺寸，150x150px）
  - 右側：簡短介紹 + 連結圖示

---

**Founder 1: Jason** - Founder & CEO
- **一句話**：`我拍板、我負責、我實驗。`
- **簡短介紹**（2-3 行）：  
  `Zone lab 的創辦人。相信小團隊 + AI 協作能做出不輸大公司的產品。從 iOS 工程師到產品創辦人，不做 pitch deck，直接做產品。`
- **快速連結**（小圖示按鈕）：
  - LinkedIn 圖示
  - Instagram 圖示
  - Email 圖示

---

**Founder 2: Yu-Ya Lin** - Co-founder
- **一句話**：`我看細節、做決策、讓事情發生。`
- **簡短介紹**（2-3 行）：  
  `Zone lab 的共同創辦人。從光電工程到產品開發，跨領域思維讓她能從不同角度思考問題。相信好產品需要清晰的願景與紮實的執行。`
- **快速連結**（小圖示按鈕）：
  - （待補充，或暫時不顯示）

---

**視覺差異**：
- 兩張 Founders 卡片並列（桌面版）或上下排列（手機版）
- 不同的背景色或邊框（例如：淺金色或漸層）
- 照片稍大、更突出
- 連結圖示清晰可見（hover 時放大或變色）
- 視覺重量相同，表達「雙創辦人」的平等地位

---

#### 3.5.2 Team Members 網格（7 位成員）

**版面設計**：
- 網格卡片排列（3-4 欄）
- 每張卡片：avatar + 名字 + 職稱
- hover 時卡片微微浮起

**簡短說明**（放在 Founder 卡片下方）：  
- **中文**：`精實、跨領域、高效執行。每個成員都專注在自己的領域，共同打造有意義的產品。`
- **英文**：`Lean, cross-functional, and highly effective. Each member focuses on their domain, building products that matter.`

**CTA**（放在最下方）：  
- **英文**：`Meet everyone →`
- **中文**：`認識所有成員 →`
（導向 `/team` 頁面看完整介紹）

---

#### 3.5.3 我的建議

**為什麼 Landing Page 也要把 Founders 獨立出來？**

Landing Page 是訪客的第一印象。如果 Founders 跟其他成員混在一起，訪客可能不知道「這是誰創立的、為什麼存在」。

**獨立出來的好處**：
1. **快速建立信任**：訪客看到「有真實的人在背後」（雙創辦人展現團隊穩定性）
2. **展現互補**：Jason（技術/產品）+ Yu-Ya（策略/執行）的組合
3. **提供聯繫管道**：有興趣的人可以立刻連結（不用跳到 Team Page）
4. **視覺層次分明**：Founders 更突出 → Team Members 展現團隊實力

**視覺比例**：
- Founders 卡片（兩張）：佔 40-50% 的 Team Section 空間
- Team Members 網格：佔 50-60%

**互動流程**：
- 訪客看到 Founders 卡片 → 了解雙創辦人背景與分工 → 可以直接連結
- 訪客看到 Team Members → 感受到「這是一個有實力的團隊」
- 想了解更多 → 點擊「Meet everyone」進入 Team Page

---

### 3.6 Footer

**結構**：簡潔的三欄式設計

---

#### 左側：品牌資訊
- zone lab logo
- Tagline（中文）：`打造讓你變得更好的軟體`
- Tagline（英文）：`Building software that helps you level up`

---

#### 中間：快速連結
- About / 關於我們
- Team / 團隊
- Projects / 專案

**注意**：已移除 Contact（聯繫方式統一在 Founder Section）

---

#### 右側：Founder 聯絡資訊

**標題**：`Get in touch` / `聯繫我們`

**連結**（圖示 + 文字）：
- LinkedIn：https://www.linkedin.com/in/qazwsx521943
- Instagram：https://www.instagram.com/cx_870630?igsh=MTJma3dodm95aDhlbA%3D%3D&utm_source=qr
- Email：jasonchungdev@gmail.com

**視覺設計**：
- 使用品牌圖示（LinkedIn 藍色、Instagram 漸層色、Email 主題色）
- 可以是純圖示（hover 顯示文字）或圖示 + 文字並列
- 簡潔、不要太擠

---

#### 最下方：版權資訊
- © 2026 zone lab. All rights reserved.

---

#### 我的建議

**為什麼 Footer 放 Founder 聯絡資訊？**

1. **統一聯繫管道**：訪客不管在哪個頁面，滾到底部都能找到聯繫方式
2. **降低跳出率**：不用特地跳到 Team Page 才能找到聯繫方式
3. **符合慣例**：大部分網站的 Footer 都會放聯絡資訊

**替代方案**（如果你覺得太多）：
- 只放 Email（最直接的聯繫方式）
- 或完全移除，統一導向 Team Page 的 Founder Section

我建議保留，因為 Footer 是「最後的機會」讓有興趣的訪客聯繫你。

---

## 4. Team Page (/team)

### 4.1 頁面結構

**雙區塊設計**：
1. **Founders Section**：Jason + Yu-Ya（雙創辦人），更豐富的介紹與連結
2. **Team Members Section**：其他 7 位成員，統一格式卡片

---

### 4.2 Founders Section

**兩位創辦人並列展示**：
- 版面設計：兩個並排的大卡片（桌面版）或上下排列（手機版）
- 每位創辦人都有完整的介紹、經歷、連結
- 視覺上與 Team Members 明確區分

---

#### Founder 1: Jason

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
  
- **Instagram**：https://www.instagram.com/cx_870630?igsh=MTJma3dodm95aDhlbA%3D%3D&utm_source=qr  
  （按鈕文字：`Follow on Instagram`）
  
- **Email**：jasonchungdev@gmail.com  
  （按鈕文字：`Get in touch`）

---

#### Founder 2: Yu-Ya Lin (林玉雅)

**Yu-Ya Lin** - Co-founder

**版面設計**：
- 與 Jason 並列（桌面版）或緊接在下方（手機版）
- 左側：照片（大尺寸，300x300px 或更大）
- 右側：完整介紹 + 經歷

---

**照片**：`assets/yuya-photo.jpg`

**一句話**：  
`我看細節、做決策、讓事情發生。`

**完整介紹**：  
`Zone lab 的共同創辦人。從光電工程到產品開發，跨領域的背景讓她能從不同角度思考問題。畢業於中山大學光電系、陽明交通大學光電所，擅長將複雜的技術轉化為實際可行的產品策略。`

`相信好產品需要清晰的願景與紮實的執行。不追求完美，但追求有意義——每個決策都要回答「這真的有用嗎？」。與 Jason 一起，從零開始建立 Zone lab，讓小團隊也能做出影響力。`

**經歷 (Experience)**：  
- 🎓 中山大學 光電工程系
- 🔬 陽明交通大學 光電工程所
- 🚀 共同創立 Zone lab
- 💡 從光電到產品，跨領域思維

**連結 (Links)**：  
- （待補充）

**視覺建議**：
- 兩位創辦人卡片並列，視覺重量相同
- 可以用不同的背景色或邊框區分兩位（但保持整體一致性）
- 照片大小、排版格式保持一致

---

**Founders Section 整體視覺**：
- 用不同的背景色（淺灰或漸層）與 Team Members 區分
- 照片可以稍大、更突出
- 連結按鈕用明顯的視覺設計（LinkedIn 藍色、Instagram 漸層色、Email 主題色）

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
- [x] Yu-Ya 照片：`assets/yuya-photo.jpg` ✅ 已完成
- [x] Marawanna Icon：`assets/marawanna-icon.png` ✅ 已完成
- [x] Summur Icon：`assets/summur-icon.png` ✅ 已完成
- [x] Poop Hub Icon：`assets/poophub-icon.png` ✅ 已完成
- [x] ReCycle Icon：`assets/recycle-icon.png` ✅ 已完成
- [x] FlavorFlash Icon：`assets/flavorflash-icon.jpg` ✅ 已完成
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
