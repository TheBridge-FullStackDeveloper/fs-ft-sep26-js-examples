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
    console.log("Elemento: "+frases[i].innerHTML);
    
}
