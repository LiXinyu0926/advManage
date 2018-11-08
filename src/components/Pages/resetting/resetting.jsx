import React, {Component} from 'react';
import Logo from "../../../images/logo.png";
import './resetting.less';
import { Input,Button } from 'antd';

class Resetting extends Component {
    constructor(){
        super();
        this.state={
            firstPassword:'',
            lastPassword:'',
            samePWD: false,
            viewPWD: false,
            regExpPWD: false, //显示对号
            showShadow:'none'
        }
    };
    //判断旧密码正确与否
    contrastOldPwd=()=>{

    };
    //获取用户输入密码
    handleChange=(e, type)=>{
        let {firstPassword, lastPassword} = this.state;
        switch (type) {
            case 'first':
                firstPassword=e.target.value;
                break;
            case 'last':
                lastPassword=e.target.value;
                break;
        }
        this.setState({firstPassword,lastPassword});
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

    };
    render() {
        let { handleConfirm,handleChange,submitPwd,cancelPwd,closeShadow,contrastOldPwd }=this;
        let { samePWD,viewPWD,regExpPWD,firstPassword,lastPassword,showShadow }=this.state;
        return (
            <div className="resetting">
                <div className="resetting-top">
                    <img src={Logo} alt="" />
                    <span>重置密码</span>
                </div>
                <div className="resetting-center">
                    <div className="center-main">
                        <div className="main-write">
                       <p className="remark">为了您的账户安全，首次登录的时候请修改密码</p>
                        <div className="oldPassword">
                            <div className="passwordBd">
                                <i className="start">&#xe66d;</i>
                                <span className="name">旧密码</span>
                            </div>
                            <Input
                                size="small" placeholder="请输入旧密码"
                                style={{width: '220px', marginLeft: '15px'}}
                                onBlur={contrastOldPwd}
                            />
                            <i className={contrastOldPwd()?"true":"hide"}>&#xe645;</i>
                            <span className={contrastOldPwd()?"errorMessage":"hide"}>
                                <i className="warn">&#xe64f;</i>密码错误
                            </span>
                        </div>
                        <div className="newPassword">
                            <div className="passwordBd">
                                <i className="start">&#xe66d;</i>
                                <span className="name">新密码</span>
                            </div>
                            <Input
                                // ref={(e) => {
                                //     this.newpassword = e
                                // }}
                                size="small" placeholder="请设置新密码"
                                style={{width: '220px', marginLeft: '15px'}}
                                onChange={(e) => handleChange(e, 'first')}
                                onBlur={(e) => {
                                    handleConfirm(e, 'first')
                                }}
                            />
                            {/*错误警告*/}
                            {regExpPWD ?
                                <i className="true">&#xe645;</i>
                                :
                                firstPassword !== "" ?
                                    !samePWD ?
                                        <span className="errorMessage">
                                        <i className="warn">&#xe64f;</i>密码格式错误
                                        </span>
                                        : null
                                    : null
                            }
                            {/*错误警告*/}
                            {samePWD ?
                                <span className="errorMessage">
                                <i className="warn">&#xe64f;</i>两次密码不一致
                                </span>
                                : null
                            }
                        </div>
                        <div className="confirmPassword">
                            <div className="passwordBd">
                                <i className="start">&#xe66d;</i>
                                <span className="name">确定密码</span>
                            </div>
                            <Input
                                size="small" placeholder="请重复新密码"
                                style={{width: '220px',marginLeft:'15px'}}
                                onChange={e => handleChange(e, 'last')}
                                onBlur={e => handleConfirm(e, 'last')}
                            />
                            {/*错误警告*/}
                            {samePWD ?
                                <span className="errorMessage">
                                <i className="warn">&#xe64f;</i>两次密码不一致
                                </span>
                                : null
                            }
                            {/*对号*/}
                            {viewPWD ?
                                lastPassword === firstPassword ?
                                    <i className="true">&#xe645;</i>
                                    : null
                                : null
                            }
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
                        <div className="passwordRule">
                            <p>密码规则:</p>
                            <p>1.密码长度6-16位</p>
                            <p>2.须同时包含大写字母、小写字母、数字、特殊字符中的任意三种</p>
                        </div>
                        </div>
                    </div>
                    <div className="pwd-shadow" style={{display: showShadow}}>
                        <div className="shadow-content">
                            <i className="shadow">&#xe770;</i>
                            <p>修改成功</p>
                            <button onClick={closeShadow}>确认</button>
                        </div>
                    </div>
                </div>
                <div className="resetting-bottom">
                    Copyright&copy;2018  浙ICP备18034406号  亦盛传媒  版权所有
                </div>
            </div>
        );
    }
}

export default Resetting;