import React from 'react';
import PropTypes from 'prop-types';

const selectedButtonClass = 'current-type';

class NavBar extends React.Component {
    static defaultProps = {
        types: [],
        onClick: (e) => {console.log('no onClick function passed into NavBar\'s buttons.')},
    }

    static propTypes = {
        types: PropTypes.array,
        onClick: PropTypes.func,
    }

    render() {
        const types = [...this.props.types];
        return (
            <nav className='type-nav-bar'>
                <ul>
                    {types.map((type, i) => {
                        return (
                            <li key={i}>
                                <button
                                    onClick={this.props.onClick}
                                    className={'button ' + (this.props.currentType == type ? selectedButtonClass : '')}
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
}

export default NavBar;