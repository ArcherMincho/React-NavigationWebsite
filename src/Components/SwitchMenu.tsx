import * as React from 'react';
import UppercaseWrapper from './UppercaseWrapper';

interface Props {
    curType: string;
    types: string[];
    onSwitch: (e: React.MouseEvent<HTMLElement>) => void;
    toUppercase: (str: string) => string;
}

const SwitchMenu = (props: Props): JSX.Element => {
    // const { curType = '', types = [] } = props;
    const { curType, types, onSwitch, toUppercase } = props;

    return (
        <ul className='switch-menu'>
            {types.map((t) => {
                return (
                    <li
                        key={t}
                        className={(curType == t ? 'current-type' : '')}
                        onClick={onSwitch}
                    >
                        {toUppercase(t)}
                    </li>
                )
            })}
        </ul>
    )
}

export default UppercaseWrapper(SwitchMenu);