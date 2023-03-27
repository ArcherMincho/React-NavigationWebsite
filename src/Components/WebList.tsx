import * as React from 'react';
import TypeTitle from './TypeTitle';
import SwitchMenu from './SwitchMenu';
import WebPanel from './WebPanel';


interface Web {
    name: string;
    description: string;
    url: string;
    subtype: string;
};

interface Args {
    subtypeMap: Record<string, any>;
    curSubtypes: string[];
    websites: Array<Web>;
    listTypeRefs: Record<string, any>;
    onSubtypeSwitch: (type: string, e: React.MouseEvent<HTMLElement>) => void;
}

function WebList(props: Args) {

    const { subtypeMap, curSubtypes, websites, listTypeRefs, onSubtypeSwitch } = props;

    let types: string[] = [];
    for (const k of subtypeMap.keys()) {
        types.push(k);
    }

    return (
        <section className='web-list'>
            {types.map((t) => {
                const curSubtype = curSubtypes[t];
                const curWebs = websites[t].filter((w: Web) => {
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
                                    onSubtypeSwitch(t, e)
                                }}
                            />
                        }
                        <div className='webs-container'>
                            {curWebs.map((w: Web) => {
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

export default WebList;