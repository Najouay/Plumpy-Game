const player = document.getElementById('player');
const moveSize = 15;
const boardWidth = 800; // Largeur du plateau de jeux
const boardHeight = 800; // Hauteur du plateau de jeux
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
        playerWalk = playerWalk + 1;
        if (player.offsetTop - moveSize >= 0) {
            player.style.top = (player.offsetTop - moveSize) + "px";
        }
        player.style.backgroundImage = "url('img/5.png')";

    } else if (event.code == 'ArrowRight') {
        playerWalk = playerWalk + 1;
        if (player.offsetLeft + moveSize + player.offsetWidth <= boardWidth) {
            player.style.left = (player.offsetLeft + moveSize) + "px";
        }
        player.style.backgroundImage = "url('img/8.png')";

    } else if (event.code == 'ArrowDown') {
        playerWalk = playerWalk + 1;
        if (player.offsetTop + moveSize + player.offsetHeight <= boardHeight) {
            player.style.top = (player.offsetTop + moveSize) + "px";
        }
        player.style.backgroundImage = "url('img/2.png')";

    } else if (event.code == 'ArrowLeft') {
        playerWalk = playerWalk + 1;
        if (player.offsetLeft - moveSize >= 0) {
            player.style.left = (player.offsetLeft - moveSize) + "px";
        }
        player.style.backgroundImage = "url('img/4.png')";
    }
});
