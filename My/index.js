for(var i=0; i,document.querySelectorAll(".clickbutton").length;i++){
    var button=document.querySelectoryAll(".clickbutton")[i];
    button.addEventListener("touchstart",function(){
        button.classList.add("signNext");
    });
    button.addEventListener("touchend",function(){
        button.classList.remove("signNext");
    });
}
