let numPositivos = 0;
let contadorNumeros = 0;
let porcentaje = 0;
do {
  const numIngresado = Number(prompt("Ingresar un valor entero"));
  if (!isNaN(numIngresado)) {
    //Verifica que el valor ingresado sea un númerico
    if (numIngresado !== 0) {
      //Verifica que el número sea dinstinto de 0
      contadorNumeros += 1;
      if (numIngresado > 0) {
        //Verifica si el número es positivo
        numPositivos += 1;
      }
    }
  } else {
    alert("Solo se aceptan valores númericos");
  }
} while (numIngresado !== 0);

porcentaje = (numPositivos * 100) / contadorNumeros;
alert(
  `Ingresaste ${numPositivos} valores positivos, ${porcentaje}% del total `
);
