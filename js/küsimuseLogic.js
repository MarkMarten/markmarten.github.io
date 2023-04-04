
küsimused = {
    1: {
        tekst: 'Hoian eemale sellest, millest ma aru ei saa.',
        vastus: null,
        teema: 2,
        negatiivne: true
    },
    2: {
        tekst: 'Probleemid on väljakutse, mitte takistus.',
        vastus: null,
        teema: 1,
        negatiivne: false
    },
    3: {
        tekst: 'Kui õppimine on keeruline, siis ma pigem loobun.',
        vastus: null,
        teema: 2,
        negatiivne: true
    },
    4: {
        tekst: 'Kui ma ei oska probleemi lahendada, siis küsin abi.',
        vastus: null,
        teema: 4,
        negatiivne: false
    },
    5: {
        tekst: 'Mulle meeldib see, kuidas ma probleeme lahendan.',
        vastus: null,
        teema: 1,
        negatiivne: false
    },
    6: {
        tekst: 'Tahan palju õppida selleks, et inimesena kasvada.',
        vastus: null,
        teema: 5,
        negatiivne: false
    },
    7: {
        tekst: 'Lugedes peatun aeg-ajalt, et kontrollida tekstist arusaamist.',
        vastus: null,
        teema: 5,
        negatiivne: false
    },
    8: {
        tekst: 'Ma ei oska oma aega hästi planeerida.',
        vastus: null,
        teema: 2,
        negatiivne: true
    },
    9: {
        tekst: 'Vastutan ise oma õppimise eest.',
        vastus: null,
        teema: 6,
        negatiivne: false
    },
    10: {
        tekst: 'Eelistan ise oma eesmärgid seada.',
        vastus: null,
        teema: 6,
        negatiivne: false
    },
    11: {
        tekst: 'Tahan õppida kogu elu.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    12: {
        tekst: 'Mulle meeldib ise otsustada.',
        vastus: null,
        teema: 6,
        negatiivne: false
    },
    13: {
        tekst: 'Kui pean midagi õppima, siis leian selleks parima viisi.',
        vastus: null,
        teema: 4,
        negatiivne: false
    },
    14: {
        tekst: 'Mulle on oluline mõista, miks asjad on nii nagu need on.',
        vastus: null,
        teema: 5,
        negatiivne: false
    },
    15: {
        tekst: 'Imetlen inimesi, kes kogu aeg õpivad midagi uut.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    16: {
        tekst: 'Olen veendunud, et suudan oma elu kontrollida.',
        vastus: null,
        teema: 4,
        negatiivne: false
    },
    17: {
        tekst: 'Mulle on oluline mõista asjade sisu.',
        vastus: null,
        teema: 5,
        negatiivne: false
    },
    18: {
        tekst: 'Armastan õppida.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    19: {
        tekst: 'Suudan iseseisvalt õppida kõike, mida mul on vaja teada.',
        vastus: null,
        teema: 6,
        negatiivne: false
    },
    20: {
        tekst: 'Mulle meeldib analüüsida, miks ma nii või teisiti tegutsen.',
        vastus: null,
        teema: 5,
        negatiivne: false
    },
    21: {
        tekst: 'Mul on vajadus õppida.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    22: {
        tekst: 'Vastutan ise oma otsuste ja tegude eest',
        vastus: null,
        teema: 6,
        negatiivne: false
    },
    23: {
        tekst: 'Õppimine on tore.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    24: {
        tekst: 'Mida rohkem õpin, seda põnevam maailm minu jaoks on.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    25: {
        tekst: 'Enne otsustamist meeldib mulle asjakohaste üksikasjadega tutvuda.',
        vastus: null,
        teema: 5,
        negatiivne: false
    },
    26: {
        tekst: 'Katsetan meeleldi midagi uut ka siis, kui ei ole kindel, et see õnnestub.',
        vastus: null,
        teema: 1,
        negatiivne: false
    },
    27: {
        tekst: 'Mulle meeldivad väljakutsed.',
        vastus: null,
        teema: 1,
        negatiivne: false
    },
    28: {
        tekst: 'Tean, mida õppida soovin.',
        vastus: null,
        teema: 4,
        negatiivne: false
    },
    29: {
        tekst: 'Mulle meeldib õppida uusi asju',
        vastus: null,
        teema: 1,
        negatiivne: false
    },
    30: {
        tekst: 'Sageli on mul raske end õppima sundida.',
        vastus: null,
        teema: 2,
        negatiivne: true
    },
    31: {
        tekst: 'Pidev õppimine on igav.',
        vastus: null,
        teema: 3,
        negatiivne: true
    },
    32: {
        tekst: 'Eelistan ise oma õppimist planeerida.',
        vastus: null,
        teema: 6,
        negatiivne: false
    },
    33: {
        tekst: 'Elu põhineb õppimisel.',
        vastus: null,
        teema: 3,
        negatiivne: false
    },
    34: {
        tekst: 'Olen uutele ideedele avatud.',
        vastus: null,
        teema: 1,
        negatiivne: false
    }
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
    document.getElementById("järgmineBtn").disabled = false;
    for (let i = 1; i <= Object.keys(küsimused).length; i++) {
        if (küsimused[i].vastus == null) {
            document.getElementById("esitaBtn").disabled = true;
            return false;
        }
      }
    
    kuvaEsitaNuppuKuiVaja();
    return true;
}

