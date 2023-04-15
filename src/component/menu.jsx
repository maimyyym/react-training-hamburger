import React from "react";


function Menu() {
  return (
    <ul style={{
      listStyle: 'none',
      backgroundColor: 'white',
      padding: 0,
      margin: 'auto',
      width: '200px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex:10,
      paddingTop: '20px'
      }}>
      <li>home</li>
      <li>about</li>
      <li>works</li>
      <li>blog</li>
      <li>contact</li>
    </ul>
  );
};


export default Menu;
