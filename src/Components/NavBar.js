import React from 'react';
import PropTypes from 'prop-types';

const selectedButtonClass = 'current-type';

function NavBar(props) {

    const types = [...props.types];
    return (
        <nav className='type-nav-bar'>
            <ul>
                {types.map((type, i) => {
                    return (
                        <li key={i}>
                            <button
                                onClick={props.onClick}
                                className={'button ' + (props.currentType == type ? selectedButtonClass : '')}
                            >
                                {type}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

NavBar.defaultProps = {
    types: [],
    onClick: (e) => { console.log('no onClick function passed into NavBar\'s buttons.') },
}

NavBar.propTypes = {
    types: PropTypes.array,
    onClick: PropTypes.func,
}

export default NavBar;