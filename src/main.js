import data from './data/ghibli/ghibli.js';

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
  filtrarCartoes(event.target.value)
})

// Declarar função filtrar cartões:
const filtrarCartoes = function (diretorSelecionado) {
  const arrayDeFilmes = data.films
  const diretorFiltrado = [];
  for (let i of data.films) {
    if (i.director.toLowerCase() === diretorSelecionado.toLowerCase()) {
      diretorFiltrado.push(i);
    }
  }
  printarCartoes(diretorFiltrado)
}

const timeline = document.getElementById("timeline-id")
timeline.addEventListener("change", function (event) {
  ordenarTempo(event.target.value)
})

// Usar método sort
const ordenarTempo = function (ordemSelecionada) {
  const arrayDeFilmes = data.films;
  const arrayDeFilmesCopy = [...arrayDeFilmes];
  arrayDeFilmesCopy.sort(compareNumbers);
    function compareNumbers(a, b) {
      return Number(a.release_date) - Number(b.release_date);
    } 
  if (ordemSelecionada === "Antigo para recente") {
      console.log(arrayDeFilmesCopy)
  } else { 
      console.log(arrayDeFilmesCopy.reverse())
  }
  printarCartoes(arrayDeFilmesCopy)
}

// próximos passos: 
// 1. ajustar a função pro data.js (ler sobre funcoes puras pra entender pq tá separando o código pro data.js , entender
// o conceito de funções, parâmetros)
// 2. fazer o cálculo agregado