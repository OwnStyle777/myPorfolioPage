var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation'), 
    renderer: 'svg',
    loop: true, 
    autoplay: true, 
    path: 'Animation - 1710184142718.json' 
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationCircle'), 
    renderer: 'svg',
    loop: true, 
    autoplay: true, 
    path: 'Animation - 1710245585401.json' 
});


document.getElementById("animationCircle").addEventListener("click", function() {
    var animationElement = document.getElementById("animationCircle");

    animationElement.classList.add("bounceAnimation");
    animationElement.style.animationPlayState = "running";

    // Zastavit animáciu po 1,5 sekundach
    setTimeout(function() {
        animationElement.style.animationPlayState = "paused";
        window.location.href = "home.html";
    }, 1500); 
});