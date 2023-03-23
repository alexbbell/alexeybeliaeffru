import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'

const Skills = (props) => {
  const titleSkills = props.data.titleSkills
  const skills = props.data.skills.map(function (skill) {
    return <li key={skill.name}>
               <h4>{skill.name }</h4>
               <p>
               {skill.description }
               </p>
            </li>
  })

  return (
<Row className='pt40 pb40'>
<Col xs={0} md={1} lg={2}></Col>
<Col xs={24} md={20} lg={20}>

               <h1>{titleSkills}</h1>
                  <ul>
                     {skills}
                  </ul>
</Col>
<Col xs={0} md={1} lg={2}></Col>
</Row>

  )
}

Skills.propTypes = {
  data: PropTypes.object
}
export default Skills
