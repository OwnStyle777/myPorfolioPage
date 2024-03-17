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

    // Zastavit animáciu po 4,5 sekundach
    setTimeout(function() {
        animationElement.style.animationPlayState = "paused";
        window.location.href = "home.html";
    }, 4500); 
});

document.getElementById("aboutMe").addEventListener("click", function() {
    var myContent = document.getElementById("myContent");
    
    // Načítaj obsah z druhého dokumentu
    fetch('aboutMe.html')
        .then(response => response.text()) // Získať textový obsah odpovede
        .then(data => {
            // Nastaviť získaný obsah do prvku s ID "myContent"
            myContent.innerHTML = data;
            var lightbox = new SimpleLightbox('.gallery a', {});
        })
        .catch(error => {
            console.error('Chyba pri načítavaní obsahu:', error);
        });
    
});

document.getElementById("contacts").addEventListener("click", function() {
    var myContent = document.getElementById("myContent");
    
    // Načítaj obsah z druhého dokumentu
    fetch('contacts.html')
        .then(response => response.text()) // Získať textový obsah odpovede
        .then(data => {
            // Nastaviť získaný obsah do prvku s ID "myContent"
            myContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Chyba pri načítavaní obsahu:', error);
        });
    });
    
document.getElementById("myProjects").addEventListener("click", function() {
    var myContent = document.getElementById("myContent");
    
    // Načítaj obsah z druhého dokumentu
    fetch('myProjects.html')
        .then(response => response.text()) // Získať textový obsah odpovede
        .then(data => {
            // Nastaviť získaný obsah do prvku s ID "myContent"
            myContent.innerHTML = data;
            var lightbox = new SimpleLightbox('.gallery a', {});
        })
        .catch(error => {
            console.error('Chyba pri načítavaní obsahu:', error);
        });
    });
