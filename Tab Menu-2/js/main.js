let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
let btn3=document.querySelector(".btn3")
let opText=document.querySelector(".optional-text")
let opText1=document.querySelector(".optional-text-1")
let opText2=document.querySelector(".optional-text-2")
let opText3=document.querySelector(".optional-text-3")

btn1.onclick=function(){
    opText.style.display="none"
    opText1.style.display="block"
    opText2.style.display="none"
    opText3.style.display="none"
    
}

btn2.onclick=function(){
    opText.style.display="none"
    opText2.style.display="block"
    opText1.style.display="none"
    opText3.style.display="none"
}

btn3.onclick=function(){
    opText.style.display="none"
    opText3.style.display="block"
    opText1.style.display="none"
    opText2.style.display="none"
}