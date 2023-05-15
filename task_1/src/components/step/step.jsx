import './step.css';

function Step({ handleStep }) {
  return (
    <div className="step">
      <p>Введите шаг уменьшения/увеличения значения: </p>
      <input
        type="text"
        className="step__input"
        onChange={(e) => handleStep(e)}
      />
    </div>
  );
}

export default Step;
