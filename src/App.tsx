import { useState } from 'react';
import { Button, Paper } from '@mantine/core';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Paper>
                <h1 className="font-bold underline">Hello Sketchafone!</h1>
                <Button color="red" onClick={() => setCount(count => count + 1)}>
                    count is: {count}
                </Button>
            </Paper>
        </div>
    );
}

export default App;
