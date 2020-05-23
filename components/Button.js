import React from 'react';
import PropTypes from 'prop-types';

const Button = ({value, className, clickFunction}) => {
    const handleClick = (e) => {
        if(clickFunction) clickFunction(value);
    };
    return (
        <button
            className={ className }
            onClick={handleClick}
        >
            {value}
        </button>
    );
};

Button.propTypes = {
    value: PropTypes.any.isRequired,
    clickFunction: PropTypes.func,
    className: PropTypes.string
}

export default Button;