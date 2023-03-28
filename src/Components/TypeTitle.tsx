import * as React from 'react';

interface Props {
    type: string;
    typeRef: any;
}

const TypeTitle: React.FC<Props> = props => {
    return (
        <h2
            ref={props.typeRef}
        ># {props.type}</h2>
    )
}

export default TypeTitle;