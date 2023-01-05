// var se
var start = document.querySelector('start-button');
var timer = document.getElementsByClassName('card timer');


function timer() {
    var timeLeft = 20;

    var timeInterval = setInterval(function ()
    if (timeLeft > 1) {
    timer.textcontent = timeLeft + ' seconds remaining';
    timeLeft--;}
    else if(timeLeft === 1) {
        timer.textcontent = timeLeft + ' seconds remaining';
        timeLeft --;
    } else {
        timer.textcontent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
    
    )
}
start.addEventListener('click', function(timer)),


