import * as React from 'react';

interface Props {
    type: string;
    typeRef: any;
}

const TypeTitle = (props: Props): JSX.Element => {
    return (
        <h2
            ref={props.typeRef}
        ># {props.type}</h2>
    )
}

export default TypeTitle;