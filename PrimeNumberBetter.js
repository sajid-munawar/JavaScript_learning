var num=parseInt(prompt("Please Enter number to check"));

var val=true;
for(var i=2; i<num;i++ ) {
    if(num%i==0){
        console.log("Number is not a Prime Number");
        val=false;
        break;
}
    }
if(val==true){
    console.log("Prime Number")
}