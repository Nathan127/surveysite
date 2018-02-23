Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
var chocolatePic_count = 0;
var honeyRoastedPic_count = 0;
var almondPic_count = 0;
var blueberryPic_count = 0;

var chocolatePic_time = 0;
var honeyRoastedPic_time = 0;
var almondPic_time = 0;
var blueberryPic_time = 0;

var chocolateBool = 0
var honeyRoastedBool = 0
var almondBool = 0
var blueberryBool = 0

var interval = 20; //# of milliseconds per interval

document.getElementById("chocolatePic_count").innerHTML = chocolatePic_count; //***
document.getElementById("honeyRoastedPic_count").innerHTML = honeyRoastedPic_count;//***
document.getElementById("almondPic_count").innerHTML = almondPic_count;//***
document.getElementById("blueberryPic_count").innerHTML = blueberryPic_count;//***

document.getElementById("chocolatePic_time").innerHTML = chocolatePic_count;//***

document.getElementById("chocolatePic").addEventListener("mousedown", mouseDownchocolatePic);
document.getElementById("chocolatePic").addEventListener("mouseup", mouseUpchocolatePic);

document.getElementById("honeyRoastedPic").addEventListener("mousedown", mouseDownhoneyRoastedPic);
document.getElementById("honeyRoastedPic").addEventListener("mouseup", mouseUphoneyRoastedPic);

document.getElementById("almondPic").addEventListener("mousedown", mouseDownalmondPic);
document.getElementById("almondPic").addEventListener("mouseup", mouseUpalmondPic);

document.getElementById("blueberryPic").addEventListener("mousedown", mouseDownblueberryPic);
document.getElementById("blueberryPic").addEventListener("mouseup", mouseUpblueberryPic);

setInterval(chocolateTimer, interval);
setInterval(honeyRoastedTimer, interval);
setInterval(almondTimer, interval);
setInterval(blueberryTimer, interval);

function chocolateTimer() {
  if (chocolateBool == 1)
  {
    chocolatePic_time++;
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

function mouseDownchocolatePic() {
  chocolatePic_count++;
  document.getElementById("chocolatePic_count").innerHTML = chocolatePic_count;//***
  chocolateBool = 1;
}

function mouseUpchocolatePic() {
  chocolateBool = 0
  document.getElementById("chocolatePic_time").innerHTML = chocolatePic_time;//***
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

	Qualtrics.SurveyEngine.addOnPageSubmit(function(type)
{
	if(type == "next")
	{
		Qualtrics.SurveyEngine.setEmbeddedData("chocolatePic_count", chocolatePic_count);
  	Qualtrics.SurveyEngine.setEmbeddedData("honeyRoastedPic_count", honeyRoastedPic_count);
  	Qualtrics.SurveyEngine.setEmbeddedData("almondPic_count", almondPic_count);
		Qualtrics.SurveyEngine.setEmbeddedData("blueberryPic_count", blueberryPic_count);
	  Qualtrics.SurveyEngine.setEmbeddedData("chocolatePic_time", chocolatePic_time);
  	Qualtrics.SurveyEngine.setEmbeddedData("honeyRoastedPic_time", honeyRoastedPic_time);
  	Qualtrics.SurveyEngine.setEmbeddedData("almondPic_time", almondPic_time);
		Qualtrics.SurveyEngine.setEmbeddedData("blueberryPic_time", blueberryPic_time);
	}
});
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
});
