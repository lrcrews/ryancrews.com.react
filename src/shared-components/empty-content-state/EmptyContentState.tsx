import emptyContentState from "./empty-content-state.png";

import "./EmptyContentState.scss";

type EmptyContentStateProps = {
  alt: string;
  message: string;
};

function EmptyContentState(props: EmptyContentStateProps) {
  const { alt, message } = props;

  return (
    <div className="emptyContentState">
      <img alt={alt} src={emptyContentState} />
      <p>{message}</p>
    </div>
  );
}

export default EmptyContentState;
