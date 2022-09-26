import React from 'react';
import PropTypes from 'prop-types';

function SwitchMenu(props) {
    const curType = props.curType;
    const types = props.types;

    function uppercaseFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <ul className='switch-menu'>
            {types.map((t) => {
                return (
                    <li
                        key={t}
                        className={(curType == t ? 'current-type' : '')}
                        onClick={props.onSwitch}
                    >
                        {uppercaseFirstLetter(t)}
                    </li>
                )
            })}
        </ul>
    )
}

SwitchMenu.defaultProps = {
    curType: '',
    types: [],
}

SwitchMenu.propTypes = {
    curType: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
}

export default SwitchMenu;