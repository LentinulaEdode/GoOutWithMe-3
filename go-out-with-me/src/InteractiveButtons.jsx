import React, { useState, useRef } from 'react';
import './style.css';

const InteractiveButtons = () => {
  const [pageTitle, setPageTitle] = useState('Original Title');
  const [gifSrc, setGifSrc] = useState('/cowwy.gif');
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const noButtonRef = useRef(null);

  const handleNoMouseMove = (e) => {
    const button = noButtonRef.current;
    if (!button) return;

    const cursorX = e.clientX;
    const cursorY = e.clientY;
    const buttonRect = button.getBoundingClientRect();
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
    button.style.left = Math.min(Math.max(newX, 0), window.innerWidth - buttonRect.width) + 'px';
    button.style.top = Math.min(Math.max(newY, 0), window.innerHeight - buttonRect.height) + 'px';
    button.style.position = 'absolute';
};

  const handleYesClick = () => {
    setGifSrc('/yesscow.gif');
    setPageTitle('Yayy!');
    setButtonsVisible(false);
  };

  return (
    <div>
      <h1 id="pageTitle">{pageTitle}</h1>
      {buttonsVisible && (
        <div>
          <button id="noButton" onMouseMove={handleNoMouseMove}>No</button>
          <button id="yesButton" onClick={handleYesClick}>Yes</button>
        </div>
      )}
      <img id="firstGif" src={gifSrc} alt="Response Gif" />
    </div>
  );
};

export default InteractiveButtons;