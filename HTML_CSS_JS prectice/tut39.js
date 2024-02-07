function func1(){
    return new Promise(function name(resolve,reject) {
        setTimeout(() => {
            const error=true;
            if (!error) {
                console.log('Your promise has been resolve');
                resolve();
            } else {
                console.log('Your promise has been not resolve');
                reject('Soory not fullfilled');
            }
            
        }, 2000);
        
    })
}
func1().then(function(){
    console.log("Harry :Thanks for resolve");
}).catch(function(){
    console.log("Harry:Very bad bro");
})