const btnGetPelis = document.querySelector(".get-pelis")
const container = document.querySelector(".container");
const inputsearch = document.querySelector(".text-search");
const urlPelis = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";


btnGetPelis.onclick = async () => {
  const texto = inputsearch.value;
  const respuesta = await fetch (urlPelis);
  const data = await respuesta.json();
  const moviesFiltradas = data.entries.filter(
    (pelicula) => pelicula.title.toLowerCase() === texto.toLowerCase()
  );

  readPelis(moviesFiltradas);
};

btnGetPelis.onclick = async function(){
  const respuesta = await fetch (urlPelis);
  const data = await respuesta.json();

  readPelis(data.entries);
};


function readPelis(peliculas) {
  container.innerHTML = "";
  peliculas.forEach((pelicula) => {
    container.innerHTML += `<div class="card">
     <img src=${pelicula.images.posterArt.url} alt=""/>
     <h4>${pelicula.title}</h4>
     <p> ${pelicula.description} </p>
     <h5>${pelicula.programType}</h5>
     <h5>${pelicula.releaseYear}</h5>
     </div>
     `;
  });
}


