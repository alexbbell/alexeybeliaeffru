import React, {} from 'react'
import { Layout, Divider } from 'antd'

import { Outlet } from 'react-router-dom'
import ABHeader from '../Controls/Header'
import ABFooter from '../Controls/Footer'
const { Footer, Content } = Layout

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
