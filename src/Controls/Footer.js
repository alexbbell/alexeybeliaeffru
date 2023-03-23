import React from 'react'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { SiteMap } from '../Middleware/Helpers'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

const ABFooter = (props) => {
  const lang = useSelector(state => state.lang.lang)
  const words = useSelector(state => state.lang.words[lang])
  const items = SiteMap(lang, words)
  const setActive = ({ isActive }) => isActive ? 'active-link' : ''

  return (

    <Row justify="space-around">
        <Col span={5}>
            <h3>{words.sitemap}</h3>
            <ul className='clean-list'>
                {
                    items.map(elm => {
                      return (
                            <li key={`f${elm.key}`}><NavLink className={setActive} to={elm.url}>{elm.label}</NavLink></li>
                      )
                    })

                }
            </ul>
        </Col>
        <Col span={5}>
            <h3>{words.contacts}</h3>

            <ul className='clean-list'>

                <li><FontAwesomeIcon icon={regular('envelope')} />&nbsp; beliaeff@gmail.com</li>
                <li><FontAwesomeIcon icon={solid('phone')} /> +7 9261803635 <br />(mobile, WhatsApp)</li>
                <li><FontAwesomeIcon icon={solid('phone')} /> +972 585362546 <br />(mobile, WhatsApp)</li>
            </ul>

        </Col>
        <Col span={5}>
            <h3>{words.resume}</h3>

            <FontAwesomeIcon icon={faFilePdf} className='icon-high' /> &nbsp;<a href="/public/Aleksei_Beliaev_cv2022v5.pdf">{words.resume}</a>
        </Col>
        <Col span={5}>
            <h3>{words.blogs}</h3>
            <ul className='clean-list'>

                <li>
                    <FontAwesomeIcon icon={solid('blog')} className='icon-sm' /> <a href="https://markimarta.ru">markimarta.ru</a></li>
                <li><FontAwesomeIcon icon={solid('blog')} className='icon-sm' />  <a href="https://markimarta.com">markimarta.com</a></li>
                <li><FontAwesomeIcon icon={faLinkedin} className='icon-sm' />&nbsp; <a href="https://www.linkedin.com/in/aleksei-beliaev/">LinkedIn</a></li>
                <li><FontAwesomeIcon icon={faGithub} className='icon-sm' />&nbsp;<a href="https://github.com/alexbbell/">Github</a></li>
                <li><FontAwesomeIcon icon={faGitlab} className='icon-sm' />&nbsp;<a href="https://gitlab.com/alexbbell/">Gitlab</a></li>
            </ul>

        </Col>
    </Row>

  )
}

ABFooter.propTypes = {
  data: PropTypes.object
}
export default ABFooter
