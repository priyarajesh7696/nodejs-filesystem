
const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    let today =Date.now()
    let time=new Date()
fs.writeFileSync(`Date-Time/${today}.txt`,`${time}`,'utf8')
let data = fs.readFileSync(`Date-Time/${today}.txt`,'utf8')
  res.send(data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})