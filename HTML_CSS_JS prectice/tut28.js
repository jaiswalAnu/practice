console.log("this is tut28");
const proto={
    slogan: function(){
        return `The company is the best`;
    },
    changeName:function(newName){
        this.name=newName
    }
}
const harry=object.create(proto);
harry.name="Harry";
harry.role="programmer"
console.log(harry);