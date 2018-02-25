Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
	
//Initialize Qualtrics counters
var chocolatePic_count = 0;
var honeyRoastedPic_count = 0;
var almondPic_count = 0;
var blueberryPic_count = 0;

//Initialize Qualtrics timers
var chocolatePic_time = 0;
var honeyRoastedPic_time = 0;
var almondPic_time = 0;
var blueberryPic_time = 0;

//Initialize quadrant counters
var quad1_count = 0;
var quad2_count = 0;
var quad3_count = 0;
var quad4_count = 0;

//Initialize quadrant timers
var quad1_time = 0;
var quad2_time = 0;
var quad3_time = 0;
var quad4_time = 0;

//Initialize quadrant bools for timers
var quad1Bool = 0
var quad2Bool = 0
var quad3Bool = 0
var quad4Bool = 0

var interval = 20; //# of milliseconds per interval

//Declare URL for letting go of click
var chocolateURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_6sSViPp5Njze9ut";
var honeyRoastedURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_eWHTYyUe9Z0bOn3";
var almondURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_0eu8FOzTokZWnOJ";
var blueberryURL_up = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_5AdNUQ0lGj2C5cp";

//Declare URLS for clicking
var chocolateURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_3w1PdWmf5oRzYMt";
var honeyRoastedURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_3w1PdWmf5oRzYMt";
var almondURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_3w1PdWmf5oRzYMt";
var blueberryURL_down = "https://oregonstate.qualtrics.com/CP/Graphic.php?IM=IM_3w1PdWmf5oRzYMt";

//Declare URLS for img sources
var chocolateURL_src = chocolateURL_up;
var honeyRoastedURL_src = honeyRoastedURL_up;
var almondURL_src = almondURL_up;
var blueberryURL_src = blueberryURL_up;

//Declare IDs
var chocolateID = "chocolatePic";
var honeyRoastedID = "honeyRoastedPic";
var almondID = "almondPic";
var blueberryID = "blueberryPic";

//Declare Descriptions
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

//Have the page watching for clicks and click releases
document.getElementById("quad1ID").addEventListener("mousedown", mouseDownQuad1);
document.getElementById("quad1ID").addEventListener("mouseup", mouseUpQuad1);
document.getElementById("quad2ID").addEventListener("mousedown", mouseDownQuad2);
document.getElementById("quad2ID").addEventListener("mouseup", mouseUpQuad2);
document.getElementById("quad3ID").addEventListener("mousedown", mouseDownQuad3);
document.getElementById("quad3ID").addEventListener("mouseup", mouseUpQuad3);
document.getElementById("quad4ID").addEventListener("mousedown", mouseDownQuad4);
document.getElementById("quad4ID").addEventListener("mouseup", mouseUpQuad4);

//Generate array of positions, then shuffle them
var baseArray = [1,2,3,0];
var randArray = shuffle(baseArray);

function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//Put the descriptions in shuffled position
document.getElementById("quad1desc").innerHTML = descArray[randArray[0]];
document.getElementById("quad2desc").innerHTML = descArray[randArray[1]];
document.getElementById("quad3desc").innerHTML = descArray[randArray[2]];
document.getElementById("quad4desc").innerHTML = descArray[randArray[3]];

//Put the IDs in shuffled position
document.getElementById("quad1ID").id = idArray[randArray[0]];
document.getElementById("quad2ID").id = idArray[randArray[1]];
document.getElementById("quad3ID").id = idArray[randArray[2]];
document.getElementById("quad4ID").id = idArray[randArray[3]];

//Put the image sources in shuffled position
document.quadOne.src = srcArray[randArray[0]]
document.quadTwo.src = srcArray[randArray[1]]
document.quadThree.src = srcArray[randArray[2]]
document.quadFour.src = srcArray[randArray[3]]

//Start timer functions with pre-set interval
setInterval(quad1Timer, interval);
setInterval(quad2Timer, interval);
setInterval(quad3Timer, interval);
setInterval(quad4Timer, interval);

