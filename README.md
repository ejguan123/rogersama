# VUE VITE專案

使用 vue 3 vite進行開發

## 架構

```sh
vite.config.ts 匯出設定(摸組化輸出的檔案名稱)

src/main.ts 主要設定
src/views/view 各頁面撰寫區
src/views/layout 共用版型(商品樓層與手機版選單)
src/views/floor 樓層區

src/AppComponent.vue 以這個vue來引入各頁面

src/globalMixin.js 撈取樓層商品api

src/assets/js/mobileText.js 手機版選單項目撈取
```

## 此專案讀套件安裝指令

```sh
npm install
```

### 此專案在本機運作指令

```sh
npm run dev
```

### 此專案打包匯出檔案指令

```sh
npm run build
```

### 專案初始化

```sh
npm run lint
```
