const nav = document.querySelector('nav');
window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop > 5){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
})