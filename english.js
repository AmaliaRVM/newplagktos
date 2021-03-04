//Global variables 

    //Project variables
const projects = document.getElementById("projects");

const firstProject = document.getElementById('first-project');
const secondProject= document.getElementById('second-project');
const thirdProject = document.getElementById('third-project');
const fourthProject = document.getElementById('fourth-project'); 

    //Project video variables
const vprojects = document.getElementById('vprojects')

const firstVideoProject = document.getElementById('first-vproject');
const secondVideoProject= document.getElementById('second-vproject');
const thirdVideoProject = document.getElementById('third-vproject');
const fourthVideoProject = document.getElementById('fourth-vproject');


    //The Archive container
const archives = document.getElementById("archives");
const containerList = document.getElementById("container-list")
const archiveListProjects = document.getElementById("archive-list-projects");
const archiveListVideoProjects = document.getElementById("archive-list-vprojects")

    //Work places container variables
const placeIci = document.getElementById('place-ici');
const placeLa = document.getElementById('place-la');

const placeOne = document.getElementById('place-container-one');
const placeTwo = document.getElementById('place-container-two');
const placeThird = document.getElementById('place-container-third');
const placeFourth = document.getElementById('place-container-fourth');
const placeFifth = document.getElementById('place-container-fifth');
const placeSix = document.getElementById('place-container-six');

    //Video container variables
const firstVideo = document.getElementById('first-video');
const secondVideo = document.getElementById('second-video');
const thirdVideo = document.getElementById('third-video');
const fourthVideo = document.getElementById('fourth-video');
const fifthVideo = document.getElementById('fifth-video');
const sixVideo = document.getElementById('six-video');

    //Floating screen container variable
const screenContainer = document.getElementById('screen-project');
const ecranFlottant = document.getElementById('ecran-flottant');

const divMainContainer = document.getElementsByClassName('main-container');

const randomCeci = document.getElementById('random-ceci');

    //Contact container variable
/* const follow = document.getElementById('follow');
const contactContainer = document.getElementById('contact-container'); */




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
    }

}

// Random projects words

