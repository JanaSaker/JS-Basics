let images=document.querySelectorAll("img");
for(let i in images){
    images[i].addEventListener("mouseover",()=>{
        images[i].setAttribute("src",'images/image${+i+1}_2.jpg')
    })
}