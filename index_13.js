const operadores = {
    Tigo : {
        cargoFijo: 45000,
        valorMinutoInternacional: 200,
    },
    Claro : {
        cargoFijo: 30000,
        valorMinutoInternacional: 100,
    },
    Movistar : {
        cargoFijo: 40000,
        valorMinutoInternacional: 250,
    }
};


let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):").trim();

if (operadores[operador]) {
    
    let minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

 
    let costoTotal = operadores[operador].cargoFijo + (minutosInternacionales * operadores[operador].valorMinutoInternacional);

    
    alert(`El costo total para ${operador} es: $${costoTotal}`);
} else {
    
    alert("Operador no válido. Por favor, elija entre Tigo, Claro o Movistar.");
}
