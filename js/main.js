// background color palette listeners

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

// Declare Canvas

var canvas = new fabric.Canvas('canvas', {
  backgroundColor: '#D98F84',
});

//on page load inits base image
window.onload = init;

function init() {
    fabric.Image.fromURL(path, function(img) {
        var x = 60;
        autoResize(img);

        // set positioning
        img.set("left", x);
        img.set("top", 100);

        // set options
        img.selectable = true;
        img.borderColor = 'white';

        // adds filter + adds to canvas
        addFilter(img);

        // add to canvas and group
        groupImages();

        // console.log("left position: " + img.getLeft());
    });
}


const slider__value = document.querySelector("#slider");

const downloadLink = document.querySelector("#downloadLnk");

slider__value.addEventListener('change', updateImages);

downloadLink.addEventListener('click', saveImage);

const antwaun = './img/transp_antwaun.png'; // Antwaun in the building
const bernard = './img/prettypurdie500.png'; // Bernard 'Pretty' Purdie
const jonny = './img/jonny.png'; // Jonny

let path = bernard; // set default image



//Adds image to canvas and repeats enterred amount
function updateImages() {
    // save background color before clearring
    var bckgcolor = canvas.backgroundColor;
    canvas.clear();
    // set background color again
    canvas.backgroundColor = bckgcolor;

    const imgArray = [];
    for (var i = 0; i < slider__value.value; i++) {
        imgArray.push(path);
    }

    imgArray.forEach((image, index) => {
        fabric.Image.fromURL(image, function(img) {
            var x = 60 + (30 * index);
            var y = 100 + (15 * index);
            // console.log("index value is: " + index);
            autoResize(img);

            // set positioning
            img.set("left", x);
            img.set("top", y);

            // set options
            img.selectable = true;
            img.lockUniScaling = true;
            img.borderColor = 'white';

            // adds filter + adds to canvas
            addFilter(img);

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
      borderColor: 'white',
      cornerColor: 'white',
    });
    group.lockUniScaling = true;
    canvas.setActiveGroup(group.setCoords()).renderAll();
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

function autoResize(img) {
  if (img.height > 500) {
    img.scaleToHeight(400);
  } else if (img.width > 350){
    img.scaleToWidth(350)
  }
}

function addFilter(img) {
  // add filter
  img.filters.push(new fabric.Image.filters.Noise({
    noise: 60
  }));

  // apply filters and re-render canvas when done
  img.applyFilters(canvas.renderAll.bind(canvas));
  // alert('ran');

  canvas.add(img);
}

/*
=========================
        Mask JS
=========================
*/
