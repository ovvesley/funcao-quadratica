function getValorCoeficiente(element){
    var valor = element.value;
    return valor
}

function quadraticaEquacao(a,b,c){
    function delta(a,b,c){return Math.sqrt((b*b)-(4*(a)*(c)))}

    var delta = delta(a,b,c)

    if(delta === 0)
    {
        var resultado = -(b)/(2*a)
        resultado = resultado.toFixed(2);
        console.log(resultado)
        return 'x = ' + resultado + ' ;'
    }
    else if (delta>0)  
    {
        var resultado1 = (-(b) + delta) / (2*a)
        var resultado2 = (-(b) - delta) / (2*a)
        resultado1 = resultado1.toFixed(2);
        resultado2 = resultado2.toFixed(2);
        return 'x\'\ = ' + resultado1 + ' ; x\"\ = ' + resultado2 +";"
    }
    else
    {
        return 'não reais'
    }  

}

function showView (resultado){
    var display = document.getElementById('big-txtview') 
    display.value = resultado;    
}

function clearInput(a,b,c){
    a.value = ''
    b.value = ''
    c.value = ''
}

function calcular(){
    var coefAEle = document.getElementById('a-txtview')    
    var coefBEle = document.getElementById('b-txtview')  
    var coefCEle = document.getElementById('c-txtview')     
    var coefA = getValorCoeficiente(coefAEle)
    var coefB = getValorCoeficiente(coefBEle)
    var coefC = getValorCoeficiente(coefCEle)     
    var resultado = quadraticaEquacao(coefA, coefB, coefC)
    showView(resultado)
    clearInput(coefAEle, coefBEle, coefCEle)
}