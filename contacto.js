// Esta función valida todos los campos del form.
// Si alguno no cumple con los requisitos, se aborta
// con return. Caso contrario, al final se realiza
// efectivamente el envio de los datos.
const doc = document.fvalida

function setMinDate() {
    let currentDate = new Date().toISOString().split('T')[0];
    console.log(currentDate)
    document.getElementById("fecha").min = currentDate;
  }



function validarEnviar() {
  //valido el nombre
  if (doc.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    doc.nombre.focus();
    return 0;
  }
  //valido el email
  let emails = doc.email;
  if (emails.value.length == 0) {
    alert("Tiene que escribir su email");
    emails.focus();
    return 0;
  }

  //valido la edad. tiene que ser entero mayor que 18
  edad = doc.edad.value;
  edad = validarEntero(edad);
  doc.edad.value = edad;
  if (edad == "") {
    alert("Tiene que introducir un número entero en su edad.");
    doc.edad.focus();
    return 0;
  } else {
    if (edad < 18) {
      alert("Debe ser mayor de 18 años.");
      doc.edad.focus();
      return 0;
    }
  }

  //valido el interés
  if (doc.interes.selectedIndex == 0) {
    alert("Debe seleccionar un motivo de su contacto.");
    doc.interes.focus();
    return 0;
  }
  // --------------------------------------------------------
  // Valido turno
  // --------------------------------------------------------

  if (
    doc.turno[0].checked == true ||
    doc.turno[1].checked == true ||
    doc.turno[2].checked == true
  ) {
  } else {
    //Si al menos uno de los Radio no está marcado....
    alert("Selecciona un turno");
    e.preventDefault();
  }

  //Valido fecha
  if(doc.fecha.value.length==0){
    alert('Debe ingresar una fecha')
    doc.fecha.focus()
    return 0
  }


  //Finalmente, si llegó hasta aqui, se envia el form.
  alert("Muchas gracias por enviar el formulario");
  doc.submit();
}

function validarEntero(valor) {
  //intento convertir a entero.
  //si era un entero no le afecta, si no lo era lo intenta convertir
  valor = parseInt(valor);

  //Compruebo si es un valor numérico
  if (isNaN(valor)) {
    //entonces (no es numero) devuelvo el valor cadena vacia
    return "";
  } else {
    //En caso contrario (Si era un número) devuelvo el valor
    return valor;
  }
}
