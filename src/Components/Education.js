import React from 'react'
import { Col, Row, Divider } from 'antd'
import PropTypes from 'prop-types'

const Education = (props) => {
  const titleEducation = props.data.titleEducation
  const education = props.data.education.map(function (ed) {
    return <div key={ed.graduated} className="pb10">

               <h4 className='uppercase'>{ed.school}</h4>
               <em className="date"></em>
               <h5 className='thin italic' >{ed.graduated} </h5>
               <h3>{ed.degree}</h3>
                  <p>
                 {ed.description}
                  </p>

            </div>
  })

  const titleWork = props.data.titleWork
  const work = props.data.work.map(function (wrk) {
    return <div key={wrk.years} className="pb10">
                  <h4 className='uppercase'>{wrk.company}</h4>
                  <h5 className='thin italic grey' >{wrk.years}</h5>
                  <h3>{wrk.title} </h3>
                  <p>
                  {wrk.description}
                  </p>
               </div>
  })

  return (

<Row className='pt40'>
   <Col xs={1} md={1} lg={2}></Col>
   <Col xs={22} md={22} lg={20} >

                  <h1>{titleWork}</h1>
                  {work}

                  <Divider className='ant-divider-horizontal line pt40'></Divider>

                  <h1><span>{titleEducation}</span></h1>

                  {education}
         </Col>
         <Col xs={1} md={1} lg={2}></Col>
</Row>

  )
}

Education.propTypes = {
  data: PropTypes.object
}

export default Education
