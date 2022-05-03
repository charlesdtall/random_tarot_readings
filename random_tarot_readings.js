// ARRAYS

const adjPairs = [['innocent', 'naughty'], ['robust', 'fragile'], ['cold-hearted', 'gentle']]

const introPhrase = ['You often wonder if you are too ${adj1} but ', 'You tend to think of yourself as ${adj1} but ']




// RANDOM WORD PICKERS


let adj1 = '';
let adj2 = '';

let pickAdj = adjPairs => {
    let adjIndex = Math.floor(Math.random() * adjPairs.length);
    return adjPairs[adjIndex];
}

pickAdj = pickAdj(adjPairs);

adj1 = pickAdj[0];
adj2 = pickAdj[1];



// console.log(adj1);