function kuvaEsitaNuppuKuiVaja() {
    if (millineRadioOnValitud() != null) {
        if (getQIndex() == Object.keys(küsimused).length) {
            document.getElementById("esitaBtn").disabled = false;
            document.getElementById("esitaBtn").hidden = false;
            document.getElementById("järgmineBtn").disabled = true;
            document.getElementById("järgmineBtn").hidden = true;
        } else {
            document.getElementById("esitaBtn").disabled = true;
            document.getElementById("esitaBtn").hidden = true;
            document.getElementById("järgmineBtn").disabled = false;
            document.getElementById("järgmineBtn").hidden = false;
        }
    }
}

function getQIndex() {
    let qIndex = parseInt(document.getElementById("küsimuseCounter").innerHTML.split("/")[0]);
    return qIndex;
}

function setNewQuestion(index) {
    document.getElementById("tekst").innerHTML = küsimused[index].tekst;
}

function setCounter(index) {
    document.getElementById("küsimuseCounter").innerHTML = index + "/" + Object.keys(küsimused).length;
}


function järgmine() {
    let qIndex = parseInt(document.getElementById("küsimuseCounter").innerHTML.split("/")[0]);
    let nextIndex = qIndex+1;
    eemaldaRadioSelection() // eemaldab valiku
    pageRefresh(nextIndex); // uus küsimus + uus counter + checkib buttoneid + valib radio kui vastatud
    kuvaEsitaNuppuKuiVaja();
}

function eelmine() {
    let qIndex = parseInt(document.getElementById("küsimuseCounter").innerHTML.split("/")[0]);
    let nextIndex = qIndex - 1;
    eemaldaRadioSelection()
    pageRefresh(nextIndex);
    kuvaEsitaNuppuKuiVaja();
}

function salvestaVastus(index) {
    let vastusNr = millineRadioOnValitud();
    let protsent;
    if (vastusNr == 1) {
        protsent = 0;
    } else if (vastusNr == 2) {
        protsent = 25;
    } else if (vastusNr == 3) {
        protsent = 50;
    } else if (vastusNr == 4) {
        protsent = 75;
    } else {
        protsent = 100;
    }
    küsimused[index].vastus = protsent;
    console.log(küsimused)
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
    let radioIndex;
    if (index == 0) {
        radioIndex = 1;
    } else if (index == 25) {
        radioIndex = 2;
    } else if (index == 50) {
        radioIndex = 3;
    } else if (index == 75) {
        radioIndex = 4;
    } else if (index == 100) {
        radioIndex = 5;
    }
    document.getElementById('radio'+radioIndex).checked = true;
}

function esita() {
    let avatusUuteleVäljakutsetele = teemaKeskmineTulemus(1);
    let raskustegaToimetulek = teemaKeskmineTulemus(2);
    let õppimiseHoiak = teemaKeskmineTulemus(3);
    let tulevikuleOrienteeritus = teemaKeskmineTulemus(4);
    let metakognitsioon = teemaKeskmineTulemus(5);
    let vastutus = teemaKeskmineTulemus(6);
    let keskmine = Math.round((avatusUuteleVäljakutsetele + raskustegaToimetulek + õppimiseHoiak +
        tulevikuleOrienteeritus + metakognitsioon + vastutus)/6) ;
    document.getElementById("tulemusTekst").innerHTML = "Avatus uutele väljakutsetele: <b>"+avatusUuteleVäljakutsetele+"/100</b><br>" +
                                                        "Raskustega toimetulek: <b>"+raskustegaToimetulek+"/100</b><br>" +
                                                        "Õppimise väärtustamine/hoiak: <b>"+õppimiseHoiak+"/100</b><br>" +
                                                        "Tulevikule orienteeritus: <b>"+tulevikuleOrienteeritus+"/100</b><br>" +
                                                        "Metakognitsioon: <b>"+metakognitsioon+"/100</b><br>" +
                                                        "Vastutus: <b>"+vastutus+"/100</b><br>" +
                                                        "<b><mark>Kokku: "+keskmine+"/100</mark></b>";
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function teemaKeskmineTulemus(teemaID) {
    let summa = 0;
    let mitmegaJagan = 0;
    for (let i = 1; i <= Object.keys(küsimused).length; i++) {
        if (küsimused[i].teema == teemaID) {
            if (küsimused[i].negatiivne) {
                summa += arvutaNegatiivneVastus(küsimused[i].vastus);
            } else {
                summa += küsimused[i].vastus;
            }
            mitmegaJagan += 1;
        }
    }
    if (mitmegaJagan == 0 ) {
        return 0;
    } 
    return Math.round(summa/mitmegaJagan);
}

function arvutaNegatiivneVastus(vastus) {
    let summa = 0;
    if (vastus == 0) { summa += 100 };
    if (vastus == 25) { summa += 75 };
    if (vastus == 50) { summa += 50 };
    if (vastus == 75) { summa += 25 };
    if (vastus == 100) { summa += 0 };
    return summa;
}


function valiRadioKuiVastatud(index) {
    if (küsimused[index].vastus != null) {
        valiRadio(küsimused[index].vastus);
    }
}

function pageRefresh(index) {
    setNewQuestion(index);
    setCounter(index);
    handleButtonStates(index);
    valiRadioKuiVastatud(index);
    
    if (millineRadioOnValitud() == null) {
        document.getElementById("järgmineBtn").disabled = true;
    }
}

//init with index 1
pageRefresh(1)

