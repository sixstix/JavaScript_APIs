console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");

let searchBtn = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let imageEle = document.querySelector("#imageContainer > img");
let feedBackEle = document.querySelector("#feedBack");

const giphyUrl = "https://api.giphy.com/v1/gifs/translate";
const giphyKey = "mkC2rJ3X1J8V5195ycfaoEnpWY3BfN59";

searchBtn.addEventListener("click", () => {
    fetch(`${giphyUrl}?api_key=${giphyKey}&s=${searchInput.value}`)
        .then((res) => res.json())
        .then((body) => {
        imageEle.src = body.data.images.original.url;
        searchInput.value = "";
        feedBackEle.textContent = "";
        })    
        .catch((err) => {
            console.log(err);
            feedBackEle.textContent = err.message;
        })
    })
        
        
    
    


