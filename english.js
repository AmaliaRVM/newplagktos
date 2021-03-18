//Global variables 

    //Logo variable
    const logoName = document.getElementById('logo-name');

    //Project variables
const projects = document.getElementById("projects");

const firstWord = document.getElementById("first-word");
const secondWord = document.getElementById("second-word");
const thirdWord = document.getElementById("third-word");


const firstProject = document.getElementById('first-project');
const secondProject= document.getElementById('second-project');
const thirdProject = document.getElementById('third-project');
const fourthProject = document.getElementById('fourth-project'); 

    //Project video variables
const vprojectOne = document.getElementById('vproject-one')
const vprojectTwo = document.getElementById('vproject-two')

const firstVideoProject = document.getElementById('first-vproject');
const secondVideoProject= document.getElementById('second-vproject');
const thirdVideoProject = document.getElementById('third-vproject');
const fourthVideoProject = document.getElementById('fourth-vproject');


    //The Archive container
const archives = document.getElementById("archives");
const containerList = document.getElementById("container-list")

const archiveListProjects = document.getElementById("archive-list-projects");
const archiveListVideoProjects = document.getElementById("archive-list-vprojects")
const archiveListChroniques = document.getElementById("archive-list-chroniques");

    //Work places container variables
const iciContainerOne = document.getElementById('ici-container-one');
const iciContainerTwo = document.getElementById('ici-container-two');

const containerLa = document.getElementById('container-la');
const containerIciEtLa = document.getElementById('ici-et-la');

const placeOne = document.getElementById('place-container-one');
const placeTwo = document.getElementById('place-container-two');
const placeThird = document.getElementById('place-container-third');
const placeFourth = document.getElementById('place-container-fourth');
const placeFifth = document.getElementById('place-container-fifth');
const placeSix = document.getElementById('place-container-six');

    //Video container variables
const randomCeci = document.getElementById('random-ceci');

const firstVideo = document.getElementById('first-video');
const secondVideo = document.getElementById('second-video');
const thirdVideo = document.getElementById('third-video');
const fourthVideo = document.getElementById('fourth-video');
const fifthVideo = document.getElementById('fifth-video');
const sixVideo = document.getElementById('six-video');

    //Chroniques
const randomChroniques = document.getElementById('random-chroniques');

const firstChronique = document.getElementById('first-chronique');

    //Floating screen container variable
const screenContainer = document.getElementById('screen-project');
const ecranFlottant = document.getElementById('ecran-flottant');

    //All main-containers
const divMainContainer = document.getElementsByClassName('main-container');

    //Responsive screen
const goBack = document.getElementById('go-back-link');
const removeSection = document.querySelector('section');
const removeLanguage = document.querySelector('.language');

//All Data 

const allMedia =
{

    "images": {
        "first_i": "./assets/img/navigation_1.jpg",
        "second_i": "./assets/img/peripherie_1.jpg",
        "third_i": "./assets/img/ear_you_are_1.jpg",
        "fourth_i": "./assets/img/la_figure_du_monstre_1.jpg",
        "fifth_i": "./assets/img/mer_2.jpg",
        "six_i": "./assets/img/bateau-trait.png",
        "seven_i": "./assets/img/mer_1.jpg"
    },

    "ceci_videos": {
        "first_v":"./assets/videos/cecivideos/breakaway.mp4",
        "second_v":"./assets/videos/cecivideos/gutrug.mp4",
        "third_v":"./assets/videos/cecivideos/ink_in_milk.mp4",
        "fourth_v":"./assets/videos/cecivideos/kika.mp4",
        "fifth_v":"./assets/videos/cecivideos/ofrenda.mp4",
        "six_v": "./assets/videos/cecivideos/the_girl_chewing_gum.mp4"
    },

    "project_videos": {
        "first_vp":"./assets/videos/motsvideos/asperges.mp4",
        "second_vp":"./assets/videos/motsvideos/paillettes.mp4",
        "third_vp":"./assets/videos/motsvideos/brouillard.mp4",
        "fourth_vp":"./assets/videos/motsvideos/born-In-flames.mp4",
        "fifth_vp":"./assets/videos/motsvideos/dessins.mp4",
        "six_vp": "./assets/videos/motsvideos/radio.mp4"
    },

    "links": {
        "first_place": "http://festival2019.acsr.be/",
        "second_place": "https://www.periferiafestival.be/en/about/",
        "third_place": "https://www.facebook.com/cinebusbxl",
        "fourth_place": "https://toestand.be/projecten/alleedukaai",
        "fifth_place": "https://www.facebook.com/Nazcas-Festival-845571945786282/",
        "six_place": "https://www.nova-cinema.org/?lang=fr",
    },

    "chroniques_images": {
        "first_c": "./assets/img/chronique_Free_White_21.png",
    }

}


