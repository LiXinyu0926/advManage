import React, {Component} from 'react';
import './passwordSecurity.less';
import { Input,Button } from 'antd';

class PasswordSecurity extends Component {
      constructor(){
        super();
        this.state={
            firstPassword:'',
            lastPassword:'',
            code:'',
            samePWD: false,
            viewPWD: false,
            regExpPWD: false, //显示对号
            count:60,
            liked:true,
            reGain:true,
            showCodeTrue:false,
            showCodeError:false,
            showShadow:'none'
        }
      }
      //获取用户输入密码
      handleChange=(e, type)=>{
          let {firstPassword, lastPassword,code} = this.state;
          switch (type) {
              case 'first':
               firstPassword=e.target.value;
                break;
                case 'last':
             lastPassword=e.target.value;
                break;
              case 'code':
                  code=e.target.value;
          }
          this.setState({firstPassword,lastPassword,code});
      };
      //密码验证
      handleConfirm = (e, type) => {
        const reg = /^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![0-9\W]+$)(?![a-z\W]+$)(?![a-zA-Z]+$)(?![A-Z\W]+$)[a-zA-Z0-9\W_]{6,16}$/;
        const { firstPassword, lastPassword } = this.state;
        switch (type) {
            case 'first':
                if (firstPassword !== "") {
                    this.setState({
                        regExpPWD: reg.test(firstPassword),
                        viewPWD: reg.test(firstPassword)
                    })
                }
                break;
            case 'last':
                if (firstPassword !== "" && lastPassword !== "") {
                    if (firstPassword == lastPassword) {
                        this.setState({
                            regExpPWD: reg.test(firstPassword)
                        });
                        if (reg.test(firstPassword)) {
                            this.setState({
                                samePWD: false,
                                viewPWD: true
                            })
                        }
                    } else {
                        if (reg.test(firstPassword)) {
                            this.setState({
                                samePWD: true,
                                viewPWD: false,
                                regExpPWD: false
                            })
                        }
                    }
                }
                break;
        }
      };
      //获取验证码
      timeChange=()=>{
          let {liked,count}=this.state;
          //liked is false 的时候，不允许再点击
          this.setState({liked:false});
          if(!liked){
              return ;
          }
          const timer=setInterval(()=>{
             this.setState({count:(count--)},()=>{
                 if(count===0){
                     clearInterval(timer);
                     this.setState({liked:true,count:60,reGain:false})
                 }
             })
          },1000);
          let data={
              emil:"lxy474315375@163.com"
          };
          fetch('/user/email-send-code',{
              method:'POST',
              data:JSON.stringify(data)
          }).then((res)=>{
              return res.json()
          }).then((data)=>{

          }).catch((ex)=>{
              console.log(ex)
          })
      };
      //验证码匹配
      codeCheck=(e)=>{

      };
      //点击确定关闭遮罩层
      closeShadow=()=>{
          this.setState({showShadow: 'none'})
      };
      //点击确定提交修改的密码并弹出遮罩层
      submitPwd=()=>{
          this.setState({showShadow:''})
      };
      //取消并清空
      cancelPwd=()=>{
           this.setState({
               firstPassword:'',
               lastPassword:'',
               code:''
           })
      };
      render(){
        let { handleConfirm,handleChange,timeChange,codeCheck,closeShadow,submitPwd,cancelPwd}=this;
        let { samePWD, viewPWD, regExpPWD,
            firstPassword, lastPassword,
            count,liked,reGain,showCodeTrue,showCodeError,
            showShadow
            }=this.state;
        return (
            <div className="passwordSecurity">
                <div className="passwordSecurity-top">
                <i class="circle">&#xe836;</i>
                <span>修改密码</span>
                </div>
                <div className="passwordSecurity-bottom">
                   <p style={{margin:'0 0 20px 20px',fontSize:'14px'}}>邮箱：738273263636@163.com</p>
                   <div className="newPassword">
                       <i class="start">&#xe66d;</i>
                       <span className="name">新密码</span>
                       <Input
                           ref={(e)=>{this.newpassword=e}}
                           size="small" placeholder="请设置新密码" 
                           style={{width:'220px',marginLeft:'15px'}}
                           onChange={ (e)=>handleChange(e,'first') }
                           onBlur={ (e)=>{handleConfirm(e,'first')} }
                           value={this.state.firstPassword}
                       />
                       {/*错误警告*/}
                       {regExpPWD?
                           <i class="true" >&#xe645;</i>
                           :
                           firstPassword !== "" ?
                               !samePWD ?
                                   <span className="errorMessage">
                                        <i class="warn">&#xe64f;</i>密码格式错误
                            </span>
                                   : null
                               : null
                       }
                       {/*错误警告*/}
                       {samePWD ?
                           <span className="errorMessage">
                                <i class="warn">&#xe64f;</i>两次密码不一致
                       </span>
                           : null
                       }
                   </div>
                   <div className="confirmPassword">
                       <i class="start">&#xe66d;</i>
                       <span className="name">确定密码</span>
                       <Input
                           ref={(e)=>{this.confirmpassword=e}}
                           size="small" placeholder="请重复新密码" 
                           style={{width:'220px'}}
                           onChange={e =>handleChange(e,'last')}
                           onBlur={e => handleConfirm(e, 'last')}
                           value={this.state.lastPassword}
                         />
                       {/*错误警告*/}
                       {samePWD ?
                           <span className="errorMessage">
                                <i class="warn">&#xe64f;</i>两次密码不一致
                       </span>
                           : null
                       }
                       {/*对号*/}
                       {viewPWD ?
                           lastPassword === firstPassword ?
                               <i class="true">&#xe645;</i>
                               : null
                           : null
                       }
                   </div>
                   <div className="code">
                       <i class="start">&#xe66d;</i>
                       <span className="name">验证码</span>
                       <Input
                           ref={(e)=>{this.checkcode=e}}
                           size="small"
                           placeholder="请输入验证码"
                           style={{width:'115px',marginLeft:'13px'}}
                           onBlur={e=>codeCheck(e)}
                           onChange={e =>handleChange(e,'code')}
                           value={this.state.code}
                       />
                       <Button
                           type="primary"
                           onClick={timeChange}
                           ghost={!liked}
                           style={{width:'90px',height:'26px',padding:'0 5px',marginLeft:'15px'}}
                       >
                           {liked?<span className="code-font">{reGain?"获取验证码":"重新获取"}</span>:<span className="code-font">{count+'s'}</span>}
                       </Button>
                         {/* 对号图标 */}
                         <i class={showCodeTrue?"true":"hide"}>&#xe645;</i>
                         {/* 错误图标和提示 */}
                         <span className={showCodeError?"errorMessage":"hide"}>
                             <i class="warn">&#xe64f;</i>
                             验证码错误
                         </span>
                   </div>
                   <div className="controlButton">
                       <Button
                           type="primary"
                           className="button-confirm"
                           style={{width:105}}
                           onClick={submitPwd}
                       >
                           确认
                       </Button>
                       <Button
                           type="primary"
                           ghost
                           style={{width:105,marginLeft:'50px'}}
                           onClick={cancelPwd}
                       >
                           取消
                       </Button>
                   </div>
                </div>  
                <div className="passwordRule">
                    <p>密码规则:</p>
                    <p>1.密码长度6-16位</p>
                    <p>2.须同时包含大写字母、小写字母、数字、特殊字符中的任意三种</p>
                </div>
                <div className="pwd-shadow" style={{display:showShadow}}>
                    <div className="shadow-content">
                        <i class="shadow">&#xe770;</i>
                        <p>修改成功</p>
                        <button onClick={closeShadow}>确认</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PasswordSecurity;