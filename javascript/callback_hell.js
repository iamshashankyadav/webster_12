// function getdata(a, callback) {
//     setTimeout(() => {
//         console.log("data received"+a);
//         if (callback){
//             callback();
//         }

            
//     }, 2000);  
// }

// // getdata(1);
// // getdata(2);
// // getdata(3); 
// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//         })})})

function getdata(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data received"+a);
            resolve();
        }, 2000);
    });
}
getdata(1)
.then(() => getdata(2))
.then(() => getdata(3))     
.then(() => setTimeout(console.log("all data received"),1000))
