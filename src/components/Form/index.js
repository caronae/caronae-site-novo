import './styles.css';

function TextInput ({ name, label, placeholder }) {
    return (
        <div className="form-text-input">

            <input type="text"
                   name={ name }
                   id={ name }
                   label={ label }
                   placeholder={ placeholder } />

            <label htmlFor={ name }>
                { label }
            </label>

        </div>
    );
}

function TextArea ({ name, label, rows, placeholder }) {
    return (
        <div className="form-text-area">

            <textarea name={ name }
                      id={ name }
                      label={ label }
                      placeholder={ placeholder }
                      rows={ rows } />

            <label htmlFor={ name }>
                { label }

            </label>
        </div>
    );
}

function SubmitButton () {
    return (
        <button className="form-submit-button" type="submit">ENVIAR</button>
    );
}

export { TextInput, TextArea, SubmitButton };
