import React from 'react'
import { Row, Col, Layout } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import LangSwitch from '../Controls/LangSwitch'
import { SiteMap } from '../Middleware/Helpers'

const { Header } = Layout

const ABHeader = () => {
  const lang = useSelector(state => state.lang.lang)
  const words = useSelector(state => state.lang.words[lang])

  const items = SiteMap(lang, words)
  const navigate = useNavigate()

  const setActive = ({ isActive }) => isActive ? 'active-link' : ''

  return (
        <Header className='header'>
            <Row>
                <Col xs={0} md={12} xl={8} className="logoleft">
                    <div className="logo"
     onClick={
        () => {
          navigate('./')
        }
    }
                    >
                        <h1 className="bold">{words.fullname}</h1>
                        <h2 className='thin'>Fullstack developer</h2>
                    </div>
                </Col>

                <Col xs={23} md={12} xl={16} className='hdrleft'>
                    <LangSwitch />

                    <div className="topMenu">

                        <ul>
                        {
                            items.map(elm => {
                              return (
                                    <li key={elm.key} ><NavLink className={setActive} to={elm.url}>{elm.label}</NavLink></li>
                              )
                            })

                        }
                        </ul>
                    </div>
                </Col>
            </Row>
        </Header>
  )
}

export default ABHeader
