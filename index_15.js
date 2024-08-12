const jugador1 = prompt("ingrese el nombre del jugador 1 :")
const jugador2 =  prompt("ingrese el nombre del jugador 2 :")
let puntaje1 = 0
let puntaje2 = 0

let continuar1 = "CONTINUAR"
let continuar2 = "CONTINUAR"
let ganador = "NO"
let ronda = 1

while(ganador == "NO"){

    if(ronda < 3){
        let carta1 = Math.floor(Math.random() * 10) + 1;
        let carta2 = Math.floor(Math.random() * 10) + 1;
        puntaje1 += carta1
        puntaje2 += carta2
        

        console.log(`En la ronda ${ronda} ${jugador1} saco: ${carta1}`)
        console.log(`En la ronda ${ronda} ${jugador2} saco: ${carta2}`)
        ronda++
    }

    if(ronda >= 3){
        
        if(continuar1 != "NO"){
            continuar1 = prompt(`Jugador ${jugador1} ¿Desea continuar? : `)//no

            if(continuar1 === "CONTINUAR"){

                let carta1 = Math.floor(Math.random() * 10) + 1;
                puntaje1 += carta1
                console.log(`En la ronda ${ronda} ${jugador1} saco: ${carta1}`)
            }
        }
        
        if(continuar2 != "NO"){
            continuar2 = prompt(`Jugador ${jugador2} ¿Desea continuar? : `)//no

            if(continuar2 === "CONTINUAR"){
                let carta2 = Math.floor(Math.random() * 10) + 1;
                puntaje2 += carta2
                console.log(`En la ronda ${ronda} ${jugador2} saco: ${carta2}`)
                
            }
        }
        
        ronda++
        

    }

    if(puntaje1 == 21 || puntaje2 == 21){
        ganador = "SI"
        console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
        console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
    }else if(puntaje1 > 21 && puntaje2 < 21){
        ganador = "SI"
        console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
        console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
        console.log(`El jugador ${jugador2} GANO`)
    }else if(puntaje2 > 21 && puntaje1 < 21){
        ganador = "SI"
        console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
        console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
        console.log(`El jugador ${jugador1} GANO`)
    }else if(puntaje2 > 21 && puntaje1 > 21){
        ganador = "SI"
        console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
        console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
        console.log(`Ningun jugador GANO`)
    }else if(continuar1 === "NO" && continuar2 === "NO"){
        ganador = "SI"
        console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
        console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
    }
}


if(ronda >= 3){
        
    if(continuar1 != "NO"){
        continuar1 = prompt(`Jugador ${jugador1} ¿Desea continuar? : `)//no

        if(continuar1 === "CONTINUAR"){

            let carta1 = Math.floor(Math.random() * 10) + 1;
            puntaje1 += carta1
            console.log(`En la ronda ${ronda} ${jugador1} saco: ${carta1}`)
        }
    }
    

    if(continuar2 != "NO"){
        continuar2 = prompt(`Jugador ${jugador2} ¿Desea continuar? : `)//no

        if(continuar2 === "CONTINUAR"){
            let carta2 = Math.floor(Math.random() * 10) + 1;
            puntaje2 += carta2
            console.log(`En la ronda ${ronda} ${jugador2} saco: ${carta2}`)
            
        }
    }
    
    ronda++
    

}

if(puntaje1 == 21 || puntaje2 == 21){
    ganador = "SI"
    console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
    console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
}else if(puntaje1 > 21 && puntaje2 < 21){
    ganador = "SI"
    console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
    console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
    console.log(`El jugador ${jugador2} GANO`)
}else if(puntaje2 > 21 && puntaje1 < 21){
    ganador = "SI"
    console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
    console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
    console.log(`El jugador ${jugador1} GANO`)
}else if(puntaje2 > 21 && puntaje1 > 21){
    ganador = "SI"
    console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
    console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
    console.log(`Ningun jugador GANO`)
}else if(continuar1 === "NO" && continuar2 === "NO"){
    ganador = "SI"
    console.log(`El puntaje de ${jugador1} es: ${puntaje1}`)
    console.log(`El puntaje de ${jugador2} es: ${puntaje2}`)
}

