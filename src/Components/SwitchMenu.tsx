import React from 'react';

function SwitchMenu(props: { curType: string; types: string[]; onSwitch }) {
    const { curType = '', types = [] } = props;

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

export default SwitchMenu;