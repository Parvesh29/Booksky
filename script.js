//selecting popupbox,overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbtn=document.getElementById("addbtn")
addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//
//selectcancelbutton
var cancelbtn=document.getElementById("cancelpopup")
    cancelbtn.addEventListener("click",function(event){
        event.preventDefault()
        popupoverlay.style.display="none"
        popupbox.style.display="none"

    })

//select container,addbookbtn,book title,bookauther, description input
var containercontain=document.querySelector(".container");
var addbook=document.getElementById("addbook");
var titleinput=document.getElementById("bookTitleInput");
var authorinput=document.getElementById("bookAuthorInput");
var description=document.getElementById("descriptionInput");
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var divitem=document.createElement("div")
    divitem.setAttribute("class","book-container")
    divitem.innerHTML=`<h2>${titleinput.value}</h2>
            <h5>${authorinput.value}</h5>
            <p>${description.value}</p>
            <button onclick="deleteitem(event)">Delete</button>`
    containercontain.append(divitem)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
function deleteitem(event){
    event.target.parentElement.remove()
}