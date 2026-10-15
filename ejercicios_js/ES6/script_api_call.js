// Cómo trabajar con una API
// 1. Localizar la API que quieres usar
// 2. Leer la documentación de la API y averiguar los endpoints/rutas/url que quieres usar
// 3. Probarlas en POSTMAN u otro cliente HTTP
// 4. Hacer el código de tu app con JS asícrono: fetch(), then(), catch()
// 5. Por si nos quedamos sin peticiones, guardar desde el principio: copiar objeto de la llamada a la API, guardarlo en fichero local y hacer tus pruebas:

// fetch("./breeds_all.json")

// console.log(fetch("https://fakestoreapi.com/products/1"));

fetch("https://fakestoreapi.com/products") // return Promise
  .then((response) => response.json()) // convierte a JSON la respuesta - Promise
  .then((data) => console.log(data)); // usar los datos - Promise

function getAndRenderProducts() {
  const url = "https://fakestoreapi.com/products?limit=10";
  return fetch(url)
    .then((response) => response.json()) // Convertir a objeto
    .then((data) => {
      let container = "<section>";
      data.forEach((product) => {
        container += `<article>
                          <img src="${product.image}" alt="${product.title}">
                          <h1>${product.title}</h1>
                          <p>${product.description}</p>
                      </article>`;
      });
      container += "</section>";

      document.body.innerHTML += container;
      return container;
    })
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

// Llamada a la función
//   getAndRenderProducts().then((data) => console.log(data));

getAndRenderProducts();

/* Llamada a la API JSONplaceholder
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postsList = document.getElementById("posts-list");
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${post.title}: ${post.body}`;
      postsList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching data:", error)); */

// Devuelve un [] de productos
function getProducts() {
  const url = "https://fakestoreapi.com/products?limit=10";
  return (
    fetch(url)
      .then((response) => response.json()) // Convertir a objeto [{},{},{},{}]
      //.then( data => console.log(data))
      .catch((error) => {
        console.error("Error fetching data from fakestoreapi:", error);
      })
  );
}

// Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
console.log(getProducts()); // Esto no vale porque estamos trabajando con asincronía

getProducts().then((data) => console.log(data[0].title));

// Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
//Renderizar datos en el DOM. Utiliza template string para generar los nuevos elementos del DOM

getProducts().then((data) => {
  let list = "<ul>";
  data.forEach((product) => {
    list += `<li>${product.title} -- ${product.price}€</li>`;
  });
  list += "</ul>";

  document.body.innerHTML += list;
});

function getAllBreeds() {
  // return fetch("https://dog.ceo/api/breeds/list/all")
  return fetch("./breeds_all.json") // para hacer pruebas "offline"
    .then((res) => res.json())
    .then((data) => Object.keys(data.message))
    .catch((error) => console.error("Error fetching data: ", error));
}
// Llamada a la función
getAllBreeds().then((data) => console.log(data));

function getGitHubUserProfile(username) {
  // {} del usuario
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data: ", error));
}
//getGitHubUserProfile("Erikbmhub").then((data) => console.log(data));

//6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
function printGithubUserProfile(username) {
  return getGitHubUserProfile(username).then((data) => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<img src="${data.avatar_url}" alt="">
               <h1>${data.name}</h1>`
    );
    return { img: data.avatar_url, name: data.name || data.login };
  });
}
//printGithubUserProfile("Erikbmhub").then((data) => console.log(data));

// 7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:

function getAndPrintGitHubUserProfile(username) {
  return getGitHubUserProfile(username).then((data) => {
    return `<section>
                  <img src="${data.avatar_url}" alt="${data.name}">
                  <h1>${data.name}</h1>
                  <p>Public repos: ${data.public_repos}</p>
              </section>`;
  });
}

// getAndPrintGitHubUserProfile("octocat").then((resultado) => {
//   console.log(resultado);
//   document.body.innerHTML += resultado;
// });

// const getAllImagesByBreed = () => getAllImagesByBreed2("komondor");




btn.addEventListener("click", () => {
  
  const input = document.getElementById("BuscarUsuario");
  const btn = document.getElementById("btn");
  
  getAndPrintGitHubUserProfile(input.value)
      .then((data) => console.log(data));
});
