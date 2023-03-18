document.addEventListener('DOMContentLoaded', ()=>{

var submit = document.querySelector('.button')


submit.addEventListener('click',(e)=>{
    e.preventDefault()
    var UserPassword=document.querySelector('input').value
    console.log(UserPassword)

    //  plength = UserPassword.length
    // for(let i=0;i<=plength;i++){
    //     console.log(i)
    var newPassword = UserPassword.replace(/a/, "@")
    var newPassword = newPassword.replace(/e/, "3")
    var newPassword = newPassword.replace(/s/, "&")
    var newPassword = newPassword.replace(/ /, "_")
    var newPassword = newPassword.replace(/ /, "_")
    var newPassword = newPassword.replace(/ /, "_")

    // }


    newPassword = newPassword.replace(/b|h|c|r|p|v|b|n|f|z|q/i, function (x) {
        return x.toUpperCase();
      });

    newPassword = 'H3ll0^'+ newPassword + '$by3'
    console.log(newPassword)

    document.querySelector("#generated").innerHTML = newPassword 
    document.querySelector("#message").innerHTML = "Password copied to clipboard." 


    navigator.clipboard
    .writeText(newPassword)
    .then(
        success => console.log("text copied"), 
        err => console.log("error copying text")
    );

    document.querySelector("#generated").style.visibility = 'visible'
    document.querySelector("#message").style.visibility = 'visible'
})


})