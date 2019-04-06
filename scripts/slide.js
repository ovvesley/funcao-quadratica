//-------------setupSlide--------------------------------------------------------
let indiceSlide = 1;
function mostrarDivs(nDiv){
    let arrSlide = document.getElementsByClassName('slide')

    //verificações para n passar do limite
    if(nDiv > arrSlide.length)    {
        indiceSlide = 1
    }
    if(nDiv < 1)    {
        indiceSlide = arrSlide.length
    }

    //'none' nas demais divs

    for (let i=0; i<arrSlide.length;i++){
        arrSlide[i].style.display = 'none'
    }

    arrSlide[indiceSlide - 1].style.display = 'block'

}

function clickDivs(incremento){
    mostrarDivs(indiceSlide += incremento)
}
//------------------Quando a pagina for carregada----------------------------------
function loadCompletePage(){
    let divCanvas = document.getElementsByClassName('grafico-canvas')
    divCanvas[0].style.display = 'none'
    
}
//---------------------------



