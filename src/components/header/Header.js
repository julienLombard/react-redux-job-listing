import React, { useState } from 'react';

export const Header = (props) => {
  const scrollToList = props.scrollToList;
  const scrollToForm = props.scrollToForm;
  const [display, setDisplay] = useState(false);

  const toggleMenu = () => {
    setDisplay(!display);
  };

  function handleClickList() {
    scrollToList.current.scrollIntoView();
  }

  function handleClickForm() {
    scrollToForm.current.scrollIntoView();
  }

  return (
    <header>
      <div className="div-logo">
        <svg
          width="272"
          height="92"
          viewBox="0 0 271 92"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            strokeWidth="19.5"
            stroke="#fff"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
          >
            <path d="M187 80.99h36.236c22.154 0 37.46-15.314 37.46-35.292 0-20.181-15.306-35.698-37.46-35.698H203.5"></path>
            <path
              d="M10 13.91 32.586 81.5l25.03-66.9 25.027 66.9 18.932-54.093c2.694-7.885 8.34-14.442 16.286-16.607a22.576 22.576 0 0 1 15.693 1.413 23.004 23.004 0 0 1 6.536 4.681l.802.82.802-.82c4.317-4.402 10.17-6.875 16.272-6.875 6.103 0 11.956 2.473 16.273 6.875 4.33 4.405 6.761 10.39 6.758 16.633-.006 6.238-2.447 12.221-6.78 16.62l-.801.82-20.716 21.17-6.94 7.086a6.82 6.82 0 0 1-9.762 0l-2.134-2.195-4.812-4.914-11.64-11.892"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </div>

      {/* btn Burger Menu */}
      <div className="btn" onClick={toggleMenu}>
        <div className="btn__burger"></div>
      </div>
      {/* div Burger Menu */}
      <div
        className={
          'div-burger-menu ' + (display ? '  displayBlock' : 'displayNone')
        }
      >
        <nav className="nav-burger-menu">
          <ul className="ul-burger-menu">
            <li onClick={handleClickList} className="li-burger-menu">
              Jobs listing
            </li>

            <li onClick={handleClickForm} className="li-burger-menu">
              Ajouter Job
            </li>
          </ul>
        </nav>
      </div>

      {/* Medium Size Menu */}
      <nav className="nav-medium-size">
        <ul className="ul-medium-size">
          <li onClick={handleClickList} className="li-medium-size">
            Jobs listing
          </li>

          <li onClick={handleClickForm} className="li-medium-size">
            Ajouter Job
          </li>
        </ul>
      </nav>
    </header>
  );
};
