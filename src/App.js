import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Welcome to Wicked Sweet!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <p>Your order portal is almost ready 🎂</p>
      </header>
    </div>
  );
}

export default App;
