function getValorCoeficiente(element){
    var valor = element.value;
    return valor
}

function quadraticaEquacao(a,b,c){
    function delta(a,b,c){return Math.sqrt((b*b)-(4*(a)*(c)))}

    var delta = delta(a,b,c)

    if(delta === 0)
    {
        return  {
            x1: -(b)/(2*a).toFixed(2),
            x2: undefined,
            delta: delta
        }
    }
    else if (delta>0)  
    {
        return  {
            x1: (-(b) + delta) / (2*a).toFixed(2),
            x2: (-(b) - delta) / (2*a).toFixed(2),
            delta: delta.toFixed(2)
        }
    }
    else
    {
        return  {
            x1: undefined,
            x2: undefined,
            delta: delta
        }
    }  

}

function showView (resultado){
    var display = document.getElementById('big-txtview') 
    display.value = resultado;   
    
    if(resultado.delta === 0){
        display.value = 'x1: ' + resultado.x1 + ' ;'

    }else if (resultado.delta > 0){
        display.value = 'x1: ' + resultado.x1.toFixed(2) + ' ; ' + 'x2: ' + resultado.x2.toFixed(2) + ' ;'
    }
    else{
        display.value = 'nao reais'
    }

    
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
    let f = {
        resultado: resultado,
        coefA: coefA,
        coefB: coefB,
        coefC: coefC,
    }
    initCanvas(f);
    showView(resultado)
    clearInput(coefAEle, coefBEle, coefCEle)
}