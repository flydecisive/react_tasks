import './button.css';

function Button({ text, handleValue, theme }) {
  return (
    <button
      className={`button ${theme}`}
      type="submit"
      onClick={(e) => handleValue(e)}
    >
      {text}
    </button>
  );
}

export default Button;
