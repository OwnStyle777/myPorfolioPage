
//listeners for each section
let activeSection = "";

document.getElementById("aboutMe").addEventListener("click", function() {
    document.getElementById("loading-screen").style.display = "block";
    activeSection = "aboutMe";
    loadContent('aboutMe.html');
    
});

document.getElementById("contacts").addEventListener("click", function() {
    activeSection = "contacts";
    document.getElementById("loading-screen").style.display = "block";
    loadContent('contacts.html');
});

document.getElementById("myProjects").addEventListener("click", function() {
    activeSection = "myProjects";
    document.getElementById("loading-screen").style.display = "block";
    loadContent('myProjects.html');
    

});

//load content logic
function loadContent(page) {
    let myContent = document.getElementById("myContent");
    let loadingScreen = document.getElementById("loading-screen");
    let loadingIcon = document.querySelector(".loading-icon");
    

    loadingScreen.style.display = "block";
    loadingIcon.classList.add("loading-iconSmall");
    
    fetch(page)
        .then(response => response.text())
        .then(data => {
            myContent.innerHTML = data;
            
            myContent.style.display = "block"; 
            
            changeLanguage();
           let lightbox = new SimpleLightbox('.gallery a', {});
            setTimeout(function() {
                loadingScreen.style.display = "none";
            }, 1000);
        
        })
        .catch(error => {
            console.error('Loading failed:', error);
        });


        

}

//loading screen animation
document.onreadystatechange = function () {
    if (document.readyState !== 'complete') {
        document.getElementById("loading-screen").style.display = "block";
    } else {
        setTimeout(function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("myContent").style.display = "block";
        }, 100);
    }
};

// listener, on change language
document.getElementById("languageDropdown").addEventListener("change", changeLanguage);

//translation logic

