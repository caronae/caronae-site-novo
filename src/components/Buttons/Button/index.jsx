import BasicButton from '../BasicButton';
import './styles.css';

const Button = props => {
  return (
    <div>
      <BasicButton
        textContent={props.textContent}
        fontSize="25px"
        backgroundColor={props.backgroundColor}
        lineHeigth="30px"
        color={props.color}
        height={props.height}
        width={props.width}
        padding={props.padding}
      />
    </div>
  );
};

export default Button;
