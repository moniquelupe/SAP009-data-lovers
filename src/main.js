import data from './data/ghibli/ghibli.js';

// Declarar a função printar cartões:
const printarCartoes = function () {
  document.getElementById("cartões").innerHTML = ""
  for (let index = 0; index < 20; index++) { // a crase inicia a template string e também finaliza
    let cartao = `
    <div class="card">
      <img class="image" src="${data.films[index].poster}" alt="Poster do filme ${data.films[index].title}"/>
      <h2>${data.films[index].title}</h2>
      <p>${data.films[index].description}</p>
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
    if (i.director.toLowerCase() === diretorSelecionado.toLowerCase()) {
      diretorFiltrado.push(i);
    }
  }
  let cartoesFiltrados = "";
  for (let i = 0; i < diretorFiltrado.length; i++) {
    cartoesFiltrados += `
    <div class="card">
      <img class="image" src="${diretorFiltrado[i].poster}" alt="Poster do filme ${diretorFiltrado[i].title}"/>
      <h2>${diretorFiltrado[i].title}</h2>
      <p>${diretorFiltrado[i].description}</p>
    </div>
    `;
  }
  document.getElementById("cartões").innerHTML = cartoesFiltrados;
}
