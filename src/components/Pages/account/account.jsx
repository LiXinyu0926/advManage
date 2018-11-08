import React, {Component} from 'react';
import './account.less'
import Kun from '../../../images/cxk.jpg'

class Account extends Component {
    constructor(){
        super();
        this.state={
            showPicture:'none'
        }
    }
        
    showModal = () => {
        this.setState({
            showPicture:''
        });
      }
    
      handleCancel = (e) => {
        this.setState({
            showPicture:'none'
        });
      }

    render() {
        let {showModal,handleCancel}=this;
        let {showPicture}=this.state;
        return (
            <div className="account">
                <div className="account-top">
                {/* 点击弹出的大图 */}
                     <div className="bigBuinessLicence">
                         <i class="x" style={{display:showPicture}} onClick={handleCancel}>&#xe608;</i>
                         <img src={Kun} style={{display:showPicture}}/>
                     </div>
                    <div className="title">
                    <i class="circle">&#xe836;</i>
                    <span>公司信息</span>
                    </div>
                    <div className="account-top-content">
                         <p>公司名称：</p>
                         <p>营业执照注册号：</p>
                         <p>公司地址：浙江省杭州市**************</p>
                         <p>公司网址：http://www.onemedia.com</p>
                         <p>客户行业：金融</p>
                         <div className="businessLicence"  onClick={showModal}>
                           <i class="big" onClick={showModal}>&#xe63d;</i>
                           <img src="" />
                         </div>
                    </div>
                   
                </div>
                <div className="account-bottom">
                      <div className="title">
                         <i class="circle">&#xe836;</i>
                         <span>联系人信息</span>
                      </div>
                      <div className="account-bottom-content">
                         <p>客户行业：金融</p>
                         <p>邮箱： 738273263636@163.com</p>
                         <p>手机号码： 13245678909</p>
                         <p>QQ号码： 232325678909</p>
                         <p>微信号码： yisheng5678909</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;