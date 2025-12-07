import { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)} className="btn">
                count is {count}
            </button>
        </div>
    )
}

export default Counter;