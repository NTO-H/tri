var ladoa = 0,
  ladob = 0,
  ladoc = 0,
  Resul;
var semiperimetro;
var area;

function captura1() {
  ladoa = document.getElementById("Ladoa").value;
  ladoa = Number.parseFloat(ladoa);
  console.log(ladoa);
}

function captura2() {
  ladob = document.getElementById("Ladob").value;
  ladob = Number.parseFloat(ladob);
  console.log(ladob);
}

function captura3() {
  ladoc = document.getElementById("Ladoc").value;
  ladoc = Number.parseFloat(ladoc);
  console.log(ladoc);
}

function validar() {
  if (ladoa + ladob > ladoc || ladob + ladoc > ladoa || ladoa + ladoc > ladob) {
  }
}

function Semi() {
  semiperimetro = (ladoa + ladob + ladoc) / 2;
  console.log(semiperimetro);
}

/*calcular el area */
function Area() {
  var sem1 = semiperimetro - ladoa;
  var sem2 = semiperimetro - ladob;
  var sem3 = semiperimetro - ladoc;
  area = Math.sqrt(semiperimetro * sem1 * sem2 * sem3);
  console.log(area);
}

function Semiperimetro() {
  document.getElementById("Lista").innerHTML +=
    '<h3 id="D"> El semiperimetro es: ' + semiperimetro + "</h3>";
}

function Areas() {
  document.getElementById("Lista").innerHTML +=
    '<h3 id="D">El área es: ' + area + "</h3>";
}

function Calcular() {
  if (ladoa == ladob && ladob == ladoc && ladoc == ladoa) {
    document.getElementById("Lista").innerHTML += '<h3 id="D">Equilátero</h3>';
  } 
  else if (ladoa != ladob && ladob != ladoc && ladoc != ladoa) {
    document.getElementById("Lista").innerHTML += '<h3 id="D">Escaleno</h3>';
  }
  else if (ladoa == ladob || (ladob != ladoc && ladoc == ladoa) || ladoa != ladob) {
    document.getElementById("Lista").innerHTML += '<h3 id="D">Isoceles</h3>';
  } 
 
}

//borrar uno por uno la lista desordenada
var borrarButton = document.getElementById("clearDEL");

borrarButton.addEventListener("click", function () {
  var lista = document.getElementById("Lista");

  if (lista.childElementCount > 0) {
    var ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento);
  }
});
