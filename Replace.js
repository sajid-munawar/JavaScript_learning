var sentence="My name is Sajid Munawar."

console.log(sentence.replace(/na/g,"fa"))
console.log(sentence)

console.log(+sentence.replace(/s/g,"fa"))
console.log(sentence.replace("s","fa"))
console.log(sentence.replace("S","fa"))

console.log(sentence.replace(/S/i,"fa"))

console.log(sentence.replace(/S/ig,"fa"))