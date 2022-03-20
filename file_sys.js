const fs = require('fs')
const { join } = require('path')
const reader = require('xlsx')



const file = reader.readFile('./sample.xls')

let data = []

const sheet = file.SheetNames


for (let i=0; i < sheet.length; i++) {
  const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[i]]
  )
  temp.forEach((res)=> {
    data.push(res)
  })
}


fs.writeFile(join(__dirname, 'data.json'), JSON.stringify(data), (err) => {
  if (err) {
    throw err
  }
  console.log('Success')
})




// fs.readFile(join(__dirname,'sample.xls'),'utf-8', (err, data)=> {
//   if(err) {
//     throw err
//   }
//   fs.writeFile(join(__dirname, 'message.txt'),data, (err)=> {
//     if(err) {
//       throw err
//     }
//     else {
//       console.log("Send successfully")
//     }
//   })
// })