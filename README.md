# 家庭記帳本

一個使用 Node.js + Express 打造的家庭記帳本，你可於此瀏覽所有帳目、篩選帳目類別，並可以新增、修改或刪除帳目。

## 產品功能

1. 使用者可以在首頁一次瀏覽所有支出的清單

2. 使用者可以在首頁看到所有支出清單的總金額

3. 使用者可以新增一筆支出

4. 使用者可以編輯任何一筆支出

5. 使用者可以刪除任何一筆支出

6. 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## 環境建置

1. [Node.js](https://nodejs.org/download/release/v10.15.0/)10.15.0
2. [Express](https://expressjs.com/en/starter/installing.html) 4.17.1
3. [express-handlebars](https://www.npmjs.com/package/express-handlebars) 5.1.0
4. [mongoose](https://mongoosejs.com/) 5.10.2
5. [nodemon](https://nodemon.io/) 2.0.4
6. [body-parser](https://www.npmjs.com/package/body-parser) 1.19.0
7. [method-override](https://www.npmjs.com/package/method-override) 3.0.0
8. [MongoDB](https://www.mongodb.com/download-center/community)


## 專案執行

0. 啟動MongoDB資料庫伺服器，建立連線、建立資料庫

1. 打開你的終端機，Clone 此專案至本機電腦

```
git clone https://github.com/Darric-Lu/AC_expense-tracker
```

2. 開啟終端機，進入存放此專案的資料夾

```
cd expense-tracker
```

3. 安裝 npm 套件

```
在終端機輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在終端機輸入 npm i-g nodemon 指令
```

5. 新增種子資料

```
在終端機輸入 npm run seed-1 指令
在終端機輸入 npm run seed-2 指令
```


6. 啟動伺服器，執行 app.js 檔案

```
在終端機輸入 npm run dev 指令
```

7. 當終端機出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
App is listening on http://localhost:3000
mongoDB is connected !!
```

開啟任一瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用！
