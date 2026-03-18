function getdata(a, callback) {
    setTimeout(() => {
        console.log("data received"+a);
        if (callback){
            callback(a);
        }

            
    }, 2000);  
}

getdata(1);
getdata(2);
getdata(3); 