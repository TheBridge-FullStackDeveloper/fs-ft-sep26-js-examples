console.log("hola mundo!");

import pokemons from "./pokemons.js";

console.log(pokemons);

// 4. Pintar en pantalla


const fuego = document.getElementById("fuego");
const agua = document.getElementById("agua");
const planta = document.getElementById("planta");
const electrico = document.getElementById("electrico");
const normal = document.getElementById("normal");

// forEach -> bucle para recorrer Arrays
// 1 bucle + 5 condiciones
/*
pokemons.forEach((pokemon_item) => {
  console.log(pokemon_item);
  
  // Pintar el LI en el DOM
  const card = `
                <li class="card">
                    <header class="cardHeader">
                        <h3>Nombre: ${pokemon_item.nombre}</h3>
                        <p>HP: ${pokemon_item.hp}</p>
                        <p>Ataque: ${pokemon_item.ataque}</p>

                    </header>
                    <div class="image">
                        <img src="${pokemon_item.imagen_front}" alt="${pokemon_item.nombre}">
                    </div>
                    <p>Tipo: ${pokemon_item.tipo}</p>
                </li>
            `;

    if(pokemon_item.tipo === "Fuego")
        fuego.innerHTML += card; // concatena al DOM
    else if (pokemon_item.tipo === "Agua")
        agua.innerHTML += card;
    else if (pokemon_item.tipo === "Planta")
        planta.innerHTML += card;
    else if (pokemon_item.tipo === "Eléctrico")
        electrico.innerHTML += card;
    else if (pokemon_item.tipo === "Normal")
        normal.innerHTML += card;
});
*/

// Datos filtrados por tipo
// type: "Fuego", "Agua", etc...
// return array_filtrado de pokemons de un tipo
function getPokemonsByType(type){
    let filtrados = []; 
    // pokemons --> array inicial
    for (let i = 0; i < pokemons.length; i++) {
        if(pokemons[i].tipo === type){
            filtrados.push(pokemons[i]);
        }
    }
    return filtrados;
}
console.log("***Pokemons filtrados***");

console.log(getPokemonsByType("Agua"));
console.log(getPokemonsByType("Fuego"));


// Pintar pokemons en pantalla
// renderPokemons
// parámtro: lista de pokemons

function renderPokemons(pokelist){

    pokelist.forEach((pokemon_item) => {
        console.log(pokemon_item);
        
        // Pintar el LI en el DOM
        const card = `
                      <li class="card">
                          <header class="cardHeader">
                              <h3>Nombre: ${pokemon_item.nombre}</h3>
                              <p>HP: ${pokemon_item.hp}</p>
                              <p>Ataque: ${pokemon_item.ataque}</p>
      
                          </header>
                          <div class="image">
                              <img src="${pokemon_item.imagen_front}" alt="${pokemon_item.nombre}">
                          </div>
                          <p>Tipo: ${pokemon_item.tipo}</p>
                      </li>
                  `;
      
          if(pokemon_item.tipo === "Fuego")
              fuego.innerHTML += card; // concatena al DOM
          else if (pokemon_item.tipo === "Agua")
              agua.innerHTML += card;
          else if (pokemon_item.tipo === "Planta")
              planta.innerHTML += card;
          else if (pokemon_item.tipo === "Eléctrico")
              electrico.innerHTML += card;
          else if (pokemon_item.tipo === "Normal")
              normal.innerHTML += card;
      });

}

// renderPokemons(getPokemonsByType("Agua"));
// renderPokemons(getPokemonsByType("Eléctrico"));
// renderPokemons(getPokemonsByType("Fuego"));
// renderPokemons(getPokemonsByType("Fuego"));
// renderPokemons(getPokemonsByType("Fuego"));
// renderPokemons(getPokemonsByType("Fuego"));
// renderPokemons(getPokemonsByType("Fuego"));
// renderPokemons(getPokemonsByType("Normal"));
// renderPokemons(getPokemonsByType("Planta"));

renderPokemons(pokemons);

