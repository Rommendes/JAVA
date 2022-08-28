var Agora = new Date()
var diasemana = agora.getDay()
diasemana = 6
//console.log(diasemana)

    switch(diasemana){
        case  0:
            console.log('DOMIGO')
            break
        case 1:
            console.log('SEGUNDA-FEIRA')
            break
        case 2:
            console.log('TERÇA-FEIRA')
            break
        case 3:
            console.log('QUARTA-FEIRA')
            break
        case 4:
            console.log('QUINTA-FEIRA')
            break
        case 5:
            console.log('SEXTA-FEIRA')
            break
        case 6:
            console.log('SÁBADO')
            break
            default:
            console.log("[ERRO] Dia errado")
            break
}

