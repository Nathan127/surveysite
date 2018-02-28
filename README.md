# Qualtrics Survey Site

JSFiddle: https://jsfiddle.net/nathan127/dorm3cch/127/

Customer requested assistance creating a webpage for a survey website called Qualtrics. This survey was going to be taken by ~60,000 participants. The page presents the user with 4 nutrition bars and they survey asks which one they would purchase, move over a bar to see it's backside nutritional facts. The customer requested a way to keep track of the number of times a user views the nutrition label and the total time the user was looking at the nutrition label.

I was provided template HTML to get started. I used the onmouseover and onmouseoff events to switch between pictures, add to count, and to start and stop a timer. The timer was created with the setinterval() function and we learned it needed to be set to at least 15ms due to browser limitations.

Later on, the customer requested we which from hover the mouse over the picture for their nutrition to clicking. This took changing the event listener from onmouseover/onmouseoff to onmousedown/onmouseup respectively.

It was then requested that the webpage randomize everytime the page loads. This was the offset participates more likely to look at the upper left option simply because it was "first". To accomplish this, I shuffled a small array to provide randomization. Then, I associated each position on that shuffled array with a nutrition bar. This made each nutrition bar and their data be shuffled together every time the page loaded.

#Master Branch

The master branch was where a majority of my work was done. It allowed the webpage to be loaded in a browser to be worked on.

#Qualtrics Branch

The qualtrics branch is very similiar to the master branch except the HTML doesn't need a few normal browser setting tags, and the javascript is using qualtrics API functions to trigger different parts of the code on qualtrics events. It also hides the data from being displayed on the web page as it isn't relevent to a survey participant.
