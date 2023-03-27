import * as React from 'react';

interface Args {
    curType: string;
    types: string[];
    onSwitch: (e :React.MouseEvent<HTMLElement>) => void;
}

function SwitchMenu(props: Args) {
    // const { curType = '', types = [] } = props;
    const { curType, types, onSwitch } = props;

    function uppercaseFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <ul className='switch-menu'>
            {types.map((t) => {
                return (
                    <li
                        key={t}
                        className={(curType == t ? 'current-type' : '')}
                        onClick={onSwitch}
                    >
                        {uppercaseFirstLetter(t)}
                    </li>
                )
            })}
        </ul>
    )
}

export default SwitchMenu;