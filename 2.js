const form = document.getElementById('form');
// const username = document.getElementById('name')
// const email = document.querySelector('#email')

form.addEventListener("submit",function(event){
    event.preventDefault();
    var username = document.getElementById('name').value
    var email = document.querySelector('#email').value
    if(username!="" && email!=""){
        window.location.href="index.html"
    }
    else{
        alert("please enter your credentials")
    }
})

