var arr=[]

for (var i=1; i<11; i++){
       arr[i-1]=i
       
    }
var availabe=true
var ask=parseInt(prompt("Enter number to find"))
console.log("User Input = "+ask)
for (var i=0; i<arr.length; i++){
    var b=arr[i]
    if (b==ask){
        console.log(ask+" is availabe in arr at "+(i++)+" index")
        availabe=false
        break
    }
}
if (availabe){
    console.log("Not available")
}
console.log(arr)
    



