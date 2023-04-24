import './Button.css';

const BasicButton = (props) => {
    
    return ( 
        <div>
            <button className="button" style={{backgroundColor: props.backgroundColor, height: props.height, width: props, padding: props.padding}}>
                <div className="buttonDiv">
                    <p className="buttonText" style={{fontSize: props.fontSize, lineHeigth: props.lineHeigth, color: props.color}}>{props.textContent}</p>
                </div>
            </button>
        </div>
     );
}

const Button = (props) => {
    return (
        <div>
            <BasicButton textContent={props.textContent} fontSize="25px" backgroundColor={props.backgroundColor} lineHeigth="30px" color={props.color} height={props.height} width={props.width} padding={props.padding} />
        </div>
    );
}


export { BasicButton,Button };