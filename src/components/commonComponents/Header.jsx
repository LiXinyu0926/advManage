import React, { Component } from 'react';
import  Icon from '../../images/icon01.png';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            // userName:this.props.info.username
        }
    }
    // componentDidMount(){
        // const {info}=this.props
        // this.setState=({
        //     userName:info.username
        // })
        // console.log("1",this)
        //
        // this.getWeatherAPIData();
    // }
    clearLocalstorage=()=>{
        localStorage.removeItem("adpUserName");
        localStorage.removeItem("adpPassword");
    }
    render() {
        let {clearLocalstorage}=this;
        return (
            <div className="header">
                    <span className="logo">
                          <span><img src={Icon} alt="" /></span>
                          <span>广告主后台系统</span>
                    </span>
                    <span className="right">
                        {/*{this.state.userName}*/}
                    <Link to='/'><a href="/#" onClick={clearLocalstorage}>退出</a></Link>
                    </span>
            </div>
        )
    }
}
