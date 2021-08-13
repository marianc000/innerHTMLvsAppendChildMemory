import { data,   execute, root } from './shared.js';

function rowDOM(row) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';
    row.forEach(text => {
        const cell = document.createElement("div");
        cell.title = text;
        cell.appendChild(document.createTextNode(text));
        rowDiv.appendChild(cell);
    });
    return rowDiv;
}

function tableAsRowNodes(rows) {
    return rows.map(row => rowDOM(row));
}

export default function appendNodeManyTimes() {
    return execute('appendChild(Node)', () =>tableAsRowNodes(data).forEach(row=>root.appendChild(row)));
}

