

// document.querySelector(".box")
// <div class=​"box">​This is a box​</div>​

// document.querySelector(".box").innerHTML
// 'This is a box'


// document.querySelector(".container").innerHTML
// '\n        <div class="box">This is a box</div>\n    '


// document.querySelector(".box").innerText
// 'This is a box'


// document.querySelector(".container").innerText
// 'This is a box'

// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">This is a box</div>\n    </div>'

// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").textContent
// '\n        This is a box\n    '

// document.querySelector(".container").hidden
// false

// document.querySelector(".container").hidden = true
//after this the content in container will be hidden
// true

//Change html text
//document.querySelector(".box").innerHTML="I am alone"

// document.querySelector(".box").hasAttribute("style")
// false


// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'


// document.querySelector(".box").setAttribute("style","display : inline")

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}


// document.querySelector(".box").removeAttribute("style")

