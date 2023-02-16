import React from 'react';
import './MainPage.scss';

function MainPage(): JSX.Element {
  return (
    <div className="main__container">
      <h1>Ёжики, привет!</h1>
      <img
        className="main__container-img"
        src="https://i.pinimg.com/originals/8d/20/2b/8d202b53326151be295f9b59e582c8d7.jpg"
        alt=""
      />
    </div>
  );
}

export default MainPage;
