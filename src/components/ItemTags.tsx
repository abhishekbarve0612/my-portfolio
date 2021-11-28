import React, { PureComponent } from 'react';

type Props = {
    tags: string[],
}

type States = {
    showAll: boolean;
}

class ItemTags extends PureComponent<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showAll: false,
        };
    }

    toggleShowAll = () => {
        const { showAll } = this.state;
        this.setState({
            showAll: !showAll,
        });
    }

    render() {
        const { tags } = this.props;
        const { showAll } = this.state;
        return (
        <div className="flex flex-row-reverse flex-wrap gap-2">
            
            {
                showAll && tags.length > 5 ? 
                (
                    <>
                    {tags.slice(0, showAll ? tags.length : Math.min(tags.length, 5)).map((tag, index) => (
                        <div key={index} className="text-xl bg-gray-700 text-white p-3 text-center">{tag}</div>
                    ))}
                    <div className="text-xl bg-gray-200 border-1 border-gray-900 text-gray-900 border-dashed p-3 text-center" onClick={this.toggleShowAll}>
                        show less ...
                    </div>
                    </>
                )
                : (
                    <>
                    {tags.length > 5 ? (
                        <div className="text-xl bg-gray-200 border-1 border-gray-900 text-gray-900 border-dashed p-3 text-center" onClick={this.toggleShowAll}>
                        ... more
                    </div>) : null
                    }
                    {tags.slice(0, showAll ? tags.length : Math.min(tags.length, 5)).map((tag, index) => (
                        <div key={index} className="text-xl bg-gray-700 text-white p-3 text-center">{tag}</div>
                    ))}
                    </>
                )
            }
        </div>
        )
    }
}

export default ItemTags;