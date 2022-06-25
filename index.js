document.addEventListener("DOMContentLoaded",alert("welcome to tractor hub kenya"))
let input=document.querySelector("#input")
let btn =document.querySelector("#btn")
let salam=document.querySelector("#salam")


btn.addEventListener("click",function greet(){
    salam.innerHTML="Welcome " + input.value + ", tractors hub kenya"
})
