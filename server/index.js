// node层代码  通过webpack dev:server打包babel处理
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const app = express()
app.use(express.static('public')) // 将public转化为静态资源，引用时不必写入如19行
app.get('/', (req, res) => {
  const content = renderToString(App) // 把dom解析成字符串
  res.send(`
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>react-ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `)
})
app.listen('3000', () => {
  console.log('监听成功！')
})
