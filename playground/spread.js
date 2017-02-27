// function add(a, b) {
//   return a + b;
// };
//
// console.log(add(1,2));
//
// var toadd = [9, 8];
//
// console.log(add(...toadd));

 // var groupA = ['Jane', 'Tom'];
 // var groupB = ['Victram'];
 // var final = [3, ...groupA,...groupB];
 // // final.map((item) => {
 // //   console.log(item);
 // // })
 // console.log(final);

var callNameAndAge = (name,age) => `Hi,`+name+`,you are `+age;
var person = ['Andrew', 25];
var personTwo = ['Jane', 29];
console.log(callNameAndAge(...person))
console.log(callNameAndAge(...personTwo));

var name = ['Mike', 'Ben'];
var final = ['Mariano'];
var final = [...final,...name];
final.map((i) => {
  console.log(`Hi,`+i)
})
