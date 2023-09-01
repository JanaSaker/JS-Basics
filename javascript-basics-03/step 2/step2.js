const b=document.querySelectorAll("a");
const div=document.querySelector("#texte");


b.forEach(btn=>{
    if(btn.id==="show"){
        btn.addEventListener("click",(event)=>{
            event.preventDefault();
            div.style.display="block";
        })
    }else{
        btn.addEventListener("click",(event)=>{
            event.preventDefault();
            div.style.display="none";
        })
        
    }
})