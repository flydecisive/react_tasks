import './temperature.css';

function Temperature({ value, theme }) {
  return (
    <div className={`temperature ${theme}`}>
      <p className="temperature__value">{value}</p>
    </div>
  );
}

export default Temperature;
