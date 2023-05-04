window.addEventListener("load",function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display="block";
        }
    )
})
document.querySelector("#close").addEventListener("click",
function(){
    document.querySelector(".popup").style.display="none";
})