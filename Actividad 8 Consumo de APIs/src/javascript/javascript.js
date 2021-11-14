

   function consultarPokemon(id,num){
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .then(function (response){
      response.json()
      .then(function(pokemon){
         crearpokemon(pokemon,num)
           
       }) 
   })
}
   let lista = document.getElementById("listaPokemon");
   function consultarpokemon1(){
      var buscarp = document.getElementById("buscar").value;
  
     consultarPokemon(buscarp,1)
   }

function crearpokemon(pokemon,num){

   let item = lista.querySelector(`#pokemon-${num}`)
   let imagen= item.getElementsByTagName("img")[0]
   imagen.setAttribute("src",pokemon.sprites.front_default)
   let nombre= item.getElementsByTagName ("p")[0]
    let tipo= item.getElementsByTagName ("p")[1]
   nombre.textContent = pokemon.name
   tipo.textContent = pokemon.stats
   console.log(tipo)
}


