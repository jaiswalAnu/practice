console.log("This is tut27");
let car={
    name:'Maruti 800',
    topSpeed:89,
    run:function(){
        console.log("car is running");
    }
}

function GeneralCar(givenName,givenSpeed){
    this.name=givenName;
    this.topSpeed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`This car is slower by${200- this.topSpeed} Kmph than Mercedes`);
    }
}
car1=new GeneralCar('Nissan',180);
car2=new GeneralCar('Maruti  alto', 80)
console.log(car2);
