import * as React from 'react';


interface Web {
    [k: string]: string;
};

const WebPanel = (props: {web: Web}): JSX.Element => {

    const web = props.web;

    const uppercaseFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <a
            className='web-panel soft-UI'
            href={web.url}
            rel='noreferrer'
            target='_blank'
        >
            <h3>{uppercaseFirstLetter(web.name)}</h3>
            <p>{uppercaseFirstLetter(web.description)}</p>
        </a>
    )
}

export default WebPanel;