function restore() {
    console.log("restore")
    gameField = document.getElementById("gameField")
    gameField.innerHTML = '<div class="centered" style="background-color: #258286;" >' +
            '<!--Text-->' +
            '<div style="width:40%; margin:20px" >' +
            '    <div style="padding:5%">' +
            '        <div>' +
            '            <div style="text-align: left; padding-top:6px;">' +
            '                <h3 style=\'font-family:"Special Elite"; color: #100F0D\'>THE STORY</h3>' +
            '            </div>' +
            '            <div >' +
            '                <p style=\'font-family:"gidoleregular"; color: #FFFFFF\' >A local journalist, inspired by many stories about the picturesque town of Rõuge, decided to explore its history. ' +
            '                    He wanted to write an article about people associated with Rõuge, so he started to look for materials. One day, he found one page from a very old issue of the local newspaper,' +
            '                    where was information about a mysterious treasure of Rõuge. But there was neither the date nor the author. The rest of this edition of this newspaper was nowhere to be found. ' +
            '                    This information, however, was accompanied by a map, statements of various people about "their" places in Rõuge, and hints about a mysterious treasure of this place.<br><br>' +
            '                    "Rõuge has been hiding a very valuable treasure for many years, the value of which continues to grow. The stories of several inhabitants of this town can help you find it. ' +
            '                    Through their stories and places connected with them, you will reach clues that will lead you to find the treasure." The journalist, of course, decided to solve the mystery and discovered the secret!' +
            '                    He also found that its value is so precious and important that others must also find it!<br>' +
            '                    Therefore, instead of an article, he prepared stories of people and a map for you.' +
            '                </p>' +
            '            </div>' +
            '        </div>' +
            '        <div>' +
            '            <div>' +
            '                <div  style="text-align: right; padding-top:6px">' +
            '                    <h3 style=\'font-family:"Special Elite"; color: #100F0D\'>HOW TO PLAY?</h3>' +
            '                </div>' +
            '                <div >' +
            '                    <p style=\'font-family:"gidoleregular"; color: #FFFFFF\'>' +
            '                        Here is the card game with the map and stories of people connected with Rõuge.<br>' +
            '                        Your goal is to discover the treasure!<br>' +
            '                        To do it:<br>' +
            '                        1. Start in the place with the star. Then go to the places marked on the map (you can choose the order) and match a story connected to this place.<br>' +
            '                        2. Put the number of the story next to the symbol of the place, in the frame under the map.<br>' +
            '                        3. In the place where you\'ll be, solve the task, that\'s contained in the person\'s story. IMPORTANT! To do it, you\'ll need to look around and read info, that you\'ll find in the places.<br>' +
            '                        4. Write the solutions of the tasks in the frame under the map, under the symbol and number. You can discover the treasure by arranging the solutions of the tasks in the order of numbers.<br><br>' +
            '                    </p>' +
            '                    <p style=\'font-family:"gidoleregular"; color: #F2B705\'>' +
            '                        READ EVERYTHING CAREFULLY!' +
            '                    </p>' +
            '                    <p style=\'font-family:"gidoleregular"; color: #FFFFFF\'>' +
            '                        Estimated time for a game is 75 minutes, but adjust it to your possibilities. Blue symbols on the map show where you can stop for a coffee or to take a look on the view.' +
            '                        After the game, I encourage you to look for more information about places and people from Rõuge, cause this place has a lot of interesting stories. What is mentioned in a game, is just the beginning!' +
            '                    </p>' +
            '                    <p style=\'font-family:"gidoleregular"; color: #F2B705\'>' +
            '                        Good luck and enjoy your game!' +
            '                    </p>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div> ' +
            '</div>' +
            '<!--Map + iconfields-->' +
            '<div  style="width:50%; ">' +
            '    <div class="centered" style="padding: 25px ">' +
            '        <div id="map"></div>' +
            '    </div>' +
            '    <div class="centered">' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/landmark-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/compass-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold; ">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/tower-observation-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/sourcetree-brands.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/fish-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/music-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/monument-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div>' +
            '        <div > ' +
            '            <div class="centered" style="padding:1px">' +
            '                <img src="../../assets/icons/masks-theater-solid.svg" width="20" height="20">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
            '            </div>' +
            '            <div>' +
            '                <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
            '            </div>' +
            '        </div> ' +
            '    </div>' +
            '</div>' +
            '</div>'
    loadMap()
}

