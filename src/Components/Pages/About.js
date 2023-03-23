import React from 'react'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const About = (props) => {
  const lang = useSelector(state => state.lang.lang)
  const words = useSelector(state => state.lang.words[lang])

  const aboutTitle = words.about
  const aboutText = props.data.about

  return (

        <Row className='pt40 pb40'>
            <Col xs={1} md={1} lg={2}></Col>
            <Col xs={22} md={22} lg={15}>

                <h1>{aboutTitle}</h1>
                {aboutText}
            </Col>
            <Col xs={1} md={1} lg={2}></Col>
        </Row>

  )
}

About.propTypes = {
  data: PropTypes.object
}

export default About
