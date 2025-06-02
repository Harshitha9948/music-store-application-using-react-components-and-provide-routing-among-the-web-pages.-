import React from 'react'; 
const albums = [ 
    { id: 1, title: "Thriller", artist: "Michael Jackson", price: "₹999" }, 
    { id: 2, title: "Back in Black", artist: "AC/DC", price: "₹899" }, 
    { id: 3, title: "The Dark Side of the Moon", artist: "Pink Floyd", price: "₹1099" } 
]; 
 
function Store() {     return ( 
        <div> 
            <h2>Music Store</h2> 
            <ul> 
                {albums.map((album) => ( 
                    <li key={album.id}> 
                        <strong>{album.title}</strong> by {album.artist} - {album.price} 
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 
 
export default Store; 
