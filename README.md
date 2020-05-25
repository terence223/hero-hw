## 執行方法

主要使用 [create-react-app](https://github.com/facebook/create-react-app) 建構專案

### `yarn install`

安裝所有使用的第三方套件

### `yarn start`

執行程式，預設會在 [http://localhost:3000/](http://localhost:3000/)

### `yarn test`

執行測試程式，寫了兩個很簡單的 unit test

## 專案架構邏輯

用 hook 開發，主要分為四個 components，Heroes、HeroCard、HeroProfile 和 ValueDashboard

* `Heroes` 主頁面，主要取得 Heroes 資料供子元件使用

* `HeroCard` 英雄基本資料的顯示卡片元件

* `HeroProfile` 下方的英雄能力值面板

* `ValueDashboard` 四個能力值的加減元件

## 使用第三方元件

* `@material-ui/core` 支援 React 的 Material UI 介面工具

* `@material-ui/icons` Material UI 所需使用的 icon

* `@testing-library/jest-dom` Unit Test 工具 Jest

* `axios` 基於 Promise 的 http 請求工具

* `prop-types` 可以用來檢查 props 資料形態的工具

* `react-notifications-component` 一個看起來還算好看的 notifications 工具，用來取代 alert

* `react-router-dom` React 的 router 解決方案

* `styled-components` CSS in JS 主流解決方案

## 註解撰寫原則

* 每個檔案頂部都會大概說明該檔案用途，若是 React component 則會詳細記下 props 的資訊

* function 和 重要變數都會寫個簡單的註解說明該用途，不會寫太詳細以免文字誤導細節

* 若覺得某個寫法不好未來需要修正時也會寫註解紀錄

## 遇到問題

有些東西其實很久沒寫了，像是 react-router，遇到時卡了一下

另外覺得 bootstrap 有點醜所以選擇用 material UI 建構大概介面架構，不過第一次用對於它背後發生什麼事有點不清楚，就多試多看文件