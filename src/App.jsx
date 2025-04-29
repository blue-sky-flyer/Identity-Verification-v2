import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Awaiting Verification');

  const handleVerify = () => {
    setStatus('Verifying...');
    setTimeout(() => {
      setStatus('Verified Successfully!');
    }, 2000);
  };

  return (
    <div className="App">
      <h1>Identity Verification</h1>
      <p>Status: {status}</p>
      <button onClick={handleVerify}>Start Verification</button>
    </div>
  )
}

export default App