// Random projects words

let theProjects = [

    {
        "name": "navigation",
        "content": firstProject,
    },
    {
        "name": "periphery",
        "content": secondProject,
    },
    {
        "name": "sport",
        "content": thirdProject,
    },
    {
        "name": "the figure of the monster",
        "content": fourthProject,
    }

]

// The project videos words

let theVideoProjects = [
    {
        "name": "asparagus",
        "content": firstVideoProject,
    },
    {
        "name": "glitter",
        "content": secondVideoProject,
    },
    {
        "name": "fog",
        "content": thirdVideoProject,
    },
    {
        "name": "flammes",
        "content": fourthVideoProject,
    }
]

//Videos

const ceciVideos = [
    {
        "name": "breakaway",
        "content": firstVideo,
    },
    {
        "name": "gutrug",
        "content": secondVideo,
    },
    {
        "name": "ink in milk",
        "content": thirdVideo,
    },
    {
        "name": "kika",
        "content": fourthVideo,
    },
    {
        "name": "ofrenda",
        "content": fifthVideo,
    },
    {
        "name": "the girl",
        "content": sixVideo,
    }

]

let thePlaces = [
    {
        "name": "Ear you are Festival",
        "content": placeOne,
    },
    {
        "name": "Periferia Festival",
        "content": placeTwo,
    },
    {
        "name": "Cinebus",
        "content": placeThird,
    },
    {
        "name": "Allee du Kaai",
        "content": placeFourth,
    },
    {
        "name": "Nazcas Festival",
        "content": placeFifth,
    },
    {
        "name": "Cinema Nova",
        "content": placeSix,
    }
]

const chroniques = [
    {
        "name": "free white and 21",
        "content": firstChronique

    }

]


//Logo Name

logoName.addEventListener('click', function(){
    
    location.reload(); 

})

//Random project words - HTML Template and Loop

let newNames = []
for( i = 4; i > 1; i--) {
    rn = Math.floor(Math.random() * i);
    newNames.push(theProjects.splice(rn,1)[0])
}

theProjects = newNames.slice().concat(theProjects)


firstWord.innerHTML = `
<span id='${newNames[0].name+"1"}'>${newNames[0].name}</span>
` 
secondWord.innerHTML = `
<span id='${newNames[1].name+"1"}'>${newNames[1].name}</span>   
`
thirdWord.innerHTML = `
<span id='${newNames[2].name+"1"}'>${newNames[2].name}</span>
` 

// HTML Template for archive words, videos and chroniques
    
archiveListProjects.innerHTML = `

${theProjects.map(function(element){
    
    return `
    <span class="projects-hover" id="${element.name+"2"}">${element.name}</span>
    `
}).join('')}
`

archiveListVideoProjects.innerHTML = `

    ${theVideoProjects.map(function(element){
        return `
        <span class="videos-hover" id="${element.name+"2"}">${element.name}</span>

        `
    }).join('')}
`

archiveListChroniques.innerHTML = `

${chroniques.map(function(element){
    return `
    <span class="chroniques-hover" id="${element.name}">${element.name}</span>

    `
}).join('')}

` 


// Display archive container

archives.addEventListener('click', function(){

    remove()

    containerList.style.display = "block";

})


//Random project video words - HTML Template and Loop

newVideoProjects = []
for( i = 4; i > 2; i--) {
    rn = Math.floor(Math.random() * i);
    newVideoProjects.push(theVideoProjects.splice(rn,1)[0])
}

