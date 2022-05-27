var menu=["pizZA","SanDwich","BurGer","SnacKs"];

var input=prompt("please enter a food to search from menu");
var check=true;
for(var i=0 ;i<menu.length ;i++ ) {
    var b=menu[i];
    if(b.toLowerCase()==input.toLowerCase()){
        console.log("Available");
        check=false;
        break;
    }
}
if(check){
    console.log("Not available")
}



var name="SaJid"

console.log(name.toLowerCase())
console.log("\n")
console.log(name.toUpperCase())