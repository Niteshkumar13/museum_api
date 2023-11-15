const express = require("express");
const path = require('path');
const app = express();
const fs = require('fs');
const { send } = require("process");
const directoryPath = path.join(__dirname, 'images');
const about = [{
  header:'Patna Museum',
  About:'Patna Museum, established on 3 April 1917 during the British Raj, serves as the state museum of Bihar, India. Its objective is to preserve and display historical artefacts discovered in the Patna region. The architectural style of the museum combines elements of Mughal and Rajput influences, earning it the local nickname "Jadoo Ghar" (House of Magic).',
  started:'3 April 1917',
  more:'https://www.pmc.bihar.gov.in/patna-museum.aspx'
}]
var new_val = Array();
fs.readdir(directoryPath, (err, files) => {
    const imageFiles = files.filter(file => {
      return /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
    });
    imageFiles.forEach((item,index)=>{
      new_val.push({
          id:index,
          url:item
      });
  });
  });
app.get('/api', (req, res) => {
res.json(Array(about,new_val))
  });
app.listen(3002,(req,res)=>{
    console.log("code is working successfully")
})