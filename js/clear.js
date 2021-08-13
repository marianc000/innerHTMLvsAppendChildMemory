import { root } from './shared.js';

export default function clear() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            root.replaceChildren();
            requestAnimationFrame(() => {
                gc();
                setTimeout(resolve);
            });
        });
    });
}
