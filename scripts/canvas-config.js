"use strict";
function initCanvas(funcaoReferente) {
    let idCanvas = document.getElementById('canvas')
    let h = idCanvas.height
    let w = idCanvas.width
    let ctxCanvas = idCanvas.getContext('2d')
    desenhaEquacao(ctxCanvas, funcaoReferente)
    desenharGrade(ctxCanvas)
    drawRaizes(ctxCanvas, funcaoReferente)
    drawExtremosVertices(ctxCanvas, funcaoReferente)

    //     coefA: "1"
    // coefB: "0"
    // coefC: "-3"
    // resultado:
    // delta: "3.46"
    // x1: 1.7320508075688772
    // x2: -1.7320508075688772
}
function func(x, f) {
    // console.log((f.coefA*(xt(f.resultado.x1**2))) + (f.coefB*xt(f.resultado.x1)) + (f.coefC)*1)
    //return ((f.coefA*(xt(f.resultado.x1**2))) + (f.coefB*xt(f.resultado.x1)) + (f.coefC)*1)
    let yFunc = f.coefA * (x ** 2) + (f.coefB * x) + (f.coefC * 1)
    return yt(yFunc)
    //return yt(x**2)
}
function yt(y) {
    return -25 * y
}
function xt(x) {
    return 25 * x
}
function desenharGrade(ctx) {
    drawNumber(ctx)
    function drawNumber(ctx) {
        ctx.beginPath()
        for (let i = -250; i < 250; i += 25) {
            ctx.beginPath()
            ctx.fillStyle = 'black'
            ctx.rect(i, -7.5, 1, 15)
            ctx.rect(-7, i, 15, 1)
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle = 'white'
            ctx.font = '6.8px Arial'
            //console.log(i)
            let number = parseInt((i / 25))
            ctx.fillText(number, i, 2)
            ctx.fillText(number, 2, i)
            ctx.closePath()
        }
    }
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(0, -250)
    ctx.lineTo(0, 250)
    ctx.moveTo(-250, 0)
    ctx.lineTo(250, 0)
    ctx.stroke()
    ctx.closePath()
    drawNumber(ctx)
    ctx.lineWidth = 2
    ctx.restore()

}
function drawRaizes(ctx, f) {
    console.log(f.resultado.x1)
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'white';
    ctx.arc(f.resultado.x1 * 25, 0, 5, 0, 2 * Math.PI)
    ctx.arc(f.resultado.x2 * 25, 0, 5, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()

}

function drawExtremosVertices(ctx, f) {
    ctx.beginPath()
    ctx.fillStyle = 'red'
    console.log(xt(parseInt(f.xVertice)))
    ctx.moveTo(xt(f.xVertice), 0)
    ctx.lineTo(xt(f.xVertice), yt(f.yVertice))
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(xt(f.xVertice), yt(f.yVertice), 5, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.font = '15px Arial'
    let textXv = 'v( '+ f.xVertice.toFixed(1) + ' , ' + f.yVertice.toFixed(1) + ' )'

    ctx.fillText(textXv,xt(f.xVertice)+10, yt(f.yVertice)+10)
    


}

function desenhaEquacao(ctx, f) {
    var x0 = -10;
    var xf = 10;
    var x = x0;
    var dx = 0.001;
    ctx.beginPath();
    ctx.moveTo(xt(x), func(x, f));
    x += dx;
    while (x < xf) {
        ctx.lineTo(xt(x), func(x, f));
        x += dx;
    }
    ctx.stroke();
    ctx.closePath()
    console.log('fim do desneha')
}
function clearPainel() {
    let ctx = document.getElementById('canvas').getContext('2d')
    ctx.clearRect(-260, -260, 600, 600)

}