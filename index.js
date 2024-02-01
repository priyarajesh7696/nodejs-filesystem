const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    // let today =Date.now()
    let time=new Date().toISOString()
    let newTime = time.replace(":","-")
    let newTime1 = newTime.replace(":","-")

fs.writeFileSync(`Date-Time/${newTime1}.txt`,`${time}`,'utf8')
let data = fs.readFileSync(`Date-Time/${newTime1}.txt`,'utf8')
  res.send(data)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})