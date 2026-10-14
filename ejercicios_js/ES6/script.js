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

if (esCliente3) {
  console.info("Debes pagar 10.00€");
} else if (esAdulto) {
  console.info("Envíe su solicitd");
} else {
  console.info("Sorry, espera a hacerte mayor :)");
}

/***** Ejemplos destructuring *****/

const user1 = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  address: "123 Main St",
  phone: "555-555-5555",
};

let { name: name1, email: emai1 } = user1;

name1 = "Hola";
console.log(name1);

const user2 = {
  id: 2,
  name: "Ana",
  email: "ana@gmail.com",
  address: "123 Main St",
  phone: "555-555-5555",
};

let { name: name2, email: email2 } = user2;
console.log(name2);

const users2 = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    address: "123 Main St",
    phone: "555-555-5555",
  },
  {
    id: 2,
    name: "Ana",
    email: "ana@gmail.com",
    address: "123 Main St",
    phone: "555-555-5555",
  },
  {
    id: 3,
    name: "Marta",
    email: "marta@gmail.com",
    address: "123 Main St",
    phone: "555-555-5555",
  },
];

const res = users2.map((user) => `${user.name} ${user.email}`);
console.log(res); // [string,string]
const usuario1 = res[0];
const usuario2 = res[1];

// const name3 = users2[0].name;
// const email3 = users2[0].email;
// const name4 = users2[1].name;
// const email4 = users2[1].email;
const [{ name, email }] = users2;
console.log(name, email);

const { name: name3, email: email3 } = users2[1];
console.log(name3, email3);

const [{ name: name4, email: email4 }, , { name: name5, email: email5 }] =
  users2;
console.log(name4, "-", email4);
console.log(name5, "-", email5);

let misConocimientos = [
  "variables",
  "operadores",
  "estructuras de control",
  "funciones",
];
// Spread
let aprendido = ["rest operator", "spread operator"];
let misConocimientosAmpliados = [
  ...misConocimientos,
  ...aprendido,
  "otra cosa más",
];
console.log(misConocimientosAmpliados);

/* Mergeando objetos */
const oldUser = {
  name: "Jen",
  age: 22,
};

const newUser = {
  name: "Andrew",
  location: "Philadelphia",
};

// Spread
const mergedUsers = { ...oldUser, ...newUser }; // name, age, location
console.log(mergedUsers);

// Rest
function add(...numbers) {
  // "rest" es un array con todos los parámetros recogidos
  console.log(numbers);

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// returns 1
console.log(add(1));
console.log(add(1, 2)); // returns 3
console.log(add(1, 2, 3, 4, 5)); // returns 15
console.log(add(1, 2, 3, 4, 5, 99, 18, 17, 98));
console.log(add("queso", "pizza", "lechuga", "ternera"));

// Rest
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a);
console.log(b);
console.log(rest); // 120 ?

// For....in
const user3 = {
  id: 2,
  name: "Ana",
  email: "ana@gmail.com",
  address: "123 Main St",
  phone: "555-555-5555",
};

console.log(user3.email);
console.log(user3["email"]);

for (const clave in user3) {
  console.log("**************");
  console.log(clave);
  console.log(`Dato impreso: ${clave}: ${user3[clave]}`);
}

console.log(Object.keys(user3)); // [] de claves
const claves = Object.keys(user3); // ["id","name","email","addreess","phone"] de claves

for (let i = 0; i < claves.length; i++) {
  console.log(`Dato impreso: ${claves[i]}: ${user3[claves[i]]}`);
}

let arr2 = [4, 5, 9];

for (let i in arr2) {
  console.log(i);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(i);
}

// for..of. Devuelve el contenido en cada posición
//Iteración sobre valores

let numeros = [99, 22, 33];

for (let num of numeros) {
  console.log(num);
}

let coches = [
  { name: "Peugeot", year: 2002 },
  { name: "BMW", year: 2015 },
];

for (let item of coches) {
  console.log(item.name);
  console.log(item.year);
}

// For of con destructuring
for (let { name, year } of coches) {
  console.log(name);
  console.log(year);
}

function addOnlyNums(...number) {
  return number.reduce((sum, value) => {
    return typeof value === "number" ? sum + value : sum;
  }, 0);
}
console.log(addOnlyNums(1, "perro", 9, "gato", 4));

const addOnlyNums2 = (...number) =>
  number
    .filter((value) => typeof value === "number")
    .reduce((acc, actual) => acc + actual);

console.time("***timer1***");
console.log(addOnlyNums(1, "perro", 9, "gato", 4));
console.timeEnd("***timer1***");

console.time("***timer2***");
console.log(addOnlyNums2(1, "perro", 9, "gato", 4));
console.timeEnd("***timer2***");

function onlyUniques(...arr) {
  // [] -> arr

  // [1, 1, 2, 2, 3, 6, 7, 8]

  // [1,2,3,6]
  let resultado = arr.filter((num, index) => arr.indexOf(num) === index);
  // 0 === 0  --> true
  // 0 === 1  --> false
  // 2 === 2  --> true
  // 2 === 3  --> false
  //....
  // 5 === 5 --> true (6)

  return resultado;
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

function combineAllArrays1(...arr) {
  let result = [];
  for (let elemento of arr) {
    for (let i = 0; i < elemento.length; i++) {
      result.push(elemento[i]);
    }
  }
  return result;
}

console.log(
  combineAllArrays1(
    [3, 6, 7, 8],
    [2, 7, "queso", 3, 1],
    [2, 7, "queso", 3, 1],
    [2, 7, "queso", 3, 1],
    [2, 7, "queso", 3, 1],
    [2, 7, "queso", 3, 1],
    [2, 7, "queso", 3, 1]
  )
);
console.log(
  combineAllArrays1([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

function combineAllArrays2(...args) {
  let total = [];
  for (let array of args) {
    total.push(...array);
  }
  return total;
}
console.log(combineAllArrays2([3, 6, 7, 8], [2, 7, "queso", 3, 1]));
console.log(
  combineAllArrays2([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

function combineAllArrays3(...arr) {
  const resultado = [];

  for (const miniArray of arr) {
    for (const item of miniArray) {
      resultado.push(item);
    }
  }

  return resultado;
}

console.log(combineAllArrays3([3, 6, 7, 8], [2, 7, "queso", 3, 1]));
console.log(
  combineAllArrays3([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);


const combineAllArrays4 = (...arr) => arr.reduce((acc, curr) => [...acc, ...curr]);

console.log(combineAllArrays4([3, 6, 7, 8],[2, 7, 3, 1],[4, 2, 1],[3, 6, 7, 8],[3, 6, 7, 8],[3, 6, 7, 8],[3, 6, 7, 8],[3, 6, 7, 8]));
