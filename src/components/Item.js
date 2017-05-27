/**
 * Created by liaoyf on 2017/5/17 0017.
 */
import React from 'react';

import Menu from './Menu';

class Item extends React.Component{
    constructor(){
        super(...arguments);

        let { itemData } = this.props;
        this.state = {
            collapse: !!itemData.collapse,
            active: !!itemData.selected
        };
    }
    componentDidMount(){
        let { itemData, handleClick, fieldName } = this.props;
        let { childrenField } = fieldName;
        let { collapse } = this.state;

        //默认选中时触发点击事件
        if(itemData.selected){
            handleClick(itemData);
        }
    }
    componentWillReceiveProps(nextProps){
        let { itemData } = this.props;

        this.setState({
            collapse: !!nextProps.itemData.collapse,
            active: !!nextProps.itemData.selected
        });
    }
    clickItem(e){
        e.preventDefault();
        let { collapse } = this.state;
        let { handleClick, itemData, changeData, fieldName, outlook } = this.props;
        let { childrenField } = fieldName;

        changeData(itemData, outlook);
    }
    render(){
        let { collapse, active } = this.state;
        let { itemData, changeData, handleClick, selectedId, fieldName, level, innerMenu } = this.props;
        let { childrenField, openTypeField } = fieldName;
        let icon = null;
        let iconAfter = null;
        let hasChildren = itemData[childrenField] && itemData[childrenField].length > 0;
        if(innerMenu){
            if(level === 2){
                icon = <i className="menu-icon fa fa-circle-o"/>
            }else{
                if(itemData[childrenField] && itemData[childrenField].length > 0){
                    icon = <i className="menu-icon icon-caret fa fa-caret-right"/>
                }
            }
        }else{
            if(level === 0 || level === 1){
                if(itemData.iconClass){
                    icon = <i className={'menu-icon ' + itemData.iconClass}/>;
                }else{
                    icon = itemData.icon ? itemData.icon : <i className="menu-icon fa fa-circle"/>;
                }
            }else{
                icon = <i className="menu-icon fa fa-circle"/>;
            }
        }
        if(innerMenu){
            if(level === 2 && hasChildren){
                iconAfter = <i className="ui-sidebar-menu-angle fa fa-angle-right"/>
            }
        }else{
            if(hasChildren){
                iconAfter = <i className="ui-sidebar-menu-angle fa fa-angle-right"/>;
            }
        }
        return (
            <li className={"menu-level-" + level + (hasChildren ? ' hasChildren' : '')
            + (collapse ? ' li-collapse' : '') + (active ? ' active' : '')}>
                <a href="javascript: void(0)" title={itemData.label} onClick={this.clickItem.bind(this)}>
                    {icon}
                    <div className="label-box">
                        <span>{itemData.label}</span>
                    </div>
                    {iconAfter}
                </a>
                {itemData[childrenField] && itemData[childrenField].length > 0 &&
                <Menu {...this.props} data={itemData[childrenField] || []}
                       level={level + 1}/>}
            </li>
        );
    }
}

export default Item;