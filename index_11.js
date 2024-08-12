let pitido = prompt("¿La computadora emite un pitido al iniciarse? (sí/no)").toLowerCase() === 'sí';


let discoDuroGira = prompt("¿El disco duro gira? (sí/no)").toLowerCase() === 'sí';


if (pitido && discoDuroGira) {
    console.log("Póngase en contacto con el técnico de apoyo.");
} else if (pitido && !discoDuroGira) {
    console.log("Verificar contactos de la unidad.");
} else if (!pitido && !discoDuroGira) {
    console.log("Traiga la computadora para repararla en la central.");
} else 
    console.log("Compruebe las conexiones de altavoces.");
    