import { root,results } from './shared.js';
 
function tr(val) {
    return `<tr>${val}</tr>`;
}

function th(val) {
    return `<th>${val}</th>`;
}

export default function showResults() {
    Object.values(results).forEach(vals => vals.push(average(vals)));

    const tableData = Object.entries(results)
        .map(([key, vals]) => [key, ...vals.map(val => Math.round(val / 1000000))]);

    console.log(tableData);
    const headers = tr(tableData[0].slice(1, -1).reduce((t, v, i) => t + th(i), th('Method')) + th('Average'));
    const rows = tableData.map(row => tr(row.map(cell => `<td>${cell}</td>`).join(''))).join('');
    root.innerHTML = '<table>' + headers + rows + '</table>'
}

function average(array) {
    return array.reduce((total, val) => total + val, 0) / array.length;
}
