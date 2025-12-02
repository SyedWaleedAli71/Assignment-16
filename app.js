// Assignment # 16 
// ARRAYS AND LOOP 
// Q.1
// var multiArray = [,[],[]];
// 
// Q.2
// var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(matrix);
// Q.3
// for (var i = 1; i <= 10; i++){
//     document.writeln(i + "<br>");
// };
// 
// Q.4
// var tableNumber = +prompt("Enter Table Number..");
// var tableLength = +prompt("Enter Table Length");

// for (var i = 1; i <= tableLength; i++){
//     document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>")
// }
// 
// Q.5
// var fruits = ["Apple","Mango","Banana","Graphs"];
// for (var i = 0; i < fruits.length; i++){
// document.writeln(fruits[i] + "<br>");
// }
// 
// Q.6
// document.writeln("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.writeln(i + ", ");
// }
// 
// document.writeln("<h3>Reverse Counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.writeln(i + ", ");
// }
// // 
//c. Even numbers
// document.writeln("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.writeln(i + ", ");
// }
// //
//d. Odd numbers
// document.writeln("<h3>Odd:</h3>");
// for (var i = 1; i <= 19; i += 2) {
//     document.writeln(i + ", ");
// }
//e. Series
// document.writeln("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
//     document.writeln(i + "k, ");
// }
// 
// Q.7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to My Bakery. What do you want to order?").toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//         found = true;
//         break;
//     }
// }

// if (found === true) {
//     document.writeln(userInput + " is <b>available</b> " + i + " in our bakery.");
// } else {
//     document.writeln("Sorry. " + userInput + " is <b>not available</b> in our bakery.");
// }
// 
// Q.8
// var arr = [24,53,78,91,12];
// var larGest = [0];

// for (var i = 1; i < arr.length; i++){
//     if(arr[i] > larGest){
// larGest = arr[i];
//     }
// }
// console.log("The Largest Number is " + larGest);
// 
// Q.9
// let arr = [24,53,78,91,12];
// let smallest = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if(arr[i] < smallest){
// smallest = arr[i];
//     }
// }
// console.log("The smallest Number is " + smallest);
// 
// Q.10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
// Completed