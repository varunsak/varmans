import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Varmans Family Homepage!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} times
        </button>
      </div>
      <p className="read-the-docs">
        This is the homepage for the Varmans family. Stay tuned for updates!
      </p>
    </>
  )
}

export default App