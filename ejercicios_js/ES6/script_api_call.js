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

// Llamada a la API JSONplaceholder
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
  .catch((error) => console.error("Error fetching data:", error));

// Devuelve un [] de productos
function getProducts() {
  const url = "https://fakestoreapi.com/products?limit=10";
  return fetch(url).then((response) => response.json()) // Convertir a objeto [{},{},{},{}]
            //.then( data => console.log(data))
            .catch((error) => {
            console.error("Error fetching data from fakestoreapi:", error);
            });
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
  
    document.body.innerHTML = list;
  });


  function getAllBreeds(){
    // return fetch("https://dog.ceo/api/breeds/list/all")
        return fetch("./breeds_all.json") // para hacer pruebas "offline"
        .then(res=>res.json())
        .then(data => Object.keys(data.message))
        .catch(error=>console.error("Error fetching data: ",error))
  }
// Llamada a la función
  getAllBreeds().then(data => console.log(data))






