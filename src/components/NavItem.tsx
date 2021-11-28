import React, { PureComponent } from 'react';

type Props = {
    firstLetter: string;
    remainingPart: string;
    extraPart: string;
}

class NavItem extends PureComponent<Props> {

    render() {
        const { firstLetter, extraPart, remainingPart } = this.props;
        return (
            <div className="navbar-item flex-2 p-3 mx-5">
                    <span className="underline text-5xl uppercase">{firstLetter}</span>
                    <span className="text-2xl uppercase">{remainingPart}</span>
                    <span className="text-sm border-double rounded-full p-2 m-1 border-2 border-gray-800"> {extraPart}</span>
            </div>
        )
    }
}

export default NavItem;