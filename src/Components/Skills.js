import React, { Component} from 'react'


class Skills extends Component {
    render() {
       if(this.props.data) {


         var titleSkills = this.props.data.titleSkills;

         var skills = this.props.data.skills.map(function (skill)  {
            var className = 'bar-expand '+skill.name.toLowerCase()
            return <li key={skill.name}><span className={className} style={{width: skill.level}}></span><em>{skill.name }</em></li>
         });

       }
        return (
            
<section id='education'>
      <div id='skills' className="container">
         <div className="row skill">
            <div className="col-lg-12">
               <h1><span>{titleSkills}</span></h1>
               <div className="bars">
                  <ul className="skills">
                     {skills}
                  </ul>
               </div>
            </div>
         </div>
      </div>   
</section>

        );
    }
}

export default Skills;
