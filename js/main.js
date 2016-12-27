
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

fabric.Image.fromURL(path, function(img) {
  var img1 = img.scale(0.8).set({ left: 100, top: 100 });

  fabric.Image.fromURL(path, function(img) {
    var img2 = img.scale(0.8).set({ left: 125, top: 100 });

    fabric.Image.fromURL(path, function(img) {
      var img3 = img.scale(0.8).set({ left: 150, top: 100 });

      // repeats all together form a repeatGroup
      var repeatGroup = new fabric.Group([ img1, img2, img3]);
      repeatGroup.selectable = false;

      canvas.add(repeatGroup);
    });
  });
});