function resizeGame() {
    gameField = document.getElementById("gameField")
    gameField.innerHTML = '<div class="centered" style="background-color: #258286;" >' +
                '<!--Text-->' +
                '<div style="width:100%; margin:20px"  class="centered ">' +
                '    <div style="padding:5%">' +
                '        <div>' +
                '            <div style="text-align: left; padding-top:6px;">' +
                '                <h3 style=\'font-family:"Special Elite"; color: #100F0D\'>THE STORY</h3>' +
                '            </div>' +
                '            <div >' +
                '                <p style=\'font-family:"gidoleregular"; color: #FFFFFF\' >A local journalist, inspired by many stories about the picturesque town of Rõuge, decided to explore its history. ' +
                '                    He wanted to write an article about people associated with Rõuge, so he started to look for materials. One day, he found one page from a very old issue of the local newspaper,' +
                '                    where was information about a mysterious treasure of Rõuge. But there was neither the date nor the author. The rest of this edition of this newspaper was nowhere to be found. ' +
                '                    This information, however, was accompanied by a map, statements of various people about "their" places in Rõuge, and hints about a mysterious treasure of this place.<br><br>' +
                '                    "Rõuge has been hiding a very valuable treasure for many years, the value of which continues to grow. The stories of several inhabitants of this town can help you find it. ' +
                '                    Through their stories and places connected with them, you will reach clues that will lead you to find the treasure." The journalist, of course, decided to solve the mystery and discovered the secret!' +
                '                    He also found that its value is so precious and important that others must also find it!<br>' +
                '                    Therefore, instead of an article, he prepared stories of people and a map for you.' +
                '                </p>' +
                '            </div>' +
                '        </div>' +
                '        <div>' +
                '            <div id="howToPlay" class="centered" style="padding: 5px"> ' +
                '                <button data-bs-toggle="modal" data-bs-target="#howToPlayModal" type="button" style="height: 42px" class="btn btn-info"><h5 style=\'font-family:"gidoleregular"; color: #100F0D\'>HOW TO PLAY?</h5></button>' +
                ' <div class="modal fade" id="howToPlayModal" tabindex="-1" aria-labelledby="howToPlayModal" aria-hidden="true">' +
                '     <div class="modal-dialog modal-dialog-centered">' +
                '         <div class="modal-content">' +
                '             <div class="modal-header">' +
                '                 <h5 class="modal-title" id="exampleModalLabel">How to play title</h5>' +
                '                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                '             </div>' +
                '             <div class="modal-body" id="modalAnswer">' +
                '                 How to play text ' +
                '             </div>' +
                '             <div class="modal-footer">' +
                '                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
                '             ' +
                '                 <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirm</button>' +
                '             </div>' +
                '         </div>' +
                '     </div>' +
                ' </div>' +
                '            </div>' +
                '        </div>' +
                '    </div> ' +
                '</div>' +
                '</div>' +
                '<div class="centered" style="background-color: #258286;">' +
                '    <!--Map + iconfields -->' +
                '    <div  style="width:100%;" >' +
                '        <div class="centered">' +
                '            <div id="map"></div>' +
                '        </div>' +
                '        <div class="centered" style="padding: 25px">' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/landmark-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/compass-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold; ">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/tower-observation-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/sourcetree-brands.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/fish-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/music-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/monument-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div>' +
                '            <div > ' +
                '                <div class="centered" style="padding:1px">' +
                '                    <img src="../../assets/icons/masks-theater-solid.svg" width="20" height="20">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="border-radius: 20px; border-color: black; text-align: center; font-weight: bold;">' +
                '                </div>' +
                '                <div>' +
                '                    <input maxlength="1" size="1" style="text-align: center; font-weight: bold;">' +
                '                </div>' +
                '            </div> ' +
                '        </div>' +
                '    </div>' +
                '</div>' 
        loadMap()

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
    carousel = document.getElementById("carouselExampleIndicators")
    carousel.style.width = "100%"
}
function restoreCarousel() {
    carousel = document.getElementById("carouselExampleIndicators")
    carousel.style.width = "50%"
}


function stackEl() {

    let width = window.innerWidth
    
    if (width < 1330) {
        if (!resized){
            resizeGame()
            resizeGameBottom()
            resizeCarousel()
            resized = true
            restored = false
        }
    } else {
        if (!restored) {
            restore()
            restoreGameBottom()
            restoreCarousel()
            resized = false
            restored=true
        }
    }
    
}
let resized = false;
let restored = false;


window.addEventListener('resize', stackEl);
stackEl()