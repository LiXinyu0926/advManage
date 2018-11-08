import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './style/login.less';
import { Icon,Checkbox,Button } from 'antd';
import Logo from './images/logo.png'
import True from './images/true.png'
// import fetch from 'fetch-jsonp'
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_869227_n8mm6yeci3p.js', // 在 iconfont.cn 上生成
});


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            showUserWarn:'none',
            showPassWarn:'none',
            showWarn:'hidden',
            showUserTrue:'hidden',
            showPassTrue:'hidden',
            isRemPass: false,
            infos:{},
            loading: false
        }
    }
    //账号密码error警告

     isNulluser=(e)=>{
        if(e.target.value==""){
            this.setState({showUserWarn:''})
        }else{
            this.setState({showUserWarn:'none'})
        }

        if(this.userName.value=="admin"){
            this.setState({showUserTrue:''})
        }else(
            this.setState({showUserTrue:'hidden'})
        )
        
     };
    isNullpw=(e)=>{
        if(e.target.value==""){
            this.setState({ showPassWarn:''})
        }else{
            this.setState({ showPassWarn:'none'})
        }

        if(this.password.value === "123456"){
            this.setState({showPassTrue:''})
        }else(
            this.setState({showPassTrue:'hidden'})
        )
    };
    //记住密码
    login=()=>{
        this.setState({ loading: true });
        let data= "username="+this.userName.value+"&password="+this.password.value;
        fetch('http://dev.api.onemedia.mobi/user/login',{
            method:'POST',
            body:data,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            credentials: 'include'
        })
            .then(res=>{
                this.setState({ loading: false });
                return res.json()
            })
            .then(data=>{
                if(data.code === 20000){
                    if(this.state.isRemPass) {
                        localStorage.setItem("adpUserName", this.userName.value);
                        localStorage.setItem("adpPassword", this.password.value);
                    }else{
                        localStorage.removeItem("adpUserName");
                        localStorage.removeItem("adpPassword");
                    }
                    this.setState({
                        infos: data.data.info
                    },()=>{
                        let path={
                            pathname:`/home`,
                            state:this.state.infos
                        };
                        this.props.history.push(path);
                    })


                }else{
                    this.setState({ showWarn:' '});
                }

            })
            .catch((ex)=>{console.log(ex)});
        // if(this.userName.value === "admin") {
        //     if(this.password.value === "123456") {
        //         if(this.state.isRemPass) {
        //             localStorage.setItem("adpUserName", this.userName.value);
        //             localStorage.setItem("adpPassword", this.password.value);
        //         }else{
        //             localStorage.removeItem("adpUserName");
        //             localStorage.removeItem("adpPassword");
        //         }
        //          this.props.history.push(`/home`);
        //     }else{
        //         this.setState({ showWarn:' '});
        //     }
        // }else{
        //     this.setState({ showWarn:' '})
        // }

    };
    componentDidMount() {
        var userName = localStorage.getItem("adpUserName");
        var password = localStorage.getItem("adpPassword");
        if(userName&&password) {
            this.userName.value = userName;
            this.password.value = password;
            this.setState({
                isRemPass: true,
            })
        }
    }
    render() {
        let {isNulluser, isNullpw,login}=this;
        let {showUserWarn, showPassWarn,showWarn,showUserTrue,showPassTrue,isRemPass,loading}=this.state;
        return (
            <div className="box">
                <div className="transparent">
                    <div><img src={Logo} alt=""/></div>
                    <p>亦推广告主后台系统</p>
                </div>
                <div className="login">
                    <p style={{visibility:showWarn}}><MyIcon type="icon-jinggao1-copy" />用户名或密码错误</p>
                     <div className="userName">
                         <MyIcon type="icon-ren-copy" /><input type="text" ref={(e) => {this.userName = e}} style={{border:0,outline:"none",cursor: "pointer",width:"245px"} } placeholder="请输入用户名/邮箱" onBlur={isNulluser} /><span style={{visibility:showUserTrue}}><img
                         src={True} alt="" /></span>
                     </div>
                    <p style={{display:showUserWarn}}> <MyIcon type="icon-jinzhi-copy" />请输入账号</p>
                     <div className="password">
                         <MyIcon type="icon-mima-copy" /><input type="password" ref={(e) => {this.password = e}} style={{border:0,outline:"none",cursor: "pointer",width:"245px"}} placeholder="请输入密码" onBlur={isNullpw}/><span style={{visibility:showPassTrue}}><img
                         src={True} alt="" /></span>
                     </div>
                    <p style={{display:showPassWarn}}><MyIcon type="icon-jinzhi-copy" />请输入密码</p>
                    <Checkbox onClick={()=>{this.setState({isRemPass: !this.state.isRemPass})}} checked={isRemPass}>记住密码</Checkbox>
                    <a href="">忘记密码？</a>
                    <Button type="primary" onClick={login} loading={loading}>登录</Button>
                </div>
            </div>
            
        );
    }
}

export default Login;