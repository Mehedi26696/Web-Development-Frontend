
//Select by Class

// let babor=document.getElementsByClassName("box")

// console.log(babor)

// babor[2].style.backgroundColor = "red"
// babor[3].style.backgroundColor = "blue"


//Select by ID

// document.getElementById("mark").style.backgroundColor = "purple"


//Its automatic select the first one
// document.querySelector(".box").style.backgroundColor = "green";

//Selecting all using for loop

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
//    // console.log(e)
//    e.style.backgroundColor = "green";

// })

 
//document.getElementsByTagName("div")
//HTMLCollection(6) [div.container, div.box, div.box, div.box, div#mark.box, div.box, mark: div#mark.box]


// e = document.getElementsByTagName("div")
// HTMLCollection(6) [div.container, div.box, div.box, div.box, div#mark.box, div.box, mark: div#mark.box]

// e[4].matches("mark")
// false

// e[3].closest("mark")
// null

// e[3].closest("container")
// null

 
// e[3].closest(".container")
// <div class=​"container">​…​</div>​

// e[3].closest("html")
// <html lang=​"en">​<head>​…​</head>​<body data-new-gr-c-s-check-loaded=​"14.1190.0" data-gr-ext-installed>​…​</body>​<grammarly-desktop-integration data-grammarly-shadow-root=​"true">​…​</grammarly-desktop-integration>​</html>​

// document.querySelector(".container").contains(e[2])
// true