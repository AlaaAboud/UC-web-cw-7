let movie1 = {
    name:"Avengers",
    img:"https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA.jpg?format=jpg&width=1440"
}

let movie2 = {
    name:"Harry potter",
    img:"https://w0.peakpx.com/wallpaper/284/109/HD-wallpaper-harry-potter-houses-harry-potter-hogwarts.jpg"
}

let movie3 = {
    name:"Home alone",
    img:"https://m.media-amazon.com/images/I/51-cmYVd9QL._SX300_SY300_QL70_FMwebp_.jpg"
}

let movies = []
movies.push(movie1 , movie2 ,movie3);

let movieContainer = document.getElementById("container");

movies.forEach((movie)=>{
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.img}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;
})
movies.forEach()

