var guestlist = ["Inaya", "Maryam", "Ghazal", "Mahnoor"];
var dontCome = guestlist[1];
console.log(dontCome, "Can't appear ");
guestlist.splice(1, 1, "Aiza");
guestlist.forEach(function (guest) { return console.log("Salam, ".concat(guest, ", Would you like to dinner with me?")); });
