function one(){
    window.open("index.html","_self")
}
function two(){
    window.open("rules.html","_self")
}
function three(){
    window.open("history.html","_self")
}
function four(){
    window.open("rating.html","_self")
}
function five(){
    window.open("champions.html","_self")
}
function about(){
    window.open("aboutus.html","_self")
}
function contact(){
    window.open("contactus.html","_self")
}

function validation(){
    if (document.getElementById("fname").value==""){
        alert ("Please Enter First Name")
    }
    if (document.getElementById("lname").value==""){
        alert ("Please Enter Last Name")
    }
    if (document.getElementById("email").value==""){
        alert ("Please Enter Email")
    }
    if (document.getElementById("comment").value==""){
        alert ("Please Write a Comment")
    }
}