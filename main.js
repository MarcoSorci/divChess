
function createChess(size) {
    const board = document.getElementById('main-div')
    for (let y = 0; y < size; y++) {
        let row = document.createElement('div')
        row.id = 'row'
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                const boardblack = document.createElement('div')
                boardblack.className += 'div-black'
                row.appendChild(boardblack)
            } else {
                const boardwhite = document.createElement('div')
                boardwhite.className += 'div-white'
                row.appendChild(boardwhite)
            }
        }
        board.appendChild(row)
    }
}

