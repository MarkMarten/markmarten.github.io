function repositionS() {
    work = document.getElementById("work_images").classList;
    work.remove("bounded");
    work.remove("boundedExtraSmall");
    work.add("boundedSmall")


  txt1 = document.getElementById("main_text1").classList;
  txt1.remove("bounded");
  txt1.remove("boundedExtraSmall");
  txt1.add("boundedSmall");

  txt2 = document.getElementById("main_text2").classList;
  txt2.remove("bounded");
  txt2.remove("boundedExtraSmall");
  txt2.add("boundedSmall");

  txt3 = document.getElementById("main_text3").classList;
  txt3.remove("bounded");
  txt3.remove("boundedExtraSmall");
  txt3.add("boundedSmall");

  authorContainer = document.getElementById("authorContainer").classList;
  authorContainer.remove("bounded");
  authorContainer.remove("boundedExtraSmall");
  authorContainer.add("boundedSmall");

  title1 = document.getElementById("main_title1").classList;
  title1.remove("bounded");
  title1.remove("boundedExtraSmall");
  title1.add("boundedSmall");

  title2 = document.getElementById("main_title2").classList;
  title2.remove("bounded");
  title2.remove("boundedExtraSmall");
  title2.add("boundedSmall");

  title3 = document.getElementById("main_title3").classList;
  title3.remove("bounded");
  title3.remove("boundedExtraSmall");
  title3.add("boundedSmall");

  title4 = document.getElementById("main_title4").classList;
  title4.remove("bounded");
  title4.remove("boundedExtraSmall");
  title4.add("boundedSmall");

  title5 = document.getElementById("main_title5").classList;
  title5.remove("bounded");
  title5.remove("boundedExtraSmall");
  title5.add("boundedSmall");
}

function repositionXS() {

  work = document.getElementById("work_images").classList;
  work.remove("bounded");
  work.remove("boundedSmall");


  txt1 = document.getElementById("main_text1").classList;
  txt1.remove("bounded");
  txt1.remove("boundedSmall");

  txt2 = document.getElementById("main_text2").classList;
  txt2.remove("bounded");
  txt2.remove("boundedSmall");

  txt3 = document.getElementById("main_text3").classList;
  txt3.remove("bounded");
  txt3.remove("boundedSmall");

  authorContainer = document.getElementById("authorContainer").classList;
  authorContainer.remove("bounded");
  authorContainer.remove("boundedSmall");

  title1 = document.getElementById("main_title1").classList;
  title1.remove("bounded");
  title1.remove("boundedSmall");

  title2 = document.getElementById("main_title2").classList;
  title2.remove("bounded");
  title2.remove("boundedSmall");

  title3 = document.getElementById("main_title3").classList;
  title3.remove("bounded");
  title3.remove("boundedSmall");

  title4 = document.getElementById("main_title4").classList;
  title4.remove("bounded");
  title4.remove("boundedSmall");

  title5 = document.getElementById("main_title5").classList;
  title5.remove("bounded");
  title5.remove("boundedSmall");
}

function restore() {

    work = document.getElementById("work_images").classList;
    work.remove("boundedExtraSmall");
    work.remove("boundedSmall");
    work.add("bounded")


  txt1 = document.getElementById("main_text1").classList;
  txt1.add("bounded");
  txt1.remove("boundedSmall");
  txt1.remove("boundedExtraSmall");

  txt2 = document.getElementById("main_text2").classList;
  txt2.add("bounded");
  txt2.remove("boundedSmall");
  txt2.remove("boundedExtraSmall");

  txt3 = document.getElementById("main_text3").classList;
  txt3.add("bounded");
  txt3.remove("boundedSmall");
  txt3.remove("boundedExtraSmall");

  authorContainer = document.getElementById("authorContainer").classList;
  authorContainer.add("bounded");
  authorContainer.remove("boundedSmall");
  authorContainer.remove("boundedExtraSmall");

  title1 = document.getElementById("main_title1").classList;
  title1.add("bounded");
  title1.remove("boundedSmall");
  title1.remove("boundedExtraSmall");

  title2 = document.getElementById("main_title2").classList;
  title2.add("bounded");
  title2.remove("boundedSmall");
  title2.remove("boundedExtraSmall");

  title3 = document.getElementById("main_title3").classList;
  title3.add("bounded");
  title3.remove("boundedSmall");
  title3.remove("boundedExtraSmall");

  title4 = document.getElementById("main_title4").classList;
  title4.add("bounded");
  title4.remove("boundedSmall");
  title4.remove("boundedExtraSmall");

  title5 = document.getElementById("main_title5").classList;
  title5.add("bounded");
  title5.remove("boundedSmall");
  title5.remove("boundedExtraSmall");
}

function repositionAuthor() {
  author = document.getElementById("authorContainer");

  author.innerHTML =
    "<div>" +
    '    <div class="centered">' +
    '        <img src="/assets/ula_clear.png" style="max-height: 400px; max-width:100%" id="profilepic" >' +
    "    </div>" +
    '    <div style="padding:40px; " >' +
    '        <div class="centered" >' +
    '            <p style="font-size: 30px; font-family: gidoleregular; color: #027373;" id="mainPageTextTitle">Urszula Malińska - Mark</p>' +
    "        </div>" +
    '        <div class="centered">' +
    '            <p style="font-size: 24px;color: #000000" id="mainPageTextL">Has over 10 years of experience in creating activities for local and international societies. Coordinator of local, international projects and events. Co-author of city games in Łódź, Poland. Trainer in the field of city games, creativity, and design thinking in local and international trainings and workshops. </p>' +
    "        </div>" +
    "    </div>" +
    "</div>";
}

function restoreAuthor() {
  author = document.getElementById("authorContainer");
  author.innerHTML =
    '<img src="/assets/ula_clear.png" style="max-height: 400px;" id="profilepic" >' +
    '<div style="padding:40px; min-width:500px; max-width:800px" >' +
    '    <div class="centered" >' +
    '        <p style="font-size: 30px; font-family: gidoleregular; color: #027373;" id="mainPageTextTitle">Urszula Malińska - Mark</p>' +
    "    </div>" +
    '    <div class="centered" >' +
    '        <p style="font-size: 24px;color: #000000" id="mainPageTextL">Has over 10 years of experience in creating activities for local and international societies. Coordinator of local, international projects and events. Co-author of city games in Łódź, Poland. Trainer in the field of city games, creativity, and design thinking in local and international trainings and workshops. </p>' +
    "    </div>" +
    "</div>";
}

function repositionReviews() {
  document.getElementById("reviewFieldMobile").style.display = "block";
  document.getElementById("reviewFieldComputer").style.display = "none";
}

function restoreReviews() {
  document.getElementById("reviewFieldMobile").style.display = "none";
  document.getElementById("reviewFieldComputer").style.display = "flex";
}

function stackEl() {
  let width = window.innerWidth;

  if (width < 1600 && width >= 1200) {
    repositionS();
  } else if (width < 1200) {
    repositionXS();
  } else {
    restore();
  }

  if (width < 1200) {
    repositionAuthor();
    repositionReviews();
  } else {
    restoreAuthor();
    restoreReviews();
  }
}

let repositioned = false;

window.addEventListener("resize", stackEl);
stackEl();
