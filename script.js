const submitButton = document.getElementById('submit');
const inputField = document.getElementById('guess');
let guessList = [];
let guessedWord = "";
let guessCounter = 0;
let streak = 0;
let revealedWord = "pxxxxx";

let wordList = ["appel", "aldus", "afwas", "aftel", "aarde", "altijd", "armen", "actie", "apart", "adres", "avond", "aders", "airco", 
"amper", "ander", "akker", "angst", "alles", "arena", "ademt", "alsof", "april", "allen", "autos", "alpen", "armoe", "admin", "appen", 
"alert", "award", "afnam", "algen", "acuut", "abuis", "aruba", "assen", "atlas", "aroma", "alarm", "boten", "balen", "beter", "bomen", 
"boren", "boven", "boxen", "brood", "broek", "brand", "breed", "benen", "beeld", "brief", "beten", "basis", "blauw", "beren", "buren", 
"banen", "bloed", "broer", "boete", "bewijs", "bezig", "bezit", "blijft", "bodem", "beste", "begin", "bleek", "boord", "blijkt", 
"begon", "beide", "beurt", "baren", "botst", "barre", "buurt", "breda", "beurs", "bevat", "bekijk", "bleef", "bozer", "begaf", 
"bijval", "bruto", "blikt", "biedt", "baten", "brede", "bizar", "beest", "blote", "bosje", "blies", "buigt", "bloot", "bogen", 
"brein", "broos", "bouwt", "bevel", "bijten", "broze", "baart", "broed", "bever", "bloei", "breuk", "boter", "bijeen", "belet", 
"besef", "beige", "boxer", "boots", "brows", "blond", "breng", "blush", "bocht", "bezet", "balie", "buien", "bruin", "basic", 
"beleg", "batig", "boden", "bezat", "beker", "conus", "cello", "creme", "clubs", "circa", "chaos", "dorst", "heien",
"chips", "claim", "cyber", "chili", "cobra", "cijfer", "cycli", "crime", "cover", "clara", "coole", "corps", "crash", "canon", 
"cupid", "check", "draai", "deden", "dalen", "derde", "delen", "dwaas", "daden", "dader", "dames", "diner", "datum", "dozen", 
"dreun", "duits", "dagen", "deren", "dwerg", "dwaal", "dwing", "druil", "droog", "draad", "dweil", "drank", "duren", "dwars", 
"drugs", "deels", "dient", "dacht", "droom", "duurt", "dates", "daten", "denkt", "dvb-c", "dreef", "durft", "diepe", "drift", 
"duidt", "dikte", "dikke", "droeg", "debat", "dicht", "deals", "deens", "daagt", "daalt", "dutch", "deelt", "drive", "drukt", 
"diens", "domme", "drama", "dwaze", "dieet", "dorre", "dubai", "drong", "delft", "droge", "dijken", "delta", "dwong", "darts", 
"diego", "doden", "dwang", "draag", "duwen", "draak", "dankt", "doorn", "elven", "eigen", "enger", "engel", "elder", "enkel", 
"effen", "enorm", "enige", "ermee", "eerst", "extra", "einde", "eruit", "ether", "ervan", "echte", "erger", "eiken", "email", 
"eisen", "ertoe", "exact", "eters", "eraan", "elite", "elfde", "eiste", "ergen", "eerde", "fiets", "friet", 
"files", "forel", "films", "feest", "fruit", "falen", "flora", "fauna", "feeen", "freak", "forse", "flink", "flauw", "fonds", 
"frans", "fraai", "feite", "forum", "focus", "faalt", "fries", "fikse", "fotos", "fagen", "fasen", "felle", "foute", "frame", 
"fusie", "fluor", "funky", "finse", "firma", "front", "folie", "fases", "geven", "gaven", "groen", "graai", "getal", "grens", 
"grond", "groef", "graal", "gewei", "games", "grote", "groet", "garen", "groep", "gezin", "gelijk", "groot", "gezag", "genie", 
"graag", "geeft", "goede", "groei", "gehad", "geuit", "geval", "geldt", "gezet", "gaten", "genre", "graaf", "gooit", "gemak", 
"goeie", "greep", "gejat", "gaart", "gedoe", "gloed", "guppy", "gevel", "gered", "glimp", "genen", "griep", "goden", "ghana", 
"graan", "gerst", "godin", "gebit", "glans", "grijze", "geluk", "gaver", "gamma", "gleed", "goten", "gilde", "genas", "gevat",
"horen", "heren", "halen", "hagel", "haren", "helen", "harde", "hemel", "hoofd", "huren", "hamer", "haken", "heden", "hotel", 
"hobby", "hitte", "heeft", "hoger", "helpt", "hoedt", "helft", "hoort", "hoopt", "hecht", "hoede", "haast", "haard", "hoeft", 
"houdt", "huurt", "hangt", "hippe", "haalt", "haven", "hands", "het", "hoest", "hekje", "hopen", "hielp", "hield", "hapje", 
"hetzij", "heter", "heuse", "hallo", "heten", "holte", "heide", "hindi", "haver", "harry", "hacks", "hints", "hevig", "halte", 
"hoezo", "haaks", "huwde", "hunne", "ieder", "index", "immer", "icoon", "inlog", "ijzige", "inzet", "ibiza", "issue", "input", 
"infra", "ijzelt", "ijskap", "inval", "ineen", "ijssel", "imago", "ijszee", "items", "ivoor", "zwier", "blaar","dring",
"innam", "jovel", "jaren", "jicht", "jonge", "japan", "juist", "jacht", "jeugd", "jaagt", "joden", "joods", "jasje", "juich", 
"jeans", "jawel", "jongs", "koken", "kreet", "koker", "kerst", "kegel", "koude", "kader", "krent", "kamer", "kaars", "kraai",
"kaart", "kraan", "krant", "keren", "kruid", "kerel", "kubus", "kraal", "kleur", "kroon", "klein", "korst", "klopt", "komen", 
"kreeg", "kijken", "keuze", "kwart", "krijgt", "korte", "kabel", "kopen", "klant", "kogel", "koers", "kunst", "komst", "kiest", 
"kozen", "kwaad", "kapot", "kookt", "koste", "klaar", "koopt", "kroeg", "kopje", "klimt", "krimp", "kocht", "kloot", "kwade", 
"keken", "kloof", "koele", "knoop", "knipt", "kampt", "konijn", "krans", "korps", "kende", "kreta", "kolen", "koper", 
"kongo", "keert", "kruis", "kaken", "kliko", "kenia", "kwast", "kruik", "kwijt", "kleed", "knaap", "klank", "keten", "lopen", 
"laten", "lelijk", "lepel", "links", "laden", "leven", "lezen", "lucht", "lenen", "laser", "lente", "licht", "lader", "leder", 
"lunch", "leger", "leden", "legen", "lagen", "lezer", "lever", "lingo", "langs", "legde", "luidt", "liegt", "leidt", "later", 
"laude", "latijn", "lager", "lange", "leren", "leeft", "leuke", "lijken", "lukte", "leert", "liter", "lijnen", "laars", "leeuw", 
"losse", "loopt", "lijden", "lonen", "leest", "leuks", "lieve", "lease", "loont", "lande", "lexus", "likes", "liefs", "leent", 
"least", "limes", "leges", "linie", "louis", "lobby", "looks", "lover", "loper", "level", "loods", "label", "luier", "lacht", 
"lands", "loden", "maand", "malen", "maken", "media", "meter", "motor", "maten", "markt", "mazen", "molen", "meest", "meren", 
"mijter", "mogen", "macht", "minst", "mooie", "maakt", "moest", "medio", "maart", "malta", "model", "mocht", "musea", "muren", 
"merkt", "moers", "meten", "menig", "mondt", "match", "meldt", "motie", "modus", "maker", "marge", "manen", "massa", "meent", 
"magma", "moord", "milde", "merel", "moren", "maine", "mengt", "menen", "mythe", "miste", "maagd", "magic", "matte", "ketel",
"metro", "maden", "matig", "motto", "noord", "nieuw", "negen", "namen", "neven", "nodig", "naden", "nooit", "naast", "nemen", 
"netto", "niets", "neemt", "nadat", "nibud", "nogal", "nacht", "noten", "nader", "noemt", "natte", "nabije", "notie", "nobel", 
"natst", "natie", "neppe", "nevel", "noors", "naakt", "nepal", "onder", "optel", "ovaal", "ovale", "onwel", "optie", "uilen", 
"oppas", "omdat", "oogst", "opdat", "omzet", "opzet", "ophef", "ook", "ofwel", "ouder", "oogje", "oprit", "order", "onzin", 
"omweg", "orale", "omver", "opent", "otter", "omvat", "opera", "oxide", "oases", "opbod", "oever", "palen", "plein", "pegel", 
"paars", "piano", "pixel", "paden", "pasta", "pizza", "poten", "paard", "puber", "pauze", "pasen", "partij", "poort", "praat", 
"plans", "prima", "puien", "peren", "pleit", "parijs", "paren", "plukt", "prijst", "pakte", "panne", "proef", "pluto", "palet", 
"plaag", "plaat", "pijlen", "prins", "polen", "party", "pater", "prooi", "pijpen", "panda", "potje", "plots", "plaza", 
"porto", "pilot", "petje", "print", "plant", "peper", "prees", "quota", "quote", "qatar", "robot", "rijden", "reken", "raden", 
"regen", "radio", "rente", "regio", "rugby", "reden", "roken", "ruzie", "ruist", "regel", "racen", "races", "radar", "recht", 
"flets", "flats", "kater", "tepel", "kinds", "piekt", "wiegt", "zebra", "deken", "daken", "bedel", "vulva", "kille", "braak",
"poets", "koter", "anker", "barst", "kregen", "adder", "imker", "aards", "poker", "vlaag", "leken", "larve", "oksel", "eerst",
"huilt", "eikel", "duikt", "deert", "bruid", "baars", "baard", "blaag", "speer", "stoor", "zever", "kavel" , "katje",
"raken", "reist", "ronde", "regie", "ruime", "route", "ruilt", "raakt", "rijtje", "ruige", "rende", "ramde", "ratio", "rijder", 
"rover", "raket", "roest", "ramen", "roman", "reeks", "revue", "rijker", "roept", "reeds", "range", "richt", "rhode", "rijken", 
"river", "rigby", "rozen", "ruikt", "riekt", "retro", "staan", "staal", "speel", "steeg", "stoel", "stook", "steek", "schep", 
"stoep", "shirt", "samen", "sites", "sport", "spalk", "sjaal", "storm", "staat", "steun", "strak", "serie", "shows", "schat", 
"snoep", "sprak", "straf", "stapt", "stelt", "summa", "stond", "schip", "sterk", "spoor", "strijd", "stuks", "sloot", "stand", 
"sluit", "sfeer", "soort", "stoom", "start", "stijgt", "slaap", "suste", "slaan", "stuur", "sloeg", "slang", "stopt", "schok", 
"skoda", "stoot", "super", "saudi", "setje", "steen", "shops", "smart", "snuit", "smaak", "scala", "stoer", "slikt", "steel", 
"stemt", "spoed", "schijf", "schol", "slaaf", "stoof", "saldo", "south", "saint", "sound", "score", "space", "siert", "scoor", 
"stage", "stamp", "stier", "songs", "spray", "saaie", "serum", "sorry", "slaag", "stufi", "sedan", "snoek", "snapt", "sober", 
"specs", "snack", "stamt", "sloop", "schot", "scene", "satijn", "slaat", "sluwe", "stoet", "truck", "tijden", "terug", "typen", 
"talen", "taboe", "tegel", "taart", "tafel", "trouw", "teken", "teren", "taken", "treur", "tenen", "titel", "thuis", "tiara", 
"teder", "tegen", "tests", "tokio", "trekt", "tonen", "toont", "tuner", "trein", "tempo", "tekst", "thema", "total", "tocht", 
"texel", "trucs", "telde", "tesla", "tonijn", "treft", "tweet", "tanks", "tankt", "tijdje", "tijdig", "teams", "tolde", "trend", 
"tamme", "texas", "tampa", "tarwe", "tabak", "traag", "tibet", "taiga", "toffe", "twist", "tunes", "tapijt", "teint", "tipje", 
"trolt", "tweed", "topic", "tijger", "tonga", "toren", "talud", "teuge", "touch", "tenue", "uiten", "uniek", "uur", "uitte", 
"units", "velen", "vijfde", "vloer", "video", "varen", "vegen", "veren", "vader", "vaten", "vuren", "vrouw", "vlees", "vogel", 
"vroeg", "vezel", "veins", "volgt", "vorig", "vindt", "visie", "vaker", "vraag", "vanaf", "vries", "vaart", "vulde", "voelt", 
"volle", "vecht", "villa", "vaste", "virus", "voert", "voedt", "vloot", "vloog", "voren", "verre", "verte", "vormt", "vette", 
"vrede", "vijand", "vuile", "volvo", "versa", "vangt", "voort", "venus", "vorst", "voegt", "vuist", "vijver", "verse", "visum", 
"vouwt", "vieze", "volop", "viert", "venen", "vrijer", "vlaai", "vegas", "vlieg", "voice", "valse", "vinyl", "valet", "vocht", 
"vazen", "vurig", "veler", "woord", "wagen", "wonen", "waren", "warme", "weten", "water", "weren", "wazig", "wegen", "weven", 
"wijken", "wezen", "weken", "wordt", "waard", "winst", "wijzen", "wacht", "wilde", "werkt", "welke", "woont", "wanen", "wijnen", 
"witte", "wisse", "wijten", "woede", "wenst", "wapen", "weegt", "warmt", "werpt", "wenen", "worst", "weesp", "wraak", "zwaar", 
"zware", "zesde", "zagen", "zalig", "zomer", "zeden", "zwart", "zeven", "zicht", "zadel", "zoals", "laken",
"zaken", "zeker", "zaten", "zelfs", "zulke", "zonde", "zorgt", "zodra", "zowel", "zover", "zodat", "zette", "zalen", "zegde", 
"zoden", "zowat", "zocht", "zwemt", "zotte", "zijnde", "zacht", "zoekt", "zweed", "zepen", "zones", "zinkt", "zeeijs", "zadig", 
"zwaan", "zetje", "zoete", "zakje", "zetel", "zakte", "zwoer", "zweet", "zulks", "zonen", "zegel", "zeeuw"];