function changeLanguage() {
    let selectedLanguage = document.getElementById("languageDropdown").value;


    if(selectedLanguage === "sk"){
        let aboutMe = document.getElementById("aboutMe");
        let  contacts = document.getElementById("contacts");
        let myProjects = document.getElementById("myProjects");

            aboutMe.innerHTML = "O mne";
            contacts.innerHTML ="Kontakty";
            myProjects.innerHTML ="Moje projekty";
    switch (activeSection) {
        case "aboutMe":
            // Zmena jazyka pre sekciu "aboutMe"
            let skillsHeading = document.getElementById("skillsHeading");
            let resumeHeading = document.getElementById("resumeHeading");
            let certificationHeading = document.getElementById("certificationHeading");
            let aboutMeText = document.getElementById("aboutMeText");
            skillsHeading.innerHTML = `<span class="blueText">Moje znalosti</span>`;
            certificationHeading.innerHTML =`<span class="blueText">Certifikáty</span>`;
            resumeHeading.innerHTML = `<span class="blueText">Životopis</span>`;
            aboutMeText.innerHTML = `<h1 class="textPar1"><span class="blueText">O mne</span></h1>
            <p class="textPar">
            Som <b>java developer</b> samouk, programovaniu sa venujem od roku <b>2022</b>. Zaujalo ma <b>objektovo-orientované programovanie</b>, ktorého princípy som sa naučil v Jave. Špecializujem sa na programovanie v Jave, ale zaujal ma <b>proces vývoja celej aplikácie</b> , nielen back-endu.
            Mám skúsenosti aj s <b>full-stack projektami.</b> Mám rád <b>problem-solving</b> a kreatívny aspekt programovania , tiež ma baví spoznávať nové technológie počúvaním IT podcastov.
            </p>`;

            break;
        case "contacts":
            // Zmena jazyka pre sekciu "contacts"
            let  contactsHeading = document.getElementById("contactsHeading");
            let  contactsText = document.getElementById("contactsText");
            let contactForm = document.getElementById("form");
            let contactsHeading1 = document.getElementById("contactsHeading1");
            contactsHeading.innerHTML = "<span class='blueText'>Kontakty</span></h1>";
            contactsText.innerHTML = "Neváhajte ma kedykoľvek kontaktovať.<br><br>";
            contactsHeading1.innerHTML= `Kontaktný formulár`;
            contactForm.innerHTML = `
           
                    <input class="inputStyles" type="text" name="name" placeholder="Meno" required>
                    <input class="inputStyles" type="email" name="_replyto" placeholder="Email" required>
                    <input class="inputStyles" type="text" name="_subject" placeholder="Predmet">
                    <textarea id ="textArea" class="inputStyles" name="message"  placeholder="Tvoja správa" required></textarea>
                    <button class="buttonStyle2" type="submit">Poslať</button>
        `
            
            break;
        case "myProjects":
            // Zmena jazyka pre sekciu "myProjects"
            let insuranceSection = document.getElementById("insuranceSection");
            let  textEditorSection = document.getElementById("textEditorSection");
            let  learningProgressTrackerSection = document.getElementById("learningProgressTrackerSection");
            let contactsManager = document.getElementById("contactsManager");
            let qrCodeSection = document.getElementById("qrCodeApiSection");
            let textMyProjects = document.getElementById("textMyProjects");
           //change all gallery headings to Galéria
            let galleriesH = document.querySelectorAll(".galleryH");
        galleriesH.forEach((element) => {
            element.innerText = "Galéria";
        });
        //change all repositoryButton classes to repositoryButtonSk
        let repositoryClasses = document.querySelectorAll(".repositoryButton");
        repositoryClasses.forEach((element)=>{
            element.classList.remove("repositoryButton");
            element.classList.add("repositoryButtonSk");
        });
        //change all websiteButton classes to websiteButtonSk
        let websiteClass = document.querySelectorAll(".websiteButton");
        websiteClass.forEach((element)=>{
            element.classList.remove("websiteButton");
            element.classList.add("websiteButtonSk");
        });
        //change all descriptionButton classes to descriptionButtonSk
        let descriptionClass = document.querySelectorAll(".descriptionButton");
        descriptionClass.forEach((element)=>{
            element.classList.remove("descriptionButton");
            element.classList.add("descriptionButtonSk");
        });

                    //listners for arrows
                document.getElementById("downArrow").addEventListener("click", function(){moveDownArrow()});
               document.getElementById("leftArrow").addEventListener("click", function() { moveLeftArrow("insuranceGallery");});
               document.getElementById("rightArrow").addEventListener("click", function() { moveRightArrow("insuranceGallery");});

        
         //listners for arrows
         document.getElementById("leftArrow1").addEventListener("click", function() { moveLeftArrow("textEditorGallery");});
         document.getElementById("rightArrow1").addEventListener("click", function() { moveRightArrow("textEditorGallery");});

           
    document.getElementById("leftArrow2").addEventListener("click", function() { moveLeftArrow("trackerGallery");});
    document.getElementById("rightArrow2").addEventListener("click", function() { moveRightArrow("trackerGallery");});


        document.getElementById("leftArrow3").addEventListener("click", function() { moveLeftArrow("contactsGallery");});
        document.getElementById("rightArrow3").addEventListener("click", function() { moveRightArrow("contactsGallery");});

        document.getElementById("leftArrow4").addEventListener("click", function() { moveLeftArrow("qrCodeGallery");});
        document.getElementById("rightArrow4").addEventListener("click", function() { moveRightArrow("qrCodeGallery");});
        

            textMyProjects.innerHTML =`
            Pre viac mojich projektov, môžeš pozrieť na môj  <a href="https://github.com/OwnStyle777" target="blank">
            Github <svg class="svgIcon">
                <use xlink:href="icons.svg#gitHub" />
            </svg></a>`;
        
            break;
        default:
            // Prípad, keď nie je žiadna sekcia označená ako aktívna
            let  welcomeText = document.getElementById("welcomeText");
            let  nameText = document.getElementById("nameText");
            let positionText = document.getElementById("positionText");
            welcomeText.innerHTML=`Vitajte na stránke môjho <b>portfólia</b>`;
            nameText.innerHTML = `Moje meno je <span style="color: #006fca;">Martin</span>`;
            positionText.innerHTML= `Som <b>softvér developer</b> so špecializáciou v jave, ale tiež aj so skúsenosťami s front-endom`;
            break;
    } 
}
else if (selectedLanguage ==="en"){
    let aboutMe = document.getElementById("aboutMe");
    let  contacts = document.getElementById("contacts");
    let myProjects = document.getElementById("myProjects");
    aboutMe.innerHTML = "About me";
        contacts.innerHTML ="Contacts";
        myProjects.innerHTML ="My projects";
       
switch (activeSection) {
    case "aboutMe":
        // Zmena jazyka pre sekciu "aboutMe"
        let skillsHeading = document.getElementById("skillsHeading");
        let resumeHeading = document.getElementById("resumeHeading");
        let certificationHeading = document.getElementById("certificationHeading");
        let aboutMeText = document.getElementById("aboutMeText");
        skillsHeading.innerHTML = `<span class="blueText">My skills</span>`;
        certificationHeading.innerHTML =`<span class="blueText">Certification</span>`;
        resumeHeading.innerHTML = `<span class="blueText">Resume</span>`;
        aboutMeText.innerHTML = `<h1 class="textPar1"><span class="blueText">About me</span></h1>
        <p class="textPar">
        I'm self taught <b>java developer</b>, I have been programming since the year <b>2022</b>.  I really enjoy <b>object-oriented programming</b>, and I learned these principles in Java. My specialization is in Java, but I enjoy the <b>entire app development process</b>, not just back-end. I also have experience with <b>full-stack projects.</b> I like <b>problem-solving</b> and the creative aspect of programming, and I also enjoy learning about new technologies by listening to IT podcasts.
    </p>`;

        break;
    case "contacts":
        // Zmena jazyka pre sekciu "contacts"
        let  contactsHeading = document.getElementById("contactsHeading");
        let  contactsText = document.getElementById("contactsText");
        let contactForm = document.getElementById("form");
        let contactsHeading1 = document.getElementById("contactsHeading1");
        contactsHeading.innerHTML = "<span class='blueText'>Contacts</span></h1>";
        contactsText.innerHTML = "Feel free to contact me anytime. You can reach out to me at:<br><br>";
        contactsHeading1.innerHTML = `Contact form`;
        contactForm.innerHTML =`
                <input class="inputStyles" type="text" name="name" placeholder="Your name" required>
                <input class="inputStyles" type="email" name="_replyto" placeholder="Your email" required>
                <input class="inputStyles" type="text" name="_subject" placeholder="Subject">
                <textarea id ="textArea" class="inputStyles" name="message" placeholder="Your message" required></textarea>
                <button class="buttonStyle2" type="submit">Send</button>
        `;
       
        break;
    case "myProjects":
        // Zmena jazyka pre sekciu "myProjects"
        let  insuranceSection = document.getElementById("insuranceSection");
        let  textEditorSection = document.getElementById("textEditorSection");
        let  learningProgressTrackerSection = document.getElementById("learningProgressTrackerSection");
        let contactsManager = document.getElementById("contactsManager");
        let textMyProjects = document.getElementById("textMyProjects");
        let galleriesH = document.querySelectorAll(".galleryH");
        galleriesH.forEach((element) => {
            element.innerText = "Gallery";
        });
        let repositoryClasses = document.querySelectorAll(".repositoryButtonSk");
        repositoryClasses.forEach((element)=>{
            element.classList.remove("repositoryButtonSk");
            element.classList.add("repositoryButton");
        });

            //change all websiteButtonsk classes to websiteButton
            let websiteClass = document.querySelectorAll(".websiteButtonSk");
            websiteClass.forEach((element)=>{
                element.classList.remove("websiteButtonSk");
                element.classList.add("websiteButton");
            });
            //change all descriptionButtonsk classes to descriptionButton
            let descriptionClass = document.querySelectorAll(".descriptionButtonSk");
            descriptionClass.forEach((element)=>{
                element.classList.remove("descriptionButtonSk");
                element.classList.add("descriptionButton");
            });
               //listners for arrows
               document.getElementById("downArrow").addEventListener("click", function(){moveDownArrow()});
               document.getElementById("leftArrow").addEventListener("click", function() { moveLeftArrow("insuranceGallery");});
               document.getElementById("rightArrow").addEventListener("click", function() { moveRightArrow("insuranceGallery");});
                //listnerner for description button
                let insuranceDescButton = document.getElementById("insuranceDescButton");
                    insuranceDescButton.addEventListener("click", showInsuranceDesc);
                    insuranceDescButton.addEventListener("click", function() {
                        insuranceDesc.style.borderTop = "1px solid #006fca";
                        insuranceDesc.style.borderBottom = "1px solid #006fca"; 
                    });
        
         //listners for arrows
         document.getElementById("leftArrow1").addEventListener("click", function() { moveLeftArrow("textEditorGallery");});
         document.getElementById("rightArrow1").addEventListener("click", function() { moveRightArrow("textEditorGallery");});

         let textEditorDescButton = document.getElementById("textEditorDescButton");
        textEditorDescButton.addEventListener("click", showTextEditorDesc);
        textEditorDescButton.addEventListener("click", function() {
            textEditorDesc.style.borderTop = "1px solid #006fca";
            textEditorDesc.style.borderBottom = "1px solid #006fca"; 
        });

        
    document.getElementById("leftArrow2").addEventListener("click", function() { moveLeftArrow("trackerGallery");});
    document.getElementById("rightArrow2").addEventListener("click", function() { moveRightArrow("trackerGallery");});

    let trackerDescButton = document.getElementById("trackerDescButton");
    trackerDescButton.addEventListener("click", showTrackerDesc);
    trackerDescButton.addEventListener("click", function() {
        trackerDesc.style.borderTop = "1px solid #006fca";
        trackerDesc.style.borderBottom = "1px solid #006fca"; 
    });
     

        document.getElementById("leftArrow3").addEventListener("click", function() { moveLeftArrow("contactsGallery");});
        document.getElementById("rightArrow3").addEventListener("click", function() { moveRightArrow("contactsGallery");});

        let contactsDescButton = document.getElementById("contactsDescButton");
        contactsDescButton.addEventListener("click", showContactsDesc);
        contactsDescButton.addEventListener("click", function() {
            contactsDesc.style.borderTop = "1px solid #006fca";
            contactsDesc.style.borderBottom = "1px solid #006fca"; 
        });

        document.getElementById("leftArrow4").addEventListener("click", function() { moveLeftArrow("qrCodeGallery");});
        document.getElementById("rightArrow4").addEventListener("click", function() { moveRightArrow("qrCodeGallery");});

        let qrCodeDescButton = document.getElementById("qrCodeDescButton");
        qrCodeDescButton.addEventListener("click", showQrCodeDesc);
        qrCodeDescButton.addEventListener("click", function() {
            qrCodeDesc.style.borderTop = "1px solid #006fca";
            qrCodeDesc.style.borderBottom = "1px solid #006fca";
            qrCodeDesc.style.width= "100%";

        });




        textMyProjects.innerHTML =`
        For more of my projects you can check my <a href="https://github.com/OwnStyle777" target="blank">
        Github <svg class="svgIcon">
            <use xlink:href="icons.svg#gitHub" />
        </svg></a>`;
    
        break;
    default:
        let  welcomeText = document.getElementById("welcomeText");
        let  nameText = document.getElementById("nameText");
        let positionText = document.getElementById("positionText");
        welcomeText.innerHTML=`Welcome to my <b>portfolio</b> page`;
        nameText.innerHTML = `My name is <span style="color: #006fca;" >Martin</span>`;
        positionText.innerHTML= `I'm <b>software developer</b> with specialitization in java, but also with front-end experience.`;
        break;
    }
} 
}

