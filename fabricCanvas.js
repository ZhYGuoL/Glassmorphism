var canvas = new fabric.Canvas('canvas', {
    width: document.getElementById('canvas-parent').clientHeight,
    height: document.getElementById('canvas-parent').clientHeight
});

// var canvas = new fabric.Canvas('canvas', {
//     width: window.innerWidth,
//     height: window.innerHeight
// });

// create a rectangle object
var rect = new fabric.Rect({
    left: document.getElementById('canvas-parent').clientWidth / 2,
    top: document.getElementById('canvas-parent').clientHeight / 2,
    fill: 'red',
    width: 20,
    height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);