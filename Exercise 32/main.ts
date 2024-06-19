//Array of Current users
let current_users = ["Usman", "ali", "Haniya", "Zain", "Fatima"]


//Array of New Users
let new_users = ["Hamza", "Ayesha", "Ali", "Fatima", "Sara"]

//loop through new users to check for usernames availability
new_users.forEach(new_one_user => {
    
    //making a condition for username for username already taken
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === 
    new_one_user.toLowerCase())

//print different messages using if else statement
    if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This Username ${new_one_user} is available`)
}
}) 
