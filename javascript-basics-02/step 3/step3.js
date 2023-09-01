let div=document.querySelector("#output");
let input=document.querySelector("#name");
input.addEventListener("keyup",()=>{
  div.innerHTML=input.value;
})