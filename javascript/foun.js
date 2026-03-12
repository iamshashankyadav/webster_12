word=prompt("give me a string: ");

function countvow( x){
    let v=0;
    for( const i of x){
        console.log(i)
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            v++;
    }
    
}
return v;}
alert("vowles are actually "+ countvow(word))