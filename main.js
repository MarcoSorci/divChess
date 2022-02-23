
let cells = [];

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
    requestAnimationFrame(() => animate6(0))
}

function baseAnim(incrementalTime, lastTime) {
    let delta = incrementalTime - lastTime
    lastTime = incrementalTime
    console.log(delta);
    requestAnimationFrame(baseAnim)
}





function animateRed(time) {

    realtime = time / 20
    let index = Math.floor(realtime) % cells.length;
    if (cells[index - 1]) {
        cells[index - 1].style.backgroundColor = '';
    } else {
        cells[cells.length - 1].style.backgroundColor = '';
    }
    cells[index].style.backgroundColor = 'red';
    requestAnimationFrame(() => animateRed(time + 1))
}

let animationCycle = false;

function animate(time) {
    let index = time % cells.length
    if (animationCycle === false) {
        if (cells[index].className === 'div-black') {
            cells[index].style.backgroundColor = 'white'
        } else {
            cells[index].style.backgroundColor = 'black'
        }
    } else {
        if (cells[index].className === 'div-black') {
            cells[index].style.backgroundColor = 'black'
        } else {
            cells[index].style.backgroundColor = 'white'
        }
    }
    if (index === cells.length - 1) {
        animationCycle = !animationCycle
    }
    requestAnimationFrame(() => animate(time + 1))
}


function animate2(time) {

    let index = time % cells.length;
    const column = index % Math.sqrt(cells.length);
    const row = Math.floor(index / Math.sqrt(cells.length));
    const board = Math.floor(time / cells.length);

    cells[index].style.backgroundColor = (column + row + board) % 2 === 0 ? "black" : "white";


    requestAnimationFrame(() => animate2(time + 1))
}

//has to go from rgb 255,0,0,0 to 255,0,0,1

function animate4(time) {  //opacity

    let index = time % cells.length;
    const opacity = index / cells.length
    cells[index].style.backgroundColor = "rgb(255, 0, 0, " + opacity + ")"
    requestAnimationFrame(() => animate4(time + 1))
}

function animate5(time) {   //black to red

    let index = time % cells.length;
    const red = index / cells.length * 255
    cells[index].style.backgroundColor = "rgb(" + red + ", 0, 0)"
    requestAnimationFrame(() => animate5(time + 1))
}

function animate6(time) {   //rotation

    let index = time % cells.length;
    const rotation = index / cells.length + time * 2
    for (const cell of cells) {
        cell.style.transform = cell.style.transform = 'rotate(' + rotation + 'deg)';
    }
    requestAnimationFrame(() => animate6(time + 1))
}

