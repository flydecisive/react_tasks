//create simple buttons for increments/decrements value
//v1.1 add choosing step increment/decrement
import { useState } from 'react';
import Button from './components/button/button';
import Input from './components/input/input';
import Step from './components/step/step';

function App() {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState();

  const handleStep = (e) => {
    setStep(Number(e.target.value));
  };

  const handleValue = (e) => {
    const target = e.target;
    if (target.textContent === '+') {
      step ? setValue(value + step) : setValue(value + 1);
    } else if (target.textContent === '-') {
      step ? setValue(value - step) : setValue(value - 1);
    }
  };

  return (
    <div className="App">
      <Step handleStep={handleStep} />
      <Button handleValue={handleValue} text="+" />
      <Input value={value} />
      <Button handleValue={handleValue} text="-" />
    </div>
  );
}

export default App;
