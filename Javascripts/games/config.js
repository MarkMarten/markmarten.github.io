player_correct_amount = 0
how_to_play_button_HTML =    '        <div>' +
'            <div class="centered" style="padding: 5px"> ' +
'                <button data-bs-toggle="modal" data-bs-target="#howToPlayModal" type="button" style="height: 42px" class="btn btn-info"><h5 style=\'font-family:"gidoleregular"; color: #100F0D\'>HOW TO PLAY?</h5></button>' +
'            <div class="modal fade" id="howToPlayModal" tabindex="-1" aria-labelledby="howToPlayModal" aria-hidden="true">' +
'            <div class="modal-dialog modal-dialog-centered">' +
'               <div class="modal-content">' +
'                    <div class="modal-header">' +
'                        <h5 class="modal-title" id="exampleModalLabel">How to play</h5>' +
'                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
'                    </div>' +
'                    <div class="modal-body" id="modalAnswer">' +
'                           <b>Your goal is to discover the treasure!</b><br>' +
'                        <u>To do it:</u><br>' +
'                        <b>1.</b> Start in the place with the star. Then go to the places marked on the map (you can choose the order) and match a story connected to this place.<br>' +
'                        <b>2.</b> Put the number of the story next to the symbol of the place, in the frame under the map.<br>' +
'                        <b>3.</b> In the place where you\'ll be, solve the task, that\'s contained in the person\'s story. IMPORTANT! To do it, you\'ll need to look around and read info, that you\'ll find in the places.<br>' +
'                        <b>4.</b> Write the solutions of the tasks in the frame under the map, under the symbol and number. You can discover the treasure by arranging the solutions of the tasks in the order of numbers.<br><br>' +
'                    </div>' +
'                    <div class="modal-footer">' +
'                       <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lets go!</button>' +
'                   </div>' +
'              </div>' +
'           </div>' +
'       </div>' 
how_to_play_text_HTML =      '            <div>' +
'                <div  style="text-align: right; padding-top:6px">' +
'                    <h3 style=\'font-family:"Special Elite"; color: #100F0D\'>HOW TO PLAY?</h3>' +
'                </div>' +
'                <div >' +
'                    <p style=\'font-family:"gidoleregular"; color: #FFFFFF\'>' +
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
'                       Blue symbols on the map show where you can stop for a coffee or to take a look on the view.' +
'                        After the game, I encourage you to look for more information about places and people of this location, cause this place has a lot of interesting stories. What is mentioned in a game, is just the beginning!' +
'                    </p>' +
'                    <p style=\'font-family:"gidoleregular"; color: #F2B705\'>' +
'                        Good luck and enjoy your game!' +
'                    </p>' +
'                </div>' +
'            </div>' 

compass = L.icon({
    iconUrl: '/assets/icons/compass-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});

eye = L.icon({
    iconUrl: '/assets/icons/eye-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});

fish = L.icon({
    iconUrl: '/assets/icons/fish-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});

landmark = L.icon({
    iconUrl: '/assets/icons/landmark-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});

masks = L.icon({
    iconUrl: '/assets/icons/masks-theater-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});

monument = L.icon({
    iconUrl: '/assets/icons/monument-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});

mug = L.icon({
    iconUrl: '/assets/icons/mug-hot-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [-3,-10] 
});
music = L.icon({
    iconUrl: '/assets/icons/music-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10]
});
sourcetree = L.icon({
    iconUrl: '/assets/icons/sourcetree-brands.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});
tower = L.icon({
    iconUrl: '/assets/icons/tower-observation-solid.svg',
    iconSize:     [22, 22], 
    iconAnchor:   [12, 12], 
    popupAnchor:  [1,-10] 
});