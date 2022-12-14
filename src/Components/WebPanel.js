import React from 'react';
import PropTypes from 'prop-types';

function WebPanel(props) {

    const web = props.web;

    function uppercaseFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <a
            className='web-panel soft-UI'
            href={web.url}
            rel='noreferrer'
            target='_blank'
        >
            <h3>{uppercaseFirstLetter(web.name)}</h3>
            <p>{uppercaseFirstLetter(web.description)}</p>
        </a>
    )
}

WebPanel.propTypes = {
    web: PropTypes.object,
}

export default WebPanel;