import Selector from '../selector/selector';
import { SELECTORS } from '../../constants';
import { useState } from 'react';

function SelectorsWrapper() {
  const [selectorValue, setSelectorValue] = useState();

  const handleSelectorValue = (e) => {
    const target = e.target;
    const textValue = target.textContent;

    setSelectorValue(textValue);
    console.log(selectorValue);
  };

  const elements = SELECTORS.map((selector) => (
    <Selector selector={selector} handleSelectorValue={handleSelectorValue} />
  ));

  return <div className="selector__wrapper">{elements}</div>;
}

export default SelectorsWrapper;
