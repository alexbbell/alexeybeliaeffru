import React, {}  from 'react';
import { Layout, Divider, Space, Row, Col } from 'antd';
const {  Footer, Sider, Content } = Layout;

import { NavLink, Outlet } from 'react-router-dom'
//import Footer from '../Controls/Footer';
import  ABHeader  from '../Controls/Header'
import  ABFooter  from '../Controls/Footer'


const setActive =   ( {isActive}) => isActive ? 'active-link' : '' ;

export const MyLayout = () => {

  return (
    <Layout>
       <ABHeader /> 
       <Divider className='ant-divider-horizontal line'></Divider>
      <Content>
    
        <Outlet></Outlet>
    
    </Content>
    <Divider className='ant-divider-horizontal line'></Divider>

    <Footer ><ABFooter /></Footer>
  </Layout>


        
        
  )
}
