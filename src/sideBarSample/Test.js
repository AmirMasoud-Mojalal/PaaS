import React, { useState, useEffect } from 'react';

export const App = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(0);
  useEffect(() => {
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    window.addEventListener('mousemove', (e) => {
      setCoordinates({
        x: e.clientX,
        // y: e.clientY,
      });
      if (e.clientX > 1360) {
        console.log('1 is IN');
        openRightNav();
      } else if (e.clientX < 30) {
        console.log('2 is IN');
        openLeftNav();
      } else if (30 < e.clientX < 1427) {
        console.log('3 is IN');
        closeLeftNav();
      }
    });
  }, []);
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  function openLeftNav() {
    document.getElementById('mySidebar').style.rem = '0';
    document.getElementById('mySidebar').style.left = '0';
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    setOpen(1);
  }
  function openRightNav() {
    document.getElementById('mySidebar').style.right = '0';
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    setOpen(1);
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeLeftNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    setOpen(0);
  }

  return (
    <h1>
      {coordinates.x}, {coordinates.y}
      {open === 1 ? 'Open' : 'Close'}
      <div id="mySidebar" className="sidebar">
        <a
          href="http://localhost:3000"
          className="closebtn"
          onClick={closeLeftNav}
        >
          &times;
        </a>
        <a href="http://localhost:3000">About</a>
        <a href="http://localhost:3000">Services</a>
        <a href="http://localhost:3000">Clients</a>
        <a href="http://localhost:3000">Contact</a>
      </div>
      <div id="main">
        <button className="openbtn" onClick={openRightNav}>
          &#9776; Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </h1>
  );
};
