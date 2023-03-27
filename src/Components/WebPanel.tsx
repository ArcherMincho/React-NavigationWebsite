import * as React from 'react';


interface Web {
    name: string;
    description: string;
    url: string;
    subtype: string;
};

function WebPanel(props: { web: Web }) {

    const web = props.web;

    function uppercaseFirstLetter(str: string) {
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