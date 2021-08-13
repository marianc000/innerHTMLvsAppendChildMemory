import getMemory from './memory.js';
export {default as data} from '../api' assert { type: "json" };

export const root = document.getElementById("root");
 
export const results = {};

function addResult(label, result) {
    console.log(">addResult", label, result);
    if (!results[label])
        results[label] = [];
    results[label].push(result);
}
 
export async function execute(label, toExecute) {
    return new Promise(resolve => {
        requestAnimationFrame(async () => {
            const before = await getMemory();
            toExecute();
            requestAnimationFrame(async () => {
                const after = await getMemory();
                addResult(label, after - before);
                setTimeout(resolve);
            });
        });
    });
}