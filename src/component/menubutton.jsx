import React from "react";

function MenuButton({onClick}) {

    return (
    <div onClick={onClick} style={{
      zIndex:999, position: 'fixed'
      }}>
        <div style={
            { width: '20px',
              padding: '2px',
              backgroundColor: 'gray',
              marginBottom: '4px',
              zIndex: 1000
            }
            } />
        <div style={
            { width: '20px',
              padding: '2px',
              backgroundColor: 'gray',
              marginBottom: '4px',
              zIndex: 1000
            }
            } />
        <div style={
            { width: '20px',
              padding: '2px',
              backgroundColor: 'gray',
              marginBottom: '4px',
              zIndex: 1000
            }
            } />

     </div>
    )
};

export default MenuButton;
