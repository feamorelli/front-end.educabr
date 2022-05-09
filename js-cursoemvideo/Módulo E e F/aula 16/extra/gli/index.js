let num = document.getElementById('textc')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let calculo = []

function adicionar(){
    if(Number(num.value) >=0){
        calculo.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        list.appendChild(item)
    }
}