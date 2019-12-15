const express = require('express')
const app = express()

app.get('/api/getProduct', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET','POST')
  res.header('Content-Type', 'application/json;charset=utf-8')

  res.json({
    success: true,
    lists: [{
      name: '足球',
      id: 1
    },{
      name: '篮球',
      id: 2
    }, {
      name: '羽毛球',
      id: 3
    }]
  })
})

app.get('/api/getUserInfo', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET','POST')
  res.header('Content-Type', 'application/json;charset=utf-8')

  res.json({
    success: true,
    lists: [{
      name: '张三',
      id: 1
    },{
      name: '李四',
      id: 2
    }, {
      name: '王五',
      id: 3
    }]
  })
})

app.listen(8088, ()=> {
  console.log('接口服务启用完毕')
})