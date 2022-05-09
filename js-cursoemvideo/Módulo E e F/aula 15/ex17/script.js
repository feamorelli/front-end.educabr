function tabuada() {
    let num = document.getElementById('txtm')
    let tab = document.getElementById('seltab')
    tab.innerHTML = ` `
        if (num.value.length == 0) {
            window.alert('Por favor, digite um número')
        }
        else {
            let n = Number(num.value)
            
            for (c=1;c<=10;c++) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
            }
        }
}