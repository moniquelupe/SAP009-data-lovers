import data from './data/ghibli/ghibli.js';
import { filtrarCartoes, ordenarTempo } from './data.js';

// Declarar a função printar cartões:
const printarCartoes = function (arrayTela) {
  document.getElementById("cartões").innerHTML = ""
  for (let index = 0; index < arrayTela.length; index++) { // a crase inicia a template string e também finaliza
    const cartao = `
    <div class="card">
      <img class="image" src="${arrayTela[index].poster}" alt="Poster do filme ${arrayTela[index].title}"/>
      <h2>${arrayTela[index].title}</h2> 
      <p>${arrayTela[index].release_date}</p>
      <p>${arrayTela[index].director}</p>
      <p class="card-description">${arrayTela[index].description}</p>
    </div>
  `;
    document.getElementById("cartões").innerHTML += cartao; // inclui no html 
  }
}
// Executar a função:
printarCartoes(data.films)
const diretores = document.getElementById("diretores")
diretores.addEventListener("change", function (event) {
  const ResultadoFiltrado = filtrarCartoes(event.target.value, data.films)
  //Cálculo agregado (calcula a porcentagem de filmes de cada diretor)
  document.getElementById("calculo-info").innerHTML = event.target.value + " realizou " + ResultadoFiltrado.length * 100 / data.films.length + "% dos filmes do Studio Ghibli."
  printarCartoes(ResultadoFiltrado) //printa na Tela a porcentagem de filmes de cada diretor
})

/* transformar o cáuculo agregado em uma função:
ResultadoFiltrado.length * 100 / data.films.length
*/

const timeline = document.getElementById("timeline-id")
timeline.addEventListener("change", function (event) {
  const ResultadoFiltrado = filtrarCartoes(diretores.value, data.films)
  const ResultadoOrdenado = ordenarTempo(event.target.value, ResultadoFiltrado);
  printarCartoes(ResultadoOrdenado);
})