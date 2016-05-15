var visualization = d3.select('#borealis__svg');

var socket = io.connect('http://localhost:3000');
var lightValue = null;


function selectLightHeights() {
  heightLights = 250;
}

function selectLightNumber() {
  if (lightValue >= 450) {
    lightsNumber = 7;
  } else if (lightValue <= 449 && lightValue >= 350) {
    lightsNumber = 10;
  } else if (lightValue <= 349 && lightValue >= 250) {
    lightsNumber = 13;
  } else if (lightValue <= 249 && lightValue >= 150) {
    lightsNumber = 16;
  } else {
    lightsNumber = 19;
  }
}

var lightColor = null;
function selectLightColor() {
  var colorValue = Math.round(Math.random() * (0 - 255) + 255);
  if (lightValue >= 350) {
    lightColor = "rgb(255, "+colorValue+", "+colorValue+")";//red
  } else if (lightValue <= 349 && lightValue >= 150) {
    lightColor = "rgb(255, 255, "+colorValue+")";//yellow
  } else {
    lightColor = "rgb("+colorValue+", 255, "+colorValue+")";//green
  }
}

setInterval(function(){
  selectLightNumber();
  selectLightHeights();
  selectLightColor();
  xPosition = Math.round(Math.random() * (0 - 100) + 100);
  yPosition = 250 - Math.round(Math.random() * (0 - 100) + 100);
  for (i=0; i<lightsNumber; i++) {
    var cssClass = "borealis__item borealis__item--" + i;
    var yPositionPlus = yPosition + (i*Math.round(Math.random() * (0 - 20)+20));
    var xPositionPlus = xPosition + (i*1) + "%";
    visualization.append('ellipse').attr('class', cssClass)
      .attr('cy', yPositionPlus)
      .attr('cx', xPositionPlus)
      .attr('fill', lightColor)
      .attr('rx', '10')
      .attr('ry', heightLights)
      .attr('filter', 'url(#f1)')
        .transition().delay(15000)
        .attr('class', 'remove-me');
  }
}, 5000);

setInterval(function(){
  visualization.selectAll('.remove-me').remove();
}, 20000);
