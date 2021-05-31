var agora = new Date() //inicializa uma variavel que ira pegar a hora atual
var hora = agora.getHours() // variavel pegando a hora atual
console.log(`Agora são exatamente ${hora} hora.`)
if(hora < 12){
    console.log('Bom Dia!')
} else if(hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}