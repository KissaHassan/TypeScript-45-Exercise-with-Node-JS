
function create_car(manufacturer, model, ...options) {
    let car = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Adding additional options to the car object
    options.forEach(option => {
      let [key, value] = option.trim().split(":"); // Trim option string first
  
      // Handle potential missing values or multiple colons
      if (value) {
        car[key.trim()] = value.trim(); // Trim both key and value
      } else {
        car[key.trim()] = null; // Assign null for missing value
      }
    });
  
    return car;
  }
  
  // Function to create the car object
  let my_car = create_car("Peugeot", 206, "color: black", "sunroof: False");
  
  // Printing variable to ensure the storage of information
  console.log(my_car);
  