/*
Function to make show and hide password
*/


let checkboxValue = document.querySelector("#password_value");
let passwordDiv = document.querySelector("#password");

checkboxValue.addEventListener("click",()=>{
  if (checkboxValue.checked) {
    passwordDiv.type = "text";
    console.log(1);
  }
  else{
    passwordDiv.type = "password";
    console.log(0);
  }
})