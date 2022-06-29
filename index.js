//var header = document.getElementById("header")
//header.style.backgroundColor = "blue"

//document.body.style.backgroundColor = "green"

//var topofthelist = document.getElementById("topofthelist")
//topofthelist.style.backgroundColor = "red"

// className//
// document.querySelector("#header").className += " new-class"

// classList//
//console.log(document.querySelector("#header").className)
//document.querySelector("#header").classList.toggle("another")
//console.log(document.querySelector("#header").className)
//document.querySelector("#header").classList.toggle("another")
//console.log(document.querySelector("#header").className)


var newLi = document.createElement("Li")
newLi.textContent = "3"

var myList = document.getElementById("my-list")
myList.prepend(newLi)

var newP = document.createElement("p")
newP.textContent = "Baja Prerunner"
newP.style.fontSize = "50px"
newP.style.textAlign = "center"
newP.style.textA = "red"
document.body.append(newP)
