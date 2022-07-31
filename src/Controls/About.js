import React, { Component} from 'react'


class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(this.props.data) {
            const hi = this.props.data.hi;
            const name = this.props.data.name;
            var about = this.props.data.description
            var titleAbout = this.props.data.titleAbout
        }
        return ( 
            <section id='about' className="about_area section_gap">
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="about_img">
                            <img className="" src="../public/img/about-us.png" alt="" />
                        </div>
                    </div>
    
                    <div className="offset-lg-1 col-lg-5">
                        <div className="main_title text-left">
                            <h2>{titleAbout}</h2>
                            <p>{about}</p>
                            <a className="primary_btn" href="/public/Aleksei_Beliaev_cv2022v5.pdf"><span>Get CV</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default About