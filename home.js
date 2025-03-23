
const popup = document.getElementById("popupcontainer")
const getstarted =document.getElementById("getstartedbtn")
const closebtn = document.getElementById("close")
console.log(getstarted)

getstarted.addEventListener('click', function(){
    popup.style.display = "flex"
})