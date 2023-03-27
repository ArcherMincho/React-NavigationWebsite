import React from 'react';
import PageHeader from '../Components/PageHeader.tsx';
import NavBar from '../Components/NavBar';
import WebList from '../Components/WebList';
import ToTopBtn from '../Components/ToTopBtn.tsx';
import { websites, types, subtypeMap, firstSubtypes } from '../WebsitesData';

import { useSelector, useDispatch } from 'react-redux';
import { setCurType } from '../slices/typeSlice';


function createRefs(types) {
    const typeNames = types;
    const refs = new Map();
    typeNames.forEach((t) => {
        refs.set(t, React.createRef());
    });
    return refs;
}


export function NavWebsite() {

    const curType = useSelector(state => state.type.curType);
    const curSubtypes = useSelector(state => state.type.curSubtypes);
    const dispatch = useDispatch();

    const switchCurType = (e) => {
        const typeName = e.target.innerText;
        const currentTypeNode = this.getCurrentTypeNode(typeName);
        currentTypeNode.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        return {
            type: 'type',
            payload: typeName
        }
    }

    constructor(props) {
        super(props);
        this.listTypeRefs = createRefs(types);

        this.state = {
            curType: types[0],
            curSubtypes: firstSubtypes,
        };

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleSubtypeSwitch = this.handleSubtypeSwitch.bind(this);
    }

    getCurrentTypeNode = (typeName) => {
        return this.listTypeRefs.get(typeName).current;
    }

    handleNavClick(e) {
        const typeName = e.target.innerText;
        const currentTypeNode = this.getCurrentTypeNode(typeName);
        currentTypeNode.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        this.setState({ curType: typeName });
    }


    handleSubtypeSwitch(type, e) {
        let curSubtypes = {};
        Object.assign(curSubtypes, this.state.curSubtypes);
        curSubtypes[type] = e.target.innerText;
        this.setState({ curSubtypes });
    }


    return (
        <section className='container'>
            <PageHeader title="Navigation." />
            <section className='content'>
                <NavBar
                    types={types}
                    onClick={this.handleNavClick}
                    curType={this.state.curType}
                />
                <WebList
                    subtypeMap={subtypeMap}
                    curSubtypes={this.state.curSubtypes}
                    onSubtypeSwitch={this.handleSubtypeSwitch}
                    websites={websites}
                    listTypeRefs={this.listTypeRefs}
                />
            </section>
            <footer>
                <ToTopBtn />
            </footer>
        </section>
    );

}