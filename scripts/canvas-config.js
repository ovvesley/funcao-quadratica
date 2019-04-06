"use strict";
function initCanvas(f){
    let idCanvas = document.getElementById('canvas')
    let h = idCanvas.height
    let w = idCanvas.width
    let ctxCanvas = idCanvas.getContext('2d')
     desenhaEquacao(ctxCanvas)
     desenharGrade(ctxCanvas)
//     coefA: "1"
// coefB: "0"
// coefC: "-3"
// resultado:
// delta: "3.46"
// x1: 1.7320508075688772
// x2: -1.7320508075688772
}
function func(x){
    // console.log((f.coefA*(xt(f.resultado.x1**2))) + (f.coefB*xt(f.resultado.x1)) + (f.coefC)*1)
    // return ((f.coefA*(xt(f.resultado.x1**2))) + (f.coefB*xt(f.resultado.x1)) + (f.coefC)*1)
    return yt(x**2)
}
function yt(y){
    return -5*y/2
}
function xt(x){
    return 25*x
}
function desenharGrade(ctx){
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(0, -255)
    ctx.lineTo(0, 255)
    ctx.moveTo(-255, 0)
    ctx.lineTo(255,0)
    ctx.stroke()
}
function desenhaEquacao(ctx, f){
    var x0 = -10;
    var xf = 10;
    var x = x0;
    var dx = 0.1;
    ctx.beginPath();
    ctx.moveTo(xt(x),func(x));
    x += dx;
    while (x < xf){
        ctx.lineTo(xt(x),func(x));
        x += dx;
    }
    ctx.stroke();
    ctx.closePath()
    console.log('fim do desneha')
}
