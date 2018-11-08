import React, {Component} from 'react';
import './data.less';
import { DatePicker,Icon,Select,Input,Table,Button } from 'antd';
import moment from 'moment';

const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_869227_oer8sdkv7i.js', // 在 iconfont.cn 上生成
});
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
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
    title: 'CPC ',
    dataIndex: 'CPC',
    align:'center'
  },{
    title: '注册量 ',
    dataIndex: 'registernumber',
    align:'center'
  },{
    title: '注册率 ',
    dataIndex: 'registerrate',
    align:'center'
  },{
    title: 'CPA ',
    dataIndex: 'CPA',
    align:'center'
  },{
    title: '总消耗(元)',
    dataIndex: 'consume',
    align:'center'
  },{
    title: '时间',
    dataIndex: 'time',
    align:'center'
  },];

  const data = [{
    key: '1',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  }, {
    key: '2',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  }, {
    key: '3',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '4',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '5',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '6',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '7',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '8',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '9',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  },{
    key: '10',
    planID: '2018-10-31',
    name: '21561',
    type: '325',
    exposure:'45%',
    clicknumber:'58',
    clickrate:'875',
    CPC:'ds',
    registernumber:'',
    registerrate:'',
    consume:'',
    time:''
  }];

class Data extends Component {
    constructor(){
        super();
        this.state={
            todayTime:''
        }
    }

    handleChange=(value)=>{
        console.log(`selected ${value}`);
      };

    handletoday=()=>{
       var todayTime=moment();
       this.setState({
         todayTime
       })
    }

    render() {
        let {handleChange,handletoday}=this;
        let {todayTime}=this.state;
        return (
            <div className="data">
                <div className="data_top">
                     <p>计划ID</p>
                     <Input placeholder="请输入计划ID" style={{ width: 175,marginRight:'35px' }}/>
                     <p>广告计划名称</p>
                    <Input placeholder="请输入广告计划名称" style={{ width: 175,marginRight:'35px' }} />
                     <p>广告类型</p>
                        <Select defaultValue="all" style={{ width: 175,marginRight:'35px' }} onChange={handleChange}>
                            <Option value="all">全部广告</Option>
                            <Option value="interact">互动广告</Option>
                            <Option value="show">展示广告</Option>
                        </Select>
                    <div className="function-button">
                        <Button type="primary" style={{width:110}}>查询</Button>
                        <Button className="reset" type="primary" style={{width:110}}>重置</Button>
                    </div>
                </div>
                <div className="data_bottom">
                <div className="data_bottom_head">

                    <MyIcon type="icon-yuandianxiaored" className="anticon-red" />
                    <p>所有数据</p>
                     <RangePicker
                    defaultValue={[moment('2018/01/01', dateFormat), moment('2018/01/01', dateFormat)]}
                    format={dateFormat}
                    // value={todayTime}
                    // onchange={(e,a)=>{
                    //    this.setState({
                    //      todayTime:e
                    //    })
                    // }}
                    showToday
                     />
                    <Button className="today" type="primary" onclick={handletoday} style={{ backgroundColor:'#E34E42',borderColor:'#E34E42',width:94}}>今天</Button>
                    <Button className="button-dowload" type="primary"  icon='download' style={{ backgroundColor:'#E34E42',borderColor:'#E34E42'}} />
                </div>
                    <div className="data_bottom_table">
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        pagination={{
                        pageSize:6,
                        }}
                        style={{padding:'10px'}}
                    />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Data;