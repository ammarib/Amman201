'use strict' 
var thename = prompt("Hello! what is your name ?")
if (thename === null || thename === "") {
    alert('welcome friend.');

} else {
    alert("welcome to my page " + thename)
} console.log(thename)
var aboutguest = prompt("are you a LTUC student ? yes/no")
if (aboutguest.toLowerCase() === 'yes' || aboutguest.toLowerCase() === 'y') {
    prompt("are you software engineeer student? yes/no")
} else if (aboutguest.toLowerCase() === 'no' || aboutguest.toLowerCase() === 'n') {
    prompt("do have any programing expeirence ? yes/no")
} else{
    alert("thanks you")
}

console.log(aboutguest)
var serviceoffer = prompt(" would you like to get some technical help ? yes/no")
if (serviceoffer.toLowerCase() === 'yes' || serviceoffer.toLowerCase() === 'y') {
    alert("Contact me via Gmail botton link in my page")
} else if (serviceoffer.toLowerCase() === 'no' || serviceoffer.toLowerCase() === 'n' || serviceoffer.toLowerCase() === null ) {
    alert("Thank for your patience :) and welcome again " + thename)
} else {
    alert("welcome to my page " + thename)
}
alert("now . let's try this game to let you know more about me :)")

var theGuess = prompt("can you guess my age when is drove a car ? 4 guesses only")
for(var i=1; i<4; i++){ if (theGuess <9 && theGuess >=7) {
        alert("you are close :)");
        var theGuess = prompt("can you guess my age when is drove a car ?")
    } else if (theGuess <9) {
        alert("that's too low");
        var theGuess = prompt("can you guess my age when is drove a car ?")
    } else if (theGuess >13 ) {
        alert("that's too much");
        var theGuess = prompt("can you guess my age when is drove a car ?")
    } else if (theGuess >9 || theGuess <13 ){
    alert ("thats too close");
    var theGuess = prompt("can you guess my age when is drove a car ?")
    }else if(theGuess === "9"){
        alert("great!that was my age");

    }
}alert("the correct answer is 9 ");

for (var i=1; i<6; i++);{
    var questionNum7 = prompt("what is my phone brand ? samsung - huawei - iphone - htc - lg - lenovo ")
    
    if( questionNum7.toLowerCase() === 'iphone'){
        alert( "that is correct it is my favorite brand ")
    }
   else if( questionNum7.toLowerCase() === 'samsung' || 'huawei' || 'htc' || 'lg' || 'lenovo'){
        alert("try again")
    }
console.log(questionNum7)
}



