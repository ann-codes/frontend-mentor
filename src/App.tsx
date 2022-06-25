import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1 className="font-bold underline">Hello Sketchafone!</h1>
            <button color="red" onClick={() => setCount(count => count + 1)}>
                count is: {count}
            </button>
        </div>
    );
}

export default App;
