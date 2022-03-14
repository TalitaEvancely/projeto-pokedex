/* 
Quando clicar no pokémon da listagem temos que ocartão do pokémon aberto e mostrar o cartão selecionado na listagem.
Para isso vamos precisar trabalharcom 2 elementos:
- listagem
-cartão do pokémon

Precisamos criar 2 variaveis JS para trabalhar com os elementos da tela.

Vamos precisar trabalhar com um evento de crique feito pelo usuário na listagem pokémon.

1 - Remover a classe aberto só do cartão que está aberto.
2 - Ao clicar em um pokémon da listagem pegamos o id dele para saber qual cartão mostrar.
3- Remover a classe 'ativo' que marca o pokémon selecionado.
4 - Adionar a classe ativo no item selecionado.
*/

/*Precisamos criar 2 variaveis JS para trabalhar com os elementos da tela.
querySelectorALL busca todos os elementos
*/

 const listaSelecaoPokemons = document.querySelectorAll('.pokemon') 
 const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

 listaSelecaoPokemons.forEach(pokemon => {
     //Vamos precisar trabalhar com um evento de crique feito pelo usuário na listagem pokémon.
     pokemon.addEventListener('click',() => {
     //1 - Remover a classe aberto só do cartão que está aberto.
     const cartaoPokemonAberto = document.querySelector('.aberto')
     cartaoPokemonAberto.classList.remove ('aberto')

     //2 - Ao clicar em um pokémon da listagem pegamos o id dele para saber qual cartão mostrar.
    const idPokemonSelecionado =  pokemon.attributes.id.value

    const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
    cartaoPokemonParaAbrir.classList.add('aberto')
    //3- Remover a classe 'ativo' que marca o pokémon selecionado.
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

// 4 - Adionar a classe ativo no item selecionado.
 const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
 pokemonSelecionadoNaListagem.classList.add('ativo')
     })
 })




