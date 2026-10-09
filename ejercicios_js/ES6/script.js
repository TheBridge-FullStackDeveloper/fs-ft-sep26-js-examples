console.log("hola mundo");

console.log("*****Ejemplo 1 - MAP *****");

let productos = ["patatas", "pescado", "naranjas", "manzana"];

const result1 = productos.map((item, i) => `Comer ${item}, posición ${i}`);
console.log(result1);

console.log("*****Ejemplo 2 - MAP *****");

let arr = [1, 2, 3, 4, 5, 6, 7];
let multiplyBy2 = (n) => n * 2;

let result2 = arr.map(multiplyBy2);
console.log(result2);

console.log("*****Ejemplo 3 - FILTER *****");
const words = ["estuche", "queso", "quesito", "movil", "teclado"];
//let result3 = words.filter(item => item.endsWith("o"));
let result3 = words.filter((item) => /^q.*o$/.test(item));
console.log(result3);

console.log("*****Ejemplo 4 - REDUCE *****");
// Acumulador, contador
let lista = [-1, 2, 4, 55, 8, -2];

// acumulador = 1000
// acumulador += actual
let result4 = lista.reduce((acumulador, actual) => acumulador + actual, 1000);
console.log(result4);

console.log("*****Ejemplo 5 - REDUCE con objetos*****");

let pedidos = [
  { id: 1, cantidad: 55 },
  { id: 2, cantidad: 4 },
  { id: 3, cantidad: 100 },
];

// quiero devolver -> cantidadTotal y numero de pedidos
const valorInicial = { cantidadTotal: 0, pedidosTotal: 0 };

let result5 = pedidos.reduce((acumulador, actual, i) => {
  console.log(i);
  //cantidadTotal+=
  //console.log(acumulador);
  //console.log(actual);

  acumulador.cantidadTotal += actual.cantidad;
  acumulador.pedidosTotal += 1;
  return acumulador;
}, valorInicial);

console.log(result5);
// Resultado final
//{ cantidadTotal: 159, pedidosTotal: 3 };

console.log("*****Ejemplo 6 - MAP con objetos*****");

let items = [{ valor: 10 }, { valor: 20 }, { valor: 30 }, { valor: 40 }];

/*
Tareas:
1. Añadir un ID a cada objeto usando indice
    ID-001, ID-002, ID-003, ID-004
2. Los objetos retornados deben tener esta forma:
{ id:ID-001, valor: 10 }
*/

let result6 = items.map((item, i) => {
  const ID = `ID-00${i + 1}`;
  const data = { id: ID, valor: item.valor };
  console.log(data);
  return data;
});

console.log(result6);

let result7 = items.map((item, i) => {
  item.id = `ID-00${i + 1}`;
  return item;
});

console.log(result7);

console.log("*****Ejemplo 7 - MAP, FILTER, REDUCE a la vez*****");

var users = [
  { user: "👩🏻‍💻" },
  { user: "👨🏾‍💻" },
  { user: "💃" },
  { user: "👨🏻‍🎓" },
  { user: "🧑🏻‍🏫" },
  { user: "🦸‍♂️" },
  { user: "🧟‍♂️" },
];

let resultDetails = users.map((user) => {
  let mark = Math.random() * 100;
  user.mark = mark;
  return user;
});
// ResultDetails
/*
  0: {user: "👩🏻‍💻", mark: 76.03572182106969}
  1: {user: "👨🏾‍💻", mark: 71.62190728557552}
  2: {user: "💃", mark: 56.21776553271223}
  3: {user: "👨🏻‍🎓", mark: 25.801390164601944}
  4: {user: "🧑🏻‍🏫", mark: 85.74297532451267}
  5: {user: "🦸‍♂️", mark: 67.11805101358996}
  6: {user: "🧟‍♂️", mark: 18.253450044782184}
  */

var selectedCandidate = resultDetails.filter((user) => {
  if (user.mark > 50) {
    return user;
  }
});
/* selected candidate 
  0: {user: "👩🏻‍💻", mark: 76.03572182106969}
  1: {user: "👨🏾‍💻", mark: 71.62190728557552}
  2: {user: "💃", mark: 56.21776553271223}
  3: {user: "🧑🏻‍🏫", mark: 85.74297532451267}
  4: {user: "🦸‍♂️", mark: 67.11805101358996}
  */

let usuarios = [
  { user: "👩🏻‍💻" },
  { user: "👨🏾‍💻" },
  { user: "💃" },
  { user: "👨🏻‍🎓" },
  { user: "🧑🏻‍🏫" },
  { user: "🦸‍♂️" },
  { user: "🧟‍♂️" },
];

let promedio_nota_total_aprobados = usuarios
  .map((user) => {
    let mark = Math.random() * 100;
    user.mark = mark; // crea una clave nueva "mark"
    return user;
  }) //[]
  .filter((user) => {
    console.log(user);
    return user.mark > 50;
  }) //[]
  .reduce((acc, elem, i, arr) => {
    console.log(acc);
    console.log(elem);
    console.log(i);
    console.log(arr);

    //55/4 + 51/4 + 60/4
    return acc + elem.mark / arr.length;
  }, 0); // Num
//.toFixed(2); // redondea a 2 decimales

console.log(promedio_nota_total_aprobados); // promedio notas de los aprobados

let usuarios2 = [
  { user: "👩🏻‍💻" },
  { user: "👨🏾‍💻" },
  { user: "💃" },
  { user: "👨🏻‍🎓" },
  { user: "🧑🏻‍🏫" },
  { user: "🦸‍♂️" },
  { user: "🧟‍♂️" },
];

let promedio_nota_total_aprobados2 = usuarios2
  .map((user) => {
    let mark = Math.random() * 100;
    user.mark = mark; // crea una clave nueva "mark"
    return user;
  }) //[]
  .filter((user) => user.mark > 50) //[]
  .reduce((acc, elem, i, arr) => acc + elem.mark / arr.length, 0) // Num  //55/4 + 51/4 + 60/4
  .toFixed(2); // redondea a 2 decimales

console.log(promedio_nota_total_aprobados2);

const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];
// Resultado --> 60

const result9 = books.reduce(
  (acc, libro) => (libro.category === "code" ? acc + libro.price : acc),
  0
);

console.log(result9);

// Ejemplo 1
let esCliente = false;
console.warn("El pago son  " + (esCliente ? "10.00€" : "20.00€"));

let mensaje,
  esCliente2 = true;

esCliente2
  ? ((mensaje = "debe pagar 10.00€"), console.info(mensaje))
  : ((mensaje = "Sebe pagar 20.00€"), console.info(mensaje));

if (esCliente2) {
  mensaje = "debe pagar 10.00€";
  console.info(mensaje);
} else {
  mensaje = "Sebe pagar 20.00€";
  console.info(mensaje);
}


// Ejemplo 2
let esCliente3 = true;
let esAdulto = true;
console.info(
  esCliente3
    ? "Debes pagar 10.00€"
    : esAdulto
    ? "Envíe su solicitd"
    : "Sorry, espera a hacerte mayor :)"
);

if(esCliente3){
    console.info("Debes pagar 10.00€");
} else if(esAdulto){
    console.info("Envíe su solicitd")
}else{
    console.info("Sorry, espera a hacerte mayor :)")
}