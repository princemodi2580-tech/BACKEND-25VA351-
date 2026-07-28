// Promises for asynch is an object
//js single threaded

const PromiseOne = new Promise((resolve, reject)=>{
    let msg = true;
    resolve("Promise Passed by FSD");
    if(!msg==true){
        console.log("message using promises failed");
    }
    else{
        console.log("error...")
    }
    setTimeout(()=>{
        console.log(resolve());
    },2000)
});
PromiseOne.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});