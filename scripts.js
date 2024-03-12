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
    // Získajte referenciu na prvok animácie
    var animationElement = document.getElementById("animationCircle");

    // Pridajte triedu pre animáciu posúvania sa doprava
    animationElement.classList.add("bounceAnimation");
    animationElement.style.animationPlayState = "running";

    // Zastavte animáciu po 1 sekunde
    setTimeout(function() {
        animationElement.style.animationPlayState = "paused";
    }, 4500); // 1000 milisekúnd = 1 sekunda
});

document.getElementById("aboutMe").addEventListener("click", function() {
    var myContent = document.getElementById("myContent");
    
    // Načítajte obsah z druhého dokumentu
    fetch('aboutMe.html')
        .then(response => response.text()) // Získať textový obsah odpovede
        .then(data => {
            // Nastaviť získaný obsah do prvku s ID "myContent"
            myContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Chyba pri načítavaní obsahu:', error);
        });
});
