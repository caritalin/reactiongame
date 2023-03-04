var clickedTime;
var createdTime;
var reactionTime;
var highScore = [];

function makeBox() {

  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var time = Math.random() * 2000;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var top = (Math.random()*(windowHeight-400))+100;
  var left = Math.random()*(windowWidth-200);
  var shape = Math.random()*50;

  setTimeout(function() {
    document.getElementById("box").style.display="block";
    document.getElementById("box").style.background=hue;
    document.getElementById("box").style.top=top + "px";
    document.getElementById("box").style.left=left + "px";
    document.getElementById("box").style.borderRadius=shape + "%";
    createdTime = Date.now();
  }, time);

  if(highScore.length > 0 && reactionTime == highScore[0]) {
    document.getElementById("highScore").style.color="red";
  } else {
    document.getElementById("highScore").style.color="white";
  }

};

document.getElementById("box").onclick = function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/1000;
  highScore.push(reactionTime);
  highScore.sort(function(a, b){return a-b});
  document.getElementById("highScore").innerHTML = highScore[0];
  document.getElementById("time").innerHTML = reactionTime;
  this.style.display="none";
  makeBox();
}

makeBox();