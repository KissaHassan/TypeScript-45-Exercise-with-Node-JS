//defining variables
var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var Fruits = ["Apple", "Banana", "Orange"];
//test for equality and unequality with strings
console.log("Is apple equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equal to apple?");
console.log(apple != "apple");
//test using lowercase functions
console.log("\nIs APPLE equal to apple after converting to lower case?");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\nIs APPLE not equal to apple after converting to lower case?");
console.log(uppercaseapple.toLowerCase() != "apple");
//Numercical Tests
//equal to
console.log("\n Is ten equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\n Is ten not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\n Is ten greater than 0?");
console.log(ten > 0);
//less than
console.log("\nIs twenty less than ten");
console.log(twenty < ten);
//Greater than or equal to
console.log("\n Is ten greater than equal to five?");
console.log(ten >= 5);
//less than or equal to
console.log("\n Is twenty less than or equal to ten?");
console.log(twenty <= 10);
//Tests using "and", & "or" operators
//using && (AND)
console.log("\ntwenty is not equals to ten and twenty is greater than ten!");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equals to ten and twenty is greater than 30!");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n Twenty is greater than 50 Or twenty is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n Twenty is greater than 50 Or twenty is not equal to 20?");
console.log(20 > 50 || 20 != 20);
//test wheather an item is include in array
console.log("\nIs Orange include in my Fruits array");
console.log(Fruits.includes("Orange"));
console.log("\nIs Orange not included in my Fruits array");
console.log(!Fruits.includes("Orange"));
