// ¡Bienvenidos y Bienvenidas a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

// **Requisitos:**
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// `"gato" => "gaitober"`
// `gaitober" => "gato"`

// - La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// - El resultado debe ser mostrado en la pantalla.

// **Extras:**
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.

// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

// 1. La columna **Listos para iniciar** presenta las tarjetas con elementos que aun no fueron desarrollados.
// 2. En la columna **En Desarrollo** estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
// 3. En la columna **Pausado** estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
// 4. Por fin, en la columna **Concluido** estarán los elementos ya concluidos.

// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

//  Buen proyecto!

/*alert("hola");
const inputTexto = document.getElementById("input-texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const muñeco = document.querySelector(".muñeco")
*/
const inputTexto = document.querySelector(".input-texto");
const inputTexto1 = document.querySelector(".input-texto1");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const missmsg = document.querySelector("#missmsg");
const muñeco = document.querySelector(".muñeco");
const sidebar = document.querySelector(".sidebar");

// myElemento.classList.add('nombreclase');
//Encriptar mensaje

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
  const value = mensaje.value.length;
  if (value === 0) {
    alert("Primero ingrese el texto que desea desencriptar");
    missmsg.style.display = "block";
    muñeco.style.display = "block";
    btnCopy.style.visibility = "hidden";
    sidebar.style.justifyContent = "center";
  } else {
    alert("Encriptando");
    missmsg.style.display = "none";
    muñeco.style.display = "none";
    btnCopy.style.visibility = "visible";
    sidebar.style.justifyContent = "space-between";
    // sidebar.classList.add('.sinJustify')
  }
  mensaje.style.backgroundImage = "none";
  inputTexto.value = "";
  
  
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

//Desencriptar mensaje

function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
  inputTexto.value = "";
  const value = mensaje.value.length;
  if (value === 0) {
    alert("Primero ingrese el texto que desea desencriptar");
    missmsg.style.display = "block";
    muñeco.style.display = "block";
    btnCopy.style.visibility = "hidden";
    sidebar.style.justifyContent = "center";
  } else {
    alert("Desencriptando");
    missmsg.style.display = "none";
    muñeco.style.display = "none";
    btnCopy.style.visibility = "visible";
    sidebar.style.justifyContent = "space-between";
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}

//botón copiar

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}

/*

function encriptar(str) {
  let array = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  let encriptado = str.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    if (encriptado.includes(array[i][0])) {
      encriptado = encriptado.replaceAll(
        array[i][0],
        array[i][1]
      );
    }
  }
  return encriptado;
}
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    muñeco.style.display = "none";
    muñeco.style.display = "none";
    inputTexto.value = "";
  }

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensaje.value = textoDesencriptado;
  mensaje.style.backgroundImage = "none";
  inputTexto.value = "";
}

function desencriptar(str) {
  let array = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  let desencriptado = str.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    if (desencriptado.includes(array[i][0])) {
      desencriptado = desencriptado.replaceAll(
        array[i][0],
        array[i][1]
      );
    }
  }
  return desencriptado;
}
function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("El texto ha sido copiado en su portapapeles");
}

// function encriptar(str){

//     for( let i = 0; i < str.length ; i++){
//         if(str[i] === "a"){
//             encriptado += "enter";
//         }
//         else if(str[i] === "e"){
//             encriptado += "imes";
//         }

//         else if(str[i] === "i"){
//             encriptado += "ai";
//         }

//         else if(str[i] === "o"){
//             encriptado += "ober";
//         }

//         else if(str[i] === "u"){
//             encriptado += "ufat";
//         }
//     }
// }
*/
