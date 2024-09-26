

function solveTicTacToe(line1, line2, line3) {

    let a = line1[0];
    let b = line2[0];
    let c = line3[0];

    let aXCount = 0;
    let aOCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 'X') aXCount++;
        if (a[i] == '0') aOCount++;
    }
    if (aXCount == 3) return true;
    if (aOCount == 3) return true;

    aXCount = 0;
    aOCount = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] == 'X') aXCount++;
        if (b[i] == '0') aOCount++;
    }
    if (aXCount == 3) return true;
    if (aOCount == 3) return true;

    aXCount = 0;
    aOCount = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] == 'X') aXCount++;
        if (c[i] == '0') aOCount++;
    }
    if (aXCount == 3) return true;
    if (aOCount == 3) return true;



    for (let i = 0; i < c.length; i++) {
        aXCount = 0;
        aOCount = 0;

        if (a[i] == 'X') aXCount++;
        if (b[i] == 'X') aXCount++;
        if (c[i] == 'X') aXCount++;

        if (a[i] == 'O') aOCount++;
        if (b[i] == 'O') aOCount++;
        if (c[i] == 'O') aOCount++;

        if (aXCount == 3) return true;
        if (aOCount == 3) return true;
    }

    aXCount = 0;
    aOCount = 0;
    for (let i = 0; i < c.length; i++) {

        for (let j = 0; j < c.length; j++) {

            if (i == j) {
                if (i == 0) {
                    if (a[i] == 'X') aXCount++;
                    if (a[i] == 'O') aOCount++;
                }
                if (i == 1) {
                    if (b[i] == 'X') aXCount++;
                    if (b[i] == 'O') aOCount++;
                }
                if (i == 2) {
                    if (c[i] == 'X') aXCount++;
                    if (c[i] == 'O') aOCount++;
                }

            }

        }

    }
    console.log(aXCount);
    console.log(aOCount);

    if (aXCount == 3) return true;
    if (aOCount == 3) return true;
    return 'Tie'
}

console.log(solveTicTacToe(
    ['OXX'],
    ['XOO'],
    ['XOO']
));


function solveTicTacToe(a, b, c) {
    // Convert single-element arrays to arrays of characters
    let board1 = a[0].split('');
    let board2 = b[0].split('');
    let board3 = c[0].split('');
  
    // Check rows for win
    if (board1[0] === board1[1] && board1[1] === board1[2] && board1[0] !== ' ') return true;
    if (board2[0] === board2[1] && board2[1] === board2[2] && board2[0] !== ' ') return true;
    if (board3[0] === board3[1] && board3[1] === board3[2] && board3[0] !== ' ') return true;
  
    // Check columns for win
    if (board1[0] === board2[0] && board2[0] === board3[0] && board1[0] !== ' ') return true;
    if (board1[1] === board2[1] && board2[1] === board3[1] && board1[1] !== ' ') return true;
    if (board1[2] === board2[2] && board2[2] === board3[2] && board1[2] !== ' ') return true;
  
    // Check diagonals for win
    if (board1[0] === board2[1] && board2[1] === board3[2] && board1[0] !== ' ') return true;
    if (board1[2] === board2[1] && board2[1] === board3[0] && board1[2] !== ' ') return true;
  
    // If no winning condition is met, return 'Tie'
    return 'Tie';
  }

  function solveTicTacToe(line1, line2, line3) {
    let l1 = line1.toString().split('');
    let l2 = line2.toString().split('');
    let l3 = line3.toString().split('');
    
    if((l1[0] === l2[0] && l2[0] === l3[0]) || 
       (l1[0] === l2[1] && l2[1] === l3[2]) ||
       (l1[0] === l1[1] && l1[1] === l1[2]) ||
       (l1[1] === l2[1] && l2[1] === l3[1]) ||
       (l1[2] === l2[1] && l2[1] === l3[0]) ||
       (l1[2] === l2[2] && l2[2] === l3[2]) || 
       (l2[0] === l2[1] && l2[1] === l2[2]) ||
       (l3[0] === l3[1] && l3[1] === l3[2])){
      return true;
    };
    return 'Tie';
  }