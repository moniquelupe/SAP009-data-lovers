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
timeline.addEventListener("change", function (event){
  ordenarTempo(event.target.value)
})

// const ordenarTempo = function (ordemSelecionada) {
  // próximo passo: usar método sort pra criar essa função que vai entrar aqui
 // const arrayDeFilmes = data.films;
 // if (ordemSelecionada = "Antigo para recente") {
 //   arrayDeFilmes.sort(a,b)
    
 // }
   
// }