//functionalities ,which show description of each project

function showInsuranceDesc() {
    isInsuranceDescShown = true;
    let insuranceDesc = document.getElementById("insuranceDesc");
    let selectedLanguage = document.getElementById("languageDropdown").value;
    if(selectedLanguage === "en"){
    insuranceDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton" class="material-icons-outlined closeButton">close</span><br><br>
            The Insurance Application is a <b>web-based platform</b> that offers an intuitive user interface along with a range of features for registered users.
            In application is implemented <b>registration , authentification</b> of client.<br> After succesfull sign-in , user gain acces to intuitive UI .
            This UI includes <b>personal information</b> and <b>insurance details</b>  from the database.<br> Navigation within the application is facilitated through intuitive menus located at the top and side of the interface, as well as dropdown menus for quick access to specific sections.
            One of the key features of the Insurance Application is the liability insurance calculator. Users can input relevant parameters, and the calculator computes the average price of insurance based on the provided data.
            In this application is also possible to change personal data or <b>update your own profile picture</b>.<br>
            To enhance user experience and accessibility, the application offers support for both <b> and dark color modes</b>. Users have the flexibility to customize their preferred color scheme based on their preferences and viewing conditions.
            Ensuring the <b>security</b> of user data is a top priority. <b>Passwords are securely hashed</b> before being stored in the database, to prevent the risk of unauthorized access and ensuring data integrity and confidentiality.<br>

            <br><span class="technologies">Technologies: </span><span class="usedTechnologies">Java, Springboot, Hibernate, PostgreSQL, HTML, CSS, JavaScript, Bootstrap</span>
        </p>`;

    }else if(selectedLanguage === "sk"){
        insuranceDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton" class="material-icons-outlined closeButton">close</span><br><br>
        Insurance app je <b>webová platforma</b>, ktorá ponúka intuitívne používateľské rozhranie spolu s množstvom funkcií pre registrovaných používateľov.
        V aplikácii je implementovaná <b>registrácia , autentifikácia</b> klienta. Po úspešnom prihlásení získa používateľ prístup k intuitívnemu používateľskému rozhraniu.
        Toto používateľské rozhranie obsahuje <b>osobné informácie</b> a <b>podrobnosti o poistení</b>, ktoré sú uložené v databáze. Navigácia v rámci aplikácie je uľahčená prostredníctvom navigačných panelov umiestnených v hornej a bočnej časti rozhrania, ako aj rozbaľovacích menu pre rýchly prístup ku konkrétnym sekciám.
        Jednou z kľúčových funkcií insurance app je kalkulačka povinného zmluvného poistenia. Používatelia môžu zadať príslušné parametre a kalkulačka na základe poskytnutých údajov vypočíta priemernú cenu poistenia.
        V tejto aplikácii je tiež možné zmeniť osobné údaje alebo <b>pridať vlastný profilový obrázok</b>.
        Na zlepšenie používateľského zážitku, používatelia majú možnosť si zvoliť na základe svojich preferencií  farebný režim <b>light</b>  alebo <b>dark</b>. 
        Zaistenie <b>bezpečnosti</b> používateľských údajov je najvyššou prioritou. <b>Heslá sú pred uložením do databázy bezpečne hašované</b>, aby sa predišlo riziku neoprávneného prístupu a zabezpečila sa integrita a dôvernosť údajov.<br>
        <br><span class="technologies">Technológie: </span><span class="usedTechnologies">Java, Springboot, Hibernate, PostgreSQL, HTML, CSS, JavaScript, Bootstrap</span>
        </p>`;


    }
    let closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function() {
        isInsuranceDescShown = false;
        insuranceDesc.innerHTML = ""; 
        insuranceDesc.style.border = "none";
    });
  
}