theVideoProjects = newVideoProjects.slice().concat(theVideoProjects)

    //HTML Template

vprojectOne.innerHTML = `
    <span id='${newVideoProjects[0].name+"1"}'>${newVideoProjects[0].name}</span>
` 
vprojectTwo.innerHTML = `
    <span id='${newVideoProjects[1].name+"1"}'>${newVideoProjects[1].name}</span>
`


//Random ici, ici Loop and HTML Template words

let newPlaces = []
for( i = 6; i > 4; i--) {
    rn = Math.floor(Math.random() * i);
    newPlaces.push(thePlaces.splice(rn,1)[0])
}

thePlaces = newPlaces.slice().concat(thePlaces)

    //HTML Template for random places words 
iciContainerOne.innerHTML = `
    <span id='${newPlaces[0].name}'>here</span>
`
iciContainerTwo.innerHTML = `
    <span id='${newPlaces[1].name}'>here</span>
`

// Random screen position function

function positionRandom () {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    
    delta = 40;
    ydim = 700;
    xdim = 1000;
    vpos = Math.random()*(window.innerHeight-delta-ydim-delta) + delta;
    hpos = Math.random()*(window.innerWidth-delta-xdim-delta) + delta;

    console.log(vpos, hpos)
}


//Cleaning screen function

function remove () {
    
    theProjects.forEach(name => {
        name.content.style.display = "none"
        name.content.style.transform = "translate3d(0,0,0)";
    })


    ceciVideos.forEach(name => {
        name.content.style.display = "none"
    })

    ecranFlottant.style.display = "none"

    newPlaces.forEach(name => {
        name.content.style.display = "none"
    }) 

    thePlaces.forEach(element => {
        element.content.style.display = "none"
    })

    theVideoProjects.forEach(name => {
        name.content.style.display = "none"
    })

    chroniques.forEach(name => {
        name.content.style.display = "none"
    })

    containerList.style.display = "none"

    Array.from(allVideos).forEach(function(item){
        item.pause()
    })
    

}



function removeMedia () {

    newNames.forEach(name => {
        name.content.style.display = "none"
    })

    ceciVideos.forEach(name => {
        name.content.style.display = "none"
    })

    ecranFlottant.style.display = "none"

    theVideoProjects.forEach(name => {
        name.content.style.display = "none"
    })

    Array.from(allVideos).forEach(function(item){
        item.pause()
    })
}

// For theProject List
function mappingProjects(element, myint){
    
    const divProject = document.getElementById(element.name+myint);
    
    divProject.addEventListener('click', function(){

        remove()

        element.content.style.display = "block";

        // random position numbers for the project container position
        
        positionRandom()
        
        element.content.style.top = vpos+"px"; 
        element.content.style.right = hpos+"px";
       

    }) 

}

// Display random words projects

theProjects.map(function(x2) {return mappingProjects(x2, "2")})
newNames.map(function(x2) {return mappingProjects(x2, "1") })


// For theVideoProjects List

function mappingVideoProjects(element, myint){
    
    const divProject = document.getElementById(element.name+myint);
    
    divProject.addEventListener('click', function(){

        remove()

        element.content.style.display = "block";
        
        const sound = element.content.getElementsByTagName('video')[0]

        sound.style.display = "block";
        sound.play()

        const videoLoad = sound.readyState;
        console.log(videoLoad)

        // random position numbers for the project container position
        
        positionRandom()

        element.content.style.top = vpos+"px"; 
        element.content.style.right = hpos+"px";

    }) 

}


// Display random video projects words

theVideoProjects.map(function(x2) {return mappingVideoProjects(x2, "2")})
newVideoProjects.map(function(x2) {return mappingVideoProjects(x2, "1") })


// Display ici, ici

newPlaces.map(function(element){

    const divPlaces = document.getElementById(element.name);
    
    divPlaces.addEventListener('click', function(){

        thePlaces.forEach(element => {
            element.content.style.display = "none"
        }) 
        
        element.content.style.display = "block";

        removeMedia()

        if(window.screen.width < 1025){

            document.body.scrollTop = document.body.scrollHeight;
            document.documentElement.scrollTop = document.documentElement.scrollHeight;

        }

    })

})

