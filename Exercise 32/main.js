//Array of Current users
var current_users = ["Usman", "ali", "Haniya", "Zain", "Fatima"];
//Array of New Users
var new_users = ["Hamza", "Ayesha", "Ali", "Fatima", "Sara"];
//loop through new users to check for usernames availability
new_users.forEach(function (new_one_user) {
    //making a condition for username for username already taken
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() ===
        new_one_user.toLowerCase(); });
    //print different messages using if else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
