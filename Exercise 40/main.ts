// defining the function "make_album"
function make_album(artist_name:string , album_title:string , tracks?:number ){
let album: {artist:string , title:string, tracks?:number} = {
    artist: artist_name,
    title: album_title,

};
if(tracks !== undefined){
    album.tracks= tracks;
}

return album; 
}

//calling functions with different values
 let album1= make_album("Kissa", "Album title 1" );
 let album2= make_album("Ghanya", "Album title 2" );
 let album3= make_album("Inaya", "Album title 3" );

 console.log(album1, album2, album3);

 console.log(album1);

 console.log(album2);
 
 console.log(album3);
 