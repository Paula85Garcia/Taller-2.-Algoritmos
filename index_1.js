let horaSemana = 41
let nombre = prompt("ingrese nombre de usuario")
let valorHora = 0

if (horaSemana <= 10){
    valorHora = 30000
    console.log (`Señor ${nombre} el número de horas es ${horaSemana} y su salario equivale a ${horaSemana*valorHora}`)
}else{
    valorHora = 33000
    console.log (`Señor ${nombre} el número de horas es ${horaSemana} y su salario equivale a ${horaSemana*valorHora}`)
}