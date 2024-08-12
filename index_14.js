let tamanio = "pequeño"
let valorSandwich = 0

const jalapenio = 0
const tocineta = 3000
const pavo = 3000
const queso = 2500

let jalap = true
let ques = true
let pav = false
let toc = true

if(tamanio == "grande") {

    valorSandwich = 12000

    if(jalap){
        valorSandwich += jalapenio
    }
    if(ques){
        valorSandwich += queso
    }
    
    if(pav){
        valorSandwich += pavo
    }
    
    if(toc){
        valorSandwich += tocineta
    }
    console.log(valorSandwich)

}else {
    valorSandwich = 6000

    if(jalap){
        valorSandwich += jalapenio
    }
    if(ques){
        valorSandwich += queso
    }
    
    if(pav){
        valorSandwich += pavo
    }
    
    if(toc){
        valorSandwich += tocineta
    }
    console.log(valorSandwich)
}