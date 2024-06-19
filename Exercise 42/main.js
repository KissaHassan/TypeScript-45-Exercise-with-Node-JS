// function show_magicians(magicians: string[]){
//     magicians.forEach(name=>console.log(name));
// }
// function make_great(magicians:string[]){
//     return magicians.map(name => `The Great $(name)`);
// }
// let magicians_name = ["Harry Potter", "Hermionie Granger", "Ronald Weasley"];
// let great_magicians = make_great(magicians_name);
// show_magicians(great_magicians)
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); }); // Use string interpolation
}
var magicians_name = ["Harry Potter", "Hermione Granger", "Ronald Weasley"];
var great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
