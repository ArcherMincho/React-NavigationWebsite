import * as React from 'react';

interface Props {
    title: string;
}

const PageHeader = (props: Props): JSX.Element => {
    const { title = 'page title' } = props;
    return (
        <header>
            <h1 className='hover-transition'>{title}</h1>
        </header>
    )
}

export default PageHeader;