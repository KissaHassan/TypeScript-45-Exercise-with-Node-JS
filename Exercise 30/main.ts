let Usernames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];

Usernames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`hello  ${oneUser}, would you like to see  a status report?`)
    } else{
        console.log(`hello ${oneUser}, thankyou for logging in again!`)
    }
})