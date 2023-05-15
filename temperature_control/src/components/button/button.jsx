function Button({ text, handleValue }) {
  return (
    <button type="submit" onClick={(e) => handleValue(e)}>
      {text}
    </button>
  );
}

export default Button;
