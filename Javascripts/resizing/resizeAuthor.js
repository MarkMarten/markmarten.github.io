

function reposition() {
    whoami = document.getElementById('whoami')
    whoami.innerHTML = 
        '<div>' +
                '<img src="/assets/ula2.jpg" class="rounded" style="width:250px; height:250px; object-fit: cover; "/>' +
            '</div>' +
        '<div style="margin-top: 15px; margin-bottom: 20px;padding:10px " class="centered"> ' +
            '<div style="text-align: left; max-width:700px;"  id="authorText" >' +
                " <h3 style='font-family:\"Special Elite\"; color: #F2B705'>WHO AM I?</h3>"+
                '<p style="font-size: 20px;">Hi! <br> ' +
                    'My name is Urszula. <br>' +
                    'I am a big fan of connecting in creative ways culture, art and non-formal education. One of my passions and results of this connection is designing city & touristic games. In other words - making visiting new places more attractive and active. For several years, I’ve created city games in Łódź, Poland. I also have taught others - children, teenagers, adults and seniors how to do it. As a result, many people discovered something new about the world around them but also about themselves. When I moved to Estonia (I am Polish), I had the idea to continue my hobby here. To open the door for residents to amazing adventures. And today, this door is opened by you!' +
                '</p>' +
            '</div>' +
        '</div>'


    whoami2 = document.getElementById('whoami2')
    whoami2.innerHTML = 
    '<div style="margin-bottom: 20px; padding:10px; " class="centered">' +
    '    <div style="text-align: left; max-width:700px;"  id="authorText">' +       
        "        <h3 style='font-family:\"Special Elite\"; color: #F2B705'>WHY TOURISTIC GAMES?</h3>"+     
    '        <p style="font-size: 20px;">' +
    '            I believe that discovering the history of places and the stories of people living there opens our minds and shows us a new perspective about the world around us. I also believe that we learn the most when we experience something. When we are engaged completely, and the activity provides us with entertainment and challenges.' +
    '            My goal is to use my own and others\' knowledge and experience to create the adventure for you that you will want to reach for more. The adventure that will become the beginning of your journey to discover the world. I know that the tourist game is a form of activity that will provide you with knowledge, entertainment and fun. ' +
    '            <br><br>' +
    '            I want to take you on an unforgettable adventure that will broaden your horizons, move your body, strengthen relationships with others and allow you to rest. Trust me - you will have a great time, discover and learn about new places, stories and spend time actively!' +
    '        </p>' +
    '    </div>' +
    '</div>' +
    '    <div >' +
    '        <img src="/assets/ula3.jpg" class="rounded" style="width:250px; height:250px; object-fit: cover;"/>' +
    '    </div>' 


}

function restore() {
    whoami = document.getElementById('whoami')
    whoami.innerHTML = 
        '    <div style="margin-left: max(50px, min(200px, 500px)); margin-right: max(50px, min(200px, 500px)); margin-bottom: 20px " class="centered ">'+
        '        <div>'+
        '            <img src="/assets/ula2.jpg" class="rounded" style="width:250px; height:250px; object-fit: cover; margin-right: 30px; "/>'+
        '        </div>'+
        '        <div style="text-align: left; max-width:700px;"  id="authorText">'+
        "        <h3 style='font-family:\"Special Elite\"; color: #F2B705'>WHO AM I?</h3>"+
        '            <p style="font-size: 20px;">Hi! <br> '+
        '                My name is Urszula. <br>'+
        '                I am a big fan of connecting in creative ways culture, art and non-formal education. One of my passions and results of this connection is designing city & touristic games. In other words - making visiting new places more attractive and active. For several years, I’ve created city games in Łódź, Poland. I also have taught others - children, teenagers, adults and seniors how to do it. As a result, many people discovered something new about the world around them but also about themselves. When I moved to Estonia (I am Polish), I had the idea to continue my hobby here. To open the door for residents to amazing adventures. And today, this door is opened by you!'+
        '            </p>'+
        '        </div>'+
        '    </div>'
    whoami2 = document.getElementById('whoami2')
    whoami2.innerHTML = 
    '<div style="margin-left: max(50px, min(200px, 500px)); margin-right: max(50px, min(200px, 500px)); margin-bottom: 20px " class="centered">' +
    '    <div style="text-align: left; max-width:700px;"  id="authorText">' +       
    "        <h3 style='font-family:\"Special Elite\"; color: #F2B705'>WHY TOURISTIC GAMES?</h3>"+
    '        <p style="font-size: 20px;">' +
    '            I believe that discovering the history of places and the stories of people living there opens our minds and shows us a new perspective about the world around us. I also believe that we learn the most when we experience something. When we are engaged completely, and the activity provides us with entertainment and challenges.' +
    '            My goal is to use my own and others\' knowledge and experience to create the adventure for you that you will want to reach for more. The adventure that will become the beginning of your journey to discover the world. I know that the tourist game is a form of activity that will provide you with knowledge, entertainment and fun. ' +
    '            <br><br>' +
    '            I want to take you on an unforgettable adventure that will broaden your horizons, move your body, strengthen relationships with others and allow you to rest. Trust me - you will have a great time, discover and learn about new places, stories and spend time actively!' +
    '        </p>' +
    '    </div>' +
    '    <div>' +
    '        <img src="/assets/ula3.jpg" class="rounded" style="width:250px; height:250px; object-fit: cover; margin-right: 30px;"/>' +
    '    </div>' +
    '</div>' 
}

function stackEl() {
    
    let width = window.innerWidth

    if (width < 1350) {
        reposition()
    } else {
        restore()
    }
}

let repositioned = false
window.addEventListener('resize', stackEl);

stackEl()
