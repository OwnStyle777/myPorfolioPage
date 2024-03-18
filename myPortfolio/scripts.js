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

var activeSection = "";

document.getElementById("aboutMe").addEventListener("click", function() {
    activeSection = "aboutMe";
    loadContent('aboutMe.html');
});

document.getElementById("contacts").addEventListener("click", function() {
    activeSection = "contacts";
    loadContent('contacts.html');
});

document.getElementById("myProjects").addEventListener("click", function() {
    activeSection = "myProjects";
    loadContent('myProjects.html');
});


function loadContent(page) {
    var myContent = document.getElementById("myContent");
    
    fetch(page)
        .then(response => response.text())
        .then(data => {
       
            myContent.innerHTML = data;
            changeLanguage();
             // Inicializovať SimpleLightbox pre nový obsah
             var lightbox = new SimpleLightbox('.gallery a', {});
        })
        .catch(error => {
            console.error('Chyba pri načítavaní obsahu:', error);
        });
}

document.getElementById("languageDropdown").addEventListener("change", function() {
   changeLanguage();
});
document.getElementById("languageDropdown").addEventListener("change", changeLanguage);

function changeLanguage() {
    var selectedLanguage = document.getElementById("languageDropdown").value;


    if(selectedLanguage === "sk"){
        var aboutMe = document.getElementById("aboutMe");
        var  contacts = document.getElementById("contacts");
        var myProjects = document.getElementById("myProjects");

            aboutMe.innerHTML = "O mne";
            contacts.innerHTML ="Kontakty";
            myProjects.innerHTML ="Moje projekty";
    switch (activeSection) {
        case "aboutMe":
            // Zmena jazyka pre sekciu "aboutMe"
            var skillsHeading = document.getElementById("skillsHeading");
            var resumeHeading = document.getElementById("resumeHeading");
            var certificationHeading = document.getElementById("certificationHeading");
            var aboutMeText = document.getElementById("aboutMeText");
            skillsHeading.innerHTML = `<span class="blueText">M</span>oje znalosti`;
            certificationHeading.innerHTML =`<span class="blueText">C</span>ertifikáty`;
            resumeHeading.innerHTML = `<span class="blueText">Ž</span>ivotopis`;
            aboutMeText.innerHTML = `<h1 class="textPar1"><span class="blueText">O</span> mne</h1>
            <p class="textPar">
                Venujem sa programovaniu od začiatku roku 2022. Môj prvý programovacií jazyk, ktorý som sa naučil bol Java. Mám veľmi rád objektovo orientované programovanie, ktorého základy som sa naučil v Jave.
                Na programovaní ma baví riešenie problémov ,rád sa učím nové technológie a počúvam IT podcasty. Medzi moje dalšie koníčky patrí turistika, varenie, skúšanie nových jedál. Špecializujem sa na programovanie v Jave,ale mám rád
                celý proces vývoja aplikácií, nie len back-end, ale mám skúsenosti aj front-endovou časťou  (HTML,CSS a JavaScriptom).
    </p>`;

            break;
        case "contacts":
            // Zmena jazyka pre sekciu "contacts"
            var  contactsHeading = document.getElementById("contactsHeading");
            var  contactsText = document.getElementById("contactsText");
            contactsHeading.innerHTML = "<span class='blueText'>K</span>ontakty</h1>";
            contactsText.innerHTML = "Neváhajte ma kedykoľvek kontaktovať.:<br><br>"
           
            break;
        case "myProjects":
            // Zmena jazyka pre sekciu "myProjects"
            var  insuranceSection = document.getElementById("insuranceSection");
            var  textEditorSection = document.getElementById("textEditorSection");
            var  learningProgressTrackerSection = document.getElementById("learningProgressTrackerSection");
            var contactsManager = document.getElementById("contactsManager");
            var textMyProjects = document.getElementById("textMyProjects");
            insuranceSection.innerHTML = `
            <h1 class='textPar1'><span class='blueText'>I</span>nsurance app</h1>
            <p class='textParMyProjects'>
                Insurance app je <b>webová platforma</b>, ktorá ponúka intuitívne používateľské rozhranie spolu s množstvom funkcií pre registrovaných používateľov.
                V aplikácii je implementovaná <b>registrácia , autentifikácia</b> klienta. Po úspešnom prihlásení získa používateľ prístup k intuitívnemu používateľskému rozhraniu.
                Toto používateľské rozhranie obsahuje <b>osobné informácie</b> a <b>podrobnosti o poistení</b>, ktoré sú uložené v databáze. Navigácia v rámci aplikácie je uľahčená prostredníctvom navigačných panelov umiestnených v hornej a bočnej časti rozhrania, ako aj rozbaľovacích menu pre rýchly prístup ku konkrétnym sekciám.
                Jednou z kľúčových funkcií insurance app je kalkulačka povinného zmluvného poistenia. Používatelia môžu zadať príslušné parametre a kalkulačka na základe poskytnutých údajov vypočíta priemernú cenu poistenia.
                V tejto aplikácii je tiež možné zmeniť osobné údaje alebo <b>pridať vlastný profilový obrázok</b>.
                Na zlepšenie používateľského zážitku, používatelia majú možnosť si zvoliť na základe svojich preferencií  farebný režim <b>light</b>  alebo <b>dark</b>. 
                Zaistenie <b>bezpečnosti</b> používateľských údajov je najvyššou prioritou. <b>Heslá sú pred uložením do databázy bezpečne hašované</b>, aby sa predišlo riziku neoprávneného prístupu a zabezpečila sa integrita a dôvernosť údajov.<br>
                <br><a href='https://insuranceapp-c0f26cd87cca.herokuapp.com/Insurance/login' style='font-size: 20px;'>InsuranceApp - webová stránka</a><br>
                <br><a href='https://github.com/OwnStyle777/insuranceApp' style='font-size: 20px;'>Github repozitár</a>     
                <div class='gallery'>
                    <a href='images/insurance1.png'><img src='images/insurance1.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance2.png'><img src='images/insurance2.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance3.png'><img src='images/insurance3.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance4.png'><img src='images/insurance4.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance5.png'><img src='images/insurance5.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance6.png'><img src='images/insurance6.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance7.png'><img src='images/insurance7.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance8.png'><img src='images/insurance8.png' class='gallerySize' alt='' title=''/></a>
                    <a href='images/insurance9.png'><img src='images/insurance9.png' class='gallerySize' alt='' title=''/></a>                    
                </div>
            </p>`;
            textEditorSection.innerHTML = `
            <h1 class="textPar1"><span class="blueText">T</span>ext editor</h1>
            <p class="textParMyProjects">
                Text editor je <b>desktopová aplikácia</b>, vytvorená vo <b>Swingu</b>. Aplikácia ponúka jednoduché UI, kde používatelia môžu editovať odstavce textu.
                Je možné vyhľadávať pomocou <b>vloženej frázy</b>, program následne nájde slová v texte, ktoré sa zhodujú s vloženou frázou. Pri vyhľadávaní v texte je taktiež možné
                používať aj <b>regulárne výrazy</b>. Používatelia majú možnosť uložiť a načítať textové dokumenty zo svojho počítača.<br>
                <br><a href="https://github.com/OwnStyle777/textEditor" style="font-size: 20px;">Github repozitár</a>          
                <div class="gallery">
                    <a href="images/example.png"><img src="images/example.png" class="gallerySize" alt="" title=""/></a>
                </div>
            </p>`;
            learningProgressTrackerSection.innerHTML = `
            <h1 class="textPar1"><span class="blueText">L</span>earning progress tracker</h1>
            <p class="textParMyProjects">
                Program je zameraný na <b>sledovanie učebného progresu</b> a získavaní informácií o jednotlivých kurzoch a študentoch. Program má niekoľko funkcií, ktoré sú vysvetlené nižšie.
                <br><b>Príkaz "add students"</b>: Tento príkaz, najskôr overí správnosť údajov študentov (meno, priezvisko, email). Keď bolo overenie správne, program pridá študenta do mapy študentov s automaticky vygenerovaným unikátnym ID. Na konci zobrazí počet pridaných študentov.
                <br><b>Príkaz "list"</b>: Tento príkaz zobrazí list študentov s ich ID špecifikátormi.
                <br><b>Príkaz "add points"</b>: Môžeš pridať body, pomocou unikátneho ID do jednotlivých kurzov. V programe sa nachádzajú 4 kurzy, (Java, DSA, Databases, Spring). V takomto formáte, ID začína od 10000, potom nasledujú body pre jednotlivé kurzy (napr., 20 25 0 60). Prvé číslo je id , začínajúce od 10000.
                <br><b>Príkaz "find"</b>: Môžes nájsť študenta pomocou jeho id a pozrieť si body,ktoré získal v jednotlivých kurzoch.
                <br><b>Príkaz "statistics"</b>: Najskôr, príkaz zobrazí kategórie kurzov:
                <br><b>Popularity</b>: Závisí na počte zapísaných študentov.<br>
                <b>Activity</b>: Závisí na počte bodových príspevkov (points added)<br> 
                <b>Complexity</b>: Závisí na celkovom počte získaných bodov.<br>
                Keď vidíš túto tabuľku, môžeš získať deatilné informácie o každom kurze v tabuľke. Môžeš vidieť zapísaných študentov v jednotlivých kurzoch, ich body a učebný progres v %. Táto tabuľka je zoradená, na základe bodov zostupnom poradí.
                <br><b>Príkaz "notify"</b>: Oznámz každému študentovi, ktorý úspešne ukončil kurz. Pošle notifikačnú správu s menom študenta a ukončeným kurzom. Na konci sa zobrazí počet, študentov ktorým bola poslaná notifikačný správa.<br>
                <br><a href="https://github.com/OwnStyle777/learningProgressTracker" style="font-size: 20px;">GitHub repozitár</a>
            </p>`;
            contactsManager.innerHTML=`
            <h1 class="textPar1"><span class="blueText">C</span>ontacts manager</h1>
            <p class="textParMyProjects">
                Je to konzolová aplikácia, ktorá pomáha <b>lepšie spravovať kontakty</b>. Program ponúka množstvo užitočných funkcií popísaných nižšie. 
                <br><b>Add funkcia</b>: Výber tohto príkazu umožňuje pridať do zoznamu dva rôzne typy záznamov: osobu a organizáciu. Program overí formát čísla a pridá ho do  zoznamu.
                <br><b>List funkcia</b>: Táto funkcia zobrazuje zoznam záznamov v poradí, v akom boli pridané. Môžete si vybrať záznam podľa jeho čísla a zobraziť kontaktné informácie. Ak ide o osobu (meno, priezvisko, dátum narodenia, pohlavie, číslo, dátum vytvorenia, úpravy), alebo ide o organizáciu (názov organizácie, adresa, číslo). Môžete tiež upraviť každé pole záznamu alebo vymazať vybraný záznam.
                <br><b>Search funkcia</b>: Môžete zadať dotaz a program nájde záznamy, ktoré dotaz obsahujú. Môžete zadať aj číslo a program nájde záznamy s týmto číslom. Táto funkcia umožňuje aj úpravy a mazanie.
                <br><b>Count funkcia</b>: Môžete skontrolovať, koľko záznamov je momentálne v zozname.
                <br><b>Save a Load</b>: Zoznam môžete uložiť alebo načítať podľa mena.</br>
                <br><a href="https://github.com/OwnStyle777/contactsManager" style="font-size: 20px;">Github repozitár</a>
            </p>`;
            textMyProjects.innerHTML =`
            Pre viac mojich projektov, môžeš pozrieť na môj  <a href="https://github.com/OwnStyle777" target="blank">
            Github <svg class="svgIcon">
                <use xlink:href="icons.svg#gitHub" />
            </svg></a>`;
        
            break;
        default:
            // Prípad, keď nie je žiadna sekcia označená ako aktívna
            var  welcomeText = document.getElementById("welcomeText");
            var  nameText = document.getElementById("nameText");
            
           
            welcomeText.innerHTML=`<span style="font-weight: 600;"><span class="blueText">V</span>itajte na  stránke môjho</span> portfólia,`;
            nameText.innerHTML = `<span style="font-weight: 500;">Volám sa </span><span class="blueText">M</span>artin`;
            positionText.innerHTML= `<span class='blueText'>J</span>ava developer</h1>`;
            break;
    } 
}
else if (selectedLanguage ==="en"){
    var aboutMe = document.getElementById("aboutMe");
    var  contacts = document.getElementById("contacts");
    var myProjects = document.getElementById("myProjects");
    aboutMe.innerHTML = "About me";
        contacts.innerHTML ="Contacts";
        myProjects.innerHTML ="My projects";
       
switch (activeSection) {
    case "aboutMe":
        // Zmena jazyka pre sekciu "aboutMe"
        var skillsHeading = document.getElementById("skillsHeading");
        var resumeHeading = document.getElementById("resumeHeading");
        var certificationHeading = document.getElementById("certificationHeading");
        var aboutMeText = document.getElementById("aboutMeText");
        skillsHeading.innerHTML = `<span class="blueText">M</span>y skills`;
        certificationHeading.innerHTML =`<span class="blueText">C</span>ertification`;
        resumeHeading.innerHTML = `<span class="blueText">R</span>esume`;
        aboutMeText.innerHTML = `<h1 class="textPar1"><span class="blueText">A</span>bout me</h1>
        <p class="textPar">
        I do programming since a year 2022 . My first programming language in which I learned to code was Java. I very like object oriented programming ,and i learned this principles in Java.
        I like problem solving and creative part of programming, learning new technologies listening It podcasts. Between my another hobbies belongs hiking , cooking and tasting various food.
        My specialization is in Java ,but i like the whole process of app development , not just back-end i have experience also with Html, Css and Js.
    </p>`;

        break;
    case "contacts":
        // Zmena jazyka pre sekciu "contacts"
        var  contactsHeading = document.getElementById("contactsHeading");
        var  contactsText = document.getElementById("contactsText");
        contactsHeading.innerHTML = "<span class='blueText'>C</span>ontacts</h1>";
        contactsText.innerHTML = "Feel free to contact me anytime. You can reach out to me at:<br><br>"
       
        break;
    case "myProjects":
        // Zmena jazyka pre sekciu "myProjects"
        var  insuranceSection = document.getElementById("insuranceSection");
        var  textEditorSection = document.getElementById("textEditorSection");
        var  learningProgressTrackerSection = document.getElementById("learningProgressTrackerSection");
        var contactsManager = document.getElementById("contactsManager");
        var textMyProjects = document.getElementById("textMyProjects");
        insuranceSection.innerHTML = `
        <h1 class="textPar1"><span class="blueText">I</span>nsurance app</h1>
                <p class="textParMyProjects">
                    The Insurance Application is a <b>web-based platform</b> that offers an intuitive user interface along with a range of features for registered users.
                    In application is implemented <b>registration , authentification</b> of client.<br> After succesfull sign-in , user gain acces to intuitive UI .
                    This UI includes <b>personal information</b> and <b>insurance details</b>  from the database.<br> Navigation within the application is facilitated through intuitive menus located at the top and side of the interface, as well as dropdown menus for quick access to specific sections.
                    One of the key features of the Insurance Application is the liability insurance calculator. Users can input relevant parameters, and the calculator computes the average price of insurance based on the provided data.
                    In this application is also possible to change personal data or <b>update your own profile picture</b>.<br>
                    To enhance user experience and accessibility, the application offers support for both <b> and dark color modes</b>. Users have the flexibility to customize their preferred color scheme based on their preferences and viewing conditions.
                    Ensuring the <b>security</b>of user data is a top priority. <b>Passwords are securely hashed</b> before being stored in the database, to prevent the risk of unauthorized access and ensuring data integrity and confidentiality.<br>
                    <br><a href="https://insuranceapp-c0f26cd87cca.herokuapp.com/Insurance/login" style="font-size: 20px;">InsuranceApp - website</a><br>
                    <br><a href="https://github.com/OwnStyle777/insuranceApp" style="font-size: 20px;">Github repository</a>     
                    <div class="gallery">
                        <a href="images/insurance1.png"><img src="images/insurance1.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance2.png"><img src="images/insurance2.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance3.png"><img src="images/insurance3.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance4.png"><img src="images/insurance4.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance5.png"><img src="images/insurance5.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance6.png"><img src="images/insurance6.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance7.png"><img src="images/insurance7.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance8.png"><img src="images/insurance8.png" class="gallerySize" alt="" title=""/></a>
                        <a href="images/insurance9.png"><img src="images/insurance9.png" class="gallerySize" alt="" title=""/></a>                    
                    </div>
                </p>`;
        textEditorSection.innerHTML = `
        <h1 class="textPar1"><span class="blueText">T</span>ext editor</h1>
        <p class="textParMyProjects">
        Text editor is <b>desktop application</b>, created in <b>Swing</b> . Application provides simple UI, users can edit paragraphs of text.
        Is possible to search<b> by entered phrase</b>, and program found matches with the phrase in the text. In your searching you can use also
        <b>regular expression</b>, save and load text files in your PC.<br>
        <br><a href="https://github.com/OwnStyle777/textEditor" style="font-size: 20px;">Github repository</a>          
        <div class="gallery">
            <a href="images/example.png"><img src="images/example.png" class="gallerySize" alt="" title=""/></a>
        </div>
    </p>`;
        learningProgressTrackerSection.innerHTML = `
        <h1 class="textPar1"><span class="blueText">L</span>earning progress tracker</h1>
        <p class="textParMyProjects">
            This program is about <b>tracking the learning progress</b> and obtaining information about specific courses and students. The program has several features, explained below.
            <br><b>Command "add students"</b>: This command firstly validates students' credentials (first name, second name, email address). If the validation is correct, it adds students to a map of students with unique IDs automatically generated. At the end, it prints the amount of added students.
            <br><b>Command "list"</b>: This command simply shows a list of students with their ID specifiers.
            <br><b>Command "add points"</b>: You can add points using a unique ID to specific courses. In this program, we have four courses (Java, DSA, Databases, Spring). In this format, the ID starts at 10000, followed by points for each course (e.g., 20 25 0 60). The first number is the ID, starting from 10000.
            <br><b>Command "find"</b>: You can find a student by their ID and view the points they have gained in every course.
            <br><b>Command "statistics"</b>: First, it shows you categories of courses:
            <br><b>Popularity</b>: Depends on the number of enrolled students. Activity: Depends on the number of contributions (points added). Complexity: Depends on the total points gained. When you see this table, you can obtain detailed information about every course in the table. You can see enrolled students in a specific course, their points, and their learning progress in %. This table is sorted by points in descending order.
            <br><b>Command "notify"</b>: Notifies every student who has successfully completed a course. It sends a notification message with the name of the student and the completed course. At the end, it prints the number of notified students.<br>
            <br><a href="https://github.com/OwnStyle777/learningProgressTracker" style="font-size: 20px;">GitHub repository</a>
        </p>`;
        contactsManager.innerHTML=`
        <h1 class="textPar1"><span class="blueText">C</span>ontacts manager</h1>
            <p class="textParMyProjects">
                It is console application, which helps you <b>better manage your contacts</b>. The program offers a range of useful functions described below.Add function: 
                <br><b>Add function</b>:Choosing this command allows you to add two different types of records to your list: person and organization. The program validates the number format and adds it to your list.
                <br><b>List function</b>: This function displays your list of records in the order they were added. You can select a record by its number and view contact information. If it's a person (name, surname, birth date, gender, number, date created, edited), or if it's an organization (organization name, address, number). You can also edit every field of the record or delete the chosen record.
                <br><b>Search function</b>: You can enter a query, and the program will find records that contain the query. You can also enter a number, and the program will find records with that number. This function also allows for editing and deleting.
                <br><b>Count function</b>: You can check how many records are currently in the list.
                <br><b>Save and Load</b>: You can save and load the list by name.</br>
                <br><a href="https://github.com/OwnStyle777/contactsManager" style="font-size: 20px;">Github repository</a>
            </p>`;
        textMyProjects.innerHTML =`
        For more of my projects you can check my <a href="https://github.com/OwnStyle777" target="blank">
        Github <svg class="svgIcon">
            <use xlink:href="icons.svg#gitHub" />
        </svg></a>`;
    
        break;
    default:
        // Prípad, keď nie je žiadna sekcia označená ako aktívna
        var  welcomeText = document.getElementById("welcomeText");
        var  nameText = document.getElementById("nameText");
        var positionText = document.getElementById("positionText");
        welcomeText.innerHTML=`<span style="font-weight: 600;"><span class="blueText">W</span>elcome to my</span> portfolio page`;
        nameText.innerHTML = `<span style="font-weight: 600;">My name is </span><span class="blueText">M</span>artin`;
        positionText.innerHTML= `<span class='blueText'>J</span>ava developer</h1>`;
        break;
    }
} 
}
