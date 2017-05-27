/**
 * Created by liaoyf on 2017/5/17 0017.
 */
import './index.scss';
import React from 'react';

import Menu from './components/Menu';
import {
    replaceObjInArray,
    removeFieldInArray,
    removeSiblingField,
    selectFirst,
    selectById
} from './utils/array';

class SidebarMenu extends React.Component{
    constructor(){
        super(...arguments);
        let { data, selectedId, fieldName } = this.props;
        let { childrenField } = fieldName;
        //添加collapse以及selected
        let newData = Object.assign([], data);
        //去掉空children字段
        let loop = (data) => {
            data.forEach(item => {
                if(item[childrenField] && item[childrenField].length === 0){
                    delete item[childrenField];
                }
                if(item[childrenField] && item[childrenField].length > 0){
                    loop(item[childrenField]);
                }
            })
        };
        loop(newData);
        if(selectedId === ''){
            //选中第一个
            selectFirst(newData, fieldName);
        }else{
            selectById(newData, fieldName, selectedId);
        }
        this.state = {
            data: newData
        };
    }
    changeData(itemData, isOutlook){
        let { fieldName, handleClick } = this.props;
        let { childrenField } = fieldName;
        let { data } = this.state;
        let newData = Object.assign([], data);
        console.info('0:', newData);
        handleClick(itemData);
        //如果是父菜单，则添加collapse：true字段，否则，添加selected: true字段
        if(itemData[childrenField] && itemData[childrenField]){
            if(isOutlook){
                //去掉同级的collapse字段
                removeSiblingField(newData, fieldName, 'collapse', itemData);
                console.info('1:', newData, this.props.data);
            }
            replaceObjInArray(newData, fieldName, itemData, Object.assign({}, itemData, {
                collapse: !itemData.collapse
            }));
            console.info('2:', this.props.data);
        }else{
            if(isOutlook){
                //去掉其他的selected
                removeSiblingField(newData, fieldName, 'collapse', itemData);
            }
            console.info('3:', this.props.data);
            removeFieldInArray(newData, fieldName, 'selected', itemData);
            console.info('4:', this.props.data);
            if(!itemData.selected){
                replaceObjInArray(newData, fieldName, itemData, Object.assign({}, itemData, {
                    selected: true
                }));
            }
            console.info('5:', this.props.data);
        }
        this.setState({
            data: newData
        });
    }
    render(){
        let { data } = this.state;
        let { innerMenu } = this.props;
        return (
            <div className={"ui-sidebar-menu-box" + (innerMenu ? ' innerMenu' : '')}>
                <Menu {...this.props} data={data} level={innerMenu ? 2 : 0} changeData={this.changeData.bind(this)}/>
            </div>
        );
    }
}

SidebarMenu.defaultProps = {
    fieldName: {
        labelField: "label",
        childrenField: "children",
        idField: "key",
        openTypeField: "openType"
    },
    handleClick(){

    },
    data: [],
    innerMenu: false,
    level: 0,
    outlook: true
};

export default SidebarMenu;