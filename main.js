const form = document.getElementById('form-area');
const informaBase = document.getElementById('informe-B')
const informaAltura = document.getElementById('informe-A')


function calculaArea(baseAltura){
    return informaBase.value > informaAltura.value
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const informaBase = document.getElementById('informe-B');
    if (!calculaArea(informaBase.value)){
        alert ('base menor que altura');
    }
        else {
            alert('tudo certo');
    }
})
