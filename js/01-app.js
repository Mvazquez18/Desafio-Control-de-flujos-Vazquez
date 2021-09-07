let nombre =""
let contar = 0;
let razon=""
let puntaje =""
alert ("Enumere las películas/serios que vio últimamente. Escriba su opinión y un puntaje.");

while (nombre =" ") {
 
    
    nombre =prompt ("Introduzca el nombre de la película");
    razon = razon.toUpperCase();

    puntaje= prompt ("¿Que puntaje le pondría?");
    
    
    razon= prompt ("Introduzca una razón")
    razon = razon.toLowerCase();

    if (puntaje >=7) {
        alert ("Buenisimo, la pondremos en nuestra base de datos para recomendarla.")
    }

    if (puntaje <=6) {
        alert ("Una peli de domingo, ¿no?")
       
    }

    if (puntaje <=4) {
        alert ("Lo bueno del cine es que tienen muchas películas, ya vas a encontrar alguna buena")
       
    }

     if (puntaje <=1) {
        alert ("¿Pero puede ser de esas que son tan malas que son buenas? Te recomiendo The Room (2003), es un buen ejemplo de esto")
       
    }

    console.log ("La pelicula es " + nombre+ "." + " La recomiendo porque " + razon + ". Mi puntaje es " + puntaje);
    i= nombre; continue;
    
    alert ("Muchas gracias")


}
