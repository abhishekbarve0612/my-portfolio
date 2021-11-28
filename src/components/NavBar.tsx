import React, { PureComponent } from 'react';
import NavItem from './NavItem';

class NavBar extends PureComponent<{}> {

    render() {
        return (
            <div className="container flex justify-center flex-row">
                <NavItem firstLetter="A" remainingPart="bout" extraPart="Me" />
                <NavItem firstLetter="B" remainingPart="est Works" extraPart="of Me" />
                <NavItem firstLetter="H" remainingPart="ire" extraPart="Me" />
                <NavItem firstLetter="I" remainingPart="nsights" extraPart="from Me" />
            </div>
        )
    }
}

export default NavBar;