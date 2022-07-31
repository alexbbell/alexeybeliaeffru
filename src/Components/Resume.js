import React, { Component} from 'react'


class Resume extends Component {
    render() {
       if(this.props.data) {
          var titleEducation = this.props.data.titleEducation;
         var education = this.props.data.education.map(function (ed)  {
            return <div key={ed.graduated} className="row item">      
               <div className="col-lg-12">
               <h4>{ed.school}</h4>
               <p className="">{ed.degree} <span>&bull;</span> 
                  <em className="date">{ed.graduated}</em>
                  <br />
                 {ed.description}
                  </p>
               </div>
            </div>
         });

         var titleWork = this.props.data.titleWork;

         var work = this.props.data.work.map(function (wrk)  {
            return <div key={wrk.years} className="row item">   
               <div className="col-lg-12">
                        <h4>{wrk.company}</h4>
                  <p className="">{wrk.title} <span>&bull;</span> 
                  <em className="date">{wrk.years}</em>
                  <br />
                 {wrk.description}
                  </p>
               </div>
            </div>
         });
         var titleSkills = this.props.data.titleSkills;

         var skills = this.props.data.skills.map(function (skill)  {
            var className = 'bar-expand '+skill.name.toLowerCase()
            return <li key={skill.name}><span className={className} style={{width: skill.level}}></span><em>{skill.name }</em></li>
         });

       }
        return (
            
<section id='education'>

              <div className="container">
                 <div className="row education">
                    <div className="col-lg-12">
                       <h1><span>{titleEducation}</span></h1>

                       {education}
                    </div>
                 </div>
              </div>


              <div id='work' className="container">
                 <div className="row work">
                    <div className="col-lg-12">
                       <h1><span>{titleWork}</span></h1>
                       {work}
                    </div>
                 </div>
              </div>


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

export default Resume;
