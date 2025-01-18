// const API_KEY = "api_key=2693dd26231847a1a95cb8ea3c4f5a77";
const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?${API_KEY}`
console.log(TOP_RATED_URL);

// const getMovie = (url)=>{
//     fetch(url)
//     .then((response)=> (response.json())) //parsing
//     .then((data)=>{console.log(data)})
//     .catch((error)=>{alert(error)}) //u can also use console.log(error)
// };

const getMovie = async(url) =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showMovies(data.results);

    } catch(error){
        console.log(error);
    
    }
}

getMovie(TOP_RATED_URL);

const imageContainer =  document.querySelector(".imageContainer");


const reduceOverview = (overview)=>{
        if (overview.length > 200){
            return overview.substring(0,200) + "...";
        }
        return overview;
    }


const showMovies = (movies) => {
    imageContainer.innerHTML = "";
    movies.forEach((movie) =>{
        const{title, overview, poster_path, vote_average}= movie;
        console.log(title, overview, poster_path, vote_average);
        // const movieCard = document.querySelector(".imageCard");
        //create a new div of imageCard
        const movieCard = document.createElement('div');
        movieCard.classList.add("imageCard");
        movieCard.innerHTML = `
        <img src="${IMAGE_URL}${poster_path}" alt="" />
          <div class="titleRatingFlex">
            <p>${title}</p>
            <p> <span class="fa fa-star"></span>${vote_average}</p>
          </div>
          <p>
            ${reduceOverview(overview)}
          </p>
        `

        imageContainer.appendChild(movieCard);
    } );

 

    const search = async(url) =>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            showMovies(data.results);
        } catch (error) {
            console.log(error);
        }

    }

    const searchMovies = document.querySelector("#searchBox");

    searchMovies.addEventListener("keyup",(event)=>{
        const searchValue = event.target.value;
        const searchUrl = `${SEARCH_API}&query=${(searchValue)}`;
        search(searchUrl);
    })


}
