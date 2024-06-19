function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with the following items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n Now Enjoy your Sandwich yummm");
}
makesandwich("Chicken", "Cheese", "Mayo Garlic Sauce", "Tomatoes", "Ketchup");
makesandwich("Egg", "Bread", "salad leaves");
makesandwich("Mince", "Mozeralla Cheese", "Chedder Cheese", " Bread", " shezwan sauce", "peproni");
