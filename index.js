var pic1_count = 0;
var pic2_count = 0;
var pic3_count = 0;
var pic4_count = 0;

var pic1_time = 0;
var pic2_time = 0;
var pic3_time = 0;
var pic4_time = 0;

var timer1Bool = 0
var timer2Bool = 0
var timer3Bool = 0
var timer4Bool = 0

document.getElementById("pic1_count").innerHTML = pic1_count; //***
document.getElementById("pic2_count").innerHTML = pic2_count;//***
document.getElementById("pic3_count").innerHTML = pic3_count;//***
document.getElementById("pic4_count").innerHTML = pic4_count;//***

document.getElementById("pic1_time").innerHTML = pic1_count;//***

document.getElementById("pic1").addEventListener("mouseover", mouseOverPic1);
document.getElementById("pic1").addEventListener("mouseout", mouseOutPic1);

document.getElementById("pic2").addEventListener("mouseover", mouseOverPic2);
document.getElementById("pic2").addEventListener("mouseout", mouseOutPic2);

document.getElementById("pic3").addEventListener("mouseover", mouseOverPic3);
document.getElementById("pic3").addEventListener("mouseout", mouseOutPic3);

document.getElementById("pic4").addEventListener("mouseover", mouseOverPic4);
document.getElementById("pic4").addEventListener("mouseout", mouseOutPic4);

setInterval(timer1, 1000);
setInterval(timer2, 1000);
setInterval(timer3, 1000);
setInterval(timer4, 1000);

function timer1() {
  if (timer1Bool == 1)
  {
    pic1_time++;
  }
}

function timer2() {
  if (timer2Bool == 1)
    pic2_time++;
}

function timer3() {
  if (timer3Bool == 1)
    pic3_time++;
}

function timer4() {
  if (timer4Bool == 1)
    pic4_time++;
}

function mouseOverPic1() {
  pic1_count++;
  document.getElementById("pic1_count").innerHTML = pic1_count;//***
  timer1Bool = 1;
}

function mouseOutPic1() {
  timer1Bool = 0
  document.getElementById("pic1_time").innerHTML = pic1_time;//***
}

function mouseOverPic2() {
  pic2_count++;
  document.getElementById("pic2_count").innerHTML = pic2_count;//***
  timer2Bool = 1;
}

function mouseOutPic2() {
  timer2Bool = 0
  document.getElementById("pic2_time").innerHTML = pic2_time;//***
}

function mouseOverPic3() {
  pic3_count++;
  document.getElementById("pic3_count").innerHTML = pic3_count;//***
  timer3Bool = 1;
}

function mouseOutPic3() {
  timer3Bool = 0
  document.getElementById("pic3_time").innerHTML = pic3_time;//***
}

function mouseOverPic4() {
  pic4_count++;
  document.getElementById("pic4_count").innerHTML = pic4_count;//***
  timer4Bool = 1;
}

function mouseOutPic4() {
  timer4Bool = 0
  document.getElementById("pic4_time").innerHTML = pic4_time;//***
}
