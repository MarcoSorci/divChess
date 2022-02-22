
let cells = [];
let animationCycle = false;
function createChess(size) {

    const board = document.getElementById('main-div')
    board.innerHTML = null
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
                cells.push(boardblack)
                row.appendChild(boardblack)
            } else {
                const boardwhite = document.createElement('div')
                boardwhite.className += 'div-white'
                boardwhite.style.height = side + 'vw';
                boardwhite.style.width = side + 'vw';
                cells.push(boardwhite)
                row.appendChild(boardwhite)
            }
        }
        board.appendChild(row)
    }
    requestAnimationFrame(() => animate(0))
}

function animate(time) {
    realtime = time/20
    let index = Math.floor(realtime) % cells.length
    // if (cells[index - 1]) {
    //     cells[index - 1].style.backgroundColor = ''
    // } else {
    //     cells[cells.length - 1].style.backgroundColor = ''
    // }
    if (animationCycle === false) {
        if (cells[index].className === 'div-black') {
            cells[index].style.backgroundColor = '#99b9cc'
        } else {
            cells[index].style.backgroundColor = '#55829c'
        }    
    } else {
        if (cells[index].className === 'div-white') {
            cells[index].style.backgroundColor = '#55829c'
        } else {
            cells[index].style.backgroundColor = '#99b9cc'
        }    
    }

    
    // if (time<3000) {
    //     requestAnimationFrame(() => animate(time + 1))
    // }
    if (index === cells.length-1) {
        animationCycle = !animationCycle;
    }
    requestAnimationFrame(() => animate(time + 1))

}

