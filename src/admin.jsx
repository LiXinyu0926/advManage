import React from 'react'
import { Route, Switch} from 'react-router-dom';
import './style/common.less'
import Header from './components/commonComponents/Header.jsx'
import Footer from './components/commonComponents/Footer.jsx'
import NavLeft from './components/commonComponents/NavLeft.jsx'
import Advertisement from './components/Pages/advertisement/advertisement';
import AdvertisementEdit from './components/Pages/advertisementEdit/advertisementEdit';
import NewAdvertisement from './components/Pages/newAdvertisement/newAdvertisement';
import Data from './components/Pages/data/data';
import Finance from './components/Pages/finance/finance';
import Account from './components/Pages/account/account';
import PasswordSecurity from './components/Pages/passwordSecurity/passwordSecurity';
import Creative from './components/Pages/creative/creative';
import NewAction from './components/Pages/newAction/newAction';
import NewShow from './components/Pages/newShow/newShow';
import RenewSubmit from './components/Pages/renewSubmit/renewSubmit';
import Home from './components/Pages/home/home';


export default class Admin extends React.Component{
    render(){
        const {state}=this.props.location
        return (

          <div className="container">
            <Header info={state}/>
            <div className="content">
                <NavLeft/>
                <div className="page">
                <Switch>
                    <Route exact={true} path="/home" component={Home}  />
                    <Route path="/adv" component={Advertisement} />
                    <Route path="/advedit" component={AdvertisementEdit} />
                    <Route path="/advnew" component={NewAdvertisement} />
                    <Route path="/data" component={Data} />
                    <Route path="/fin" component={Finance}/>
                    <Route path="/acc" component={Account}/>
                    <Route path="/security" component={PasswordSecurity}/>
                    <Route path="/ct" component={Creative}/>
                    <Route path="/ctact" component={NewAction} />
                    <Route path="/ctshow" component={NewShow} />
                    <Route path="/ctsub" component={RenewSubmit} />
                </Switch>        
                </div>
            </div>
            <Footer/>
          </div>
        );
    }
}
