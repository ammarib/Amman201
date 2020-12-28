'use strict'


var name = prompt("Hello! what is your name ?")
alert("welcome to my page " + name);
console.log(name)

var ansewr = prompt("are you a LTUC student ? yes/no")

if (ansewr.toLocaleLowerCase() === 'yes' || ansewr.toLocaleLowerCase() === 'y') {
     prompt("are you software engineeer student? yes/no")
    
} else if (ansewr.toLocaleLowerCase() === 'no'|| ansewr.toLocaleLowerCase() ==='n' ) {
      prompt("do have any programing expeirence ? yes/no")
    
}