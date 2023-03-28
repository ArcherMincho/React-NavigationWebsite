import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import PageHeader from './PageHeader';
import NavBar from './NavBar';
import WebList from './WebList';
import ToTopBtn from './ToTopBtn';
import { websites, types, subtypeMap, firstSubtypes } from '../WebsitesData';

const NavWebsite = (): React.ReactNode => {
    const [curType, setCurType] = useState<string>(types[0]);
    const [curSubtypes, setCurSubtypes] = useState<{ [k: string]: string }>(firstSubtypes);

    // old version for creating refs:
    // const createRefs = (types: string[]) => {
    //     const typeNames = [...types];
    //     const refs = new Map<string, any>();
    //     typeNames.forEach((t) => {
    //         refs.set(t, React.createRef());
    //     });
    //     return refs;
    // }
    // const listTypeRefs: Record<string, any> = createRefs(types);

    // new version for creating refs with hooks:
    const createRefs = (types: string[]) => {
        const typeNames = [...types];
        const refs = new Map<string, React.Ref<HTMLElement>>();
        typeNames.forEach((t) => {
            refs.set(t, useRef<HTMLElement>(null));
        });
        return refs;
    }
    const listTypeRefs: Record<string, any> = createRefs(types);


    const getCurrentTypeNode = (typeName: string) => {
        return listTypeRefs.get(typeName).current;
    }

    const handleNavClick: React.MouseEventHandler<HTMLElement> = (e) => {
        const typeName = (e.target as HTMLElement).innerText;
        const currentTypeNode = getCurrentTypeNode(typeName);
        currentTypeNode.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setCurType(typeName);
    }

    const handleSubtypeSwitch = (type: string, e: React.MouseEvent<HTMLElement>) => {
        let cSubtypes = {};
        Object.assign(cSubtypes, curSubtypes);
        cSubtypes[type] = (e.target as HTMLElement).innerText;
        setCurSubtypes(cSubtypes);
    }

    return (
        <section className='container'>
            <PageHeader title="Navigation." />
            <section className='content'>
                <NavBar
                    types={types}
                    onClick={handleNavClick}
                    curType={curType}
                />
                <WebList
                    subtypeMap={subtypeMap}
                    curSubtypes={curSubtypes}
                    onSubtypeSwitch={handleSubtypeSwitch}
                    websites={websites}
                    listTypeRefs={listTypeRefs}
                />
            </section>
            <footer>
                <ToTopBtn />
            </footer>
        </section>
    );
}

export default NavWebsite;