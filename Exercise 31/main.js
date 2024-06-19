var usernames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
if (usernames.length === 0) {
    console.log("Your Array is Empty we need to find some users!");
}
else {
    usernames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello  ".concat(oneUser, ", would you like to see  a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thankyou for logging in again!"));
        }
    });
}
