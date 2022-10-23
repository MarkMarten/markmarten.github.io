küsimused = {1: "Mulle meeldivad väljakutsed.",
            2: "Katsetan meeleldi midagi uut ka siis, kui ei ole kindel, et see õnnestub.",
            3: "Probleemid on väljakutse, mitte takistus.",
            4: "Olen uutele ideedele avatud.",
            5: "Mulle meeldib see, kuidas ma probleeme lahendan.",
            6: "Mulle meeldib õppida uusi asju",
            7: "Kui õppimine on keeruline, siis ma pigem loobun.",
            8: "Hoian eemale sellest, millest ma aru ei saa.",
            9: "Sageli on mul raske end õppima sundida.",
            10: "Ma ei oska oma aega hästi planeerida.",
            11: "Armastan õppida.",
            12: "Mul on vajadus õppida.",
            13: "Õppimine on tore.",
            14: "Pidev õppimine on igav.",
            15: "Tahan õppida kogu elu.",
            16: "Elu põhineb õppimisel.",
            17: "Mida rohkem õpin, seda põnevam maailm minu jaoks on.",
            18: "Imetlen inimesi, kes kogu aeg õpivad midagi uut.",
            19: "Tean, mida õppida soovin.",
            20: "Olen veendunud, et suudan oma elu kontrollida.",
            21: "Kui ma ei oska probleemi lahendada, siis küsin abi.",
            22: "Kui pean midagi õppima, siis leian selleks parima viisi.",
            23: "Mulle meeldib analüüsida, miks ma nii või teisiti tegutsen.",
            24: "Lugedes peatun aeg-ajalt, et kontrollida tekstist arusaamist.",
            25: "Mulle on oluline mõista, miks asjad on nii nagu need on.",
            26: "Mulle on oluline mõista asjade sisu.",
            27: "Enne otsustamist meeldib mulle asjakohaste üksikasjadega tutvuda.",
            28: "Tahan palju õppida selleks, et inimesena kasvada.",
            29: "Eelistan ise oma õppimist planeerida.",
            30: "Eelistan ise oma eesmärgid seada.",
            31: "Vastutan ise oma otsuste ja tegude eest",
            32: "Vastutan ise oma õppimise eest.",
            33: "Suudan iseseisvalt õppida kõike, mida mul on vaja teada.",
            34: "Mulle meeldib ise otsustada."
            };

küsimuste_vastused = {1: null,
                  2: null,
                  3: null,
                  4: null,
                  5: null,
                  6: null,
                  7: null,
                  8: null,
                  9: null,
                  10: null,
                  11: null,
                  12: null,
                  13: null,
                  14: null,
                  15: null,
                  16: null,
                  17: null,
                  18: null,
                  19: null,
                  20: null,
                  21: null,
                  22: null,
                  23: null,
                  24: null,
                  25: null,
                  26: null,
                  27: null,
                  28: null,
                  29: null,
                  30: null,
                  31: null,
                  32: null,
                  33: null,
                  34: null
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
    
    let avatusUuteleVäljakutsetele = roundToTwo(keskmineTeema1());
    let raskustegaToimetulek = roundToTwo(keskmineTeema2());
    let õppimiseHoiak = roundToTwo(keskmineTeema3());
    let lahendusteleOrienteeritus = roundToTwo(keskmineTeema4());
    let metakognitsioon = roundToTwo(keskmineTeema5());
    let vastutus = roundToTwo(keskmineTeema6());
    let keskmine = roundToTwo((avatusUuteleVäljakutsetele + raskustegaToimetulek + õppimiseHoiak +
        lahendusteleOrienteeritus + metakognitsioon + vastutus)/6) ;
    document.getElementById("tulemusTekst").innerHTML = "Avatus uutele väljakutsetele: <b>"+avatusUuteleVäljakutsetele+"/5</b><br>" +
                                                        "Raskustega toimetulek: <b>"+raskustegaToimetulek+"/5</b><br>" +
                                                        "Õppimise väärtustamine/hoiak: <b>"+õppimiseHoiak+"/5</b><br>" +
                                                        "Lahendustele orienteeritus: <b>"+lahendusteleOrienteeritus+"/5</b><br>" +
                                                        "Metakognitsioon: <b>"+metakognitsioon+"/5</b><br>" +
                                                        "Vastutus: <b>"+vastutus+"/5</b><br>" +
                                                        "<b><mark>Kokku: "+keskmine+"/5</mark></b>";
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function keskmineTeema1() {
    let summa = 0;
    for (let i = 1; i <= 6; i++) {
        summa += küsimuste_vastused[i];
    }
    return summa/6;
}

function keskmineTeema2() {
    let summa = 0;
    for (let i = 7; i <= 10; i++) {
        summa += küsimuste_vastused[i];
    }
    return summa/4;
}

function keskmineTeema3() {
    let summa = 0;
    for (let i = 11; i <= 18; i++) {
        summa += küsimuste_vastused[i];
    }
    return summa/8;
}

function keskmineTeema4() {
    let summa = 0;
    for (let i = 19; i <= 22; i++) {
        summa += küsimuste_vastused[i];
    }
    return summa/4;
}

function keskmineTeema5() {
    let summa = 0;
    for (let i = 23; i <= 28; i++) {
        summa += küsimuste_vastused[i];
    }
    return summa/6;
}

function keskmineTeema6() {
    let summa = 0;
    for (let i = 29; i <= 34; i++) {
        summa += küsimuste_vastused[i];
    }
    return summa/6;
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

