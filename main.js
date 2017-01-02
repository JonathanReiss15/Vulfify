
// jquery to change background-color of page on click

// color palette listeners

$("#darkblue").click(function() {
    $("body").css("background-color","#9CBFDC");
    canvas.backgroundColor="#9CBFDC";
    canvas.renderAll();
});

$("#medred").click(function() {
    $("body").css("background-color","#D98F84");
    canvas.backgroundColor="#D98F84";
    canvas.renderAll();
});

$("#lightred").click(function() {
    $("body").css("background-color","#F0D3CE");
    canvas.backgroundColor="#F0D3CE";
    canvas.renderAll();
});

$("#lightblue").click(function() {
    $("body").css("background-color","#CADDEC");
    canvas.backgroundColor="#CADDEC";
    canvas.renderAll();
});

$("#lightgrey").click(function() {
    $("body").css("background-color","#E0E5E7");
    canvas.backgroundColor="#E0E5E7";
    canvas.renderAll();
});

$("#darkred").click(function() {
    $("body").css("background-color","#D85961");
    canvas.backgroundColor="#D85961";
    canvas.renderAll();
});


var canvas = new fabric.Canvas('canvas', {
  backgroundColor: '#D98F84',
});

// input range listener
$(document).on('input', '#slider', function() {
    $('#slider_value').html( $(this).val());

});

// hardcoded for 3, create some sort of for loop that pulls from input range?

var path = 'img/transp_antwaun.png';


// fabric.Image.fromURL(path, function(img) {
//   var img = img.scale(0.8).set({ left: 100, top: 100 });
//   canvas.add(img);
//
// });
//
// fabric.Image.fromURL(path, function(img) {
//   var img2 = img.scale(0.8);
//   // .set({ left: 125, top: 100 })
//   var x = 100;
//   img2.set("top", 100);
//   img2.set("left", x+15);
//   canvas.add(img2);
// 
// });

fabric.Image.fromURL(path, function(img) {
        // let x = varX;
    for (var i = 0; i < 3; i++) {
        var x = 100 + (15 * i);
        console.log("The x value is:" + x);
        var img = img.scale(0.8);
        img.set("left", x);
        alert("X value is" + x);
        img.set("top", 100);
        img.selectable = false;
        canvas.add(img);
    }
});




// hardcoded for 3 images

//   fabric.Image.fromURL(path, function(img) {
//     var img2 = img.scale(0.8).set({ left: 125, top: 100 });
//
//     fabric.Image.fromURL(path, function(img) {
//       var img3 = img.scale(0.8).set({ left: 150, top: 100 });
//
//       // repeats all together form a repeatGroup
//       var repeatGroup = new fabric.Group([img, img2, img3]);
//       repeatGroup.selectable = false;
//
//       canvas.add(repeatGroup);
//     });
//   });
// });
