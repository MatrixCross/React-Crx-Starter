import { useState } from 'react'

const App = () => {
  const [ count, setCount ] = useState(0);
  return <div>
    <p>count: {count}</p>
    <button onClick={() => setCount(count + 1)}>++</button>
  </div>
}
export default App
