let sal = document.getElementById('sal')
let vt = document.getElementById('vt')
let ben = document.getElementById('ben')
let res = document.getElementById('res')

function calcular() {
    if (sal.value <= 0) {
        res.innerHTML = `O salário precisa ser maior do que 0`
    }
    else {
        let invest = Number(sal.value)*1.6 + Number(vt.value)*22 + Number(ben.value)
        res.innerHTML = `O investimento mensal desse funcionário será de aproximadamente R$${invest}/mês`
    }
}
