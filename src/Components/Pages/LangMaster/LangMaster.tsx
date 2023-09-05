import React, { } from 'react'
import LangManager from './LangManager'
import Login from '../Login/Login'
import { useAppSelector } from './../../../hooks'

const LangMaster = (): JSX.Element => {
  const token = useAppSelector(state => state.lang.userToken)
  console.log('token', token)

  return (
    <>
     {(token === '') && (
       <Login />
     )}
     {(token !== '') && (
        <LangManager />
     )}
      </>
  )
}

export default LangMaster
