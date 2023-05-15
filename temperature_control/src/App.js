import { useState } from 'react';
import Button from './components/button/button';

function App() {
  const [value, setValue] = useState(0);

  const handleValue = (e) => {
    const target = e.target;
    const textValue = target.textContent;

    if (textValue === '+') {
      setValue(value + 1);
    } else if (textValue === '-') {
      setValue(value - 1);
    }
  };

  return (
    <div className="App">
      <Button handleValue={handleValue} text="+" />
      <Button handleValue={handleValue} text="-" />
    </div>
  );
}

export default App;