let theProjects = [

    {
        "name": "navigation",
        "content": firstProject,
    },
    {
        "name": "city peripherie",
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
        "name": "flames",
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

const thePlaces = [
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



//Random project words - HTML Template and Loop

let newNames = []
for( i = 4; i > 1; i--) {
    rn = Math.floor(Math.random() * i);
    newNames.push(theProjects.splice(rn,1)[0])
}

theProjects = newNames.slice().concat(theProjects)


    //HTML Template for random words projects

projects.innerHTML = `
<span id='${newNames[0].name+"1"}'>${newNames[0].name},</span>
<span id='${newNames[1].name+"1"}'>${newNames[1].name},</span>
<span id='${newNames[2].name+"1"}'>${newNames[2].name}</span>
` 

// HTML Template for archive words projects
    
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

// Display archive projects words

archives.addEventListener('click', function(){
    
    if (containerList.style.display === "block") {
        containerList.style.display = "none";
    } else {
        containerList.style.display = "block";
    }
})


//Random project video words - HTML Template and Loop

newVideoProjects = []
for( i = 4; i > 2; i--) {
    rn = Math.floor(Math.random() * i);
    newVideoProjects.push(theVideoProjects.splice(rn,1)[0])
}

theVideoProjects = newVideoProjects.slice().concat(theVideoProjects)

    //HTML Template

vprojects.innerHTML = `
    <span id='${newVideoProjects[0].name+"1"}'>${newVideoProjects[0].name},</span>
    <span id='${newVideoProjects[1].name+"1"}'>${newVideoProjects[1].name}</span>
` 


//Random ici, ici Loop and HTML Template words

let newPlaces = []
for( i = 6; i > 4; i--) {
    rn = Math.floor(Math.random() * i);
    newPlaces.push(thePlaces.splice(rn,1)[0])
}

    //HTML Template for random places words 
placeIci.innerHTML = `
    <span id='${newPlaces[0].name}'>here,</span>
    <span id='${newPlaces[1].name}'>here</span>
`

// Random screen position

function positionRandom () {
    
    const positionNumbers = [400, 200, 50, 40]
    let position = []
    for( i = 4; i > 1; i--) {
        randomNumber = Math.floor(Math.random() * i);
        position.push(positionNumbers.splice(randomNumber,1)[0])
    }
    
    x = position[0]
    y = position[1]
    z = position[2]

}

//Cleaning screen function

function remove () {
    
    theProjects.forEach(name => {
        name.content.style.display = "none"
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

}

function removeMedia () {

    newNames.forEach(name => {
        name.content.style.display = "none"
    })

    ceciVideos.forEach(name => {
        name.content.style.display = "none"
    })

    ecranFlottant.style.display = "none"
}

// For theProject List
function mappingProjects(element, myint){
    console.log(myint)
    const divProject = document.getElementById(element.name+myint);
    divProject.addEventListener('click', function(){

        remove()

        element.content.style.display = "block";

        // random position numbers for the project container position
        
        positionRandom()
        console.log("hello", x,y,z)
        element.content.style.left = x + "px";
        element.content.style.right = y + "px"
        element.content.style.top = z + "px"

    }) 

}

// Display random words projects

theProjects.map(function(x2) {return mappingProjects(x2, "2")})
newNames.map(function(x2) {return mappingProjects(x2, "1") })


// For theVideoProjects List

function mappingVideoProjects(element, myint){
    console.log(myint)
    const divProject = document.getElementById(element.name+myint);
    divProject.addEventListener('click', function(){

        remove()

        element.content.style.display = "block";

        // random position numbers for the project container position
        
        positionRandom()
        console.log("hello", x,y,z)
        element.content.style.left = x + "px";
        element.content.style.right = y + "px"
        element.content.style.top = z + "px"

    }) 

}

// Display random video projects words

theVideoProjects.map(function(x2) {return mappingVideoProjects(x2, "2")})
newVideoProjects.map(function(x2) {return mappingVideoProjects(x2, "1") })


// Display ici, ici

newPlaces.map(function(element){

    const divPlaces = document.getElementById(element.name);
    
    divPlaces.addEventListener('click', function(){
        
        element.content.style.display = "block";

        removeMedia()

    })

})

// Display La

placeLa.addEventListener('click', function(){

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

    // random position numbers for the project container position

    positionRandom()
    element.content.style.left = x + "px";
    element.content.style.right = y + "px"
    element.content.style.top = z + "px"
    
})


// Display ecran flottant

screenContainer.addEventListener('click', function(){
    remove()
    ecranFlottant.style.display = "block";
    
})

// Display contact
/* follow.addEventListener('click', function(){

    if (contactContainer.style.display === "block") {
        contactContainer.style.display = "none";
    } else {
        contactContainer.style.display = "block";
    }
    
}) */

// Remove videos



//Make all -div class main-container- a draggable element

Array.from(divMainContainer).forEach(function(item){
    
    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    item.addEventListener("touchstart", dragStart, false);
    item.addEventListener("touchend", dragEnd, false);
    item.addEventListener("touchmove", drag, false);

    item.addEventListener("mousedown", dragStart, false);
    item.addEventListener("mouseup", dragEnd, false);
    item.addEventListener("mousemove", drag, false);

    //Initialiazing the Drag
    
    function dragStart (e) {
        
        if(e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
            
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        
        active = true;

    }
    
    function drag(e) {

        if (active) {
            
            e.preventDefault();
            
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

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


//Dark and Light mode

const allSpan = document.getElementsByTagName('span');
const allLinks = document.getElementsByTagName('a');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

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
    })

})





//
//
//HTML English Templates for projects  

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
        <h6 class='title-project'>City peripherie</h6>
        <p>
            A nightclub closed for years reopened for one night. A photographer who meets the
            inhabitants of houses seen from the train. A steel mill in the Detroit industrial area that
            ends up looking like a mirage by observing it.
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
        <h6 class='title-project'>Sport</h6>
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
        <h6 class='title-project'>The figure of the monster</h6>
        <p>
            A cycle in five sessions devoted to strange monsters and creatures of all kinds 
            within the <a href="https://www.facebook.com/cinebusbxl/" target="blank">Cinébus</a> project, 
            an old STIB city bus converted into a micro cinema. First project of the Pagktos duo, for us this is where it all started.
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
    <video src=${allMedia.project_videos.first_vp} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Asparagus - Suzan Pitt <i>1979</i></p>
`

secondVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.second_vp} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Salomé - Téo Hernandez <i>1976</i></p>
`
thirdVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.third_vp} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Brouillard Passage 14 - Alexandre Larose <i>2014</i></p>
`
fourthVideoProject.innerHTML = `
    <video src=${allMedia.project_videos.fourth_vp} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Born in Flames - Lizzie Borden <i>1983</i></p>
`


//HTML Template for Ceci Videos

firstVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.first_v} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Breakaway - Bruce Conner <i>1966</i></p>
`

secondVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.second_v} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Gutrug N°1 - Werner Nekes <i>1894</i></p>
`
thirdVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.third_v} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Ink in Milk - Gernot Wieland <i>2018</i></p>
`
fourthVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.fourth_v} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Kika opowiesci o czlowieku - Bogdan Dziworski <i>1983</i></p>
`
fifthVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.fifth_v} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">Ofrenda - Claudio Caldini <i>1978</i></p>
`
sixVideo.innerHTML = `
    <video src=${allMedia.ceci_videos.six_v} preload="auto" autoplay="true" muted></video>
    <p class="copyright-video">The Girl Chewing Gum - John Smith <i>1976</i></p>
`

//HTML Template for work places

placeOne.innerHTML = `
    <a href="${allMedia.links.first_place}" target="blank">Ear you are Festival</a>
    <img src="./assets/brand/curseur.png">
`

placeTwo.innerHTML = `
    <a href="${allMedia.links.second_place}" target="blank">Periferia Festival</a>
    <img src="./assets/brand/curseur.png">
`

placeThird.innerHTML = `
    <a href="${allMedia.links.third_place}" target="blank">Cinebus</a>
    <img src="./assets/brand/curseur.png">
`

placeFourth.innerHTML = `
    <a href="${allMedia.links.fourth_place}" target="blank">Allee du Kaai</a>
    <img src="./assets/brand/curseur.png">
`

placeFifth.innerHTML = `
    <a href="${allMedia.links.fifth_place}" target="blank">Nazcas Festival</a>
    <img src="./assets/brand/curseur.png">
`

placeSix.innerHTML = `
    <a href="${allMedia.links.six_place}" target="blank">Cine Nova</a>
    <img src="./assets/brand/curseur.png">
`

// Remove videos after playing
const allVideos = document.getElementsByTagName('video');
const videoContainer =document.getElementsByClassName('video-container');
console.log(videoContainer)

Array.from(videoContainer).forEach(function(item){
    item.style.display = 'none'
})

Array.from(allVideos).forEach(function(item){
    
    item.onended = function(){
        item.style.display = "none";
        
        Array.from(videoContainer).forEach(function(element){
            
            element.style.display = "none";
        })
    }
}) 

if (window.screen.width < 1000) {
    console.log('small screen')
    alert('This website is not smartphone or tablet friendly');
}


/* archiveList.innerHTML = `
    <span id='${theProjects[0].name+"2"}'>${theProjects[0].name}</span>
    <span id='${theProjects[1].name+"2"}'>${theProjects[1].name}</span>
    <span id='${theProjects[2].name+"2"}'>${theProjects[2].name}</span>
    <span id='${theProjects[3].name+"2"}'>${theProjects[3].name}</span>   
` */

    //Before
/* 
archiveList.innerHTML = `

${theProjects2.map(function(element){
    return `
    <p id="${element.name}">${element.name}</p>

    `
}).join('')}

`  */