// MAKE THE BUTTON AND KEYBOARD WORK
submitButton.addEventListener("click",guess)
inputField.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        guess();
    }
})


// INITIALIZE GAME
prepareGameField();



function chooseWinningWord() {
    let winningWordIndex = Math.floor(Math.random() * wordList.length);
    let winningWord = "TONIJN";
    // let winningWord = wordList[winningWordIndex];
    return ijCheck(winningWord);
}

// Check if the word contains the substring "ij". In Dutch these are seen as one letter
function ijCheck(word) {
    if(word.includes("ij")){
        return (word.split("ij")[0] + "9" + word.split("ij")[1]).toUpperCase();
    }
    else {
        return word.toUpperCase();
    }
}

function addTheEggBack (word) {
    if(word.includes("9")){
        return (word.split("ij")[0] + "IJ" + word.split("ij")[1]).toUpperCase();
    }
    else {
        return word.toUpperCase();
    }
}

// After a win wipe the field
function resetGameField (){
    inputField.disabled = false;
    inputField.focus();
    for(let i=1;i<6;i++) {
        for(let x=1;x<6;x++) {
            let letterDiv = document.getElementById('word' + i + '_' + x);
            letterDiv.innerHTML = "";
            letterDiv.style.backgroundColor = "unset";
        }
    }
}


