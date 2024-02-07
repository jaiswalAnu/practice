console.log("This is tutorial 37");



const students=[
    {name:"harry",subject:"JavaScript"},
    {name:"Rohan",subject:"Machine Learning"}

]

function enrollStudent(student) {
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
    },1000);
    
}
function getStudent() {
    setTimeout(function()  {
        let str="";
        students.forEach(function(student){
            str += `<li>  ${student}</li>`
        });
        document.getElementById('student').innerHTML=str;
        console.log("Student has been feched");
    }, 3000);
    
}
let newStudent={name:"Sunny",subject:"Python"}
enrollStudent(newStudent);
getStudent();