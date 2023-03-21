import React from 'react';

/**
 * A component that renders a button to save the user's dream and its decoded output.
 * @param {function} onClick - A callback function to be called when the user clicks the save button.
 */
function SaveButton({ onClick }) {
  return (
    <button onClick={onClick}>Save Dream</button>
  );
}

export default SaveButton;