function prepareGameField (){
    guessCounter = 0;
    revealedWord = "pxxxx";
    winningWord = chooseWinningWord();

    // For debugging/demo purposes
    console.log(winningWord);


    document.getElementById('overlay').style.display = "none";
    resetGameField();

    // Put the first letter for the first word on the board
    let row = guessCounter + 1;
    let placeFirstLetter = document.getElementById('word' + row + '_1')
    placeFirstLetter.innerHTML = winningWord[0];

    // Add dots in place of the letters that need to be guessed
    for(let i=2;i<6;i++) {
    placeFirstLetter = document.getElementById('word' + row + '_' + i);
    placeFirstLetter.innerHTML = ".";
    }
}

// ERROR HANDLING

function invalidInputError() {
    inputField.style.color = "red";
    inputField.style.outlineColor = "red";
    submitButton.style.backgroundColor = "red";

    setTimeout(restoreAfterError, 1000);
}

function restoreAfterError() {
    inputField.style.color = "white"
    inputField.style.outlineColor = "white";
    submitButton.style.backgroundColor = "#04AA6D";
}

function guess() {
    guessedWord = inputField.value;
    guessedWord = ijCheck(guessedWord);
    lenghtCheck = guessedWord.length;

    if(lenghtCheck===5) {
        if(wordList.includes(inputField.value)){
            guessCounter++;
            inputField.value = "";
            addGuessToList(guessedWord);
        }
        else {
            invalidInputError();
        }
    }
    else {
        invalidInputError();
    }
}

