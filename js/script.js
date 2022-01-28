function calcula(){

    var precoEtanol = parseFloat(document.getElementById('preco-etanol').value);
    var precoGasolina = parseFloat(document.getElementById('preco-gasolina').value);
    
    var calculo = precoEtanol/precoGasolina;
    var display = document.getElementById('display');
    var requirements = document.getElementById('requirements');
    requirements.style.color='red';

    if (!precoEtanol && !precoGasolina){
        display.innerText='';
        requirements.innerText='Insira o preço dos combustíveis';
    } else if (!precoEtanol){
        display.innerText='';
        requirements.innerText='Insira o preço do etanol';
    } else if (!precoGasolina){
        display.innerText='';
        requirements.innerText='Insira o preço da gasolina';
    }
 
    if (calculo <= 0.70){
        requirements.innerText='';
        display.innerText='O etanol vale mais a pena';
    } else if (calculo > 0.71){
        requirements.innerText='';
        display.innerText='A gasolina vale mais a pena';
    }

    console.log('O preço do etanol é ' + precoEtanol.toFixed(2));
    console.log('O preço da gasolina é ' + precoGasolina.toFixed(2));
    console.log(calculo.toFixed(2));
        
}

function limpa(){

    var precoEtanol = parseFloat(document.getElementById('preco-gasolina').value);
    var precoGasolina = parseFloat(document.getElementById('preco-gasolina').value);
    var display = document.getElementById('display');
    var requirements = document.getElementById('requirements');
    precoEtanol = null;
    precoGasolina = null;

    console.log(precoGasolina + ' ' + precoEtanol);
    requirements.innerText='';
    display.innerText='';

}
