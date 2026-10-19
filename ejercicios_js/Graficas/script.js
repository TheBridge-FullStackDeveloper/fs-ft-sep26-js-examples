console.log("hola mundo!");

var data = {
  // A labels array that can contain any sort of values
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  // Our series array that contains series objects or in this case series data arrays
  series: [[5, 2, 4, 2, 0]],
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line(".ct-chart", data);

// Devuelve 10 productos
async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


// Función para pintar la gráfica
function paintGraph(data) {
    console.log(data); // Probar que llegan los datos [{},{},{}]

    // Fase tratamiento de datos
    let titles = [];
    let prices = [];

    data.forEach(product => {
        titles.push(`prod${product.id}`);
        prices.push(product.price);
    });

    console.log(titles);
    console.log(prices);
    
    // Fase representación de datos
    new Chartist.Bar('.products', {
        labels: titles,
        series: prices
    }, {
        distributeSeries: true
    });
}

// Ejecutar las 2 funciones
getData().then((data) => paintGraph(data));