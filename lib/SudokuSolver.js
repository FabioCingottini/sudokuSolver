`use strict`;

const ALL_VALUES_IN_A_RANGE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SudokuTable = require(`./SudokuTable`);

module.exports = class {

    constructor(rawSudokuTable) {
        this.sudokuTable = new SudokuTable(rawSudokuTable);
    }

    solve() {
        let wasTableUpdated = true;
        while(wasTableUpdated){
            wasTableUpdated = false;
            for (const cell of this.sudokuTable.cells) {
                if (!!!cell.getValue()){
                    const possibleValues = this._calculateCellPossibleValues(cell);
                    if (possibleValues.size === 1) {
                        cell.setValue([...possibleValues][0]);
                        wasTableUpdated = true;
                    }
                }
            }
        }
        return this;
    }

    logSolvedTable() {
        let i = 1;
        let rowToPrint = "";
        this.sudokuTable.cells.forEach(cell => {
            if (i > 9){
                i = 1;
                console.log(rowToPrint.toString());
                rowToPrint = "";
            }
            if (!!cell.getValue())
                rowToPrint += ` ${cell.getValue()} `;
            else
                rowToPrint += "   ";
            i++;
        });
        console.log(rowToPrint.toString());
    }

    _calculateCellPossibleValues(cell) {
        const existingValues = new Set();
        const relatedCells = this._getCellRelatedCells(cell);
        relatedCells.forEach(cell => existingValues.add(cell.getValue()));
        return new Set(ALL_VALUES_IN_A_RANGE.filter(val => !existingValues.has(val)));
    }

    _getCellRelatedCells(cell) {
        const relatedCells = [];
        for (const otherCell of this.sudokuTable.cells) {
            if (cell.x !== otherCell.x || cell.y !== otherCell.y) {
                const areCellsInSameColumn = cell.x === otherCell.x;
                const areCellsInSameRow = cell.y === otherCell.y;
                const areCellsInSameSquare =
                    cell.square.x === otherCell.square.x &&cell.square.y === otherCell.square.y;
                if (areCellsInSameColumn || areCellsInSameRow || areCellsInSameSquare) {
                    relatedCells.push(otherCell)
                }
            }
        }
        return relatedCells;
    }


};