// Display La

containerLa.addEventListener('click', function(){

    thePlaces.forEach(element => {
        element.content.style.display = "block"
    })

    removeMedia()

})


// Display Ceci videos

randomCeci.addEventListener('click', function(){

    index = Math.floor(Math.random() * 6);

    remove()

    const element = ceciVideos[index]

    element.content.style.display = 'block';

    const sound = element.content.getElementsByTagName('video')[0]
    
    sound.style.display = "block";
    sound.play()

    const videoLoad = sound.readyState;
    console.log(videoLoad)
    

    // random position for Ceci videos

    positionRandom()
    
    element.content.style.top = vpos+"px"; 
    element.content.style.right = hpos+"px";
       
    
    
})

// Display Chroniques

randomChroniques.addEventListener('click', function(){

    index = Math.floor(Math.random() * 1);

    remove()

    const element = chroniques[index];

    element.content.style.display = "block";

    // random position for chroniques 

    positionRandom()
    
    element.content.style.top = vpos+"px"; 
    element.content.style.right = hpos+"px";
       
})

    //Display chroniques archives

chroniques.map(function(element){

    divChroniques = document.getElementById(element.name);
    
    divChroniques.addEventListener('click', function(){

        remove()
        element.content.style.display = "block";

    })
})


// Display ecran flottant

screenContainer.addEventListener('click', function(){
    remove()
    ecranFlottant.style.display = "block";
    
    if (window.screen.width < 1025){
        goBack.style.display = "block";
    }
})


//Make all -div class main-container- a draggable element

function dragElements () {

    Array.from(divMainContainer).forEach(function(item){
    
        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
    
        /* item.addEventListener("touchstart", dragStart, false);
        item.addEventListener("touchend", dragEnd, false);
        item.addEventListener("touchmove", drag, false); */
    
        item.addEventListener("mousedown", dragStart, false);
        item.addEventListener("mouseup", dragEnd, false);
        item.addEventListener("mousemove", drag, false);
    
        //Initialiazing the Drag
        
        function dragStart (e) {
            
            if(e.type === 'mousedown') {
                e.preventDefault()
                /* initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;  */
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset; 
                
            /* } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset; */
            }
            
            active = true;
    
        }
        
        function drag(e) {
    
            if (active) {
                
                e.preventDefault();
                
                if (e.type === "mousemove") {
                    /* currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;  */
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                } /* else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }
     */
                xOffset = currentX;
                yOffset = currentY;
        
                setTranslate(currentX, currentY, item);
                
            }
    
        }
    
        function setTranslate(xPos, yPos, el) {
    
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }
    
        function dragEnd(e) {
    
            initialX = currentX;
            initialY = currentY;
    
            active = false;
        }
    
    })

}

dragElements()


//Dark mode

const allSpan = document.getElementsByTagName('span');
const supOne = document.getElementById('sup-one');
const supTwo =document.getElementById('sup-two');
const allLinks = document.getElementsByTagName('a');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const copyrightText = document.getElementById('copyright-text');
const curseur = document.getElementsByClassName('curseur');


    // To dark mode
moon.addEventListener('click', function(){
    
    document.body.style.backgroundImage = "url('./assets/brand/bleu_2.jpg')"; 
    document.body.style.color = "#ffffff"; 
    sun.src = "./assets/brand/soleil_plein.png";
    moon.src = "./assets/brand/lune_vide.png";

    Array.from(allSpan).forEach(function(item){
        item.style.color = "#ffffff";
    })

    Array.from(allLinks).forEach(function(item){
        item.style.color = "#ffffff";
        item.style.backgroundImage = "url('./assets/brand/bleu_2.jpg')";
    })

    Array.from(curseur).forEach(function(item){
        console.log(item)
        item.src = './assets/brand/curseur_nuit.png';
    })



    supOne.style.color = "#ffffff";
    supTwo.style.color = "#ffffff";
    copyrightText.style.backgroundImage = "url('./assets/brand/bleu_2.jpg')";
    mailContact.style.backgroundImage = "url('./assets/brand/bleu_2.jpg')";


    //Yellow Hover

        //Function Hover
    yellowHoverArray = []
    var yellowHoverfunc = function(myElement) {
        yellowHoverArray.push(
            myElement.addEventListener("mouseenter", function(){
                    myElement.style.color = "#ffff00"; 
                })
        )
        yellowHoverArray.push(
            myElement.addEventListener("mouseleave", function(){
                myElement.style.color = "#ffffff"; 
            })
        )
    }

        //Projects Hover
    theProjects.forEach(function(element){
        yellowHoverfunc(document.getElementById(element.name+'2'))
    })

        //Videos Hover
    theVideoProjects.forEach(function(element){
        yellowHoverfunc(document.getElementById(element.name+'2'))
    })

        //Chroniques Hover
    chroniques.forEach(function(element){
        yellowHoverfunc(document.getElementById(element.name))
    })


})


