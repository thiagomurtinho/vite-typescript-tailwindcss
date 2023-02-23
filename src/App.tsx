import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex items-center justify-center'>
        <h1 className="text-4xl text-center text-blue-500">Hello React!</h1>
    </main>
  )
}

export default App
