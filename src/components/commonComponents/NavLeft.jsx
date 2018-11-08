import React, { Component } from 'react'
import { Menu,Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu=Menu.SubMenu;
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_869227_ix3397h9qoe.js', // 在 iconfont.cn 上生成
});

export default class NavLeft extends Component {
    constructor(){
        super();
        this.state = {
      }
    }

      render() {
        return (
          <div className="navLeft" style={{ width: 220,background:'#34485B',color:'#fff'}}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="1"> <Link to="/home">
                   <span><MyIcon type="icon-shouye1" />首页</span></Link>
                </Menu.Item>
                <SubMenu key="sub1" title={<Link to="/adv"><div style={{lineHeight:'40px'}}><MyIcon type="icon-ico_AD" /><span>广告</span></div></Link>}>
                 <Menu.Item key="2"><Link to="/advedit">
                   <span><MyIcon type="icon-liebiao" /><span>广告编辑</span></span></Link>
                </Menu.Item>
                <Menu.Item key="3"><Link to="/advnew">
                    <span><MyIcon type="icon-liebiao" /><span>新建广告</span></span></Link>
                </Menu.Item>
              </SubMenu>
             <Menu.Item key="4"> <Link to="/data">
                    <span><MyIcon type="icon-ico_data" /><span>数据</span></span></Link>
              </Menu.Item>
               <Menu.Item key="5"><Link to='/fin'>
                 <span><MyIcon type="icon-caiwu" /><span>财务</span></span></Link>
              </Menu.Item>
              
              <SubMenu key="sub2" title={<Link to='acc'> <div style={{lineHeight:'40px'}}><MyIcon type="icon-zhanghuffffffpx" /><span>账户信息</span></div></Link>}>
                <Menu.Item key="6"><Link to='security'>
                    <span><MyIcon type="icon-liebiao" /><span>密码安全</span></span></Link>
                </Menu.Item>
                <SubMenu key="sub3" title={<Link to='ct'><div style={{lineHeight:'40px'}}><MyIcon type="icon-liebiao" /><span>创意库</span></div></Link>}>
                  <Menu.Item key="7"><Link to='/ctact'>
                      <span>新建互动创意包</span></Link>
                  </Menu.Item>
                  <Menu.Item key="8"><Link to='/ctshow'>
                      <span>新建展示创意包</span></Link>
                  </Menu.Item>
                  <Menu.Item key="9"> <Link to='ctsub'>
                        <span>重新提交审核</span></Link>
                    </Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
        );
      }
    }
    

