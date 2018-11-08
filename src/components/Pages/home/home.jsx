import React, {Component} from 'react';
import './home.less';
import { DatePicker,Table } from 'antd';
import moment from 'moment';
import { Pagination } from 'antd';



const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const columns = [{
    title: '日期',
    dataIndex: 'day_time',
    align:'center',
    key:'1'
  }, {
    title: '曝光量',
    dataIndex: 'view',
    align:'center',
    key:'2'
  }, {
    title: '点击量',
    dataIndex: 'click',
    align:'center',
    key:'3'
  },{
    title: '点击率',
    dataIndex: 'click_rate',
    align:'center',
    key:'4'
  },{
    title: '点击均价',
    dataIndex: 'clickA_averagePrice',
    align:'center',
    key:'5'
  },{
    title: '总消耗',
    dataIndex: 'total_consume',
    align:'center',
    key:'6'
  }];

  // const data = [{
  //   key: '1',
  //   data: '2018-10-31',
  //   exposure: '21561',
  //   number: '325',
  //   rate:'45%',
  //   price:'58',
  //   consume:'875'
  // }, {
  //   key: '2',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // }, {
  //   key: '3',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '4',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '5',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '6',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '7',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '8',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '9',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // },{
  //   key: '10',
  //   data: '',
  //   exposure: '',
  //   number: '',
  //   rate:'',
  //   price:'',
  //   consume:''
  // }];

class Home extends Component {
    constructor(){
        super();
        this.state={
            page:1,  //页码数
            limit:10, //每页条数
            time:["2018/01/01", "2018/01/01"], //时间
            examine:'',  //广告正在审核数
            use:'',       //有效广告数
            price:'',    //余额
            launch:'',   //正常在投放广告数
            refuse:'',    //广告审核未通过数
            data:[]
        }
    }
    dataFetch=()=>{
        const {page,limit,time}=this.state
        let data = "start_time="+time[0]+"&end_time="+time[1]+"&page="+page+"&limit="+limit
        fetch('http://dev.api.onemedia.mobi/adv/index',{
            method:'POST',
            body:data,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            credentials: 'include'
        })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                if(data.code==2000){
                    this.setState({
                        examine:data.data.examine,
                        use:data.data.use,
                        price:data.data.price,
                        launch:data.data.launch,
                        refuse:data.data.refuse,
                        data:data.data.list
                    })
                }
            })
            .catch((ex)=>{
                console.log(ex)
            })
    }
    //页面初始化
    componentDidMount(){
        this.dataFetch()
    }
    render() {
        const {examine,use,price,launch,refuse,data}=this.state
        return (
            <div className="home">
               <div className="home-top">
                  <div className="circle1"></div> 
                  <span>数据统计</span> 
                  <button>新建广告</button>
               </div>
               <div className="home-middle">
                   <span>广告数
                       <div>{use}</div>
                   </span>
                   <span>投放中
                       <div>{launch}</div>
                   </span>
                   <span>未通过
                       <div>{refuse}</div>
                   </span>
                   <span>审核中
                       <div>{examine}</div>
                   </span>
                   <span>账户余额
                       <div>{price}</div>
                   </span>
               </div>
               <div className="home-bottom">
                  <div className="bottom_top">
                       <div className="circle2"></div> 
                       <span style={{lineHeight:"5vh",marginLeft:"32px"}}>表格统计</span>
                       <RangePicker
                           defaultValue={
                               [
                                   moment('2018/01/01', dateFormat),
                                   moment('2018/01/01', dateFormat)
                               ]
                           }
                           format={dateFormat}
                           onChange={(e,v)=>{
                               console.log(v)
                              this.setState({
                                  time:v
                              },()=>{
                                  this.dataFetch()
                              })
                           }}
                       />
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
                   <Pagination defaultCurrent={1} total={50}  style={{float:'right'}} onChange={(e)=>{
                       this.setState({
                           page:e
                       },()=>{
                           this.dataFetch()
                       })
                   }}/>
               </div>
            </div>
        );
    }
}

export default Home;