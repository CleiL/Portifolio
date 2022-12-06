function mostrarMenu(){
    let Menu = document.getElementById("barraMenu")
    if(getComputedStyle(Menu).display == "none"){
        Menu.style.display = "flex";
    }else{
        Menu.style.display = "none";
    }
}