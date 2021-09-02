let numero = parseInt (prompt ("Ingrese el valor del producto para saber si su envío tendrá costo o no"))
const esMayor= numero > 3000

if (esMayor) {
    alert ("Su envío será gratis") }
else {
    alert ("Su envío tendrá un costo de $500")
}