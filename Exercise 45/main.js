// function create_car(manufacturer, model, ...options){
//     let car={
//         manufacturer: manufacturer,
//         model:model
//     };
//     //adding additional options to the car object
//     options.forEach(option => {
//         let[key, value] =option.split(":");
//         car[key.trim]= value.tri();
//     });
//     return car;
// }
// //function to create the car object
// let my_car = create_car("Peugeot", 206, "color:black", "sunroof: False not present" )
// //printing variable to ensure the storage of information
// console.log(my_car);
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Adding additional options to the car object
    options.forEach(function (option) {
        var _a = option.trim().split(":"), key = _a[0], value = _a[1]; // Trim option string first
        // Handle potential missing values or multiple colons
        if (value) {
            car[key.trim()] = value.trim(); // Trim both key and value
        }
        else {
            car[key.trim()] = null; // Assign null for missing value
        }
    });
    return car;
}
// Function to create the car object
var my_car = create_car("Peugeot", 206, "color: black", "sunroof: False");
// Printing variable to ensure the storage of information
console.log(my_car);
