
function createChess(size) {
    const board = document.getElementById('main-div')
    const side = 50 / size;
    for (let y = 0; y < size; y++) {
        let row = document.createElement('div')
        row.id = 'row'
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                const boardblack = document.createElement('div')
                boardblack.style.height = side + 'vw';       //vh/vw is view height/width, aka the full measurements of the browser window
                boardblack.style.width = side + 'vw';
                boardblack.className += 'div-black'
                row.appendChild(boardblack)
            } else {
                const boardwhite = document.createElement('div')
                boardwhite.className += 'div-white'
                boardwhite.style.height = side + 'vw';
                boardwhite.style.width = side + 'vw';
                row.appendChild(boardwhite)
            }
        }
        board.appendChild(row)
    }
}

