let numero1 = parseInt(prompt ("ingrese el numero"))
let numero2 = parseInt(prompt ("ingrese el numero"))
let numero3 = parseInt(prompt ("ingrese el numero"))

if (numero1 > numero2 && numero1 > numero3){
    console.log (`el numero ${numero1} es mayor`)
}else if (numero2 > numero3 && numero2 > numero1){
    console.log (`el numero ${numero2} es mayor`)
}else if (numero3 > numero2 && numero3 > numero1){
    console.log (`el numero ${numero3} es mayor`)
}else (`error`)