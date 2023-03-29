import data from './data/ghibli/ghibli.js';
import { filtrarCartoes, ordenarTempo } from './data.js';

// Declarar a função printar cartões:
const printarCartoes = function (arrayTela) {
  document.getElementById("cartões").innerHTML = ""
  for (let index = 0; index < arrayTela.length; index++) { // a crase inicia a template string e também finaliza
    let cartao = `
    <div class="card">
      <img class="image" src="${arrayTela[index].poster}" alt="Poster do filme ${arrayTela[index].title}"/>
      <h2>${arrayTela[index].title}</h2>
      <p>${arrayTela[index].description}</p>
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
  printarCartoes(ResultadoFiltrado)
})

const timeline = document.getElementById("timeline-id")
timeline.addEventListener("change", function (event) {
  const ResultadoOrdenado = ordenarTempo(event.target.value, data.films);
  printarCartoes(ResultadoOrdenado);
})

/* próximos passos: 
 1. ajustar a função filtrar cartões e método sort pro data.js (ler sobre funcoes puras pra entender pq tá separando o código pro data.js , entender
 o conceito de funções, parâmetros, retorno)
2. fazer o cálculo agregado
*/