function checkSize() {
    if (window.innerWidth < 480) {
        changeAuthorElementBasedOnWidth()
    }
}



function changeAuthorElementBasedOnWidth() {
    authorDiv = document.getElementById("authorDiv"); 

    //If small
    if (window.innerWidth < 760) {
        authorDiv.innerHTML = '<div class="col">' +
        '      <img src="/assets/ula.jpg" class="img-thumbnail " id="profilepic" > ' +
        '  </div> ' +
        '  <div> ' +
        '      <p id="mainPageTextTitle">Urszula Malińska - Mark</p>' +
        '      <p id="mainPageTextL">has over 10 years of experience in creating activities for local and international societies. Coordinator of local, international projects and events. Co-author of city games in Łódź, Poland. Trainer in the field of city games, creativity, and design thinking in local and international trainings and workshops. </p>' +
        '  </div>'
    } else {
        authorDiv.innerHTML = '<div class="col">' +
        '      <img src="/assets/ula.jpg" class="img-thumbnail " id="profilepic" > ' +
        '  </div> ' +
        '  <div class="col"> ' +
        '      <p id="mainPageTextTitle">Urszula Malińska - Mark</p>' +
        '      <p id="mainPageTextL">has over 10 years of experience in creating activities for local and international societies. Coordinator of local, international projects and events. Co-author of city games in Łódź, Poland. Trainer in the field of city games, creativity, and design thinking in local and international trainings and workshops. </p>' +
        '  </div>'
    }
}


window.addEventListener('resize', changeAuthorElementBasedOnWidth);
