//ventas individuales//
var nombreDelVendedor=console.log(prompt("Ingrese nombre del vendedor"));
let precio = [200, 180, 160,150];
let cantidad = [];
let nombre = ["aqua", "emoción", "alegria","frescura"];
let total;
for (let i = 0; i < precio.length; i++) {   
cantidad[i]=parseInt(prompt("Ingrese la cantidad  vendido"));
console.log(cantidad[i]+nombre[i]) }
total = (precio[0] * cantidad[0])+(precio[1]*cantidad[1])+(precio[2]*cantidad[2])+(precio[3]*cantidad[3]);

