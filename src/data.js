// Função filtrar cartões:
export const filtrarCartoes = function (diretorSelecionado, filtrarArray) {
  const diretorFiltrado = [];
  for (const i of filtrarArray) {
    if (i.director.toLowerCase() === diretorSelecionado.toLowerCase()) {
      diretorFiltrado.push(i);
    }
  } return diretorFiltrado
}

// Função de ordenar por data de lançamento do filme:
export const ordenarTempo = (ordemSelecionada, arrayDeFilmes) => {
  const arrayDeFilmesCopy = [...arrayDeFilmes];
  arrayDeFilmesCopy.sort(compareNumbers);
  function compareNumbers(a, b) {
    return Number(a.release_date) - Number(b.release_date);
  }
  if (ordemSelecionada === "Oldest to Newest") {
    return arrayDeFilmesCopy;
  } else {
    return arrayDeFilmesCopy.reverse();
  }
}
