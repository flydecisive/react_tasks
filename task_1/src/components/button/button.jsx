function Button({ text, handleValue }) {
  return (
    <button onClick={(e) => handleValue(e)} type="submit">
      {text}
    </button>
  );
}

export default Button;
