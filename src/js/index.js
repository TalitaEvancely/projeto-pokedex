/* 
Quando clicar no pokémon da listagem temos que ocartão do pokémon aberto e mostrar o cartão selecionado na listagem.
Para isso vamos precisar trabalharcom 2 elementos:
- listagem
-cartão do pokémon

Precisamos criar 2 variaveis JS para trabalhar com os elementos da tela.

Precisamos criar 2 variaveis JS para trabalhar com os elementos da tela.
querySelectorALL busca todos os elementos
*/

 const listaSelecaoPokemons = document.querySelectorAll('.pokemon') 
 const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

 listaSelecaoPokemons.forEach(pokemon => {
    
     pokemon.addEventListener('click',() => {
   
     const cartaoPokemonAberto = document.querySelector('.aberto')
     cartaoPokemonAberto.classList.remove ('aberto')

   const idPokemonSelecionado =  pokemon.attributes.id.value

    const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
    cartaoPokemonParaAbrir.classList.add('aberto')
 
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')


 const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
 pokemonSelecionadoNaListagem.classList.add('ativo')
     })
 })




