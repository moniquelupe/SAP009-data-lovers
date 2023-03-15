import data from './data/ghibli/ghibli.js';

// Declarar a função printar cartões:
const printarCartoes = function () {
  document.getElementById("cartões").innerHTML = ""
  for (let index = 0; index < 20; index++) { // a crase inicia a template string e também finaliza
    let cartao = `
    <div class="card">
      <h2>${data.films[index].title}</h2>
      <p>Informações sobre o filme:${data.films[index].description}</p>
      <img class="image" src="${data.films[index].poster}" alt="Poster do filme ${data.films[index].title}"/>
    </div>
  `;
    document.getElementById("cartões").innerHTML += cartao; // inclui no html 
  }
}
// Executar a função:
printarCartoes()
const diretores = document.getElementById("diretores")
diretores.addEventListener("change", function (event) {
  filtrarCartoes(event.target.value)
})

// Declarar função filtrar cartões:
const filtrarCartoes = function (diretorSelecionado) {
  const arrayDeFilmes = data.films
  const diretorFiltrado = [];
  for (let i of data.films) {
    if (i.director.toLocaleLowerCase() === diretorSelecionado.toLocaleLowerCase()) {
      diretorFiltrado.push(i);
    }
  }
}
