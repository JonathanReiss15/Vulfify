// jquery to change background-color of page on click

// color palette listeners

// console.log('Is main.js running?');

$("#darkblue").click(function() {
    canvas.backgroundColor="#9CBFDC";
    canvas.renderAll();
});

$("#medred").click(function() {
    canvas.backgroundColor="#D98F84";
    canvas.renderAll();
});

$("#lightred").click(function() {
    canvas.backgroundColor="#F0D3CE";
    canvas.renderAll();
});

$("#lightblue").click(function() {
    canvas.backgroundColor="#CADDEC";
    canvas.renderAll();
});

$("#lightgrey").click(function() {
    canvas.backgroundColor="#E0E5E7";
    canvas.renderAll();
});

$("#darkred").click(function() {
    canvas.backgroundColor="#D85961";
    canvas.renderAll();
});

// Canvas

var canvas = new fabric.Canvas('canvas', {
  backgroundColor: '#D98F84',
});

//on page load inits base image
window.onload = init;

function init() {
    // console.log('test');
    fabric.Image.fromURL(path, function(img) {
        var x = 60;
        var img = img.scale(0.8);
        img.set("left", x);
        // alert("X value is" + x);
        img.set("top", 100);
        img.selectable = true;
        canvas.add(img);
        groupImages();

    });
}


const slider__value = document.querySelector("#slider");

const downloadLink = document.querySelector("#downloadLnk");

slider__value.addEventListener('change', updateImages);

downloadLink.addEventListener('click', saveImage);

const antwaun = './img/transp_antwaun.png';
let path = antwaun; // antwaun

// var path = './img/prettypurdie500.png'; // Bernard 'Pretty' Purdie


//Adds image to canvas and repeats enterred amount
function updateImages() {
    var bckgcolor = canvas.backgroundColor;
    canvas.clear();
    canvas.backgroundColor = bckgcolor;
    const imgArray = [];
    for (var i = 0; i < slider__value.value; i++) {
        imgArray.push(path);
    }

    imgArray.forEach((image, index) => {
        fabric.Image.fromURL(image, function(img) {
            var x = 60 + (15 * index);
            console.log("index value is: " + index);
            var img = img.scale(0.8);
            img.set("left", x);
            // alert("X value is" + x);
            img.set("top", 100);
            img.selectable = true;
            canvas.add(img);
            groupImages();
        });
    });
}

function saveImage() {
    console.log('saveImage func')
    var dt = canvas.toDataURL({format: 'jpeg'});
    this.href = dt;
}

function groupImages() {
    canvas.deactivateAll();
    var objs = canvas.getObjects().map(function(o) {
      return o.set('active', true);
    });

    var group = new fabric.Group(objs, {
      originX: 'center',
      originY: 'center'
    });

    canvas.setActiveGroup(group.setCoords()).renderAll();
    group.center();
    group.setCoords();
}

document.getElementById('fileID').onchange = function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) { console.log('onload');
        var imgObj = new Image();
        imgObj.src = event.target.result;

        path = imgObj.src;
        updateImages();
    }
    reader.readAsDataURL(e.target.files[0]);
}
