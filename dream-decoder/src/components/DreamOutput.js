import React from 'react';

/**
 * A component that renders the output of the dream decoding process.
 * @param {string} output - The decoded dream.
 */
function DreamOutput({ output }) {
  return (
    <div>
      <h2>Decoded Dream:</h2>
      <p>{output}</p>
    </div>
  );
}

export default DreamOutput;