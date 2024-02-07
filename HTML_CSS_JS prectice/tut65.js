const fs = require("fs");
let text= fs.readFile("elet.text","utf-8",(err,data)=>{
    console.log(data);
});

console.log("this is a massage");