küsimused = {1: "Mulle meeldivad väljakutsed.",
            2: "Katsetan meeleldi midagi uut ka siis, kui ei ole kindel, et see õnnestub.",
            3: "Probleemid on väljakutse, mitte takistus.",
            4: "Olen uutele ideedele avatud.",
            5: "Mulle meeldib see, kuidas ma probleeme lahendan.",
            6: "Mulle meeldib õppida uusi asju" 
            };

küsimuste_vastused = {1: null,
                  2: null,
                  3: null,
                  4: null,
                  5: null,
                  6: null
                 }


function handleButtonStates(index) {
    if (index == 1){
        document.getElementById("eelmineBtn").disabled = true;
    } else {
        document.getElementById("eelmineBtn").disabled = false;
    }

    if (index == Object.keys(küsimused).length){
        document.getElementById("järgmineBtn").disabled = true;
    } else {
        document.getElementById("järgmineBtn").disabled = false;
    }
}

function kontrolliKasKõikVastatud() {
    salvestaVastus(parseInt(document.getElementById("küsimuseCounter").innerHTML.split("/")[0]))
    for (let i = 1; i <= Object.keys(küsimuste_vastused).length; i++) {
        if (küsimuste_vastused[i] == null) {
            document.getElementById("esitaBtn").disabled = true;
            return false;
        }
      }
    
    document.getElementById("esitaBtn").disabled = false;
    return true;
}

function setNewQuestion(index) {
    document.getElementById("tekst").innerHTML = küsimused[index];
}

function setCounter(index) {
    document.getElementById("küsimuseCounter").innerHTML = index + "/" + Object.keys(küsimused).length;
}


function järgmine() {
    let qIndex = parseInt(document.getElementById("küsimuseCounter").innerHTML.split("/")[0]);
    let nextIndex = qIndex+1;
    eemaldaRadioSelection() // eemaldab valiku
    pageRefresh(nextIndex); // uus küsimus + uus counter + checkib buttoneid + valib radio kui vastatud
}

function eelmine() {
    let qIndex = parseInt(document.getElementById("küsimuseCounter").innerHTML.split("/")[0]);
    let nextIndex = qIndex - 1;
    eemaldaRadioSelection()
    pageRefresh(nextIndex);
}

function salvestaVastus(index) {
    let vastusNr = millineRadioOnValitud();
    küsimuste_vastused[index] = vastusNr;
}

function eemaldaRadioSelection() {
    for (let i = 1; i < 6; i++) {
        let radioChecked = document.getElementById('radio'+i).checked;
        if (radioChecked) {
            document.getElementById('radio'+i).checked = false;
        }
      }
}

function millineRadioOnValitud() {
    for (let i = 1; i < 6; i++) {
        let radioChecked = document.getElementById('radio'+i).checked;
        if (radioChecked) {
            return i;
        }
      }
    return null;
}

function valiRadio(index) {
    document.getElementById('radio'+index).checked = true;
}

function esita() {
    //kalkulatsioon
    let kalkulatsioon = 0;
    document.getElementById("tulemusTekst").innerHTML = kalkulatsioon;
}



function valiRadioKuiVastatud(index) {
    if (küsimuste_vastused[index] != null) {
        valiRadio(küsimuste_vastused[index]);
    }
}


function pageRefresh(index) {
    setNewQuestion(index);
    setCounter(index);
    handleButtonStates(index);
    valiRadioKuiVastatud(index);
}

//init with index 1
pageRefresh(1)

