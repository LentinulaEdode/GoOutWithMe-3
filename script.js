
document.getElementById('noButton').addEventListener('mousemove', function(e) {
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    const buttonRect = this.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + window.scrollX + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + window.scrollY + buttonRect.height / 2;

    const distanceX = cursorX - buttonCenterX;
    const distanceY = cursorY - buttonCenterY;

    // Por dónde se moverá el cursor: 100px a la izquierda o derecha, 80px arriba o abajo
    const moveX = distanceX > 0 ? -300 : 80;
    const moveY = distanceY > 0 ? -300 : 80;

    // Para que salga repeliendo el cursor
    const newX = buttonRect.left + moveX;
    const newY = buttonRect.top + moveY;

    // Esto para que se ajuste al tamaño de la pantalla
    this.style.left = Math.min(Math.max(newX, 0), window.innerWidth - buttonRect.width) + 'px';
    this.style.top = Math.min(Math.max(newY, 0), window.innerHeight - buttonRect.height) + 'px';
    this.style.position = 'absolute';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('firstGif').src = "./assets/yesscow.gif";
    document.getElementById('pageTitle').textContent = 'Yayy!';
    // ahora para que desaparezcan los botones y no haya vuelta atrás ;)
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});