/**
 * Created by liaoyf on 2017/5/17 0017.
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '../dist/css/shareui-sidebar-menu.css';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import SidebarMenu from '../dist/shareui-sidebar-menu';

let data = [
    {
        label: "表格",
        key: 1,
        iconClass: 'fa fa-table',
        children: [
            {
                label: '表格二级1'
            },
            {
                label: '表格二级2'
            }
        ]
    },
    {
        label: "表单",
        iconClass: 'fa fa-edit'
    },
    {
        label: '组件',
        iconClass: 'fa fa-list-alt',
        children: [
            {
                label: '按钮按钮按钮按钮按钮按钮按钮',
                iconClass: 'fa fa-bath'
            },
            {
                label: '导航栏',
                iconClass: 'fa fa-linode'
            },
            {
                label: '标签页',
                iconClass: 'fa fa-bank'
            },
            {
                label: '标签和徽标',
                iconClass: 'fa fa-cog',
                key: 'last'
            },
            {
                label: '警告框',
                iconClass: 'fa fa-cogs',
                children: [
                    {
                        label: '简单',
                        children: [
                            {
                                label: '警告框01',
                                children: [
                                    {
                                        label: '最后一级了最后一级了'
                                    }
                                ]
                            },
                            {
                                label: '警告框02'
                            }
                        ]
                    },
                    {
                        label: '动态'
                    }
                ]
            },
            {
                label: "表格组件",
                iconClass: 'fa fa-ravelry',
                children: [
                ]
            }
        ]
    },
    {
        label: '日历',
        iconClass: 'fa fa-calendar'
    },
    {
        label: '文字排版文字排版文字排版',
        iconClass: 'fa fa-text-width'
    },
    {
        label: 'UI组件',
        iconClass: 'fa fa-desktop'
    }
];

let handleClick = (data) => {
    console.info('点击的节点：', data);
};

let selectedId = 'last';

class Demo extends React.Component{
    onClick(e){

    }
    render(){
        return (
            <div>
                <div id="root">
                    <SidebarMenu data={data} handleClick={handleClick} selectedId={selectedId}/>
                </div>
                <div id="root">
                    <SidebarMenu data={data} outlook={false} handleClick={handleClick} innerMenu={true} selectedId={selectedId}/>
                </div>
            </div>
        );
    }
}

render(
    <Demo/>,
    document.getElementById('body')
);