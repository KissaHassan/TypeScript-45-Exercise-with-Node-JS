var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making an array of countries and printing in its orginal order
var countriestoVisit = [
    "China", "Turkey", "Denmark", "Brazil", "Argentina"
];
console.log("Original Order", countriestoVisit);
//making an array of countries and printing it in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", __spreadArray([], countriestoVisit, true).sort());
//still in original order
console.log("Still in original order:", countriestoVisit);
//printing array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:", __spreadArray([], countriestoVisit, true).reverse());
//Show that your array is still in its original order by printing it.
console.log("Still in original order:", countriestoVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original Array Reversed:", countriestoVisit.reverse());
//Reversing the order of list again by Printing the list to show it’s back to its original order.
console.log("Back to Original Order:", countriestoVisit.reverse());
//Sorting array in alphabetical order and Printing the array to show that its order has been changed.
console.log("Sorted in Alphabetical order:", countriestoVisit.sort());
//Bringing it back to Original Order Again
console.log("Original Array Reversed:", countriestoVisit.reverse());