let istextEditorDescShown = false;
let isInsuranceDescShown = false;
let isQrCodeDescShown = false;
let isTrackerDescShown = false;
let isContactsDescShown = false;
document.getElementById("languageDropdown").addEventListener("change", function() {
 
    if(istextEditorDescShown === true){
        showTextEditorDesc();
    }
    if(isInsuranceDescShown === true){
        showInsuranceDesc();
    }
    if(isQrCodeDescShown === true){
        showQrCodeDesc();
    }
    if(isTrackerDescShown === true){
        showTrackerDesc();
    }
    if(isContactsDescShown === true){
        showContactsDesc();
    }
   
});

function showTextEditorDesc() {
    istextEditorDescShown = true;
    let textEditorDesc = document.getElementById("textEditorDesc");
   let selectedLanguage = document.getElementById("languageDropdown").value;
    if(selectedLanguage === "en"){
        textEditorDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton1" class="material-icons-outlined closeButton">close</span><br><br>
        Text editor is <b>desktop application</b>, created in <b>Swing</b> . Application provides simple UI, users can edit paragraphs of text.
        Is possible to search<b> by entered phrase</b>, and program found matches with the phrase in the text. In your searching you can use also
        <b>regular expression</b>, save and load text files in your PC.<br> 
        <br><span class="technologies">Technologies: </span><span class="usedTechnologies">Java, Swing</span>       
        </p>`;

    }else if(selectedLanguage === "sk"){
        textEditorDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton1" class="material-icons-outlined closeButton">close</span><br><br>
        Text editor je <b>desktopová aplikácia</b>, vytvorená vo <b>Swingu</b>. Aplikácia ponúka jednoduché UI, kde používatelia môžu editovať odstavce textu.
        Je možné vyhľadávať pomocou <b>vloženej frázy</b>, program následne nájde slová v texte, ktoré sa zhodujú s vloženou frázou. Pri vyhľadávaní v texte je taktiež možné
        používať aj <b>regulárne výrazy</b>. Používatelia majú možnosť uložiť a načítať textové dokumenty zo svojho počítača.<br>   
        <br><span class="technologies">Technológie: </span><span class="usedTechnologies">Java, Swing</span>    
        </p>`;


    }
    let closeButton = document.getElementById("closeButton1");
    closeButton.addEventListener("click", function() {
        textEditorDesc.innerHTML = ""; 
        textEditorDesc.style.border = "none";
        istextEditorDescShown = false;
    });
  
}

