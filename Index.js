var arr=[]

for (var i=0; i<11; i++){
       arr[i]=i
       
    }
var availabe=true
var ask=parseInt(prompt("Enter number to find"))
for (var i=0; i<arr.length; i++){
    var b=arr[i]
    if (b==ask){
        console.log(ask+" is availabe in arr at "+(i+1)+" index")
        availabe=false
        break
    }
}
if (availabe){
    console.log("Not available")
}
// console.log(arr)
    



