import * as React from 'react';

/**
 * A HOC component
 * 
 * @param WrappedComponent the child component 
 * @returns a wrapper component
 */

const UppercaseWrapper = (WrappedComponent: React.ElementType) => {

    const toUppercase = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // the wrapper receive the props passed to the child component
    // when the child is used
    const Wrapper = (props) => {
        return (
            <WrappedComponent
                toUppercase={toUppercase}
                {...props}
            />
        )
    }

    return Wrapper;
}

export default UppercaseWrapper;