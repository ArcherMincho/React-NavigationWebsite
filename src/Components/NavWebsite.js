import React from 'react';
import PageHeader from './PageHeader';
import NavBar from './NavBar';
import WebList from './WebList';
import ToTopBtn from './ToTopBtn';
import { websites, types, subtypeMap, firstSubtypes } from '../WebsitesData';


function createRefs(types) {
    const typeNames = types;
    const refs = new Map();
    typeNames.forEach((t) => {
        refs.set(t, React.createRef());
    });
    return refs;
}


class NavWebsite extends React.Component {

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

    render() {
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
}

export default NavWebsite;