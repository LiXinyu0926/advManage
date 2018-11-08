import React, {Component} from 'react';
import './finance.less';
import { Icon,Row,Col,Radio,DatePicker,Button,Table } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
const dateFormat = 'YYYY/MM/DD';
const columns = [{
    title: '日期',
    dataIndex: 'data',
    align:'center'
  }, {
    title: '客户名称',
    dataIndex: 'exposure',
    align:'center'
  }, {
    title: '收入（元）',
    dataIndex: 'number',
    align:'center'
  },{
    title: '支出（元）',
    dataIndex: 'rate',
    align:'center'
  },{
    title: '备注',
    className:'remark',
    dataIndex: 'price',
    align:'center'
  }];

  const data = [{
    key: '1',
    data: '2018-10-31',
    exposure: '21561',
    number: '325',
    rate:'45%',
    price:'58',
    consume:'875'
  }, {
    key: '2',
    data: '',
    exposure: '',
    number: '',
    rate:'',
    price:'',
    consume:''
  }, {
    key: '3',
    data: '',
    exposure: '',
    number: '',
    rate:'',
    price:'',
    consume:''
  },{
    key: '4',
    data: '',
    exposure: '',
    number: '',
    rate:'',
    price:'',
    consume:''
  },{
    key: '5',
    data: '',
    exposure: '',
    number: '',
    rate:'',
    price:'',
    consume:''
  }];

class Finance extends Component {
    render() {
        return (
            <div className="finance">
                <Row className="fin-top" gutter={24}>
                    <Col span={6}>
                        <div className="fin-top-left">
                          <i className="dollar">&#xe837;</i>
                          <p>账户余额（元）：355.9</p>
                          <p>今日消耗（元）：10</p>
                        </div>
                    </Col>
                    <Col span={18} >
                        <div className="fin-top-right">
                         <p className="font">帐号充值流程</p>
                         <div className="pic">
                         <i className="number">&#xe838;</i><span>联系顾问</span>
                         <span className="omit"><i className="dian">&#xe83c;</i><i className="dian">&#xe83c;</i><i className="dian">&#xe83c;</i></span>
                         <i className="number">&#xe839;</i><span>汇款到指定银行账户 </span>
                         <span className="omit"><i className="dian">&#xe83c;</i><i className="dian">&#xe83c;</i><i className="dian">&#xe83c;</i></span>
                         <i className="number">&#xe83a;</i><span>联系顾问确认汇款</span> 
                         <span className="omit"><i className="dian">&#xe83c;</i><i className="dian">&#xe83c;</i><i className="dian">&#xe83c;</i></span>
                         <i className="number">&#xe83b;</i><span>账户充值</span>
                         </div>
                        </div>
                    </Col>
                </Row>
                <Row className="font-bottom">
                <div className="font-bottom-top">
                     <i className="circle">&#xe836;</i>
                     <span>财务记录</span>  
                </div> 
                <div className="font-bottom-middle">
                <RadioGroup className="choose" name="radiogroup" defaultValue={1}>
                    <Radio value={1}>全部</Radio>
                    <Radio value={2}>收入</Radio>
                    <Radio value={3}>支出</Radio>
                </RadioGroup> 
                <RangePicker
                   defaultValue={[moment('2015/01/01', dateFormat),
                   moment('2015/01/01', dateFormat)]}
                   format={dateFormat}/>
                 <Button type="primary">检索</Button>  
                </div>  
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={{
                      pageSize:10,
                    }}
                    style={{padding:'10px'}}
                  />
                </Row>
            </div>
        );
    }
}

export default Finance;