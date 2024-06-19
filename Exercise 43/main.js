function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); }); // Use string interpolation
}
var magicians_name = ["Harry Potter", "Hermione Granger", "Ronald Weasley"];
var copy_magicians_names = magicians_name.slice(); // Create a copy
// Modify the copied array to include "The Great " with their names
var copy_great_magicians = make_great(copy_magicians_names);
// Print the original magicians
console.log("Original Magicians:");
show_magicians(magicians_name);
// Print the "Great" magicians
console.log("\nThe Great Magicians:");
show_magicians(copy_great_magicians);
