import * as React from 'react';

const selectedButtonClass = 'current-type';

interface Args {
    types: string[];
    curType: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function NavBar(props: Args) {

    const { types, curType, onClick } = props;
    return (
        <nav className='type-nav-bar'>
            <ul>
                {types.map((type, i) => {
                    return (
                        <li key={i}>
                            <button
                                onClick={onClick}
                                className={'button ' + (curType == type ? selectedButtonClass : '')}
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

export default NavBar;