function updateRevealedWord(i) {
    revealedWord = revealedWord.substring(0, i) + "p" + revealedWord.substring(i+1, 5);
}

function addGuessToList(guessedWord) {
    let guessedLetters = "";
    let perfectGuessed = 0;

    // colors will become a string presentation of which colors the corresponding div need to be
    let colors = "xxxxx";
    let before = "";
    for (let i = 0; i < guessedWord.length; i++) {
        
        // IF LETTER IS RIGHT AND IN THE RIGHT PLACE
        if(guessedWord[i] === winningWord[i]) {
            if(i>0) {before = colors.substring(0, i);}
            let after = colors.substring(i+1, guessedWord.length);
            colors = before + "p" + after;
            guessedLetters += guessedWord[i];
            updateRevealedWord(i);
        }
    }
    let goodGuessedLetters = "";
    before = "";
    after = ""; 

    for (let i = 0; i < guessedWord.length; i++) {
    
        // IF THE LETTER IS IN THE WORD BUT IN THE WRONG PLACE
        if(winningWord.includes(guessedWord[i])) {

            
            let numberOfOccurences = winningWord.split(guessedWord[i]).length-1;
            let perfectGuessed = guessedLetters.split(guessedWord[i]).length-1;
            let goodGuessed = goodGuessedLetters.split(guessedWord[i]).length-1;
            
            if (colors[i] != "p") {
                if (numberOfOccurences > (perfectGuessed + goodGuessed)){
                    if(i>0) {before = colors.substring(0, i);}
                    let after = colors.substring(i+1, guessedWord.length);
                    colors = before + "g" + after;
                    goodGuessedLetters += guessedWord[i];
                }
                
            }
        }
    }
    
    for (let i = 0; i < guessedWord.length; i++) {
        let placeForWord = document.getElementById('word' + guessCounter + "_" + (i+1));

        // change temporary character "9" back to "IJ" if applicable"
        if(guessedWord[i]==9){
            placeForWord.innerHTML = "IJ";
        }
        else {
        placeForWord.innerHTML = guessedWord[i];
        }

        let nextRow = guessCounter+1;


        // Color the background of the cell according to correctness of letter
        if (nextRow<6) {
            if (colors[i]==="p") {
                placeForWord.style.backgroundColor = "#AB141A";
            }
            else if (colors[i]==="g") {
                placeForWord.style.backgroundColor = "#E8D00A";
            }
            
            // Setup next row
            if (guessedWord !== winningWord) {
                let letterDiv = document.getElementById('word' + nextRow + "_" + (i+1));
                if(revealedWord[i]==="p") {
                    letterDiv.innerHTML = winningWord[i];
                }
                else {
                    letterDiv.innerHTML = ".";
                }
            }
            document.getElementById("guess").focus()
        }
        else if(guessedWord === winningWord){
            break;
        }
        else {
            showLoseScreen();
        }

    }
    if (guessedWord === winningWord){
        streak++;
        showWinScreen();
    }
}

function showWinScreen () {

    document.getElementById('overlay').style.display = "block";
    document.getElementById("guess").disabled = true;
    document.getElementById("nextWordButton").focus();
    document.getElementById('win-lose-h4').innerHTML = streak;
}

function showLoseScreen() {
    document.getElementById('win-lose-message').innerHTML = "GAME OVER";
    document.getElementById('win-lose-h3').innerHTML = "Het woord was:";
    document.getElementById('win-lose-h4').innerHTML = addTheEggBack(winningWord);
    document.getElementById('overlay').style.display = "block";
    document.getElementById('loseButton').style.display = "inline-block";
    document.getElementById('nextWordButton').style.display = "none";
    document.getElementById("guess").disabled = true;
    document.getElementById("loseButton").focus();
}


