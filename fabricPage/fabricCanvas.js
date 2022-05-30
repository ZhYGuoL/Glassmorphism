var canvas = new fabric.Canvas('canvas', {width: window.innerWidth, height: window.innerHeight * 0.9});

// create a rectangle object
var rect = new fabric.Rect({
    left: document.getElementById('canvas').clientWidth / 2,
    top: document.getElementById('canvas').clientHeight / 2,
    fill: 'red',
    width: 20,
    height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);
    canvas.renderAll();
}



function circle() {
    var obj = new fabric.Circle({
        radius: 20,
        fill: 'green',
        left: document.getElementById('canvas').clientWidth / 2,
        top: document.getElementById('canvas').clientHeight / 2
    });

    canvas.add(obj)
}



// if (canvas.width != window.innerWidth) {
//     var scaleMultiplier = window.innerWidth / canvas.width;
//     var objects = canvas.getObjects();
//     for (var i in objects) {
//         objects[i].scaleX = objects[i].scaleX * scaleMultiplier;
//         objects[i].scaleY = objects[i].scaleY * scaleMultiplier;
//         objects[i].left = objects[i].left * scaleMultiplier;
//         objects[i].top = objects[i].top * scaleMultiplier;
//         objects[i].setCoords();
//     }

//     canvas.setWidth(canvas.getWidth() * scaleMultiplier);
//     canvas.setHeight(canvas.getHeight() * scaleMultiplier);
//     canvas.renderAll();
//     canvas.calcOffset();
// }