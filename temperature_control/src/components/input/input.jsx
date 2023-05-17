import './input.css';

function Input({ handleValue }) {
  return <input className="input" onChange={handleValue} />;
}

export default Input;
