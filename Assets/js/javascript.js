//Loads loacally stored values
loadValues();



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

//Defines variables for saveBtns
var text = "";
var textSave = [];
var saveBtn1 = document.querySelectorAll(".saveBtn")

//Save Buttons all doing same function
for (var i = 0; i < saveBtn1.length; i++){
    saveBtn1[i].addEventListener("click", function () {
        localStorage.clear();
        var text = document.getElementById("form0").value;       
        localStorage.setItem("form0", text);
        var text = document.getElementById("form1").value;       
        localStorage.setItem("form1", text);
        var text = document.getElementById("form2").value;       
        localStorage.setItem("form2", text);
        var text = document.getElementById("form3").value;       
        localStorage.setItem("form3", text);
        var text = document.getElementById("form4").value;       
        localStorage.setItem("form4", text);
        var text = document.getElementById("form5").value;       
        localStorage.setItem("form5", text);
        var text = document.getElementById("form6").value;       
        localStorage.setItem("form6", text);
        var text = document.getElementById("form7").value;       
        localStorage.setItem("form7", text);
        var text = document.getElementById("form8").value;       
        localStorage.setItem("form8", text);
        var text = document.getElementById("form9").value;       
        localStorage.setItem("form9", text);
        console.log(localStorage);
    });
}

//Load saved values function
function loadValues() {
document.getElementById("form0").value = localStorage.getItem("form0", text)
document.getElementById("form1").value = localStorage.getItem("form1", text)
document.getElementById("form2").value = localStorage.getItem("form2", text)
document.getElementById("form3").value = localStorage.getItem("form3", text)
document.getElementById("form4").value = localStorage.getItem("form4", text)
document.getElementById("form5").value = localStorage.getItem("form5", text)
document.getElementById("form6").value = localStorage.getItem("form6", text)
document.getElementById("form7").value = localStorage.getItem("form7", text)
document.getElementById("form8").value = localStorage.getItem("form8", text)
document.getElementById("form9").value = localStorage.getItem("form9", text)
}

//Checks if it is 12AM and refreshes local storages
function newDay() {
    if (Number(timesNow) === 0){
        localStorage.clear();
    }
    }
    function updatetimeThree () {
        newDay();
        setInterval(newDay, 1000);
    }


updatetimeThree();