
// jquery to change background-color of page on click

// color palette listeners

console.log('Is main.js running?');

$("#darkblue").click(function() {
    // $("body").css("background-color","#9CBFDC");
    canvas.backgroundColor="#9CBFDC";
    canvas.renderAll();
});

$("#medred").click(function() {
    // $("body").css("background-color","#D98F84");
    canvas.backgroundColor="#D98F84";
    canvas.renderAll();
});

$("#lightred").click(function() {
    // $("body").css("background-color","#F0D3CE");
    canvas.backgroundColor="#F0D3CE";
    canvas.renderAll();
});

$("#lightblue").click(function() {
    // $("body").css("background-color","#CADDEC");
    canvas.backgroundColor="#CADDEC";
    canvas.renderAll();
});

$("#lightgrey").click(function() {
    // $("body").css("background-color","#E0E5E7");
    canvas.backgroundColor="#E0E5E7";
    canvas.renderAll();
});

$("#darkred").click(function() {
    // $("body").css("background-color","#D85961");
    canvas.backgroundColor="#D85961";
    canvas.renderAll();
});

var canvas = new fabric.Canvas('canvas', {
  backgroundColor: '#D98F84',
});

//on page load inits base image
window.onload = init;

function init() {
    console.log('test');
    fabric.Image.fromURL(path, function(img) {
        var x = 100;
        var img = img.scale(0.8);
        img.set("left", x);
        // alert("X value is" + x);
        img.set("top", 100);
        img.selectable = false;
        canvas.add(img);
    });
}


const slider__value = document.querySelector("#slider");

slider__value.addEventListener('change', updateImages);

var path = './img/transp_antwaun.png';

//Adds image to canvas and repeats enterred amount
function updateImages() {
    canvas.clear();
    const imgArray = [];
    for (var i = 0; i < this.value; i++) {
        imgArray.push(path);
    }

    imgArray.forEach((image, index) => {
        fabric.Image.fromURL(image, function(img) {
            var x = 100 + (15 * index);
            console.log("index value is: " + index);
            var img = img.scale(0.8);
            img.set("left", x);
            // alert("X value is" + x);
            img.set("top", 100);
            img.selectable = false;
            canvas.add(img);
        });
    });
}

// readd download image shit

document.querySelector('#downloadLnk').addEventListener('click', function (event) {
    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
});
