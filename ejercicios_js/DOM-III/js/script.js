console.log("Hola mundo!");

const form = document.getElementById("myForm");

// En "event" está toda la info enviada del form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // "congela" la ejecución

  console.log(event);
  console.log(event.target.email);

  console.log(event.target.name.value); // valor
  console.log(event.target.email.value);
  console.log(event.target.password.value);
  console.log(event.target.phone.value);

  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const phone = event.target.phone.value;

  // Regex para validar los campos
  const nameRegex = /^[A-Za-z]{3,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$*]{8,}$/;
  const phoneRegex = /^\d{9}$/;

/*   if (name.length <= 3) {
    alert("Por favor, mínimo 3 caracteres");
  }

  if (!email.includes("@")) {
    alert("El correo debe tener @");
  } */

    let errorMessage = "";

    if(!nameRegex.test(name)){
        //alert("Error formato nombre");
        errorMessage += "Error formato nombre\n";
    }

    if(!emailRegex.test(email)){
        //alert("Error formato email");
        errorMessage += "Error formato email\n";
    }

    if(!passwordRegex.test(password)){
        //alert("Error formato password");
        errorMessage += "Error formato password: Se admite mayusculas,minusculas, $, * al menos 8 caracteres\n";
    }

    if(!phoneRegex.test(phone)){
        //alert("Error formato teléfono");
        errorMessage += "Error formato teléfono";
    }

    if(errorMessage){
        alert(errorMessage);
        document.getElementById("errorMessages").innerHTML = `<pre class="errorMessage">${errorMessage}</pre>`;
    }
    else{
        alert("Enviado con éxito!");
        document.getElementById("errorMessages").innerHTML = `<pre class="success">Enviado con éxito!</pre>`;
        form.reset(); // limpia el formulario
        // form.submit() // continuar con el envío del formulario
    }
});
