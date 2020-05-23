import React from 'react';
import PropTypes from 'prop-types';

const Display = ({value}) => {
    return (
        <input
            value={value}
            className="display"
            disabled
        />
    );
}

Display.propTypes = {
    value: PropTypes.string.isRequired
}

export default Display;