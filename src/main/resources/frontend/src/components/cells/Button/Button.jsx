import React, {useMemo} from 'react';
import './Button.scss'

const Button = ({text, type, size, onClick}) => {
    const styleName = useMemo(() => `button ${type} button-${size}`
    , [type, size])

    return (
        <button
            type={'button'}
            onClick={onClick}
            className={styleName}
        >
            {text}
        </button>
    );
};

export default Button;