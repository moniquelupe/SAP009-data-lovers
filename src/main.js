import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log(data.studio);
console.log(data.films[0].title);
for (let index = 0; index < 20; index++) { // a crase inicia a template string e também finaliza
  let cartao = `
    <div class="card">
      <h2>${data.films[index].title}</h2>
      <p>Informações sobre o filme:${data.films[index].description}</p>
      <img class="image" src="${data.films[index].poster}" alt="Poster do filme ${data.films[index].title}"/>
    </div>
  `;
  console.log(cartao);
  document.getElementById("cartões").innerHTML += cartao; // inclui no html 
}


// outra forma de fazer -> data.filmes.forEach
// template string ->`<div> ${data.films[index].title}` substitui -> "<div>"+ variavel + "<div>"
