var cells = document.querySelectorAll(".cell");
var bord = document.querySelector('#bord');
var btu = document.querySelector('#restart');
var aa = document.querySelector('.game-message');
var steps = 0;
var lunci = true;
var win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
btu.addEventListener('click', function () {
    steps = 0;
    aa.style.display = 'none';
    cells.forEach(function (item) {
        var cell = item;
        cell.classList.remove('x', 'o');
        cell.removeEventListener('click', xoclick);
        cell.addEventListener('click', xoclick, { once: true });
    });
});
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', xoclick, { once: true });
});
function xoclick(event) {
    var target = event.target;
    if (lunci === true) {
        target.classList.add('x');
        lunci = false;
        bord.classList.remove('x');
        bord.classList.add('o');
    }
    else {
        target.classList.add('o');
        lunci = true;
        bord.classList.remove('o');
        bord.classList.add('x');
    }
    steps++;
    console.log(steps);
    var winplayer = winway(cells);
    if (winplayer === true) {
        if (lunci === false) {
            var hh = document.querySelector('#winner');
            hh.textContent = 'X 赢了！';
        }
        else {
            var hh = document.querySelector('#winner');
            hh.textContent = 'O 赢了！';
        }
        aa.style.display = 'block';
    }
    else if (steps === 9) {
        var hh = document.querySelector('#winner');
        hh.textContent = '平局';
        aa.style.display = 'block';
    }
}
function winway(cells) {
    return win.some(function (item) {
        var winway1 = item[0];
        var winway2 = item[1];
        var winway3 = item[2];
        if (cells[winway3].classList[1] !== undefined && cells[winway2].classList[1] !== undefined && cells[winway1].classList[1] !== undefined && cells[winway1].classList[1] === cells[winway2].classList[1] && cells[winway3].classList[1] === cells[winway2].classList[1]) {
            return true;
        }
        return false;
    });
}
