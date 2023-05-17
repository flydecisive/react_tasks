import { useState, useEffect } from 'react';
import './wrapper.css';
import Button from '../button/button';
import Input from '../input/input';

function Wrapper({ changeValue, theme }) {
  const [commonValue, setCommonValue] = useState(0);

  const handleValue = (e) => {
    const target = e.target;
    const textValue = target.textContent;
    const inputValue = Number(target.value);
    if (inputValue) {
      setCommonValue(inputValue);
    }

    if (textValue === '+') {
      setCommonValue(commonValue + 1);
    } else if (textValue === '-') {
      setCommonValue(commonValue - 1);
    }
  };

  useEffect(() => {
    changeValue(commonValue);
  });

  return (
    <div className="wrapper">
      <Button handleValue={handleValue} text="+" theme={theme} />
      <Input theme={theme} handleValue={handleValue} />
      <Button handleValue={handleValue} text="-" theme={theme} />
    </div>
  );
}

export default Wrapper;
