import { ordenarTempo, filtrarCartoes } from '../src/data.js';

//Teste da função de ordenar tempo:
describe('odernarTempo', () => {
  it('testando Oldest to Newest', () => {
    const ordemSelecionada = 'Oldest to Newest';
    const arrayDeFilmes = [
      { release_date: "1986" }, 
      { release_date: "1987" }, 
      { release_date: "1985" }
    ];
    const arrayDeFilmesOrdenados = [{ release_date: "1985" }, { release_date: "1986" }, { release_date: "1987" }];
    expect(ordenarTempo(ordemSelecionada, arrayDeFilmes)).toEqual(arrayDeFilmesOrdenados);
  });
  it('testando Newest to Oldest', () => {
    
    const ordemSelecionada = 'Newest to Oldest';
    const arrayDeFilmes = [
      { release_date: "1986" }, 
      { release_date: "1987" }, 
      { release_date: "1985" }
    ];
    const arrayDeFilmesOrdenados = [{ release_date: "1987" }, { release_date: "1986" }, { release_date: "1985" }];
    expect(ordenarTempo(ordemSelecionada, arrayDeFilmes)).toEqual(arrayDeFilmesOrdenados);
  });
});

//Teste da função de filtrar cartões:
describe('filtrarCartoes', () => {
  it('Deve retornar apenas os filmes dirigidos por Hayao Miyazaki', () => {
    const diretorSelecionado = 'Hayao Miyazaki';
    const arrayDeFilmes = [
      { title: 'Castle in the Sky', director: 'Hayao Miyazaki' },
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki' },
      { title: 'Kiki\'s Delivery Service', director: 'Hayao Miyazaki' },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita' },
      { title: 'My Neighbors the Yamadas', director: 'Isao Takahata' },
    ];
    const arrayDeFilmesFiltrados = [
      { title: 'Castle in the Sky', director: 'Hayao Miyazaki' },
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki' },
      { title: 'Kiki\'s Delivery Service', director: 'Hayao Miyazaki' },
    ];
    expect(filtrarCartoes(diretorSelecionado, arrayDeFilmes)).toEqual(arrayDeFilmesFiltrados);
  });
});
