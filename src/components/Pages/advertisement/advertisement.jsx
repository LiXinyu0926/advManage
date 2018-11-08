import React, {Component} from 'react';
import './advertisement.less';
import { Menu,Dropdown,message,Row,Col,Input,Select,DatePicker,Button,Icon,Table } from 'antd';
import moment from 'moment';

function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
}
const Option = Select.Option;
//批量操作下拉选项
const SubMenu = Menu.SubMenu;
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
    </Menu>
);
//日历
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
//广告表格
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
const columns = [{
    title: '计划ID',
    dataIndex: 'planID',
    align:'center'
}, {
    title: '广告计划名称',
    dataIndex: 'name',
    align:'center'
}, {
    title: '广告类型',
    dataIndex: 'type',
    align:'center'
},{
    title: '曝光量',
    dataIndex: 'exposure',
    align:'center'
},{
    title: '点击量 ',
    dataIndex: 'clicknumber',
    align:'center'
},{
    title: '点击率',
    dataIndex: 'clickrate',
    align:'center'
},{
    title: '消耗（元）',
    dataIndex: 'CPC',
    align:'center'
},{
    title: '出价（元/次）',
    dataIndex: 'registernumber',
    align:'center'
},{
    title: '日预算（元/天）',
    dataIndex: 'registerrate',
    align:'center'
},{
    title: '状态',
    dataIndex: 'CPA',
    align:'center'
},{
    title: '操作时间',
    dataIndex: 'consume',
    align:'center'
},{
    title: '操作',
    dataIndex: 'time',
    align:'center'
},];


class Advertisement extends Component {

    render() {
        return (
            <div className="advertisement">
                <div className="adv-top">
                    <Row className="top-input">
                        <Col span={6}>
                            <div className="title">计划ID</div>
                            <Input placeholder="请输入计划ID"
                                   style={{width:175}}
                            />
                        </Col>
                        <Col span={6}>
                            <div className="title">广告计划名称</div>
                            <Input placeholder="请输入广告计划名称"
                                   style={{width:175}}
                            />
                        </Col>
                        <Col span={6}>
                            <div className="title">广告类型</div>
                            <Select defaultValue="all">
                                <Option value="all">全部广告</Option>
                                <Option value="interact">互动广告</Option>
                                <Option value="show">展示广告</Option>
                            </Select>
                        </Col>
                        <Col span={6}>
                            <div className="title">广告状态</div>
                            <Select defaultValue="overall">
                                <Option value="overall">全部</Option>
                                <Option value="interact">有效</Option>
                                <Option value="pause">暂停</Option>
                                <Option value="open">打开</Option>
                                <Option value="remaining">余额不足</Option>
                                <Option value="nodate">非投放日期</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row className="top-button">
                        <Button type="primary"
                                style={{width:'110px',marginRight:'30px'}}
                        >
                            查询
                        </Button>
                        <Button type="primary"
                                style={{width:'110px',marginRight:'30px'}}
                        >
                            重置
                        </Button>
                    </Row>

                </div>
                <div className="adv-bottom">
                   <div className="bottom-title">
                       <i className="circle">&#xe836;</i>
                       <span className="title-font">所有广告</span>
                       <Button className="new-built" type="primary">新建广告</Button>
                       {/*批量操作按钮*/}
                       <Dropdown overlay={menu} trigger={["click"]}  >
                           <Button style={{ marginLeft: 8 }}>
                               批量操作 <Icon type="down" />
                           </Button>
                       </Dropdown>
                       {/*日历相关*/}
                       <Button className="today" type="primary" >今天</Button>
                       <RangePicker
                           defaultValue={[moment('2018/01/01', dateFormat), moment('2018/01/01', dateFormat)]}
                           format={dateFormat}
                           showToday
                       />
                   </div>
                    <div className="bottom-table">
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}

                            bordered
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Advertisement;