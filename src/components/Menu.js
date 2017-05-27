/**
 * Created by liaoyf on 2017/5/17 0017.
 */
import React from 'react';

import Item from './Item';

class Menu extends React.Component{
    constructor(){
        super(...arguments);

        this.state = {
        };
    }
    render(){
        let { data } = this.props;
        return (
            <ul className="ui-sidebar-menu">
                {data.map((item, index) => {
                    return <Item key={index} {...this.props} itemData={item}/>
                })}
            </ul>
        );
    }
}

export default Menu;