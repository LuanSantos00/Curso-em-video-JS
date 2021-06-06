let num = [5,8,2,9,3]
/*
num.push(10)    //adiciona na ultima posição do array
a = num.length // para saber o tamanho de um vetor,no js usa sem o ()
num.sort() //coloca os elementos em ordem crescente
*/
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(8)
if(pos == -1){
console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}