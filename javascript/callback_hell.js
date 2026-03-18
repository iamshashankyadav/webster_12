function getdata(a, callback) {
    setTimeout(() => {
        console.log("getting data from database");
        callback(a);
    }, 2000);  
}