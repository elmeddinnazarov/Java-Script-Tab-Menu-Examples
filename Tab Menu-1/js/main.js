let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
let btn3=document.querySelector(".btn3")
let opText=document.querySelector(".optional-text")

btn1.onclick=function(){
    opText.innerHTML="İtem-1 ile ilgili bilgiler burdadır."
}

btn2.onclick=function(){
    opText.innerHTML="İtem-2 ile ilgili bilgiler burdadır."
}

btn3.onclick=function(){
    opText.innerHTML="İtem-3 ile ilgili bilgiler burdadır."
}