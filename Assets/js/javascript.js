//Checks the Day of the Week
function time () {
    var weekDay= moment().format("dddd [the] Do [of] MMM");
    $("#currentDay").text(weekDay);   
    }
    
    function updateTime () {
        time();
        setInterval(time, 1000);
    }
    
updateTime();

//Checks current Time in Hours
function timeTwo () {
        var hour= moment().format("H");
        $("#currentHour").text(hour); 
        return(hour);      
        }
        
        function updateTimeTwo () {
            timeTwo();
            setInterval(timeTwo, 1000);
        }
        
updateTimeTwo();


//Assigning variables for the background color function
var hourNow = document.querySelector("#currentHour");
var hourTime = document.querySelectorAll(".currentTime")
var hourTimeBackground = document.querySelectorAll(".col-xl-10")
var times = [];
var timesNow = [];
for ( var i = 0; i < hourTime.length; i++ ){
     times.push(hourTime[i].innerHTML);
}
var timesNow = hourNow.innerHTML;

//Sets the background based on current time
function backgroundColor () {
    for ( var i = 0; i < hourTime.length; i++ ){
        if ( Number(timesNow) > Number(times[i])){
        hourTimeBackground[i].setAttribute("style", "background-color: #ffa9a4");
        }
        if ( Number(timesNow) === Number(times[i])) {
        hourTimeBackground[i].setAttribute("style", "background-color: lightgrey");
        }
        else{
        }
    }
}

backgroundColor();

//Save Buttons all doing same function
//ADD LOCAL STORAGE TO BUTTONS
var textSave = ""
var saveBtn1 = document.querySelectorAll(".saveBtn")
for (var i = 0; i < saveBtn1.length; i++){
    saveBtn1[i].addEventListener("click", function () {
        var text = document.createElement("p");
        text.textContent= "Hello World";
        document.querySelectorAll(".col-xl-10")[0].appendChild(text);
        var textSave = document.querySelectorAll(".col-xl-10")[0].textContent;
        console.log(textSave);
        localStorage.setItem("9AM Text", JSON.stringify(textSave))
    });
}

//Stores Scores to local storage
function storage (){
    localStorage.setItem("scores", JSON.stringify(score))
}

//Loads scores from local storage
function loadScores (){
    const storageScores = JSON.parse(localStorage.getItem("scores"))
    if (storageScores.length > 0) {
        score = storageScores
    }
}