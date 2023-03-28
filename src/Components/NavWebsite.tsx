import * as React from 'react';
import PageHeader from './PageHeader';
import NavBar from './NavBar';
import WebList from './WebList';
import ToTopBtn from './ToTopBtn';
import { websites, types, subtypeMap, firstSubtypes } from '../WebsitesData';


const createRefs = (types: string[]) => {
    const typeNames = [...types];
    const refs = new Map<string, any>();
    typeNames.forEach((t) => {
        refs.set(t, React.createRef());
    });
    return refs;
}

class NavWebsite extends React.Component<any, any> {
    listTypeRefs: Record<string, any>;

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

    getCurrentTypeNode = (typeName: string) => {
        return this.listTypeRefs.get(typeName).current;
    }

    handleNavClick(e: React.MouseEvent<HTMLElement>) {
        const typeName = (e.target as HTMLElement).innerText;
        const currentTypeNode = this.getCurrentTypeNode(typeName);
        currentTypeNode.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        this.setState({ curType: typeName });
    }

    handleSubtypeSwitch(type: string, e: React.MouseEvent<HTMLElement>) {
        let curSubtypes = {};
        Object.assign(curSubtypes, this.state.curSubtypes);
        curSubtypes[type] = (e.target as HTMLElement).innerText;
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