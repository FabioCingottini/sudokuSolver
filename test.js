`use strict`;

const SudokuSolver = require(`./lib`);

const rawTable = [
    [7, null, null, null, 1, 4, null, 2, 6],
    [4, 8, 2, null, null, 3, 5, null, null],
    [1,null,null,null,5,7,3,null,4],
    [null,2,4,7,3,null,null,6,null,],
    [null,null,null,1,6,null,8,4,2],
    [6,9,1,4,null,null,7,null,null],
    [null,null,8,5,null,1,null,9,3],
    [null,1,6,3,null,null,2,null,7],
    [5,7,null,9,null,6,null,1,null]
];

new SudokuSolver(rawTable)
    .solve()
    .logSolvedTable();





