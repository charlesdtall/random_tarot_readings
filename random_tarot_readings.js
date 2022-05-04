// VARIABLE INITIALIZATIONS

let pickedPairs = [];
let adj1 = '';
let adj2 = '';
let pickedIntro = ``;
let pickedClose = ``;


// ARRAYS

const adjPairs = [[`innocent`, `naughty`], [`robust`, `fragile`], [`cold-hearted`, `caring`], [`polite`, `rude`]]

const introPhrase = [`You often wonder if you are too`, `You tend to think of yourself as`]

const closePhrase = [`if you are being honest with yourself, you are really quite`, `once people get to know you, you are actually`]


// RANDOM WORD PICKERS

let pickAdjs = adjPairs => {

    let adjIndex = Math.floor(Math.random() * adjPairs.length);
    return pickedPairs = adjPairs[adjIndex];
}

pickAdjs = pickAdjs(adjPairs);


// RANDOM INTRO PICKER

let pickIntro = introPhrase => {
    
    let introIndex = Math.floor(Math.random() * introPhrase.length);
    return pickedIntro = introPhrase[introIndex];

}

pickIntro = pickIntro(introPhrase);


// RANDOM CLOSER PICKER

let pickClose = closePhrase => {
    
    let closeIndex = Math.floor(Math.random() * closePhrase.length);
    return pickedClose = closePhrase[closeIndex];

}

pickClose = pickClose(closePhrase);


// PUTTING THE PHRASE TOGETHER

let giveMeReading = () => {
    pickIntro;
    pickClose;
    adj1 = pickedPairs[0];
    adj2 = pickedPairs[1];
    console.log(`${pickedIntro} ${adj1} but ${pickedClose} ${adj2}.`);
}

giveMeReading();