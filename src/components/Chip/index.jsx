import './styles.css';

const Chip = (props) => {
    return ( 
        <div className="chip" style={{backgroundColor: props.backgroundColor, height: props.height, width: props.width, padding: props.padding, background: props.background, borderRadius: props.borderRadius}}>
            <div className="chipDiv">
                <img className="chipImg" src={props.imgSrc} style={{height: props.imgSize}}></img>
                <p className="chipText" style={{fontSize: props.fontSize, lineHeigth: props.lineHeigth, color: props.color}}>{props.textContent}</p>
            </div>
        </div>
     );
}

export {Chip};