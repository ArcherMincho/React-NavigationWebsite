<<<<<<< HEAD
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

=======
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

>>>>>>> 8d228f5811087b128ef47b6d5cb5ac16c9e3822c
export default PageHeader;