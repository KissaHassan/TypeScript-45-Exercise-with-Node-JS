
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
  }
  
  function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`); // Use string interpolation
  }
  
  let magicians_name = ["Harry Potter", "Hermione Granger", "Ronald Weasley"];
  
  let copy_magicians_names = magicians_name.slice(); // Create a copy
  
  // Modify the copied array to include "The Great " with their names
  let copy_great_magicians = make_great(copy_magicians_names);
  
  // Print the original magicians
  console.log("Original Magicians:");
  show_magicians(magicians_name);
  
  // Print the "Great" magicians
  console.log("\nThe Great Magicians:");
  show_magicians(copy_great_magicians);
  