import React, { } from 'react'
import { Layout, Divider, Space, Row, Col, Button } from 'antd';
import {  useSelector } from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom'


import imageToAdd from "../img/abbfp.jpg";
const  Banner = (props) => {

    let navigate = useNavigate(); 

    const lang  = useSelector(state => state.lang.lang);
    const words = useSelector(state => state.lang.words[lang])

        if(props.data) {
            var t = props.data;
            var name = t.name;
            var beforename = t.beforename;
            var greeting = t.greeting;
            var position = t.position;
            var description = t.description;
            var hi = t.hi;
            var about = t.description
            var titleAbout = t.titleAbout
        }

        return ( 
<>
    <Row className='pb40'>
        <Col xs={0} md={10} lg={9}>
            <div className="tracking-in-expand ">
                <img src='/assets/img/abbfp.jpg' className='image'></img>

            </div>
        </Col>
        <Col xs={24} md={14} lg={15} className='about'>
            <h3 >{greeting}</h3>
            <h1 className=" tracking-in-expand ">{beforename} {name}</h1>
            <p>{description}</p>
            <p>
                <NavLink to='/about' className="more">{words.morelink}...</NavLink>
            </p>
            


        </Col>
    </Row>
    
    <Space></Space>

    <Divider className='ant-divider-horizontal line pb10'></Divider>
    
    <Row  className='pb10' justify="space-between">
        <Col xs={1} md={0} lg={2}></Col>

        <Col xs={23} md={11} lg={8}>
    <div id="education" className='fpadvert education education_off' 
    onMouseOver={
        () => {
            document.getElementById('education').classList.remove('education_off');
            document.getElementById('education').classList.add('education_on')
        }}
    onMouseOut={
        () => {
            document.getElementById('education').classList.remove('education_on');
            document.getElementById('education').classList.add('education_off');
        }} 
        onClick={
            () => {
                navigate('./experience')

            }
        }
    ><NavLink to="./experience" className={'h3 uppercase'}>{words.experience}</NavLink></div>
        </Col>
        <Col xs={1} md={0} lg={2}></Col>
        <Col xs={23} md={11} lg={8}>
    <div id="skills" className="fpadvert skills skills_off"
        onMouseOver={
        () => {
                document.getElementById('skills').classList.remove('skills_off');
                document.getElementById('skills').classList.add('skills_on');
        }}
        onMouseOut={
            () => {

                document.getElementById('skills').classList.remove('skills_on');
                document.getElementById('skills').classList.add('skills_off');
            } }
            onClick={
                () => {
                    navigate('./skills')

                }
            }
            >
            <NavLink to="" className={'h3 uppercase'}>{words.skills}</NavLink>
            </div>
    
            </Col>
            <Col xs={0} md={0} lg={2}></Col>
    </Row>

 
</>

        )
    }


export default Banner