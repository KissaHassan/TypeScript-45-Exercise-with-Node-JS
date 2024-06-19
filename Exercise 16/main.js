//creating a Guestlist array
var Guestlist = ["hooriya", "Maria", "Adan", "Shifa"];
//making variable for those guest who can't appear
var dontCome = Guestlist[0];
// printing the guest who is appearing
console.log(dontCome, "Cannot appear ");
//Add or remove value from the array
Guestlist.splice(0, 1, "Aamir");
//printing the message for bigger table
console.log("Good news!, We have  found a bigger table for the dinner");
//adding value at start
Guestlist.unshift("Abeera");
//adding a value at ending index of array
Guestlist.push("Zain");
//Get a middle index of our guestlist array 
var middleIndex = Math.floor(Guestlist.length / 2);
//Adding a new Guest to middle index of array
Guestlist.splice(middleIndex, 0, "Manahil");
console.log("Updated list of our guests");
//sending one by one invitation
Guestlist.forEach(function (oneguest) { return console.log(" Salam".concat(oneguest, " , would you like to dinner with me ?")); });
