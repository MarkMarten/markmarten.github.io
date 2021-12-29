

// Checking size to change header into mobile sized
function checkSize() {
    if (window.innerWidth < 480) {
        changeNavbarBasedOnWidth()
    }
}

// Returns page title based on which page it is
function getPageTitle() {

    if (window.location.pathname == "/Pages/home/index.html") {
        homeActive = "active"
        gamesActive = ""
        authorActive = ""
        contactActive = ""
        return "touristic games"
    } else if (window.location.pathname == "/Pages/games/games.html") {
        homeActive = ""
        gamesActive = "active"
        authorActive = ""
        contactActive = ""
        return "Games"
    } else if (window.location.pathname == "/Pages/author/author.html") {
        homeActive = ""
        gamesActive = ""
        authorActive = "active"
        contactActive = ""
        return "About the author"
    } else if (window.location.pathname == "/Pages/contact/contact.html") {
        homeActive = ""
        gamesActive = ""
        authorActive = ""
        contactActive = "active"
        return "Contact"
    }
}

function changeNavbarBasedOnWidth() {
    
    // Handle which page it is
    let currentPageTitle = getPageTitle()
    console.log(contactActive)
    navigationBar = document.getElementById("navigationBar"); //gets navbar element to change innerHTML
    //If small
    if (window.innerWidth < 760) { //data-bs-toggle= viis kuidas toggleda; data-bs-target = element mida toggleme
        if (getPageTitle()=="Contact" || getPageTitle() == "About the author") {
            navigationBar.innerHTML = '<div>' +
            '   <nav class="navbar sticky-top navbar-dark">' +
            '       <div class="container-fluid">' +
            '               <button class="navbar-toggler" style="background-color: DarkSlateGrey"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">' +
            '               <span class = "navbar-toggler-icon navbar-dark" > </span>' +
            '           </button>' +
            '           <a class="navbar-brand text-dark" href="/Pages/home/index.html">LOGO</a>' +
            '           <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">' +
            '           <div class="offcanvas-header bg-dark"> <h5 class = "offcanvas-title text-light" id = "offcanvasNavbarLabel" > LOGO </h5> <button type = "button" class = "btn-close text-reset"data-bs-dismiss = "offcanvas" aria-label = "Close" > </button> </div > ' +
            '           <div class="offcanvas-body bg-dark">' +
            '               <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+homeActive+'" aria-current="page" href="/Pages/home/index.html">Home page</a>' +
            '                   </li>' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+gamesActive+'" aria-current="page" href="/Pages/games/games.html">Games</a>' +
            '                   <li>' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+authorActive+'" aria-current="page" href="/Pages/author/author.html">About the author</a>' +
            '                   <li>' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+contactActive+'" aria-current="page" href="/Pages/contact/contact.html" >Contact</a>' +
            '                   </li>' +
            '               </ul>' +
            '           </div>' +
            '       </div>' +
            '   </nav' +
            '</div>'
        } else {
        navigationBar.innerHTML = '<div id="titlePage">' +
            '   <nav class="navbar sticky-top navbar-dark">' +
            '       <div class="container-fluid">' +
            '           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">' +
            '               <span class = "navbar-toggler-icon"> </span>' +
            '           </button>' +
            '           <a class="navbar-brand text-light" href="/Pages/home/index.html">LOGO</a>' +
            '           <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">' +
            '           <div class="offcanvas-header bg-dark"> <h5 class = "offcanvas-title text-light" id = "offcanvasNavbarLabel" > LOGO </h5> <button type = "button" class = "btn-close text-reset"data-bs-dismiss = "offcanvas" aria-label = "Close" > </button> </div > ' +
            '           <div class="offcanvas-body bg-dark">' +
            '               <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+homeActive+'" aria-current="page" href="/Pages/home/index.html">Home page</a>' +
            '                   </li>' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+gamesActive+'" aria-current="page" href="/Pages/games/games.html">Games</a>' +
            '                   <li>' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+authorActive+'" aria-current="page" href="/Pages/author/author.html">About the author</a>' +
            '                   <li>' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+contactActive+'" aria-current="page" href="/Pages/contact/contact.html" >Contact</a>' +
            '                   </li>' +
            '               </ul>' +
            '           </div>' +
            '       </div>' +
            '       </div>' +
            '   </nav>' +
            '   <div class="container-fluid">' +
            '       <h1 class="text-light" id="titleIdMobile" >'+currentPageTitle+'</h1>' +
            '   </div>' +
            '</div>'
        }
    } else { //If big
        console.log(getPageTitle())
        if (getPageTitle()=="Contact" || getPageTitle() == "About the author"){
            navigationBar.innerHTML = '<div >' +
            '   <nav class="navbar sticky-top navbar-light" >' +
            '       <div class="container-fluid">' +
            '               <a class="navbar-brand text-dark" href="/Pages/home/index.html">LOGO</a>' +
            '               <ul class="navbar-nav">' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+homeActive+' m-3 d-inline text-dark" aria-current="page" href="/Pages/home/index.html">Home page</a>' +
            '                       <a class="nav-link '+gamesActive+' m-3 d-inline text-dark" aria-current="page" href="/Pages/games/games.html">Games</a>' +
            '                       <a class="nav-link '+authorActive+' m-3 d-inline text-dark" aria-current="page" href="/Pages/author/author.html">About the author</a>' +
            '                       <a class="nav-link '+contactActive+' m-3 d-inline text-dark" aria-current="page" href="/Pages/contact/contact.html">Contact</a>' +
            '                   </li>' +
            '               </ul>' +
            '       </div>' +
            '   </nav' +
            '</div>'
        }
        else {
            navigationBar.innerHTML = '<div id="titlePage">' +
            '   <nav class="navbar sticky-top navbar-light">' +
            '       <div class="container-fluid">' +
            '               <a class="navbar-brand text-light" href="/Pages/home/index.html">LOGO</a>' +
            '               <ul class="navbar-nav">' +
            '                   <li class="nav-item">' +
            '                       <a class="nav-link '+homeActive+' m-3 d-inline text-light" aria-current="page" href="/Pages/home/index.html">Home page</a>' +
            '                       <a class="nav-link '+gamesActive+' m-3 d-inline text-light" aria-current="page" href="/Pages/games/games.html">Games</a>' +
            '                       <a class="nav-link '+authorActive+' m-3 d-inline text-light" aria-current="page" href="/Pages/author/author.html">About the author</a>' +
            '                       <a class="nav-link '+contactActive+' m-3 d-inline text-light" aria-current="page" href="/Pages/contact/contact.html">Contact</a>' +
            '                   </li>' +
            '               </ul>' +
            '       </div>' +
            '   </nav' +
            '   <div class="container-fluid">' +
            '       <h1 class="text-light" id="titleId">'+currentPageTitle+'</h1>' +
            '   </div>' +
            '</div>'
        }
       
    }

}

//Resize listener -> change navbar
window.addEventListener('resize', changeNavbarBasedOnWidth);
changeNavbarBasedOnWidth() // Renders the navbar
