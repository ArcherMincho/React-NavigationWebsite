<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import TypeTitle from './TypeTitle';
import SwitchMenu from './SwitchMenu';
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

=======
import React from 'react';
import PropTypes from 'prop-types';
import TypeTitle from './TypeTitle';
import SwitchMenu from './SwitchMenu';
import WebPanel from './WebPanel';

class WebList extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubtypeSwitch = this.handleSubtypeSwitch.bind(this);
    }

    handleSubtypeSwitch(type, e) {
        this.props.onSubtypeSwitch(type, e);
    }

    render() {
        const subtypeMap = this.props.subtypeMap;
        const curSubtypes = this.props.curSubtypes;
        const websites = this.props.websites;
        const listTypeRefs = this.props.listTypeRefs;

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
                                        this.handleSubtypeSwitch(t, e)
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
}

WebList.defaultProps = {
    types: [],
    websites: {},
}

WebList.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string),
    websites: PropTypes.object,
}

>>>>>>> 8d228f5811087b128ef47b6d5cb5ac16c9e3822c
export default WebList;