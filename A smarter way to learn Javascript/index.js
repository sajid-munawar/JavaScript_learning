// // alert('Thank you for your input');
// var name = "Sajid" ;
// console.log(name+'123'*2)
// console.log("12"+"5 ")
// console.log("12"+5 )

// var num = 5 ;
// var anum= num++ ;
// console.log(num)
// console.log(anum)

// var num = 5 ;
// var anum= ++num ;
// console.log(num)
// console.log(anum)

// alert("2 plus 2 equals " + 2 + 2);
// console.log("2 plus 2 equals " + 2 + 2);      this is because of first come
// console.log( 2 + 2 +'2 plus 2 equals')

// var x=prompt('where do you live?')
// if (x==='yzm') {
//     alert('correct')
// }
// if ((4>5) && (5<6)) {
//     alert('less than')
// }
// else if (5!=5){
//     alert('equal')
// }
// else {
//     alert('else');
// }

// var arr;
// arr=[1,2,3]
// console.log(arr)

// var pets=['cat','dog','rat']
// console.log(pets)
// pets.pop()
// console.log(pets)

// pets.push('rat','snake')
// console.log(pets)

// pets.shift()
// console.log(pets)

// pets.unshift('kitty','cat')
// console.log(pets)


// var arr=['a','b','c','d'];
// console.log(arr)
// arr.splice(1,2,'x','y','z')
// console.log(arr)

// arr.splice(2,1) //from index 2 remove 1 element
// console.log(arr)

// brr=arr.slice(2,4)
// console.log(brr)

// for (var i=0 ; i<10 ; i++) {
//     // alert(i)
//     console.log(i);
// }
// console.log(arr.length);


// var name=prompt('Please enter your name: ');
// name = name.toUpperCase();
// console.log(name);

var text="It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his." ;
console.log(text)
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        }
     }
console.log(text)