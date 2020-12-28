'use strict'


var thename = prompt("Hello! what is your name ?")


 if(thename == null) {
    alert("Hello!Welcome to my page my guest!")
}
else {
    alert("welcome to my page " + thename) 
}

console.log(thename)

var aboutguest = prompt("are you a LTUC student ? yes/no")

if (aboutguest.toLocaleLowerCase() === 'yes' || aboutguest.toLocaleLowerCase() === 'y') {
    prompt("are you software engineeer student? yes/no")

} else if (aboutguest.toLocaleLowerCase() === 'no' || aboutguest.toLocaleLowerCase() === 'n') {
    prompt("do have any programing expeirence ? yes/no")

