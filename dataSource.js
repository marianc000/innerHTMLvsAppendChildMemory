const COL_COUNT = 20, ROW_COUNT = 20000;

function generateData() {
    const rows = [];
    for (let r = 0; r < ROW_COUNT; r++) {
        const row = [];
        rows.push(row);
        for (let c = 0; c < COL_COUNT; c++)
            row.push(`column ${c},row ${r}`);
    }
    return rows;
}

export default generateData();
 