function showTrackerDesc() {
    isTrackerDescShown = true;
    let trackerDesc = document.getElementById("trackerDesc");
    let selectedLanguage = document.getElementById("languageDropdown").value;
    if(selectedLanguage === "en"){
        trackerDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton2" class="material-icons-outlined closeButton">close</span><br><br>
        This program is about <b>tracking the learning progress</b> and obtaining information about specific courses and students. The program has several features, explained below.
            <br><b>Command "add students"</b>: This command firstly validates students' credentials (first name, second name, email address). If the validation is correct, it adds students to a map of students with unique IDs automatically generated. At the end, it prints the amount of added students.
            <br><b>Command "list"</b>: This command simply shows a list of students with their ID specifiers.
            <br><b>Command "add points"</b>: You can add points using a unique ID to specific courses. In this program, we have four courses (Java, DSA, Databases, Spring). In this format, the ID starts at 10000, followed by points for each course (e.g., 20 25 0 60). The first number is the ID, starting from 10000.
            <br><b>Command "find"</b>: You can find a student by their ID and view the points they have gained in every course.
            <br><b>Command "statistics"</b>: First, it shows you categories of courses:
            <br><b>Popularity</b>: Depends on the number of enrolled students. Activity: Depends on the number of contributions (points added). Complexity: Depends on the total points gained. When you see this table, you can obtain detailed information about every course in the table. You can see enrolled students in a specific course, their points, and their learning progress in %.
            <br><b>Command "notify"</b>: Notifies every student who has successfully completed a course. It sends a notification message with the name of the student and the completed course. At the end, it prints the number of notified students.<br>
            <br><span class="technologies">Technologies: </span><span class="usedTechnologies">Java</span>    
        </p>`;

    }else if(selectedLanguage === "sk"){
        trackerDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton2" class="material-icons-outlined closeButton">close</span><br><br>
        Program je zameraný na <b>sledovanie učebného progresu</b> a získavaní informácií o jednotlivých kurzoch a študentoch. Program má niekoľko funkcií, ktoré sú vysvetlené nižšie.
                <br><b>Príkaz "add students"</b>: Tento príkaz, najskôr overí správnosť údajov študentov (meno, priezvisko, email). Keď bolo overenie správne, program pridá študenta do mapy študentov s automaticky vygenerovaným unikátnym ID. Na konci zobrazí počet pridaných študentov.
                <br><b>Príkaz "list"</b>: Tento príkaz zobrazí list študentov s ich ID špecifikátormi.
                <br><b>Príkaz "add points"</b>: Môžeš pridať body, pomocou unikátneho ID do jednotlivých kurzov. V programe sa nachádzajú 4 kurzy, (Java, DSA, Databases, Spring). V takomto formáte, ID začína od 10000, potom nasledujú body pre jednotlivé kurzy (napr., 20 25 0 60). Prvé číslo je id , začínajúce od 10000.
                <br><b>Príkaz "find"</b>: Môžes nájsť študenta pomocou jeho id a pozrieť si body,ktoré získal v jednotlivých kurzoch.
                <br><b>Príkaz "statistics"</b>: Najskôr, príkaz zobrazí kategórie kurzov:
                <br><b>Popularity</b>: Závisí na počte zapísaných študentov.<br>
                <b>Activity</b>: Závisí na počte bodových príspevkov (points added)<br> 
                <b>Complexity</b>: Závisí na celkovom počte získaných bodov.<br>
                Keď vidíš túto tabuľku, môžeš získať deatilné informácie o každom kurze v tabuľke. Môžeš vidieť zapísaných študentov v jednotlivých kurzoch, ich body a učebný progres v %.
                <br><b>Príkaz "notify"</b>: Oznámy každému študentovi, ktorý úspešne ukončil kurz. Pošle notifikačnú správu s menom študenta a ukončeným kurzom. Na konci sa zobrazí počet študentov ,ktorým bola poslaná notifikačná správa.<br>
                <br><span class="technologies">Technológie: </span><span class="usedTechnologies">Java</span>  
        </p>`;


    }
    let closeButton = document.getElementById("closeButton2");
    closeButton.addEventListener("click", function() {
        isTrackerDescShown = false;
        trackerDesc.innerHTML = ""; 
        trackerDesc.style.border = "none";
    });
  
}


