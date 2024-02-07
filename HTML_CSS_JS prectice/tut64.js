const fs =require("fs");
let text=fs.readFileSync("elet.text","utf-8");
text=text.replace("program","rohan");
console.log("The content of the file is ");
console.log(text);
console.log("creating a new file");
fs.writeFileSync("rohan.text",text);