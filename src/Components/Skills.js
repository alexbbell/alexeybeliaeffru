import React from 'react';
import { Layout, Divider, Space, Row, Col, Button } from 'antd';
import {  useSelector } from "react-redux";


const Skills = (props) => {
    
   const lang  = useSelector(state => state.lang.lang);
   const words = useSelector(state => state.lang.words[lang])

       if(props.data) {
         var titleSkills = props.data.titleSkills;
         var skills = props.data.skills.map(function (skill)  {
            //var className = 'bar-expand '+skill.name.toLowerCase()
            return <li key={skill.name}>
               <h4>{skill.name }</h4>
               <p>
               {skill.description }
               </p>
            </li>
         });

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

        );
    }
}

export default Skills;