// Mail contact
mailContainer = document.getElementById('mail-container')
mailContact = document.getElementById('mail-contact');

mailContainer.addEventListener('click', function(){
    mailContact.style.display = 'block';
})

mailContact.addEventListener('click', function(){
    mailContact.style.display = 'none';
})


//
//
//HTML French Templates for projects  

firstProject.innerHTML = `

<div class="grid">

    <img src=${allMedia.images.first_i}>

    <div class="project-content">
        <h6 class='title-project'>
            Voiles et films en pellicule :
            une séance de navigation
        </h6>
        <p>
            An invitation to cross the Atlantic, to stop and look at the morning fog, to immerse
            yourself underwater and in the images it projects. Voiles et films en pellicule: a
            navigation session is a program designed in collaboration with Christophe Piette as part
            of the Nazcas Festival.
        </p>

        <ul>
            <li>
                À la voile au tour du monde, 1926 - musique spécialement pensée pour l'occasion par
                Cristian Ionescu.
            </li>
            <li>Atlas, Alexandre Halot, Belgique, 1976</li>
            <li>Letzte Worte, Werner Herzog, Allemagne, 1968</li>
            <li>Narrows Inlet - David Rimmer (1980)</li>
            <li>Moon’s Pool - Gunvor NELSON (1973)</li>
            <li>Meridian Plain - Laura Kraning (2016)</li>
        </ul>

        <p class="copyrightphoto">© Moon's Pool - Gunvor Nelson <i>1973</i></p> 
    </div>
</div>
` 

secondProject.innerHTML = `
<div class="grid">

    <img src=${allMedia.images.second_i}>

    <div class="project-content">
        <h6 class='title-project'>periphery</h6>
        <p>
            A nightclub closed for years reopened for one night. A photographer who meets the
            inhabitants of houses seen from the train. A steel mill in the Detroit industrial area that
            ends up looking like a mirage by observing it.
            To close the Periferia festival in Drogenbos, two short films and a film concert with
            sound artist Pak Yan Lau. A program to think and observe peripheries by shifting our
            gaze.
        </p>

        <ul>
            <li>La disco resplandece - Chema Garcia Ibarra (2016)</li>
            <li>L'An dernier quand le train passait - Pang-Chuan Huang (2018)</li>
            <li>Three Landscapes - Peter Hutton ( 2016 )</li>
        </ul>

        <p class="copyrightphoto">© Le Doré Mathieu</p>
    </div>

</div>
`

thirdProject.innerHTML = `
<div class="grid">

    <img src=${allMedia.images.third_i}>

    <div class="project-content">
        <h6 class='title-project'>sport</h6>
        <p>
            As part of the Ear you Are festival around sound art and radio creation,
            the Nova’s big screen returns to service and challenges a double duo of musicians for a
            live scoring experience on a mashup of sports images. They slide, jump, hit, dive. Listen
            or watch ? Tonight, the rhythms meet and invite you into the game.
        </p>

        <p class="copyrightphoto">© Maxime Taillez, Julien Hayard</p>
    </<div>
</div>
`

