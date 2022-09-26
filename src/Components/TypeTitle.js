import React from 'react';
import PropTypes from 'prop-types';

function TypeTitle(props) {
    return (
        <h2
            ref={props.typeRef}
        ># {props.type}</h2>
    )
}

TypeTitle.propTypes = {
    type: PropTypes.string,
}

export default TypeTitle;