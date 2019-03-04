
function printFirst() {
  $("span#num").text("0");
};
printFirst();


function printNumber() {

  var left = $("#left");
  var center = $("#center");
  var right = $("#right");


  left.click(function () {
    var span = $("#num")
    var val = span.text()
    span.text( val - 1)
  })

  right.click(function () {
    var span = $("#num")
    var val = span.text()
    val = Number(val)
    span.text( val + 1)
  })



}


printNumber();

function changeColor() {
  var center = $("#center")
  var square = $(".square")
  square.click(function () {
    center.toggleClass("red")
  })
  square.click(function () {
    center.toggleClass("blue")
  })


}

changeColor()