fourthProject.innerHTML = `
<div class="grid">
    <img src=${allMedia.images.fourth_i}>
    <div class="project-content">
        <h6 class='title-project'>La figure du monstre</h6>
        <p>
            Un cycle en cinq séances consacré aux monstres étranges et aux créatures en tout genre
            au sein du projet <a href="https://www.facebook.com/cinebusbxl/" target="blank">Cinébus</a>, un ancien bus de STIB reconverti en micro salle de cinéma.
        </p>

        <ul>
            <li>The host - Bong Joon Ho (2006)</li>
            <li>L’ordre - Jean-Daniel Pollet (1973)</li>
            <li>Pumping Iron - George Butler, Robert Fiore (1977)</li>
            <li>Leviathan - Lucien Castaing-Taylor, Verena Paravel (2012)</li>
            <li>An American Werewolf in London (1981) - John Landis</li>
            <li>Elen Dragoste - Eve De Campo (2013)</li>
            <li>Under the Skin - Jonathan Glazer (2013)</li>
        </ul>

        <p class="copyrightphoto">© Julie Guiches</p>
    </<div>

</div>
`

//HTML Template Projects Videos

firstVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.first_vp} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Asparagus - Suzan Pitt <i>1979</i></p>
`

secondVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.second_vp} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Salomé - Téo Hernandez <i>1976</i></p>
`
thirdVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.third_vp} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Brouillard Passage 14 - Alexandre Larose <i>2014</i></p>
`
fourthVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.fourth_vp} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Born in Flames - Lizzie Borden <i>1983</i></p>
`


//HTML Template for Ceci Videos

firstVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.first_v} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Breakaway - Bruce Conner <i>1966</i></p>
`

secondVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.second_v} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Gutrug N°1 - Werner Nekes <i>1894</i></p>
`
thirdVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.third_v} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Ink in Milk - Gernot Wieland <i>2018</i></p>
`
fourthVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.fourth_v} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Kika opowiesci o czlowieku - Bogdan Dziworski <i>1983</i></p>
`
fifthVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.fifth_v} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">Ofrenda - Claudio Caldini <i>1978</i></p>
`
sixVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.six_v} type="video/mp4" preload="auto" autoplay="false" ></video>
    <p class="copyright-video">The Girl Chewing Gum - John Smith <i>1976</i></p>
`

//HTML Template for work places

placeOne.innerHTML = `
    <a href="${allMedia.links.first_place}" target="blank">Ear you are Festival</a>
    <img class="curseur" src="./assets/brand/curseur.png">
`

placeTwo.innerHTML = `
    <a href="${allMedia.links.second_place}" target="blank">Periferia Festival</a>
    <img class="curseur" src="./assets/brand/curseur.png">
`

placeThird.innerHTML = `
    <a href="${allMedia.links.third_place}" target="blank">Cinebus</a>
    <img class="curseur" src="./assets/brand/curseur.png">
`

placeFourth.innerHTML = `
    <a href="${allMedia.links.fourth_place}" target="blank">Allee du Kaai</a>
    <img class="curseur" src="./assets/brand/curseur.png">
`

placeFifth.innerHTML = `
    <a href="${allMedia.links.fifth_place}" target="blank">Nazcas Festival</a>
    <img class="curseur" src="./assets/brand/curseur.png">
`

placeSix.innerHTML = `
    <a href="${allMedia.links.six_place}" target="blank">Cine Nova</a>
    <img class="curseur" src="./assets/brand/curseur.png">
`


//HTML Template for Chroniques

