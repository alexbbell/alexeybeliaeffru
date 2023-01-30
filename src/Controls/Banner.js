import React, { } from 'react'

import { Button } from 'react-bootstrap';
const  Banner = (props) => {

        if(props.data) {
            var t = props.data;
            var name = t.name;
            var beforename = t.beforename;
            var greeting = t.greeting;
            var position = t.position;
            var hi = t.hi;
            var about = t.description
            var titleAbout = t.titleAbout
        }
        if(props.lang) {
            var lang = props.lang;
        }

        return ( 
<>
        <section className="home_banner_area">
            <div className="banner_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner_content">
                                <h3 className="text-uppercase ">{greeting}</h3>
                                <h1 className="text-uppercase tracking-in-expand ">{beforename}<br /> {name}</h1>
                                <h5 className="text-uppercase " >{position}</h5>
                                <div className="d-flex align-items-center">
                                    <a href="https://wa.me/972585362546">
                                        <Button className="btn  btn-success">WhatsApp</Button></a>
                                    &nbsp;
                                    <a className="primary_btn tr-bg" href="/public/Aleksei_Beliaev_cv2022v5.pdf">
                                        <Button className="btn  btn-primary">Get CV</Button></a>
                                </div>
                                <div>
                                    <div className="main_title text-left">
                                    <br />
                                        <p>{about}</p>
                                        <a className="primary_btn tr-bg" href="/public/Aleksei_Beliaev_cv2022v5.pdf">
                                            <Button className="btn  btn-primary">Get CV</Button></a>        </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home_right_img">
                                <img src="/public/img/banner/abb.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


</>

        )
    }


export default Banner