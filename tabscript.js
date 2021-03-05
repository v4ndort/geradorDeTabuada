function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
         window.alert('Erro, digite um número')} 
    else { 
        
        let n = Number(txtn.value)
        tab.innerHTML =''
        
        for ( let c = 0 ; c <= 10 ; c++){

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }

        
    }


}