
map_initialized = false
function recenter() {
    map.setView(new L.LatLng(57.728958, 26.930269), 15);
}

function loadMap() {

    map = L.map('map').setView([57.728958, 26.930269], 15);

    

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: '',
        maxZoom: 17,
        minZoom: 14,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFydGVubSIsImEiOiJjbDBpZmcza3EwMDFvM2tveDY4dndxbm5yIn0.6dVpQZI8fxGHbVY0kkG_qg'
    }).addTo(map);
    
    
    
    
    L.marker([57.732260, 26.927591], {icon: masks}).addTo(map)
    L.marker([57.731622, 26.928728], {icon: monument}).addTo(map)
    L.marker([57.728156, 26.930348], {icon: compass}).addTo(map)
    L.marker([57.727338, 26.927161], {icon: fish}).addTo(map)
    L.marker([57.728401, 26.936791], {icon: landmark}).addTo(map)
    L.marker([57.731272, 26.928604], {icon: music}).addTo(map)
    L.marker([57.726306, 26.936416], {icon: sourcetree}).addTo(map)
    L.marker([57.727564, 26.937392], {icon: tower}).addTo(map)
    
    L.marker([57.730589, 26.922992], {icon: eye}).addTo(map).bindPopup("Viewpoint from where, looking on the left, you can see e.g. from the distance Estonian Mother Monument. ");
    L.marker([57.728338, 26.926232], {icon: eye}).addTo(map).bindPopup("Lake viewpoint, next to the Rõuge Municipality Government.");
    L.marker([57.728126, 26.935967], {icon: eye}).addTo(map).bindPopup("<h5>Nightingale Valley.</h5> In the spring, during the flowering of the Toomingas, the valley sings with the song of nightingales - hence the name of the valley. Here goes Rõuge primeval valley hiking trail.");
    L.marker([57.730371, 26.922659], {icon: mug}).addTo(map).bindPopup("Saarsilla Café has been operating in an old historical pharmacy on the shores of Lake Suurjärv since 1998. Offers home-cooked food made from local ingredients.");
    L.marker([57.725836, 26.929238], {icon: mug}).addTo(map).bindPopup("<h5>Ööbikuoru Villa.</h5> Coffee place, restaurant and accommodation.Romantic and luxury accommodation in South Estonia. Great food in the restaurant Andreas. Healing salt chamber, smoke sauna, hot tub or massage. Seminars, corporate summer events, birthdays, weddings. Wonderful nature at the crossing of three prehistoric lakes.");
    L.marker([57.728349, 26.938344], {icon: mug}).addTo(map).bindPopup("<h5> Ööbikuoru Visitor Centre.</h5>  Interesting and beautiful log building Rõuge Ööbikuoru Visitor Center with relevant information about Rõuge municipality. In one of the halls of the center, there is an exposition about the nature, history, and climate change of Rõuge. The center sells Rõuge women's and men's handicrafts, and also provides tourist information.");
    
    
    

    let command = L.control({position: 'bottomleft'});
    
    command.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'mapCenterButton');
        
        div.innerHTML = '<button type="button" class="btn btn-light" onclick="recenter()" style="border: 1px solid black; font-size: 12px">Recenter</button>'; 
        return div;
    };
    command.addTo(map);
    
    
    
    map_initialized=true
}
loadMap()
