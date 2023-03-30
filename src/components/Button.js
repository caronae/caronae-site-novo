import './Button.css';

const BasicButton = (props) => {
    
    return ( 
        <div>
            <button className="button" style={{backgroundColor: props.backgroundColor}}>
                <div className="buttonDiv">
                    <img src={props.imgSrc} className="buttonImg"/>
                    <p className="buttonText" style={{fontSize: props.fontSize, lineHeigth: props.lineHeigth, color: props.color}}>{props.textContent}</p>
                </div>
            </button>
        </div>
     );
}

const Button = (props) => {
    return (
        <div>
            <BasicButton textContent={props.textContent} fontSize="25px" imgSrc={props.imgSrc} backgroundColor={props.backgroundColor} lineHeigth="30px" color={props.color} />
        </div>
    );
}


export { BasicButton,Button };