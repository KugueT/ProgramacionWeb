
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
   let imagen2= item.getElementsByTagName("img")[1]
   imagen.setAttribute("src",pokemon.sprites.front_default)
   imagen2.setAttribute("src",pokemon.sprites.back_default)

   let nombre= item.getElementsByTagName ("p")[0]
    let id= item.getElementsByTagName ("p")[1]
    let tipo = item.getElementsByTagName ("p")[2]
      let tipo2 = item.getElementsByTagName ("p")[3]

   nombre.textContent = pokemon.name
   id.textContent = pokemon.id
   tipo.textContent  = pokemon.types[0].type.name
   tipo2.textContent  = pokemon.types[1].type.name


   
     

  
}



