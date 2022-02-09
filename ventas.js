<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body style="background-image: url(fondo.jpg);">
        <img src="fondo.jpg" alt="" width="250px">
        <h1>PERFUMES LATINOS</h1>
        <h4>clasificacion</h4>
    <script>
        //ventas individuales//
        var nombreDelVendedor=console.log(prompt("Ingrese nombre del vendedor"));
let precio = [200, 180, 160,150];
let cantidad = [];
let nombre = ["aqua", "emoción", "alegria","frescura"];
let total;
for (let i = 0; i < precio.length; i++) {   
cantidad[i]=parseInt(prompt("Ingrese la cantidad  vendido"));
window.alert(cantidad[i]+nombre[i]) }
total = (precio[0] * cantidad[0])+(precio[1]*cantidad[1])+(precio[2]*cantidad[2])+(precio[3]*cantidad[3]);
 window.alert(total+   "USD vendidos ")
    </script>
</body>
</html>
