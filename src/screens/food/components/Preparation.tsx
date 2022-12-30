import "./Preparation.scss";

type PreparationProps = {
  steps: Array<string>;
};

function Preparation(props: PreparationProps) {
  const { steps } = props;

  return (
    <div className="preparation">
      <ul className="list">
        {steps.map((step, index) => {
          return (
            <li key={index}>
              <div className="step">
                <div className="label">Step {index}</div>
                <p>{step}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Preparation;
