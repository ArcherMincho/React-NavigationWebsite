import * as React from 'react';
import UppercaseWrapper from './UppercaseWrapper';

interface Props {
    web: { [k: string]: string };
    toUppercase: (str: string) => string;
};

const WebPanel = (props: Props): JSX.Element => {

    const { web, toUppercase } = props;

    return (
        <a
            className='web-panel soft-UI'
            href={web.url}
            rel='noreferrer'
            target='_blank'
        >
            <h3>{toUppercase(web.name)}</h3>
            <p>{toUppercase(web.description)}</p>
        </a>
    )
}

export default UppercaseWrapper(WebPanel);