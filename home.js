
const popup = document.getElementById("popupcontainer")
const getstarted =document.getElementById("getstartedbtn")
const closebtn = document.getElementById("close")
const form = document.getElementById("formcontainer")
console.log(getstarted)

getstarted.addEventListener('click', function(){
    popup.style.display = "flex"
})

closebtn.addEventListener('click', function(){
    popup.style.display = "none"
})
form.addEventListener('submit', function(){
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value
    if(password !== confirmPassword);{
        alert("password deos not match")
        return
    }
})