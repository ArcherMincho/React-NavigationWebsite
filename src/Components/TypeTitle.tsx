import * as React from 'react';


function TypeTitle(props: { type: string; typeRef }) {
    return (
        <h2
            ref={props.typeRef}
        ># {props.type}</h2>
    )
}

export default TypeTitle;