let numeroModelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));


if (modelosDefectuosos.includes(numeroModelo)) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}
