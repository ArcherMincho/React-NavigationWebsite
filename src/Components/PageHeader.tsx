import * as React from 'react';

function PageHeader(props: { title: string }) {
    const { title = 'page title' } = props;
    return (
        <header>
            <h1 className='hover-transition'>{title}</h1>
        </header>
    )
}

export default PageHeader;