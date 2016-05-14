var visualization = d3.select('#borealis__svg');

var lightValue = null;

setInterval(function(){
  lightValue = Math.round(Math.random() * (0 - 500) + 500);
  selectLightColor();
}, 1000);

var lightsNumber = 6;

var greenColorValue = Math.round(Math.random() * (0 - 255) + 255);
var greenLights = "rgb("+greenColorValue+", 255, "+greenColorValue+")";

var yellowColorValue = Math.round(Math.random() * (0 - 255) + 255);
var yellowLights = "rgb("+yellowColorValue+", 255, "+yellowColorValue+")";

var greenColorValue = Math.round(Math.random() * (0 - 255) + 255);
var greenLights = "rgb("+greenColorValue+", 255, "+greenColorValue+")";

var redColorValue = Math.round(Math.random() * (0 - 255) + 255);
var redLights = "rgb("+redColorValue+", 255, "+redColorValue+")";

var heightLights = Math.round(Math.random() * (10 - 255) + 255);



var lightValue = null;
var lightColor = null;
function selectLightColor(lightvalue) {
  if (lightValue >= 350) {
    lightColor = redLights;
  } else if (lightValue <= 349 && lightValue >= 150) {
    lightColor = yellowLights;
  } else {
    lightColor = greenLights;
  }
}



setInterval(function(){
  randomX = Math.round(Math.random() * (0 - 100) + 100);
  xPosition = randomX;
  randomX_02 = randomX + 1.5 + "%";
  randomX_03 = randomX + 3 + "%";

  baseY = 250;
  yPosition = baseY - Math.round(Math.random() * (0 - 100) + 100);

  randomRY = Math.round(Math.random() * (0 - 100) + 100) + "%";

  heightLights = Math.round(Math.random() * (100 - 255) + 255);
}, 1000);

setInterval(function(){
  for (i=0; i<lightsNumber; i++) {
    var cssClass = "borealis__item borealis__item--0" + i;
    var yPositionPlus = yPosition + (i*12);
    var xPositionPlus = xPosition + (i*2) + "%";
    console.log(yPositionPlus);
    visualization.append('ellipse').attr('class', cssClass)
      .attr('cy', yPositionPlus)
      .attr('cx', xPositionPlus)
      .attr('fill', lightColor)
      .attr('rx', '10')
      .attr('ry', heightLights)
      .attr('filter', 'url(#f1)')
        .transition().delay(5000)
        .attr('class', 'remove-me');
  }
}, 2000);

setInterval(function(){
  visualization.selectAll('.remove-me').remove();
}, 10000);
