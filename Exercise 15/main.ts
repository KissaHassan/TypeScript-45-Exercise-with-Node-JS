let guestlist = [ "Inaya", "Maryam" , "Ghazal", "Mahnoor"]

let dontCome = guestlist[1]

console.log(dontCome, "Can't appear ");

guestlist.splice(1, 1 ,"Aiza");

guestlist.forEach(guest => console.log (`Salam, ${guest}, Would you like to dinner with me?`));
