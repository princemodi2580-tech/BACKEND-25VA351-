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
//Async /Await
async function test() {
    await console.log("1nd");
    console.log("2rd");
    console.log("3th");
    const response = await fetch(".student.json");
    console.log(response.status);
    const stdn = await response.json();
}
test().then((result)=>{
    console.log(result);
})

// create promises that will print username and password using 
// AND if username and passrord is correct then print "Login Successful" otherwise print "Login Failed"

const loginPromise = new Promise((resolve, reject) => {
    const username = "user123";
    const password = "pass123";
});