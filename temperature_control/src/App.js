import { useState } from 'react';
import './App.css';
import Temperature from './components/temperature/temperature';
import Wrapper from './components/button-wrapper/wrapper';

function App() {
  const [value, setValue] = useState(0);

  const changeValue = (value) => {
    setValue(value);
  };

  let theme = '';
  if (value >= 0 && value < 15) {
    theme = 'green';
  } else if (value >= 15 && value < 30) {
    theme = 'yellow';
  } else if (value >= 30 && value < 50) {
    theme = 'coral';
  } else if (value >= 50) {
    theme = 'red';
  } else if (value < 0 && value >= -10) {
    theme = 'lightblue';
  } else if (value < -10 && value >= -20) {
    theme = 'blue';
  } else if (value < -20) {
    theme = 'darkblue';
  }

  return (
    <div className="App">
      <Temperature value={value} theme={theme} />
      <Wrapper changeValue={changeValue} theme={theme} />
    </div>
  );
}

export default App;
