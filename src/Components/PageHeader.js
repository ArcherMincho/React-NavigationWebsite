import React from 'react';
import PropTypes from 'prop-types';

function PageHeader(props) {
    return (
        <header>
            <h1 className='hover-transition'>{props.title}</h1>
        </header>
    )
}

PageHeader.defaultProps = {
    title: "page title",
}

PageHeader.propTypes = {
    title: PropTypes.string,
}

export default PageHeader;