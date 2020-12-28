var name = prompt("Hello! what is your name ?")
alert("welcome to my page " + name);
console.log(name)
var ansewr = prompt("are you a LTUC student ? yes/no")
if (ansewr.toLocaleLowerCase() === 'yes') {
    var LTUCstudent = prompt("are you software engineeer student? yes/no")

}else if (ansewr.toLocaleLowerCase() === 'no'){
    var notLTUCstudent = prompt("do have any programing expeirence ? yes/no")
}