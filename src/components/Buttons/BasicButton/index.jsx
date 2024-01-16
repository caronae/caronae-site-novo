import '../Button/styles.css';

const BasicButton = props => {
  return (
    <div>
      <button
        className="button"
        style={{
          backgroundColor: props.backgroundColor,
          height: props.height,
          width: props,
          padding: props.padding
        }}
      >
        <div className="buttonDiv">
          <p
            className="buttonText"
            style={{
              fontSize: props.fontSize,
              lineHeigth: props.lineHeigth,
              color: props.color
            }}
          >
            {props.textContent}
          </p>
        </div>
      </button>
    </div>
  );
};

export default BasicButton;
