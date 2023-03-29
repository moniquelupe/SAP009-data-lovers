// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// Declarar função filtrar cartões:
export const filtrarCartoes = function (diretorSelecionado, filtrarArray) {
  const diretorFiltrado = [];
  for (let i of filtrarArray) {
    if (i.director.toLowerCase() === diretorSelecionado.toLowerCase()) {
      diretorFiltrado.push(i);
    } 
  } return diretorFiltrado
}

export const ordenarTempo = (ordemSelecionada, arrayDeFilmes) => {
  const arrayDeFilmesCopy = [...arrayDeFilmes];
  arrayDeFilmesCopy.sort(compareNumbers);
  function compareNumbers(a, b) {
    return Number(a.release_date) - Number(b.release_date);
  } 
  if (ordemSelecionada === "Antigo para recente") {
    return arrayDeFilmesCopy;
  } else { 
    return arrayDeFilmesCopy.reverse();
  }
}