function showContactsDesc() {
    isContactsDescShown = true;
    let contactsDesc = document.getElementById("contactsDesc");
    let selectedLanguage = document.getElementById("languageDropdown").value;
    if(selectedLanguage === "en"){
        contactsDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton3" class="material-icons-outlined closeButton">close</span><br><br>
        It is console application, which helps you <b>better manage your contacts</b>. The program offers a range of useful functions described below.Add function: 
        <br><b>Add function</b>:Choosing this command allows you to add two different types of records to your list: person and organization. The program validates the number format and adds it to your list.
        <br><b>List function</b>: This function displays your list of records in the order they were added. You can select a record by its number and view contact information. If it's a person (name, surname, birth date, gender, number, date created, edited), or if it's an organization (organization name, address, number). You can also edit every field of the record or delete the chosen record.
        <br><b>Search function</b>: You can enter a query, and the program will find records that contain the query. You can also enter a number, and the program will find records with that number. This function also allows for editing and deleting.
        <br><b>Count function</b>: You can check how many records are currently in the list.
        <br><b>Save and Load</b>: You can save and load the list by name.</br>
        <br><span class="technologies">Technologies: </span><span class="usedTechnologies">Java</span> 
        </p>`;

    }else if(selectedLanguage === "sk"){
        contactsDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton3" class="material-icons-outlined closeButton">close</span><br><br>
        Je to konzolová aplikácia, ktorá pomáha <b>lepšie spravovať kontakty</b>. Program ponúka množstvo užitočných funkcií popísaných nižšie. 
        <br><b>Add funkcia</b>: Výber tohto príkazu umožňuje pridať do zoznamu dva rôzne typy záznamov: osobu a organizáciu. Program overí formát čísla a pridá ho do  zoznamu.
        <br><b>List funkcia</b>: Táto funkcia zobrazuje zoznam záznamov v poradí, v akom boli pridané. Môžete si vybrať záznam podľa jeho čísla a zobraziť kontaktné informácie. Ak ide o osobu (meno, priezvisko, dátum narodenia, pohlavie, číslo, dátum vytvorenia, úpravy), alebo ide o organizáciu (názov organizácie, adresa, číslo). Môžete tiež upraviť každé pole záznamu alebo vymazať vybraný záznam.
        <br><b>Search funkcia</b>: Môžete zadať dotaz a program nájde záznamy, ktoré dotaz obsahujú. Môžete zadať aj číslo a program nájde záznamy s týmto číslom. Táto funkcia umožňuje aj úpravy a mazanie.
        <br><b>Count funkcia</b>: Môžete skontrolovať, koľko záznamov je momentálne v zozname.
        <br><b>Save a Load</b>: Zoznam môžete uložiť alebo načítať podľa mena.</br>
        <br><span class="technologies">Technológie: </span><span class="usedTechnologies">Java</span> 
        </p>`;


    }
    let closeButton = document.getElementById("closeButton3");
    closeButton.addEventListener("click", function() {
        isContactsDescShown = false;
        contactsDesc.innerHTML = ""; 
        contactsDesc.style.border = "none";
    });

}
function showQrCodeDesc() {
    isQrCodeDescShown = true;
    let qrCodeDesc = document.getElementById("qrCodeDesc");
    let selectedLanguage = document.getElementById("languageDropdown").value;
    if(selectedLanguage === "en"){
        qrCodeDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton4" class="material-icons-outlined closeButton">close</span><br><br>
        This is a simple API that generates <b>QR codes</b> based on parameters provided in the URL address, such as content, size, type (JPEG, PNG, GIF), and error correction levels (L, M, Q, H).
        <br> Using the <b>ZXing</b> library, the program first creates a buffered image of the QR code based on the provided parameters. 
        <br>Then, it transforms this image into a <b>byte array</b> and sends it as an <b>HTTP response</b>.
        <br>If invalid parameters are provided, it sends an appropriate error message.</br>
        <br><span class="technologies">Technologies: </span><span class="usedTechnologies">Java, SpringBoot, ZXing</span> 
        </p>`;

    }else if(selectedLanguage === "sk"){
        qrCodeDesc.innerHTML = `
        <p class="textParMyProjects">
        <span id="closeButton4" class="material-icons-outlined closeButton">close</span><br><br>
        Jednoduché  API, ktoré generuje <b>QR kódy</b> na základe parametrov v URL adrese, ako kontent, veľkosť, typ (JPEG, PNG, GIF), a úrovne opravy chýb (L, M, Q, H).
        <br> Použitím knižnice <b>ZXing</b>, program najskôr vytvorí buffered image QR kódu na základe poskytnutých parametrov. 
        <br>Potom ho transformuje do <b>pola bajtov</b> a pošle ho ako <b>HTTP odpoveď</b>.
        <br>Ak sú zadané neplatné parametre, program pošle príslušné chybové hlásenie.</br>
        <br><span class="technologies">Technológie: </span><span class="usedTechnologies">Java, SpringBoot, ZXing</span> 
        </p>`;


    }
    let closeButton = document.getElementById("closeButton4");
    closeButton.addEventListener("click", function() {
        isQrCodeDescShown = false;
        qrCodeDesc.innerHTML = ""; 
        qrCodeDesc.style.border = "none";
    });

}



function changeMainImage(images) {
    // remove all classes from pictures
    images.forEach(image => {
        image.classList.remove("firstElement", "secondElement", "thirdElement");
    });
    images.forEach(image => {
        image.classList.add("none");
    });


    // add classes to first three pictures
    images.slice(0, 3).forEach((image, index) => {
        if (index === 0) {
            image.classList.remove("none");
            image.classList.add("firstElement");
        } else if (index === 1) {
            image.classList.remove("none");
            image.classList.add("secondElement");
        } else if (index === 2) {
            image.classList.remove("none");
            image.classList.add("thirdElement");
        }
    });
}
function moveLeftArrow(galleryId) {
    let gallery = document.getElementById(galleryId);
    let anchorTags = Array.from(gallery.querySelectorAll('a'));

    // move first anchor tag to end
    let firstAnchor = anchorTags.shift();
    gallery.appendChild(firstAnchor);
    anchorTags.push(firstAnchor);

    // update display of pictures
    let images = anchorTags.map(anchorTag => anchorTag.querySelector('img'));
    changeMainImage(images);
}


function moveRightArrow(galleryId) {
    let gallery = document.getElementById(galleryId);
    let anchorTags = Array.from(gallery.querySelectorAll('a'));
    
    // move last anchor tag to the beginning 
    let lastAnchorTag = anchorTags.pop();
    gallery.insertBefore(lastAnchorTag, gallery.firstChild);
    anchorTags.unshift(lastAnchorTag);
    
    //update display of pictures
    let images = anchorTags.map(anchorTag => anchorTag.querySelector('img'));
    changeMainImage(images);
}

function moveDownArrow() {
    const currentScrollPosition = window.scrollY;
    const firstScroll = document.getElementById("firstScroll");
    const secondScroll = document.getElementById("secondScroll");
    const thirdScroll = document.getElementById("thirdScroll");
    const fourthScroll = document.getElementById("fourthScroll");

    if (currentScrollPosition < 500) {
       firstScroll.scrollIntoView({ behavior: 'smooth' });
    }
    else if(currentScrollPosition < 1000){
        secondScroll.scrollIntoView({ behavior: 'smooth' });
    }else if(currentScrollPosition < 1600){
        thirdScroll.scrollIntoView({ behavior: 'smooth' });
    }else if(currentScrollPosition < 2500){
        fourthScroll.scrollIntoView({ behavior: 'smooth' });
        
    }else if(currentScrollPosition < 3200){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
 
}


function ease(t, b, c, d) {
    //function for smooth acceleration
    return c * ((t = t / d - 1) * t * t + 1) + b;
}



