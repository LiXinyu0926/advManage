import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import Resetting from '../src/components/Pages/resetting/resetting';
import ForgetPassword from '../src/components/Pages/forgetPassword/forgetPassword';

ReactDOM.render(
    <LocaleProvider locale={zh_CN}><Router /></LocaleProvider>
    ,document.getElementById('root')
);

