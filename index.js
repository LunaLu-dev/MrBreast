function loadingBar(){
    setTimeout(function(){
        document.getElementById("center-loading").style.display = "none";
        document.getElementById("page").style.display = "block";
    }, 0)
}
window.onload = loadingBar;
slider();

function slider(){
    setInterval(function(){
        const rnd = Math.floor(Math.random() * 7);
        const rnd2 = Math.floor(Math.random() * 7);
        document.getElementById("slider-img").src = "img/slider/" + rnd + ".webp";
        document.getElementById("slider-img2").src = "img/slider/" + rnd2 + ".webp";
    }, 2000)
}