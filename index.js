function loadingBar(){
    setTimeout(function(){
        document.getElementById("center-loading").style.display = "none";
        document.getElementById("page").style.display = "block";
    }, 3000)
}
window.onload = loadingBar;
slider();

function slider(){
    setInterval(function(){
        const rnd = Math.floor(Math.random() * 7);
        document.getElementById("slider-img").src = "img/slider/" + rnd + ".webp";
    }, 3000)
}