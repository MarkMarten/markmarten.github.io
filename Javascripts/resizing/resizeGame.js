let resized = false;
let restored = false;

function newResizeGame() {
    // clear mobile view HTML(just in case)
    document.getElementById("mobileViewDiv1").innerHTML = ""
    document.getElementById("mobileViewDiv2").innerHTML = ""

    document.getElementById("gameTextDiv").style.width = "100%"
    document.getElementById("gameMapDiv").style.width = "100%"

    // remove how to play text
    document.getElementById("howToPlay").innerHTML = ""
    // add how to play button
    document.getElementById("howToPlayMobile").innerHTML = how_to_play_button_HTML
    let gameMapDiv = document.getElementById("gameMapDiv").outerHTML
    let gameTextDiv = document.getElementById("gameTextDiv").outerHTML


    //remove stuff
    document.getElementById("computerViewDiv").innerHTML = ""
    
    // add two elements into mobiledivs from initial HTML
    document.getElementById("mobileViewDiv1").innerHTML = gameTextDiv
    document.getElementById("mobileViewDiv2").innerHTML = gameMapDiv
    loadMap()

    // resize title
    document.getElementById("gameTitle").style.fontSize = "32px"

    
}

function newRestore() {
    document.getElementById("gameTextDiv").style.width = "40%"

    //remove how to play button
    document.getElementById("howToPlayMobile").innerHTML = ""
    //add how to play button
    document.getElementById("howToPlay").innerHTML = how_to_play_text_HTML

    document.getElementById("gameTextDiv").style.width = "40%"
    document.getElementById("gameMapDiv").style.width = "50%"

    if (document.getElementById("computerViewDiv").innerHTML.length == 0) {
        document.getElementById("computerViewDiv").innerHTML +=  document.getElementById("gameTextDiv").outerHTML
        document.getElementById("computerViewDiv").innerHTML +=  document.getElementById("gameMapDiv").outerHTML
    }

    document.getElementById("mobileViewDiv1").innerHTML = ""
    document.getElementById("mobileViewDiv2").innerHTML = ""
    if (map_initialized == false) {
        loadMap()
    }
    // resize title
    document.getElementById("gameTitle").style.fontSize = "50px"
}


function resizeGameBottom() {
    gameBottom = document.getElementById("gameBottom")
    gameBottom.innerHTML =  '<div >' +
    '<div class="centered">' +
    '    <div style="text-align: center;" >' +
    '        <p style=\'font-family: "Special Elite"; color: #100F0D; font-size: 25px;\'>ANSWER:</p>' +
    '        <input type="text" id="gameAnswer" style="padding:7px; border-width: 5px; border-color: black; font-size:20px;">' +
    '        <p style=\'font-family: "Special Elite"; color: #100F0D; font-size: 25px; padding-top:20px\'>NAME OF THE TEAM:</p>' +
    '        <input type="text" id="gameTeam" style="padding:7px; border-width: 5px; border-color: black; font-size:20px;">' +
    '    </div>' +
    '    </div>' +
    '</div>' 
}

function restoreGameBottom() {
    gameBottom = document.getElementById("gameBottom")
    gameBottom.innerHTML = '<div  style="display:flex;justify-content:flex-end;align-items:center;">' +
    '<!--text-->' +
    '<div >' +
    '    <div class="centered">' +
    '        <div style="text-align: right;" >' +
    '            <div style="padding-top: 25px;">' +
    '                <p style=\'font-family: "Special Elite"; color: #100F0D; font-size: 25px;\'>ANSWER:</p>' +
    '            </div>' +
    '            <div style="padding-top: 23px">' +
    '                <p style=\'font-family: "Special Elite"; color: #100F0D; font-size: 25px;\'>NAME OF THE TEAM:</p>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>' +
    '<!--fields-->' +
    '<div style="padding: 5px" >' +
    '    <div class="centered">' +
    '        <div  style="text-align: right;" >' +
    '            <div style="padding-left: 30px; padding-top:2px">' +
    '                <input type="text" id="gameAnswer" style="padding:7px; border-width: 5px; border-color: black; font-size:20px;" size="40">' +
    '            </div>' +
    '            <div style="padding-top: 25px;">' +
    '                <input type="text" id="gameTeam" style="padding:7px; border-width: 5px; border-color: black; font-size:20px;" size="40">' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>' +
    '</div>' 
}

function resizeCarousel() {
    carousel = document.getElementById("carouselIndicators")
    carousel.style.width = "100%"
}
function restoreCarousel() {
    carousel = document.getElementById("carouselIndicators")
    carousel.style.width = "50%"
}


function stackEl() {

    let width = window.innerWidth
    
    if (width < 1330) {

        if (resized == false) {
            newResizeGame()

            resizeGameBottom()
            resizeCarousel()
            resized = true
            restored = false
            map_initialized = false
        }
        
    } else {
        if (restored == false) {
            
            newRestore()
            
            restoreGameBottom()
            restoreCarousel()
            resized = false
            restored=true
        }
        
    }
    
}



window.addEventListener('resize', stackEl);
stackEl()