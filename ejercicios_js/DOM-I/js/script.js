console.log("hola mundo");

console.log("--------Ejercicio 1----------");

// Lectura
console.log(document.getElementById("titulo"));
console.log(document.getElementById("titulo").innerHTML);

console.log(document.getElementById("titulo").innerText);

// Escritura

//innerText
document.getElementById("titulo").innerText = "<span>Queso</span>";
console.log(document.getElementById("titulo").innerText);
//innerHTML
document.getElementById("titulo").innerHTML = "<span>Pan</span>";
console.log(document.getElementById("titulo").innerHTML);


console.log("--------Ejercicio 2----------");

const p = document.getElementById("parrafo").style;
p.color = "blue";
p.backgroundColor = "aquamarine";
p.fontSize = "20px";


// Ejercicios 1 y 2 con Query selector

console.log(document.querySelector("#titulo").innerHTML);
console.log(document.querySelector("article > p").innerHTML);
console.log(document.querySelector("section > :nth-child(2)").innerHTML);

//QuerySelectorAll -> crea un node list
console.log(document.querySelectorAll("p.frases"));
console.log(document.querySelectorAll("p.frases")[0]);
console.log(document.querySelectorAll("p.frases")[0].innerHTML);

const element = document.querySelectorAll("p.frases");

for (let i = 0; i < document.querySelectorAll("p.frases").length; i++) {
    console.log(element[i].innerText);

}
//Eventos en botones
console.log("--------Ejercicio 3----------");

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    alert("Hola!");
    //cambia el texto de un p con innertext
    document.querySelector("#cambioParrafo").innerText = "vaos al coffee".toUpperCase();

    // cambia el color de fondo del body
    document.body.style.backgroundColor = "#34ADA0";
});
const boton2 = document.getElementById("boton2");
let editado = false;

boton2.addEventListener("click", function () {

    if (editado == false) {
        editado = true;
        //cambia el texto de un p con innertext
        document.querySelector("#cambioParrafo").innerText = "vamos al coffee".toUpperCase();
        // cambia el color de fondo del body
        document.body.style.backgroundColor = "#34ADA0";

    } else {
        editado = false;
        document.querySelector("#cambioParrafo").innerText = "Yo voy a cambiar, lo prometo";
        document.body.style.backgroundColor = "white";
    }

});

console.log("--------Ejercicio 4----------");

//pulsando boton cambia una imagen
const boton3 = document.getElementById("cambioImagen");

function cambioImagen() {
    alert("Cambiando imagen");

    document.querySelector("#imagen").src = "https://i.pinimg.com/originals/9a/a2/11/9aa2112b7dfbb22e2e851b96745e5ed6.png";

}
boton3.addEventListener("click", cambioImagen);


console.log("--------Ejercicio 5----------");

const div1 = document.getElementById("mouse");

div1.addEventListener("mouseover", function () {
    div1.style.backgroundColor = "pink";
});
div1.addEventListener("mouseout", function () {
    div1.style.backgroundColor = "green";
});

console.log("--------Ejercicio 6----------");

const frases = document.querySelectorAll(".frases");

for (let i = 0; i < frases.length; i++) {

    frases[i].addEventListener("click", function () {
        frases[i].innerText = "Cambiado!";
    });

};

console.log("--------Ejercicio 7----------");

/*Objetivo: event.preventDefault.
Crea un enlace <a href="https://google.com">Ir a Google</a>.
Añade un listener que, al clickar, haga preventDefault() y muestre un mensaje “¡No puedes salir!”.
Concepto: bloquear comportamiento por defecto.*/

const mensaje = document.getElementById("msg");
const enlace = document.getElementById("enlace");

enlace.addEventListener("click", function (event) {
    event.preventDefault();
    mensaje.innerText = "¡No puedes salir!";
});

console.log("--------Ejercicio 8----------");

/*Objetivo: Combinar varias cosas.

Pon un article con un h2, un p y una img.

Haz que:

Al clickar en el h2, cambie su texto a “Hechizo lanzado”.
Al clickar en el p, cambie color y fondo.
Al clickar en la img, cambie por otra.
*/

const h2 = document.querySelector("article h2");
const p2 = document.querySelector("article p");
const img = document.querySelector("article img");

h2.addEventListener("click", function () {
    h2.innerText = "Hechizo lanzado";
});

p2.addEventListener("click", function () {
    p2.style.backgroundColor = "red";
    p2.style.color = "white";
});

img.addEventListener("click", function () {
    img.src = "https://i.pinimg.com/originals/9a/a2/11/9aa2112b7dfbb22e2e851b96745e5ed6.png";
});

console.log("--------Ejercicio Bonus----------");
/*Objetivo: Coger el valor del input y ponerlo en pantalla

Pon un input con un botón con la palabra "agregar".

Haz que:

Se pueda escribir en el input, cambie el placeholder "Escribe algo" por lo que escribas.
Al clickar en el botón, coja el valor del input y lo agregue en una lista. */

const input = document.getElementById("input");
input.addEventListener("click", function () {
    input.placeholder = "";
});
input.addEventListener("blur", function () {
    input.placeholder = "Escribe algo...";
});

const boton4 = document.getElementById("buttonList");
const lista = document.getElementById("listado");
boton4.addEventListener("click", function () {
    lista.innerHTML += ("<li>" + input.value + "</li>");

});

document.getElementById("boton1").addEventListener("click", () => {
    const div1 = document.getElementById("div1");

    //crear nuevo parrafo
    const p1 = document.createElement("p");
    //crear nodo de texto
    const txt1 = document.createTextNode("Texto creado desde JS 1");

    //unir p1 y txt1
    p1.appendChild(txt1);
    //unir div1 y p1 
    div1.appendChild(p1);

    //editar nodo existente
    //replaceChild(newChild, oldChild)
    const oldChild = document.getElementById("p2");

    const newChild = document.createElement("p");

    oldChild.textContent = "Texto editado desde JS 1";

    div1.replaceChild(newChild, oldChild);

    //editar nodo existente
    const p3 = document.getElementById("p3");
    p3.innerText = "Texto editado desde JS 2";

});

//template string
let a = 44;
let comida = "pizza";
let mensaaje = `Usted tiene: ${a} años y le gusta la ${comida}`;
console.log(mensaaje);

console.log(`<h1>Comida favorita: ${comida}</h1>`);
const h1 = `<h1>Comida favorita: ${comida}</h1>`;
document.body.innerHTML += h1;

const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "rojo" },
];

document.getElementById("boton3").addEventListener("click", () => {
    const lista = `
    <section>
        <article>
            <p>${datos[0].marca}</p>
            <p>${datos[0].peso}</p>
            <p>${datos[0].color}</p>
        </article>
    </section>
    `;
    console.log(lista);
});
//rellenamos la pagina con el array de objetos "datos"
document.getElementById("boton4").addEventListener("click", () => {
    let lista = `<section>`;

    for (let i = 0; i < datos.length; i++) {
        lista += `<article>
            <p>${datos[i].marca}</p>
            <p>${datos[i].peso}</p>
            <p>${datos[i].color}</p>
        </article>`;
        
    }
    lista += `</section>`
    console.log(lista);
    document.querySelector("#div3").innerHTML += lista;
});

//borrar elementos
document.getElementById("boton4borrar").addEventListener("click",()=>{
    document.querySelector("#div3").innerHTML += "";
});