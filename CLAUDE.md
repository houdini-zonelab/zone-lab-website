# CLAUDE.md — Zone Lab 官網 v1.3 開發指令

## 任務

在現有 v1.2 基礎上新增 **Light/Dark Mode** 支援。不需要從頭重做，只需在現有 code 上加入主題切換功能。

## Spec

完整 spec：`/Users/j.a.s.o.n/.openclaw/workspace-team/specs/zone-lab-website-v1.md`
**重點看 6.4 節**：Light/Dark Mode 支援

## v1.3 新增需求：Light/Dark Mode

### 切換機制
- 切換按鈕放在右上角，語言切換按鈕旁邊
- 使用太陽/月亮 icon（Sun/Moon from lucide-react）
- 預設偵測系統偏好（`prefers-color-scheme`）
- 使用者手動切換後存 `localStorage`，下次記住
- 切換時有流暢過渡動畫（`transition: background-color 0.3s, color 0.3s`）

### 色彩系統

**Light Mode**：
- 背景：`#FFFFFF` / `#F9FAFB`
- 文字：`#111827` / `#1F2937`
- 強調色：保持 cyan/purple/green，降低飽和度
- 卡片：淺灰背景 + 細微陰影

**Dark Mode**（現有風格，維持不變）：
- 背景：黑 / 深灰
- 文字：白 / 淺灰
- 強調色：高對比螢光色
- Glass morphism 卡片

### 技術實作
- 使用 Tailwind 的 `dark:` modifier
- 在 `<html>` 上加 `class="dark"` 控制
- 避免閃爍：在 `<head>` 裡加 inline script 先套用主題
- 確保兩種模式都符合 WCAG AA 對比度（4.5:1）

### 需要修改的檔案
1. `src/app/[locale]/layout.tsx` — 加 inline theme script，html class
2. `src/app/[locale]/page.tsx` — 所有 section 加 light mode 樣式
3. `src/app/[locale]/team/page.tsx` — 同上
4. `src/components/LanguageSwitcher.tsx` — 旁邊加 ThemeToggle（或合併成 Header 元件）
5. `src/app/globals.css` — 加過渡動畫、light mode 的 glass card 樣式
6. 新增 `src/components/ThemeToggle.tsx`

### 注意事項
- **不要用動態 Tailwind class**（如 `bg-${color}-500`）
- Hero 的漸層光球在 light mode 要調整透明度或顏色
- Grid overlay 在 light mode 要用深色線條
- Logo 和 Jason 照片在兩種模式下都要清晰
- 佔位產品卡片在 light mode 的透明度調整

## 技術棧（已安裝）
- Next.js 16、Tailwind CSS v4、Framer Motion、next-intl v4、Lucide React

## 完成後
跑 `pnpm build`，確認無錯誤。
