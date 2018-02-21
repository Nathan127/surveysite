var madagascarPic_count = 0;
var honeyRoastedPic_count = 0;
var almondPic_count = 0;
var blueberryPic_count = 0;

var madagascarPic_time = 0;
var honeyRoastedPic_time = 0;
var almondPic_time = 0;
var blueberryPic_time = 0;

var madagascarBool = 0
var honeyRoastedBool = 0
var almondBool = 0
var blueberryBool = 0

var interval = 1; //# of milliseconds per interval

document.getElementById("madagascarPic_count").innerHTML = madagascarPic_count; //***
document.getElementById("honeyRoastedPic_count").innerHTML = honeyRoastedPic_count;//***
document.getElementById("almondPic_count").innerHTML = almondPic_count;//***
document.getElementById("blueberryPic_count").innerHTML = blueberryPic_count;//***

document.getElementById("madagascarPic_time").innerHTML = madagascarPic_count;//***

document.getElementById("madagascarPic").addEventListener("mousedown", mouseDownmadagascarPic);
document.getElementById("madagascarPic").addEventListener("mouseup", mouseUpmadagascarPic);

document.getElementById("honeyRoastedPic").addEventListener("mousedown", mouseDownhoneyRoastedPic);
document.getElementById("honeyRoastedPic").addEventListener("mouseup", mouseUphoneyRoastedPic);

document.getElementById("almondPic").addEventListener("mousedown", mouseDownalmondPic);
document.getElementById("almondPic").addEventListener("mouseup", mouseUpalmondPic);

document.getElementById("blueberryPic").addEventListener("mousedown", mouseDownblueberryPic);
document.getElementById("blueberryPic").addEventListener("mouseup", mouseUpblueberryPic);

setInterval(madagascarTimer, interval);
setInterval(honeyRoastedTimer, interval);
setInterval(almondTimer, interval);
setInterval(blueberryTimer, interval);

function madagascarTimer() {
  if (madagascarBool == 1)
  {
    madagascarPic_time++;
  }
}

function honeyRoastedTimer() {
  if (honeyRoastedBool == 1)
    honeyRoastedPic_time++;
}

function almondTimer() {
  if (almondBool == 1)
    almondPic_time++;
}

function blueberryTimer() {
  if (blueberryBool == 1)
    blueberryPic_time++;
}

function mouseDownmadagascarPic() {
  madagascarPic_count++;
  document.getElementById("madagascarPic_count").innerHTML = madagascarPic_count;//***
  madagascarBool = 1;
}

function mouseUpmadagascarPic() {
  madagascarBool = 0
  document.getElementById("madagascarPic_time").innerHTML = madagascarPic_time;//***
}

function mouseDownhoneyRoastedPic() {
  honeyRoastedPic_count++;
  document.getElementById("honeyRoastedPic_count").innerHTML = honeyRoastedPic_count;//***
  honeyRoastedBool = 1;
}

function mouseUphoneyRoastedPic() {
  honeyRoastedBool = 0
  document.getElementById("honeyRoastedPic_time").innerHTML = honeyRoastedPic_time;//***
}

function mouseDownalmondPic() {
  almondPic_count++;
  document.getElementById("almondPic_count").innerHTML = almondPic_count;//***
  almondBool = 1;
}

function mouseUpalmondPic() {
  almondBool = 0
  document.getElementById("almondPic_time").innerHTML = almondPic_time;//***
}

function mouseDownblueberryPic() {
  blueberryPic_count++;
  document.getElementById("blueberryPic_count").innerHTML = blueberryPic_count;//***
  blueberryBool = 1;
}

function mouseUpblueberryPic() {
  blueberryBool = 0
  document.getElementById("blueberryPic_time").innerHTML = blueberryPic_time;//***
}
