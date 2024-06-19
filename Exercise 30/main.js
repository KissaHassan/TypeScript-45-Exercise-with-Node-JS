var Usernames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
Usernames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("hello  ".concat(oneUser, ", would you like to see  a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thankyou for logging in again!"));
    }
});
