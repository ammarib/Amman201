'use strict';
var thename = prompt("Hello! what is your name ?")
if (thename === null || thename === "") {
    alert('welcome friend.');

} else {
    alert("welcome to my page " + thename);
} console.log(thename)

aboutguest();//q1, q2 and q3
serviceoffer();//q4 and q5
var num = 9;
theGuess(num);//q6
questionNum7();//q7



function aboutguest() {
    var aboutguest = prompt("are you a LTUC student ? yes/no");
    if (aboutguest.toLowerCase() === 'yes' || aboutguest.toLowerCase() === 'y') {
        prompt("are you software engineeer student? yes/no");
    } else if (aboutguest.toLowerCase() === 'no' || aboutguest.toLowerCase() === 'n') {
        prompt("do have any programing expeirence ? yes/no");
    } else{
        alert("thanks you");
    }
    console.log(aboutguest);
}

function serviceoffer() {
    var serviceoffer = prompt(" would you like to get some technical help ? yes/no")
    if (serviceoffer.toLowerCase() === 'yes' || serviceoffer.toLowerCase() === 'y') {
        alert("Contact me via Gmail botton link in my page")
    } else if (serviceoffer.toLowerCase() === 'no' || serviceoffer.toLowerCase() === 'n' || serviceoffer.toLowerCase() === null ) {
        alert("Thank for your patience :) and welcome again " + thename)
    } else {
        alert("welcome to my page " + thename);
    }
    alert("now . let's try this game to let you know more about me :)")
}

function theGuess(theGuess) {
    for(var i=1;i<=4;i++){
        var gnum=prompt('Guess a number between 0 to 10');
        if(parseInt(gnum) === theGuess){
          alert("You are right!");
          console.log("You are right!");
          break;
        }else if(parseInt(gnum)> theGuess){
          alert("Too high"); 
          console.log("Too high");
        }else if(parseInt(gnum)< theGuess){
          alert('Too low');
          console.log("Too low");
        }else{
          alert("Enter number!");}
        if(i===4){
          alert("The right number is :"+theGuess);}
      }
}

function questionNum7() {
    var phone=["samsung","iphone","huwawei","lg"];
    for(var i=1;i<=6;i++){
    var q7=prompt('what is my phone brand ?').toLowerCase();
    var C;
    for(var l=0;l<phone.length;l++){
      if(phone[l]===q7){
        C = true;
        break;
      }else{C = false;}
    }
    if(C){
      alert('You are right!');
      console.log("You are right!");
      correct++;
      break;
    }else{
      alert('Not correct :(');
      console.log("Not correct :(");
    }
    if(i===6){
      var phones='The right phones are : ';
      for(var j=0;j<phone.length;j++){
        phones =phones+', '+phone[j];
      }
      alert(phones);
    }
  }
}
