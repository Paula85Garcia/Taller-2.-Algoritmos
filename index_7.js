let edad = 70
let genero = "hombre"

if (genero == "mujer" ){
    if(edad < 30){
console.log ("no tiene derecho a subsidio")
    }else if (edad >= 30 && edad <= 50){
        console.log ("el subsidio es de $100000")
    }else if (edad > 50){
        console.log ("el subsidio es de $120000")
    }else {
        console.log ("edad incorrecta")
    }
}else if (genero == "hombre"){
    console.log ("el subsidio es de $40000")
}else {
    console.log ("error")
}