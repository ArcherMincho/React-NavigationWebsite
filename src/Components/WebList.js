import React from 'react';
import PropTypes from 'prop-types';
import TypeTitle from './TypeTitle.tsx';
import SwitchMenu from './SwitchMenu.tsx';
import WebPanel from './WebPanel';

function WebList(props) {

    const subtypeMap = props.subtypeMap;
    const curSubtypes = props.curSubtypes;
    const websites = props.websites;
    const listTypeRefs = props.listTypeRefs;

    let types = [];
    for (const k of subtypeMap.keys()) {
        types.push(k);
    }

    return (
        <section className='web-list'>
            {types.map((t) => {
                const curSubtype = curSubtypes[t];
                const curWebs = websites[t].filter((w) => {
                    return w.subtype === curSubtype
                });
                return (
                    <section className='sub-web-list' key={t}>
                        <TypeTitle
                            type={t}
                            typeRef={listTypeRefs.get(t)}
                        />
                        {subtypeMap.get(t).length > 1 &&
                            <SwitchMenu
                                types={subtypeMap.get(t)}
                                curType={curSubtype}
                                onSwitch={(e) => {
                                    props.onSubtypeSwitch(t, e)
                                }}
                            />
                        }
                        <div className='webs-container'>
                            {curWebs.map((w) => {
                                return <WebPanel
                                    key={w.name}
                                    web={w}
                                />
                            })}
                        </div>
                    </section>
                )
            })}
        </section>
    )

}

WebList.defaultProps = {
    types: [],
    websites: {},
}

WebList.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string),
    websites: PropTypes.object,
}

export default WebList;