<<<<<<< HEAD
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

=======
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

>>>>>>> 8d228f5811087b128ef47b6d5cb5ac16c9e3822c
export default NavBar;