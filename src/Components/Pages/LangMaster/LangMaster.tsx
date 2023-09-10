import React, { } from 'react'
import LangManager from './LangManager'
import Login from '../Login/Login'
import { useAppDispatch, useAppSelector } from './../../../hooks'
import { useLocalStorage } from 'usehooks-ts'
import { saveUserToken } from './../../../store/langSlice'
import styles from './../../../style/style.module.scss'
import { Col, Row } from 'antd'

const LangMaster = (): JSX.Element => {
  let token: string | null = useAppSelector(state => state.lang.userToken)
  const dispatch = useAppDispatch()
  const [, setTokenAuth] = useLocalStorage('userToken', token)

  if (token === '' || token === null) {
    const temp: string | null = localStorage.getItem('userToken')
    if (token === null) token = ''
    if (temp !== null) token = JSON.parse(temp)

    dispatch(saveUserToken(token))
  }

  return (
    <>
    <Row className={`${styles.pt40} ${styles.pb40}`}>
    <Col xs={1} md={1} xl={1} ></Col>
      <Col xs={20} md={20} xl={20} >
        {token === '' && (
          <Login />
        )}
        {token !== '' && (

          <>
            <div style={{ position: 'absolute', right: '30px' }} onClick={() => {
              dispatch(saveUserToken(''))
              setTokenAuth('')
            }}>Logout</div>

            <LangManager />
          </>
        )}
      </Col>
    </Row>
    </>
  )
}

export default LangMaster
