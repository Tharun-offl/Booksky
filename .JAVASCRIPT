//selectig popup-overlay,popup-box,last-btn 

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var lastbtn=document.getElementById("last-btn")
lastbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}
)

//selecting add button,cancel button

var cancelbtn=document.getElementById("cancel-btn")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var addbtn=document.getElementById("add-btn")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")
var book=document.querySelector(".book")
addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    book.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}
