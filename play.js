const fs = require('fs')
const { join } = require('path')

let firstData = []

fs.readFile(join(__dirname, 'data.json'),'utf-8',(err, data)=> {
  if (err) {
    throw err
  }
  let result = Array.from(data.split(',').splice("\''"))
  firstData.push(result)
  console.log(firstData)
})
