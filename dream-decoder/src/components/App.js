import React, { useState } from 'react';
import DreamInput from './components/DreamInput';
import DreamOutput from './components/DreamOutput';
import SaveButton from './components/SaveButton';
import ClearButton from './components/ClearButton';
import './App.css';

function App() {
  // Define state variables for the dream input and output
  const [dreamInput, setDreamInput] = useState('');
  const [dreamOutput, setDreamOutput] = useState('');

  // Define a function to handle the dream input change
  const handleDreamInputChange = (event) => {
    setDreamInput(event.target.value);
  };

  // Define a function to handle the dream submission
  const handleDreamSubmit = async () => {
    // Make a request to the OpenAI API with the dream input as the prompt
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: dreamInput,
        max_tokens: 50,
        temperature: 0.9,
        top_p: 0.9,
      }),
    });

    // Store the response in the dream output state variable
    const json = await response.json();
    setDreamOutput(json.choices[0].text);

    // Use the API key stored in the .env file
  };

  // Define a function to handle the save button click
  const handleSaveButtonClick = () => {
    // Save the dream input and output to an array that can only be accessed with a username and password
  };
    setDreamInput('');
    setDreamOutput('');

  // Define a function to handle the clear button click
  const handleClearButtonClick = () => {
    // Clear the dream input and output state variables
  };

  return (
    <div className="App">
      <h1>The Dream Decoder</h1>
      <DreamInput value={dreamInput} onChange={handleDreamInputChange} onSubmit={handleDreamSubmit} />
      <DreamOutput value={dreamOutput} />
      <div className="button-container">
        <SaveButton onClick={handleSaveButtonClick} />
        <ClearButton onClick={handleClearButtonClick} />
      </div>
    </div>
  );
}

export default App;