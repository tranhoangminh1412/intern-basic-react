import { useState } from "react";

function Describe(props) {
    const { description,setDescription} = props
    const [input, setInput] = useState(props?.value ?? '');
    return (
        <div>
            <div>
                <textarea maxLength={1000} className="register-input-block-item-inputframe"
                    style={{ width: '428px', height: '10em', alignContent: 'baseline', alignItems: 'baseline' }}
                    value={input ? input : description} onInput={e => {setInput(e.target.value);setDescription(e.target.value)}} />
            </div>
            <p style={{
                color: '#666',
                fontFamily: 'Noto Sans JP',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
            }}>
                {input.length}/1000
            </p>
        </div>
    );
}

export default Describe