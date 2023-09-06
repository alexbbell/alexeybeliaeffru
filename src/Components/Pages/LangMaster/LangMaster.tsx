import React, { } from 'react'
import LangManager from './LangManager'
import Login from '../Login/Login'
import { useAppSelector } from './../../../hooks'
import { useAppDispatch } from '../../../hooks'
import { useLocalStorage } from 'usehooks-ts'
import { saveUserToken } from './../../../store/langSlice'

const LangMaster = (): JSX.Element => {
  const [, setTokenAuth] = useLocalStorage('userToken', '')
  let token: string | null = useAppSelector(state => state.lang.userToken)
  const dispatch = useAppDispatch()

  if (token === '') {
    const temp: string | null = localStorage.getItem('userToken')
    token = temp !== null ? JSON.parse(temp) : ''
    console.log('token local', token)
  }

  return (
    <>
     {token === '' && (
       <Login />
     )}
     {token !== '' && (

      <>
      <div onClick={ () => {
        dispatch(saveUserToken(''))
        setTokenAuth('')
      }}>Logout</div>

        <LangManager />
      </>
     )}
      </>
  )
}

export default LangMaster
