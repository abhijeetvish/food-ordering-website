function validateLogin(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let correctEmail = "admin@gmail.com";
let correctPassword = "admin123";

if(email === "" || password === ""){
    alert("Please enter email and password");
    return false;
}

if(email === correctEmail && password === correctPassword){
    window.location.href = "home.html"
    alert("Login Successful");
    return true;
}
else{
    alert("Failure, try once again");
    return false;
}

}