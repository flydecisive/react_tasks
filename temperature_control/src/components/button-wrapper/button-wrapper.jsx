import { useState } from 'react';
import './button-wrapper.css';
import Button from '../button/button';

function ButtonWrapper({ changeValue, theme }) {
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

  changeValue(value);

  return (
    <div className="button__wrapper">
      <Button handleValue={handleValue} text="+" theme={theme} />
      <Button handleValue={handleValue} text="-" theme={theme} />
    </div>
  );
}

export default ButtonWrapper;
