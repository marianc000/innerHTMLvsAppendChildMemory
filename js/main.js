import innerHTML from './innerHTML.js';
import appendNodeManyTimes from './appendNodeManyTimes.js'
import appendDocumentFragment from './appendDocumentFragment.js';
import clear from './clear.js';
import showResults from './results.js';

const button = document.querySelector('button');
button.onclick = run;
function run() {
    button.remove();

    const times = 3;
    let p = Promise.resolve(gc()) 

    for (let i = 0; i < times; i++) {
        p = p.then(appendNodeManyTimes).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(appendDocumentFragment).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(innerHTML).then(clear);
    }

    p.then(showResults);
}



