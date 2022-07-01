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



//var myList = document.getElementById("my-list")
//myList.prepend(newLi)

//var newP = document.createElement("p")
//newP.textContent = "Baja Prerunner"
//newP.style.fontSize = "50px"
//newP.style.textAlign = "center"
//newP.style.textA = "red"
//document.body.append(newP)

//var myList = document.getElementById("my-list")
//myList.innerHTML += "<li>3</li>"

//document.body.innerHTML +=  "<p> id='paragraph' BajAAAAAAAA </p>"
//document.getElementById("para").style.textAlign = "center"

var powerRangers = [
    {name:"Jason Lee Scott", color: "Red"},
    {name:"Kimberly Hart", color: "Pink"} ,
    {name:"Zack Taylor", color: "Black"},
    {name:"Trini Kwan", color: "Yellow"},
    {name:"Billy Cranston", color: "Blue"},
    {name:"Tommy Oliver", color: "Green"}
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    //var newName = document.createElement("li")
    //newName.textContent = powerRangers[i]
    //rangersList.append(newName)

    rangersList.innerHTML += "<li>" + powerRangers[i] + "</i>"
}