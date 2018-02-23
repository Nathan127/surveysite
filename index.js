var chocolatePic_count = 0;
var honeyRoastedPic_count = 0;
var almondPic_count = 0;
var blueberryPic_count = 0;

var quad1_time = 0;
var quad2_time = 0;
var quad3_time = 0;
var quad4_time = 0;

var quad1_count = 0;
var quad2_count = 0;
var quad3_count = 0;
var quad4_count = 0;

var quad1_time = 0;
var quad2_time = 0;
var quad3_time = 0;
var quad4_time = 0;

var quad1Bool = 0
var quad2Bool = 0
var quad3Bool = 0
var quad4Bool = 0

var interval = 20; //# of milliseconds per interval

var chocolateURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";
var honeyRoastedURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";
var almondURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";
var blueberryURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";

var chocolateURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";
var honeyRoastedURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";
var almondURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";
var blueberryURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_bgvIrINID92Taeh";

var chocolateURL_src = chocolateURL_up;
var honeyRoastedURL_src = honeyRoastedURL_up;
var almondURL_src = almondURL_up;
var blueberryURL_src = blueberryURL_up;

var chocolateID = "chocolatePic";
var honeyRoastedID = "honeyRoastedPic";
var almondID = "almondPic";
var blueberryID = "blueberryPic";

var chocolateDesc = "Kind Chocolate Vanilla Almond";
var honeyRoastedDesc = "Kind Honey Roasted Nuts and Sea Salt";
var almondDesc = "Kind Almond Coconut";
var blueberryDesc = "Kind Blueberry Vanilla Cashew";

//Array Order: Chocolate, HoneyRosted, Almond, Blueberry
var mouseUpArray = [chocolateURL_up, honeyRoastedURL_up, almondURL_up, blueberryURL_up];
var mouseDownArray = [chocolateURL_down, honeyRoastedURL_down, almondURL_down, blueberryURL_down];
var srcArray = [chocolateURL_src, honeyRoastedURL_src, almondURL_src, blueberryURL_src];
var idArray = [chocolateID, honeyRoastedID, almondID, blueberryID];
var descArray = [chocolateDesc, honeyRoastedDesc, almondDesc, blueberryDesc];

document.getElementById("quad1ID").innerHTML = idArray[0];//***
document.getElementById("quad2ID").innerHTML = idArray[1];//***
document.getElementById("quad3ID").innerHTML = idArray[2];//***
document.getElementById("quad4ID").innerHTML = idArray[3];//***

document.getElementById("quad1ID").addEventListener("mousedown", mouseDownQuad1);
document.getElementById("quad1ID").addEventListener("mouseup", mouseUpQuad1);
document.getElementById("quad2ID").addEventListener("mousedown", mouseDownQuad2);
document.getElementById("quad2ID").addEventListener("mouseup", mouseUpQuad2);
document.getElementById("quad3ID").addEventListener("mousedown", mouseDownQuad3);
document.getElementById("quad3ID").addEventListener("mouseup", mouseUpQuad3);
document.getElementById("quad4ID").addEventListener("mousedown", mouseDownQuad4);
document.getElementById("quad4ID").addEventListener("mouseup", mouseUpQuad4);

document.getElementById("quad1desc").innerHTML = descArray[0];
document.getElementById("quad2desc").innerHTML = descArray[1];
document.getElementById("quad3desc").innerHTML = descArray[2];
document.getElementById("quad4desc").innerHTML = descArray[3];

/*document.getElementById("chocolatePic_count").innerHTML = chocolatePic_count; //***
document.getElementById("honeyRoastedPic_count").innerHTML = honeyRoastedPic_count;//***
document.getElementById("almondPic_count").innerHTML = almondPic_count;//***
document.getElementById("blueberryPic_count").innerHTML = blueberryPic_count;//***
document.getElementById("quad1_time").innerHTML = chocolatePic_count;//***
*/

document.getElementById("quad1_count").innerHTML = quad1_count; //***
document.getElementById("quad2_count").innerHTML = quad2_count;//***
document.getElementById("quad3_count").innerHTML = quad3_count;//***
document.getElementById("quad4_count").innerHTML = quad4_count;//***
document.getElementById("quad1_time").innerHTML = quad1_time;//***


setInterval(quad1Timer, interval);
setInterval(quad2Timer, interval);
setInterval(quad3Timer, interval);
setInterval(quad4Timer, interval);

function quad1Timer() {
  if (quad1Bool == 1)
  {
    quad1_time++;
    document.getElementById("quad1_time").innerHTML = quad1_time;
  }
}

function quad2Timer() {
  if (quad2Bool == 1)
    quad2_time++;
}

function quad3Timer() {
  if (quad3Bool == 1)
    quad3_time++;
}

function quad4Timer() {
  if (quad4Bool == 1)
    quad4_time++;
}

function mouseDownQuad1() {
  quad1_count++;
  document.getElementById("quad1_count").innerHTML = quad1_count;
  quad1Bool = 1;
}

function mouseUpQuad1() {
  quad1Bool = 0
}

function mouseDownQuad2() {
  quad2_count++;
  document.getElementById("quad2_count").innerHTML = quad2_count;
  quad2Bool = 1;
}

function mouseUpQuad2() {
  quad2Bool = 0
}

function mouseDownQuad3() {
  quad3_count++;
  document.getElementById("quad3_count").innerHTML = quad3_count;
  quad3Bool = 1;
}

function mouseUpQuad3() {
  quad3Bool = 0
}

function mouseDownQuad4() {
  quad4_count++;
  document.getElementById("quad4_count").innerHTML = quad4_count;
  quad4Bool = 1;
}

function mouseUpQuad4() {
  quad4Bool = 0
}
