
let fisica = 6
let quimica = 8
let biologia = 7
let matematicas = 4
let informatica = 9

let promedioNotas = (fisica + quimica + biologia + matematicas + informatica) / 5

if (promedioNotas > 0 && promedioNotas <= 5.99){
console.log (`mala`)
}else if (promedioNotas >= 6 && promedioNotas < 8){
    console.log (`buena`)
}else if(promedioNotas >= 8 && promedioNotas <= 10){
    console.log (`excelente`)
}else {
    console.log("los datos ingresados son incorrectos")
}

