let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


function adicionar() {
    if (Number(num.value) <= 100 && Number(num.value) >= 1) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor inválido')
    }

    num.value=``
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }
    else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
        for (let p in valores) {
            soma = soma + valores[p]
            if (valores[p] > maior) {
                maior = valores[p]
            }
            if (valores[p] < menor) {
                menor = valores[p]
            }
        }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Temos ${tot} números cadastrados</p>`
    res.innerHTML += `<p>Maior valor é ${maior} e o menor valor é ${menor}</p>`
    res.innerHTML += `<p>A soma total é ${soma} e a média é ${media}</p>`
    }
}
