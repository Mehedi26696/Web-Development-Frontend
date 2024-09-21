//space is called a text node


// document.body.childNodes
// NodeList(3) [text, div.container, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[0].childNodes
// NodeList []
// document.body.childNodes[1].childNodes
// NodeList(13) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text, script, text]



// document.body.childNodes
// NodeList(3) [text, div.container, text]
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​

// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.childNodes
// NodeList(13) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text, script, text]
// cont.childNodes[3]
// <div class=​"box">​Box2​</div>​
// cont.firstChild
// #text
// cont.lastChild
// #text 


//let cont=document.body.childNodes[1]
//cont.childNodes[1].style.color = "blue";

// let cont=document.body.childNodes[1]
// undefined
// cont.childNodes[1].parentElement
// <div class=​"container">​…​</div>​


// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(13) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text, script, text]
// document.body.firstElementChild.children
// HTMLCollection(6) [div.box, div.box, div.box, div.box, div.box, script]

// document.body.firstElementChild.children[2]
// <div class=​"box">​Box3​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box">​Box5​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// <div class="box">Box3</div>


// document.body.children
// HTMLCollection(2) [div.container, table]
// document.body.children[1]
// <table>​…​</table>​
// document.body.children[1].rows
// HTMLCollection(3) [tr, tr, tr]
// document.body.children[1].rows[1]
// <tr>​…​</tr>​