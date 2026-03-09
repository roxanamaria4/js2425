
console.log(movies);
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(movies, searchTerm = '');
function showMovies(results, searchTerm = '') {
    if (searchTerm !== '') {
        alert(searchTerm);
        results = results.filter(function (element) {
            // return element.title == searchTerm;
            return (element.title.toLowerCase().indexOf(searchTerm) > -1);
        });
    }
    results.forEach(element => {
        const el = document.createElement('div');
        // const image = document.createElement('img');
        // const text = document.createElement('h2');

        // text.innerHTML = `${element.title}`;
        // image.src = IMGPATH + element.poster_path;
        // el.appendChild(image);
        // el.appendChild(text);
        //main.appendChild(el);
        el.innerHTML = `
        <div class="col"> <div class="card shadow-sm"> 
        <img  class="bd-placeholder-img card-img-top" height="225"  role="img" width="100%"  src="${IMGPATH + element.poster_path}" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div> <small class="text-body-secondary">9 mins</small> </div> </div> </div> </div>
        `
       main.appendChild(el);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(movies, searchTerm.toLowerCase());
        search.value = "";
    }
});