firstChronique.innerHTML = `
<div class="grid">

    <img src=${allMedia.chroniques_images.first_c}>

    <div class="project-content chroniques-content scroller">
        <h6 class='title-project'>Free, White and 21</h6>
        <h6 class='title-project'>Howardena Pindell 1980</h6>
        <p>Chronique du 2 février 2021 pour Radio Campus Bruxelles</p>
        <p>
            Lorsque les salles de cinéma ont fermée leurs portes pour plusieurs semaines lors
            du premier con nement, les spectateurs et spectatrices avides d’images et
            d’histoires comme nous, se sont dans un premier temps retrouvé·es totalement
            démuni·es. Comment faire pour retrouver sa dose, ce besoin absolu, cette
            sensation délicate qui nous parcourent le corps lorsque les lumières s’éteignent et
            qu’on s’apprête a embarquer dans un univers où l’on peut autant tomber dans le
            vide de l’espace que braquer une banque ? Eh bien, on aura pas du attendre bien
            longtemps. Puisque nous ne pouvions plus aller au cinéma, le cinéma est venu
            jusqu’à nous. Et plutôt dix fois qu’une. Les initiatives of cielles et les autres pas tout
            à fait vraiment légale se sont multipliées. De la cinémathèque royale aux groupes
            Facebook au nom les plus obscures, il y a eu de quoi et il y a encore de quoi,
            satisfaire les cinéphiles les plus curieuses et curieux d’entre nous.
        </p>

        <p>
            Parmi les différents initiatives, le groupe Facebook la loupe nous a rapidement fait
            de l’oeil. Malle aux trésors et refuge pour lms devenus introuvables, en quelques
            mois, se se sont plus de 13 000 personnes qui ont rejoins le groupe et qui
            quotidiennement partage des chiers de lms en tout genre. A une condition : que
            ceux-ci ne soit pas disponible ailleurs, en vidéo à la demande, en dvd ou lors de
            projections en salle. De cette façon, le partage de lms ne se place pas en
            opposition aux droits des artistes a vivre de leur oeuvres mais cherche à faire
            connaitre et circuler les lms pour que ceux-ci ne tombent pas dans l’oubli ou ne
            disparaissent entièrement. Une archive 2.0 donc, qui ne repose pas sur un lieu xe
            mais qui se déploie sur des milliers de disques durs répartis un peu partout.
        </p>

        <p>
            Nous avons ainsi saisi l’occasion de cette chronique, pour vous proposer un lm
            que nous avons aussi partager sur la loupe et pour lequel nous avons fait des
            sous-titres en français fait maison qui jusque là n’existait pas. 
        </p>

        <p>
            <b>Free, white and 21</b> qui est donc le titre de cette oeuvre réalisée par Howardena
            Pindell en 1980 est aussi une phrase ancrée dans l’histoire populaire américaine
            depuis au moins 1828. A l’époque, la loi qui réglemente le droit de vote vient d’être
            modi ée. Il ne faut désormais plus être propriétaire foncier pour pouvoir voter mais
            « simplement » être libre, blanc·che et avoir 21 ans. L’esclavage est encore
            pratiquée dans de nombreux états, la ségrégation est présente partout et cette
            phrase devient alors l’expression emblématique pour parler de ceux et celle pour
            qui « tout est possible » et que rien ne pourra arrêter. Cent ans plus tard,
            l’expression perdure et se retrouve dans de nombreux lms hollywoodiens 
            entre lesannées ’20 et ’40 et y est particulièrement utilisé par les femmes blanches comme
            un argument qui proclament tant leurs indépendances que leurs privilèges
        </p>

        <p>
            Nous sommes en 1979 à New York quand Horwardena Pindell, alors conservatrice
            au MOMA (le musée d’art moderne de New York) s’empare de cette phrase et
            réalise sa toute première oeuvre de 12 minutes seule dans son appartement, après
            avoir vécu un terrible accident de voiture lui causant une perte de mémoire
            partielle. Impassible, elle y fait un compte rendu, face caméra, du racisme auquel
            elle a été confrontée en tant que femme noire en Amérique dès son plus jeune âge
            jusque dans son travail dans le monde de l’art et avec des féministes blanches. La
            vidéo s’ouvre sur le visage d’une femme blanche incarnée par l’artiste, portant une
            perruque blonde, ressemblant aux personnages féminins de ces lms
            hollywoodiens des années 40, et qui tout au long de la vidéo revient ponctuer
            certaines des expériences racontées par Pindell en décrédibilisant son récit. « Vous
            devez vraiment être paranoïaque. Votre art n'est pas vraiment politique non plus. »
        </p>

        <p>
            À la n des années 1980, Free White and 21 se met à circuler grâce au bouche à
            oreille et est principalement diffusé dans les universités et les milieux militants. Ceci
            dit, à l’époque, elle fut le sujet de nombreuses critiques, dont de nombreux artistes
            blanc·ches considérant que les histoires était exagérées et le propos déplacé. Pour
            nous, ces images d’Howardena Pindell sont aussi importantes aujourd’hui qu’hier
            et si elles ont fait un pas vers vos écran grâce aux inépuisables archives du web, à
            vous désormais de vous emparer et, si comme nous, vous l’estimez nécessaire, de
            les faire circuler et d’en parler.
        </p>

        <p>Free White et 21 est disponible dès maintenant sur notre page viméo.</p>
        <p>Bon film!</p>

    </<div>

</div>

`


