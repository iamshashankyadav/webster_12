// let divi=document.querySelector(".divi")
// console.dir(divi)
// divi.eventListener("onclick",()=>{
//     divi.style.backgroundColor="black"
// })
let divi=document.querySelector(".divi")
console.dir(divi.childNodes[0])
let button=divi.childNodes[0]
button.addEventListener("click",()=>{
    console.log("you arechzing mode")
    if (document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="white"
    }    else{document.body.style.backgroundColor="black"}
    console.log(divi.style.backgroundColor)
    
})