<<<<<<< HEAD
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

=======
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

>>>>>>> 8d228f5811087b128ef47b6d5cb5ac16c9e3822c
export default TypeTitle;