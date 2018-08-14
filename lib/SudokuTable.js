`use strict`;

const SudokuCell = require(`./SudokuCell`);

module.exports = class {

    constructor(rawSudokuTable) {
        this.cells = new Set();
        this._initializeCells(rawSudokuTable);
    }

    _initializeCells(rawSudokuTable) {
        rawSudokuTable.forEach((row, y) => {
            row.forEach((value, x) => {
                this.cells.add(
                    new SudokuCell(value, x+1, y+1)
                )
            });
        });
    }

};
