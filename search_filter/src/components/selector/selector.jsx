function Selector({ selector, handleSelectorValue }) {
  return (
    <button
      type="submit"
      className="search__selector"
      onClick={(e) => handleSelectorValue(e)}
    >
      {selector}
    </button>
  );
}

export default Selector;
