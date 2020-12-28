'use strict'


var thename = prompt("Hello! what is your name ?")


 if(thename == null) {
    alert("Hello!Welcome to my page my guest!")
}
else {
    alert("welcome to my page " + thename) 
}

console.log(thename)

var ansewr = prompt("are you a LTUC student ? yes/no")

if (ansewr.toLocaleLowerCase() === 'yes' || ansewr.toLocaleLowerCase() === 'y') {
    prompt("are you software engineeer student? yes/no")

} else if (ansewr.toLocaleLowerCase() === 'no' || ansewr.toLocaleLowerCase() === 'n') {
    prompt("do have any programing expeirence ? yes/no")

}