let tipo = 1
let numeroLavadoras = 4
let valorHora = 0
let numeroHoras = 4
let valorAlquiler = 0

if (tipo == 1){
    valorHora = 4000
    valorAlquiler = valorHora * numeroHoras
    valorAlquiler *= numeroLavadoras
}else {
    valorHora = 3000
    valorAlquiler = valorHora * numeroHoras
    valorAlquiler *= numeroLavadoras
}

if (numeroLavadoras > 3){
    valorAlquiler = valorAlquiler * 0.97
    console.log (`el valor es : ${valorAlquiler}`)
}else {
    console.log (`el valor es : ${valorAlquiler}`)
}

