console.log("hola mundo!");
console.log("**********Ejercicio 1**********");

// ID

// Lectura
console.log(document.getElementById("titulo"));
console.log(document.getElementById("titulo").innerHTML);

console.log(document.getElementById("titulo").innerText);

// Escritura

// innerText
document.getElementById("titulo").innerText = "<span>Queso</span>";
console.log(document.getElementById("titulo").innerText);

// innerHTML
document.getElementById("titulo").innerHTML = "<span>Cafe</span>";
console.log(document.getElementById("titulo").innerText);
console.log(document.getElementById("titulo").innerHTML);

console.log("**********Ejercicio 2**********");

const p = document.getElementById("parrafo");

// Cambiar estilos de un elemento
p.style.color = "blue";
p.style.backgroundColor = "aquamarine";
p.style.fontSize = "20px";

// Query Selector

console.log(document.querySelector("#titulo").innerHTML);

console.log(document.querySelector("article > p").innerHTML);

console.log(document.querySelector("section > :nth-child(2)").innerHTML);

// QuerySelectorAll
console.log(document.querySelectorAll("p.frases"));
console.log(document.querySelectorAll("p.frases")[0]);

console.log(document.querySelectorAll("p.frases")[0].innerHTML);

console.log(document.querySelectorAll("p.frases")[1].innerHTML);

const frases = document.querySelectorAll("p.frases"); // frases [p1,p2,p3,.....]

for (let i = 0; i < frases.length; i++) {
  console.log("Elemento: " + frases[i].innerHTML);
}

console.log("**********Ejercicio 3**********");

const boton = document.getElementById("boton");

//params: evento, acción
// Función anónima

boton.addEventListener("click", function () {
  // Lógica de lo que quiero que ocurra
  alert("hola!!");

  // Cambia el texto de un p con innerText.
  document.querySelector("#cambioParrafo").innerText =
    "Vamos al coffee".toUpperCase();

  // Cambia el color de fondo del body.
  document.body.style.backgroundColor = "#34ADA0";
});

console.log("**********Ejercicio 3 bis**********");

const boton2 = document.getElementById("boton2");

let editado = false; // Flag que te dice si está pintado

boton2.addEventListener("click", function () {
  if (editado == false) {
    document.querySelector("#cambioParrafo2").innerText =
      "Vamos por tostadas de tomate".toUpperCase();
    document.body.style.backgroundColor = "aquamarine";

    editado = true;
  } else {
    // editado = true // Devuelve al estado inicial;
    document.querySelector("#cambioParrafo2").innerText =
      "Yo voy a cambiar, lo prometo 2";
    document.body.style.backgroundColor = "";

    editado = false;
  }
});

console.log("**********Ejercicio 4**********");

// Función externa
function cambioImagen() {
  alert("Cambiando IMAGEN!");

  document.querySelector("#imagen").src =
    "https://cdn.sanity.io/images/5vm5yn1d/pro/41c7e7ce298604b0801fc2b1b76371a47e9ebb83-950x633.jpg";

  // document.querySelector("#imagen").setAttribute("src","https://cdn.sanity.io/images/5vm5yn1d/pro/41c7e7ce298604b0801fc2b1b76371a47e9ebb83-950x633.jpg")
}

const boton3 = document.getElementById("cambioImagen");
boton3.addEventListener("click", cambioImagen);

console.log("**********Ejercicio 5**********");

const div1 = document.getElementById("mouse");

// transition: all .5s linear;

div1.style.transition = "all .5s ease-in";

div1.addEventListener("mouseover", function () {
  div1.style.backgroundColor = "pink";
});

div1.addEventListener("mouseout", function () {
  div1.style.backgroundColor = "red";
});

console.log("**********Ejercicio 6**********");

const listaP = document.querySelectorAll(".frases");

for (let i = 0; i < listaP.length; i++) {
  const p = listaP[i]; // párrafo actual
  console.log(p);

  // añade listener al p
  p.addEventListener("click", function () {
    p.innerHTML = p.innerHTML.toUpperCase();
  });
}

console.log("**********Ejercicio 7**********");
const enlace = document.getElementById("enlace");

enlace.addEventListener("click", function (event) {
  event.preventDefault(); // bloqueo/congela el comportamiento normal
  alert("¡No puedes salir!");
  document.querySelector("#msg").innerText = "¡No puedes salir!";
});

console.log("**********Ejercicio 8**********");

const h2 = document.querySelector("article > h2");
const p1 = document.querySelector("h2 + p"); // article > p
const img = document.querySelector("article > img");

h2.addEventListener("click", function () {
    h2.innerText = "Hechizo lanzado"
});

p1.addEventListener("click", function () {
    p1.style.color = "blue";
    p1.style.backgroundColor = "yellow";
});

img.addEventListener("click", function () {
    img.src = "https://cdn.sanity.io/images/5vm5yn1d/pro/41c7e7ce298604b0801fc2b1b76371a47e9ebb83-950x633.jpg";
});
