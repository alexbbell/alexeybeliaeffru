import React, { Component} from 'react'


class Banner extends Component {

    constructor(props) {
        super(props);

    }

           
    render() {

        if(this.props.data) {
            var t = this.props.data;
            var name = t.name;
            var beforename = t.beforename;
            var greeting = t.greeting;
            var position = t.position;
        }
        if(this.props.lang) {
            var lang = t.props.lang;
            console.log(lang);
        }

        return ( 
<section className="home_banner_area">
<div className="banner_inner">
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="banner_content">
                    <h3 className="text-uppercase">{greeting}</h3>
                    <h1 className="text-uppercase">{beforename}<br /> {name}</h1>
                    <h5 className="text-uppercase" >{  position }</h5>
                    <div className="d-flex align-items-center">
                        {/* <a className="primary_btn" href="#"><span>Hire Me</span></a> */}
                        <a className="primary_btn" href="https://wa.me/972585362546"><span>WhatsApp</span></a>
                        <a className="primary_btn tr-bg" href="/public/Aleksei_Beliaev_cv2022v5.pdf"><span>Get CV</span></a>
                    </div>
                    <div>
                    
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="home_right_img">
                    <img src="/public/img/banner/abb.jpg" alt=""  />
                </div>
            </div>
        </div>
    </div>
</div>
</section>
        )
    }
}

export default Banner