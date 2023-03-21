import React from 'react';

/**
 * A component that renders a button to clear the dream input and output fields. 
 * @param {function} onClick - A callback function to be called when the user clicks the clear button.
 */
function ClearButton({ onClick }) {
  return (
    <button onClick={onClick}>Clear</button>
  );
}

export default ClearButton;