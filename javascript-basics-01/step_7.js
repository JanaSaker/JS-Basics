function res(){
    let x= parseInt(document.getElementById("shoe_size").value)
    let year= parseInt(document.getElementById("year").value)
    let result=((((x*2+5)*50)-year)+1766)
    alert(result)
}