//If allowed to, keep track of timer
function quad1Timer() {
  if (quad1Bool == 1)
    quad1_time++;
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

//When quadrant one is clicked, add one to the count of the quadrant, start the timer, and change the image
function mouseDownQuad1() {
  quad1_count++;
  quad1Bool = 1;
  document.quadOne.src = mouseDownArray[randArray[0]]
  pageUpdate();
}

//When quadrant one is released, stop the timer and change the image again.
function mouseUpQuad1() {
  quad1Bool = 0
  document.quadOne.src = mouseUpArray[randArray[0]]
	pageUpdate();
}

function mouseDownQuad2() {
  quad2_count++;
  quad2Bool = 1;
  document.quadTwo.src = mouseDownArray[randArray[1]]
  pageUpdate();
}

function mouseUpQuad2() {
  quad2Bool = 0
  document.quadTwo.src = mouseUpArray[randArray[1]]
  pageUpdate();
}

function mouseDownQuad3() {
  quad3_count++;
  quad3Bool = 1;
  document.quadThree.src = mouseDownArray[randArray[2]]
  pageUpdate();
}

function mouseUpQuad3() {
  quad3Bool = 0
  document.quadThree.src = mouseUpArray[randArray[2]]
  pageUpdate();
}

function mouseDownQuad4() {
  quad4_count++;
  quad4Bool = 1;
  document.quadFour.src = mouseDownArray[randArray[3]]
  pageUpdate();
}

function mouseUpQuad4() {
  quad4Bool = 0
  document.quadFour.src = mouseUpArray[randArray[3]]
  pageUpdate();
}

function pageUpdate(){
console.log("update fired");
//Put timer and counter values in arrays for easy access
var timeArray = [quad1_time, quad2_time, quad3_time, quad4_time]
var countArray = [quad1_count, quad2_count, quad3_count, quad4_count]

//Take the quadrant data and put them in their appropriate qualtrics locations
chocolatePic_count = countArray[randArray[0]];
honeyRoastedPic_count = countArray[randArray[1]];
almondPic_count = countArray[randArray[2]];
blueberryPic_count = countArray[randArray[3]];

chocolatePic_time = timeArray[randArray[0]];
honeyRoastedPic_time = timeArray[randArray[1]];
almondPic_time = timeArray[randArray[2]];
blueberryPic_time = timeArray[randArray[3]];

document.getElementById("chocolatePic_count").innerHTML = chocolatePic_count;
document.getElementById("chocolatePic_time").innerHTML = chocolatePic_time;
document.getElementById("honeyRoastedPic_count").innerHTML = honeyRoastedPic_count;
document.getElementById("honeyRoastedPic_time").innerHTML = honeyRoastedPic_time;
document.getElementById("almondPic_count").innerHTML = almondPic_count;
document.getElementById("almondPic_time").innerHTML = almondPic_time;
document.getElementById("blueberryPic_count").innerHTML = blueberryPic_count;
document.getElementById("blueberryPic_time").innerHTML = blueberryPic_time;
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
		
		//Put timer and counter values in arrays for easy access
	var timeArray = [quad1_time, quad2_time, quad3_time, quad4_time]
	var countArray = [quad1_count, quad2_count, quad3_count, quad4_count]

	//Take the quadrant data and put them in their appropriate qualtrics locations
	chocolatePic_count = countArray[randArray[0]];
	honeyRoastedPic_count = countArray[randArray[1]];
	almondPic_count = countArray[randArray[2]];
	blueberryPic_count = countArray[randArray[3]];

	chocolatePic_time = timeArray[randArray[0]];
	honeyRoastedPic_time = timeArray[randArray[1]];
	almondPic_time = timeArray[randArray[2]];
	blueberryPic_time = timeArray[randArray[3]];
	}
	
	//Put timer and counter values in arrays for easy access
	var timeArray = [quad1_time, quad2_time, quad3_time, quad4_time]
	var countArray = [quad1_count, quad2_count, quad3_count, quad4_count]

	//Take the quadrant data and put them in their appropriate qualtrics locations
	chocolatePic_count = countArray[randArray[0]];
	honeyRoastedPic_count = countArray[randArray[1]];
	almondPic_count = countArray[randArray[2]];
	blueberryPic_count = countArray[randArray[3]];

	chocolatePic_time = timeArray[randArray[0]];
	honeyRoastedPic_time = timeArray[randArray[1]];
	almondPic_time = timeArray[randArray[2]];
	blueberryPic_time = timeArray[randArray[3]];
});

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
	
	//Put timer and counter values in arrays for easy access
	var timeArray = [quad1_time, quad2_time, quad3_time, quad4_time]
	var countArray = [quad1_count, quad2_count, quad3_count, quad4_count]

	//Shuffle array to match other shuffled data
	countArray[randArray[0]] = quad1_count;
	countArray[randArray[1]] = quad2_count;
	countArray[randArray[2]] = quad3_count;
	countArray[randArray[3]] = quad4_count;

	timeArray[randArray[0]] = quad1_time;
	timeArray[randArray[1]] = quad2_time;
	timeArray[randArray[2]] = quad3_time;
	timeArray[randArray[3]] = quad4_time;

	//Take the quadrant data and put them in their appropriate qualtrics locations
	chocolatePic_count = countArray[0];
	honeyRoastedPic_count = countArray[1];
	almondPic_count = countArray[2];
	blueberryPic_count = countArray[3];

	chocolatePic_time = timeArray[0];
	honeyRoastedPic_time = timeArray[1];
	almondPic_time = timeArray[2];
	blueberryPic_time = timeArray[3];

	Qualtrics.SurveyEngine.setEmbeddedData("chocolatePic_count", chocolatePic_count);
		Qualtrics.SurveyEngine.setEmbeddedData("honeyRoastedPic_count", honeyRoastedPic_count);
		Qualtrics.SurveyEngine.setEmbeddedData("almondPic_count", almondPic_count);
		Qualtrics.SurveyEngine.setEmbeddedData("blueberryPic_count", blueberryPic_count);
		Qualtrics.SurveyEngine.setEmbeddedData("chocolatePic_time", chocolatePic_time);
		Qualtrics.SurveyEngine.setEmbeddedData("honeyRoastedPic_time", honeyRoastedPic_time);
		Qualtrics.SurveyEngine.setEmbeddedData("almondPic_time", almondPic_time);
		Qualtrics.SurveyEngine.setEmbeddedData("blueberryPic_time", blueberryPic_time);
	
});