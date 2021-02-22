"use strict";

var socios = new Array();
var ventana;

//Objeto
function socio(nombre_in, apellidos_in, foto_in, funciones_in, telefono_in) {
  this.nombre = nombre_in;
  this.apellidos = apellidos_in;
  this.foto = foto_in;
  this.funciones = funciones_in;
  this.telefono = telefono_in;
}
//Rellenamos el array con algunos miembros
socios[0] = new socio(
  "Eduardo",
  "Pérez Ruiz",
  "./img/eduardo.png",
  "Gerente",
  "111111111"
);
socios[1] = new socio(
  "Martín",
  "Ruiz Dom",
  "./img/martin.png",
  "Marketing",
  "222222222"
);
socios[2] = new socio(
  "Juana",
  "Ramos Díaz",
  "./img/juana.png",
  "Cocina",
  "333333333"
);
socios[3] = new socio(
  "Miguel",
  "Fisher Ruiz",
  "./img/miguel.png",
  "Administración",
  "444444444"
);
socios[4] = new socio(
  "Daniel",
  "Sánchez López",
  "./img/noel.png",
  "Administración",
  "555555555"
);

//Creamos la ventana emergente con un formulario para guardar nuevos miembros en el array
function nuevaVentana() {
  ventana = window.open(
    "",
    "Crar nuevo socio",
    "top=300px, left=500px, height=300px, width=500px"
  );
  ventana.document.write("<form id='formcrearusuario'>");
  ventana.document.write("	Nombre <input type='text' id='txtnom'/><br/>");
  ventana.document.write("	Apellidos <input type='text' id='txtape'/><br/>");
  ventana.document.write("	Foto: <input type='text' id='txtfoto'/><br/>");
  ventana.document.write("	Funcion <input type='text' id='txtfunc'/><br/>");
  ventana.document.write(                                               
    "	Telefono <input type='text' id='txttel' onkeydown='return window.opener.validarTelefonoEvento(window.event)' onkeypress='return window.opener.validarFinalHijo()'/><br/>"
  );
  ventana.document.write(
    "	<input type='button' onclick='window.opener.guardar();' value='Guardar datos'/>"
  );
  ventana.document.write("</form>");
  console.log(socios);
}

//Recogemos los datos del formulario de la ventana emergente
function guardar() {
  var nombre = ventana.document.getElementById("txtnom").value;
  var apellidos = ventana.document.getElementById("txtape").value;
  var foto = ventana.document.getElementById("txtfoto").value;
  var funciones = ventana.document.getElementById("txtfunc").value;
  var telefono = ventana.document.getElementById("txttel").value;

  crearNuevoSocio(nombre, apellidos, foto, funciones, telefono);
  ventana.close();
}

//Función para meter un usuario más en el array de miembros, filtrando por nombre y apellido
function crearNuevoSocio(
  nombre_in,
  apellidos_in,
  foto_in,
  funciones_in,
  telefono_in
) {
  let socioAGuardar = new socio(
    nombre_in,
    apellidos_in,
    foto_in,
    funciones_in,
    telefono_in
  );

  let existe = socios.some(
    (soc) =>
      soc.apellidos === socioAGuardar.apellidos &&
      soc.nombre === socioAGuardar.nombre
  );

  if (!existe) socios.push(socioAGuardar);
  else alert("Este usuario ya existe");

  console.log(socios);
  refrescarDOM();
}

/////////////////////DOM///////////////////////

//Función para reflejar en el html la agregación de un nuevo miembro creando con DOM los elementos option value dentro del select
function refrescarDOM() {
  const select = document.formu.lista;

  while (select.firstChild) select.removeChild(select.lastChild);

  for (let socio of socios) {
    const option = document.createElement("option");
    const optionValue = document.createTextNode(socio.nombre);
    option.appendChild(optionValue);
    select.appendChild(option);
  }

  mostrarInfo();
}

//Mostramos la información de cada socio en el formulario de la ventana padre
function mostrarInfo() {
  var personaPosicion = document.formu.lista.selectedIndex;

  document.formu.nomape.value = socios[personaPosicion].nombre;
  document.formu.apellidos.value = socios[personaPosicion].apellidos;
  // document.formu.foto_img.src = socios[personaPosicion].foto
  document.getElementById(
    "img_f"
  ).innerHTML = `<img src=${socios[personaPosicion].foto} id="fotos" alt="foto_img">`;
  document.formu.funcion.value = socios[personaPosicion].funciones;
  document.formu.telefono.value = socios[personaPosicion].telefono;
}

////////////EVENTOS DE TECLADO//////////////

//Función para validar el teléfono, evento bidireccional, cada vez que presionas una tecla te devuelve true o false
function validarTelefonoEvento(e) {
  let tecla = e.which || e.charCode;
  if (
    (tecla >= 48 && tecla <= 57) ||
    tecla == 8 ||
    tecla == 46 ||
    (tecla >= 37 && tecla <= 40) ||
    tecla == 9
  ) {
    return true;
  } else {
    return false;
  }
}

function validarFinal() {
  var cantidadEscrita = document.getElementById("txttelefono").value.length;

  if (cantidadEscrita < 9) {
    return true;
  } else return false;
}

function validarFinalHijo() {
  var cantidadEscrita = ventana.document.getElementById("txttel").value.length;

  if (cantidadEscrita < 9) {
    return true;
  } else return false;
}

//Funcion para modificiar los datos de los miembros que ya tenemos dentro del array con su información
function modificarDatos() {
  var personaPosicion = document.formu.lista.selectedIndex;

  socios[personaPosicion].nombre = document.formu.nomape.value;
  socios[personaPosicion].apellidos = document.formu.apellidos.value;
  // socios[personaPosicion].foto = document.getElementById("img_f").firstChild.src;
  socios[personaPosicion].funciones = document.formu.funcion.value;
  socios[personaPosicion].telefono = document.formu.telefono.value;

  alert("Datos modificados");
}
