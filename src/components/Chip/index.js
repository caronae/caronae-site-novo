import './styles.css';
import { useState, useEffect } from 'react';

export default function Chip (props) {
    const {
        height = '50px',
        width = 'fit-content',
        padding = '40px',
        backgroundColor = '#17B270',
        color = '#000'
    } = props;

    const [elements, setElements] = useState([]);

    useEffect(() => {
        const content = [];

        if ('imgSrc' in props) {
            const img = <img src={ `${props.imgSrc}` }
                             style={{ height: `${height * 0.5}` }} />;
            content.push(img);
        }

        if ('textContent' in props) {
            const text = <p>{ `${props.textContent}` }</p>;
            content.push(text);

        setElements(content);
        }

    }, [props, height]);

    return (
        <div className="chip" style={{ height: `${height}`,
                                       width: `${width}`,
                                       padding: `${padding}`,
                                       backgroundColor: `${backgroundColor}`,
                                       background: `${props.background}`,
                                       color: `${color}`,
                                       borderRadius: `${height}` }} >
            { elements }
        </div>
    );
}
