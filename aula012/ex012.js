var hora_agora = new Date()
var hora = hora_agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 6){
    console.log(`BOA MADRUGADA!`)
}else if( hora <= 12){
   console.log (`BOM DIA!`)
}else if(hora < 18){ 
    console.log(`BOA TARDE!`)
}else{
    console.log(`BOA NOITE!`)

}