// Remove videos after playing
const allVideos = document.getElementsByTagName('video');
const videoContainer =document.getElementsByClassName('video-container');

Array.from(videoContainer).forEach(function(item){
    item.style.display = 'none'
})

Array.from(allVideos).forEach(function(item){

    item.onended = function(){
        item.style.display = "none";
        item.load();
        item.pause()
        
        Array.from(videoContainer).forEach(function(element){
            
            element.style.display = "none";
        })
    }
}) 


// Responsive Screen

    //Alert Message when moving screen Desktop
    const windowSize = window.matchMedia("(max-width: 1020px)");

    function windowResponsive () {
        return  ( 'ontouchstart' in window ) ||  
                ( navigator.maxTouchPoints > 0 ) || 
                ( navigator.msMaxTouchPoints > 0 );
    } 

    if(windowResponsive() == false) {
        function move (){
            if(windowSize.matches){
                alert("This website needs space to express itself. For an optimal user experience, do not hesitate to enlarge the window.");
            }
        }
    }
    
    windowSize.addListener(move);
    


if (window.screen.width < 600) {

    alert('This website needs space to express itself. For an optimal user experience, do not hesitate to enlarge the window.')

    /* Container ici et la */
    containerIciEtLa.addEventListener('click', function(){

        remove()

        goBack.style.display = 'block'; 

        thePlaces.forEach(element => {
            element.content.style.display = "block"
        }) 

        Array.from(curseur).forEach(function(item){
            console.log(item)
            item.src = './assets/brand/curseur_nuit.png';
        })
    })

    /* Overwriting function for projects random  */
    const responsivePosition = positionRandom;

    positionRandom = function (){
        vpos = 0 + "px";
        hpos = 0 + "px";

        /* document.body.scrollTop = document.body.scrollHeight;
        document.documentElement.scrollTop = document.documentElement.scrollHeight; */ 
        goBack.style.display = 'block'; 
    }
    
    responsivePosition()

    /* Overwriting function for remove */
    const responsiveRemove = remove; 
    remove = function () {

        removeSection.style.display = 'none';

        removeLanguage.style.display = 'none';
        
    }

    responsiveRemove() 
    console.log(responsiveRemove)



    /* Go back button */
    goBack.addEventListener('click', function(){

        theProjects.forEach(name => {
            name.content.style.display = "none"
        })

        ceciVideos.forEach(name => {
            name.content.style.display = "none"
        })
    
        ecranFlottant.style.display = "none"

        thePlaces.forEach(element => {
            element.content.style.display = "none"
        })
    
        theVideoProjects.forEach(name => {
            name.content.style.display = "none"
        }) 
        
        chroniques.forEach(name => {
            name.content.style.display = "none"
        }) 

        Array.from(allVideos).forEach(function(item){
            item.pause()
        })

        removeSection.style.display = 'block';
        goBack.style.display = 'none';
        removeLanguage.style.display = 'block'; 

        

    })

    const follow = document.getElementById('follow');
    follow.addEventListener('click', function(){

        const socialMedia = document.querySelector('.link-contact')

        if (socialMedia.style.display === "block") {
            socialMedia.style.display = "none";
        } else {
            socialMedia.style.display = "block";
        }

    })

    const place = document.getElementsByClassName('place');
    console.log(place)

    Array.from(place).forEach(item => {

        item.style.left = Math.round(Math.random() * 166)+ "px";
        item.style.bottom = Math.round(Math.random() * 78)+ "px";
        item.style.top = 50 + "px"; 

    })

    /* Attribute to video */
    Array.from(allVideos).forEach(function(item){

        item.setAttribute("controls", "controls")
        
    })

} 


    



