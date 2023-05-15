//create simple buttons for increments/decrements value
import { useState } from 'react';
import Button from './components/button/button';
import Input from './components/input/input';

function App() {
  const [value, setValue] = useState(0);

  const handleValue = (e) => {
    const target = e.target;
    if (target.textContent === '+') {
      setValue(value + 1);
    } else if (target.textContent === '-') {
      setValue(value - 1);
    }
  };

  return (
    <div className="App">
      <Button handleValue={handleValue} text="+" />
      <Input value={value} />
      <Button handleValue={handleValue} text="-" />
    </div>
  );
}

export default App;
