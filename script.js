const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML; 
const resetButton = document.querySelector("#reset");



var [seconds, miliseconds, minutes] = [0,0,0];
var appendMinutes = document.getElementById("minutes")
var appendSeconds = document.getElementById("seconds")
var appendMiliseconds = document.getElementById("miliseconds")
var Interval;
// -----------------------Start the timer------------------------
testArea.oninput = function(){
  clearInterval(Interval);
  Interval = setInterval(startTimer, 16.666); 
  //alert(originText);
   
   if(originText == testArea.value){
      clearInterval(Interval);
     
      formatTimer();
      //alert("succeed");
      }
  
  /*
  src: https://www.w3schools.com/jsref/met_win_clearinterval.asp
    -parameters: functuion, miliseconds
    - example: startFunction, 1000 is every second bc 1000 ms is 1 second
    -i think every 16.6 ms means every 60 units it turns to 1 second
    - ^ i did the math. I think that's true. I want the upper limit to be 60
  
  
    https://www.geeksforgeeks.org/how-to-display-hidden-element-when-a-user-starts-typing-using-javascript/
    
    https://www.w3schools.com/Jsref/event_oninput.asp 
      - rather than onclick, i am using oninput
      -oninput is for textareas or text input
  */
  
}
 function startTimer () {
    miliseconds++; 
   formatTimer();
  }

function formatTimer(){
  if(miliseconds <= 9){
      appendMiliseconds.innerHTML = "0" + miliseconds; //09
    }
     
    if (miliseconds > 9){
      appendMiliseconds.innerHTML = miliseconds; //10
      
    } 
    
    if (miliseconds > 59) {
      seconds++; 
      miliseconds = 0;
      appendMiliseconds.innerHTML = "0" + 0;
    }
   
    if(seconds <=9)
       appendSeconds.innerHTML = "0" + seconds; //01
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
   
    if(seconds > 59){
      minutes++;
      seconds = 0;
      appendSeconds.innterHTML = "0" + 0;
    }
   
    if(minutes <= 9)
      appendMinutes.innterHTML = "0" + minutes;
   if(minutes > 9)
     appendMinutes.innterHTML = minutes;
}

// Reset everything:



// Event listeners for keyboard input and the reset button:
 resetButton.addEventListener("click", function() {
   //alert(testArea.value);
   clearInterval(Interval);
   minutes = "00";
   miliseconds = "00";
   seconds = "00";
   appendMiliseconds.innerHTML = miliseconds;
   appendSeconds.innerHTML = seconds;
   appendMinutes.innterHTML = minutes;
} );

/*
NOTES for EVENT LISTENER

https://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript
    - this source says it is better to use addEventListener than .onclick
    
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    - im curious what other types of events(for first parameter) JS supports
    
 -Also, alert sesems like  a better tool than console.log

*/
