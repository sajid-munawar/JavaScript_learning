// let names = ['ali', 'sajid', 'john',4,true];

// Join take an argument and joins the elements of the array with that arguments

// let result = names.join('-');
// ali - sajid - john;

// let result = names.join("B");
// aliBsajidBjohn;

// let result = names.indexOf("sajid");
// 1

// result = names.concat(['shaun', 'mario'])
// (5) ['ali', 'sajid', 'john', 'shaun', 'mario']

// let number = '100'

// let result = typeof (+number);

// console.log(names);

// Filter 

// const scores = [10, 29, 25, 15, 45, 70, 92, 44]

// const filteredScores = scores.filter(score => {
//     return score > 30;
// });

// console.log(filteredScores);

// const users = [
//   { name: "shaun", premium: true },
//   { name: "mario", premium: false },
//   { name: "ryu", premium: false },
//   { name: "chun-li", premium: true },
// ];

// const premiumUsers = users.filter(user => user.premium);
// console.log(premiumUsers);

// Map

const scores = [10, 29, 25, 15, 45, 70, 92, 44]

const newScores = scores.map(score => score * 2)
console.log(newScores);