function getdata(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data received"+a);
            resolve();
        }, 2000);
    });
}   

async function fetchData() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
    console.log("all data received");
}
fetchData();