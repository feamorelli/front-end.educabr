var agora = new Date()
var diasem = agora.getDay() 
switch (diasem) {
    case 0: 
        console.log('domingo')
    break
    case 1: 
        console.log('segunda-feira') 
        break
    case 2: 
        console.log('terça-feira') 
        break
    case 3: 
        console.log('quarta-feira')
        break
    case 4: 
        console.log('quinta-feira')
        break
    case 5: 
        console.log('Sexta-feira')
        break
    case 6: 
        console.log('sábado')
        break
    default:
        console.log('Dia inválido') 
}