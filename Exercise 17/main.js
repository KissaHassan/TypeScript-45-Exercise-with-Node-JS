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
//inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table is already full of other guest I can invite only two Guest to dinner with me");
//removing the guest reducing to 2
while (Guestlist.length > 2) {
    var removedGuest = Guestlist.pop();
    console.log("Sorry , ".concat(removedGuest, " I cant invite you to dinner"));
}
//telling two guests that they are still invited
console.log("Invitation to the last two guests");
Guestlist.forEach(function (lasttwo) { return console.log(" Luckily ".concat(lasttwo, " you are still invited to my dinner party!")); });
//Removing last two Guests from the list
Guestlist.pop();
Guestlist.pop();
console.log("Empty List", Guestlist);
