import React, { useState } from 'react';

/**
 * A component that renders a text input field for the user to enter their dream.
 * @param {function} onSubmit - A callback function to be called when the user submits their dream.
 */

function DreamInput({ onSubmit }) {
    const [dream, setDream] = useState('');

    /**
   * Handles changes to the dream input field.
   * @param {object} event - The event object.
   */

    function handleChange(event) {
        setDream(event.target.value);
    }

    /**
   * Handles the form submission.
   * @param {object} event - The event object.
   */

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(dream);
        setDream('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Enter your dream:
            <input type="text" value={dream} onChange={handleChange} />
            </label>
         <button type="submit">Decode Dream</button>
        </form>
    );
}

export default DreamInput;