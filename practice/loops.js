var arr=[1,2,3,4,5];

for(let i=0; i<arr.length ;i++) {
    // console.log(arr[i])
};
for (let v of arr){
    // console.log(v)
}

let obj={ 1:'a', 2:'b', 3:'c'}

for(let v in obj){
    console.log(obj[v])

}

var arr=new Map(obj)
console.log(arr.keys)