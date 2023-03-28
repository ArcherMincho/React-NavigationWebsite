import * as React from 'react';
import TypeTitle from './TypeTitle';
import SwitchMenu from './SwitchMenu';
import WebPanel from './WebPanel';


interface Websites {
    [k: string]: Array<{ [k: string]: string }>;
};

interface Props {
    subtypeMap: Record<string, any>;
    curSubtypes: { [k: string]: string };
    websites: Websites;
    listTypeRefs: Record<string, any>;
    onSubtypeSwitch: (type: string, e: React.MouseEvent<HTMLElement>) => void;
}

const WebList = (props: Props): JSX.Element => {

    const { subtypeMap, curSubtypes, websites, listTypeRefs, onSubtypeSwitch } = props;

    let types: string[] = [];
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
                                    onSubtypeSwitch(t, e)
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

export default WebList;