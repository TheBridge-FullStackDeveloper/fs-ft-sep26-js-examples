console.log("hola mundo");

// https://rickandmortyapi.com/api/character/2

const urlApi = "https://rickandmortyapi.com/api/character/2";

fetch(urlApi)
  .then((res) => res.json())
  .then((data) => {
    // extraer el tercer episodio
    const url_episodio_3 = data.episode[2];

    fetch(url_episodio_3)
      .then((res) => res.json())
      .then((data) => {
        console.log("Ha terminado la extracción de datos del episodio");

        const title = data.name;
        const date = data.air_date;

        console.log(`
            - Capítulo:${title}
            - Fecha de emisión:${date}`);
      });
  });

/* 
// No funciona. Se intenta ejecutar como código secuencial y falla

const episodio = fetch(urlApi)
.then(res=>res.json())
.then(data => {
    // extraer el tercer episodio
    const url_episodio_3 = data.episode[2];
    return url_episodio_3;
})

fetch(episodio)
.then(res=>res.json())
.then(data => {
    console.log("Ha terminado la extracción de datos del episodio");

    const title = data.name;
    const date = data.air_date;

    console.log(`
        - Capítulo:${title}
        - Fecha de emisión:${date}`);    
}) */

const rickURL = "https://rickandmortyapi.com/api/character/1";
const mortyURL = "https://rickandmortyapi.com/api/character/2";

// No se sabe cual terminará antes
console.time("***timer1***");
fetch(rickURL)
  .then((res) => res.json())
  .then((rickData) => {
    console.log("HA TERMINADO RICK");
    console.log(rickData);
    console.timeEnd("***timer1***");
  });

console.time("***timer2***");
fetch(mortyURL)
  .then((res) => res.json())
  .then((mortyData) => {
    console.log("HA TERMINADO MORTY");
    console.log(mortyData);
    console.timeEnd("***timer2***");
  })
  .catch((error) => console.log(error));

// Ejecutar varias promesas
// Promise.all()
// ["ana","pepe","octocat"]
Promise.all([
  fetch(rickURL).then((res) => res.json()),
  fetch(mortyURL).then((res) => res.json()),
]).then((data) => console.log(data));

// Ejemplo con async/await
async function showEpisode() {
  const url = "https://rickandmortyapi.com/api/character/2";
  try {
    // Inicia el "cargando...." (mostrar mensaje o spinner)
    document.querySelector("#spinner").classList.toggle("hide");

    // variante 2
    document.querySelector("#spinner2").innerHTML += `        
        <p>cargando...</p>
        <img src="./loading.webp" alt="morty">`;

    // Llamada 1
    const res = await fetch(url);
    const data = await res.json();
    const url_episodio_3 = data.episode[2]; // URL episodio 3

    // Llamada 2
    const res2 = await fetch(url_episodio_3);
    const episode_data = await res2.json(); // datos del episodio

    const title = episode_data.name;
    const date = episode_data.air_date;

    const resultado = `Capítulo:${title}. Fecha de emisión:${date}`;

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    // Quitar spinner
    document.querySelector("#spinner").classList.toggle("hide");
    document.querySelector("#spinner2").innerHTML = "";

    return resultado;
  } catch (error) {
    console.error("error. Hubo algun problema: " + error.message);
  }
}

showEpisode().then((data) => {
  console.log(data);
  document.getElementById("resultados").innerHTML += data;
});

// const urlApi = "https://rickandmortyapi.com/api/character/2";

// fetch(urlApi)
// .then(res=>res.json())
// .then(data => {
//     // extraer el tercer episodio
//     const url_episodio_3 = data.episode[2];

//     fetch(url_episodio_3)
//     .then(res=>res.json())
//     .then(data => {
//         console.log("Ha terminado la extracción de datos del episodio");

//         const title = data.name;
//         const date = data.air_date;

//         console.log(`
//             - Capítulo:${title}
//             - Fecha de emisión:${date}`);
//     })
// })
