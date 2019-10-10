const download = require('image-downloader')
const fetch = require('node-fetch');
const shortid=require("shortid")
const fs=require("fs");
const sizeOf = require('image-size');

let jsonCheckUpdateLink="https://tntband3107.github.io/update-block/"
let nameArr=["bts","jhope","jimin","jin","rm","suga","jungkook","v"]
let jsonArr=[]
for(let i=0;i<nameArr.length;i++){
  let array=[]
  let blockFolder=fs.readdirSync(`block${nameArr[i]}`)
  for(let block of blockFolder){
    array.push(`https://tntband3107.github.io/update-block/block${nameArr[i]}/${block}`)
  }
  let obj={}
  obj[nameArr[i]]=array
  jsonArr[i]=obj
}
fs.writeFile(`checkforupdate.json`, JSON.stringify(jsonArr), (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});



   
