import React, {Component } from "react";
import { useState } from 'react';

import Header from "./Controls/Header";
import Footer  from "./Controls/Footer";
import Banner from "./Controls/Banner";
import About from "./Controls/About";
import Resume from "./Components/Resume";
import LangSwitch from "./Controls/LangSwitch";

const axios = require('axios').default;

 class  App extends React.Component {
    


    
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            resumeData: {}
        }
        this.GetResumeData = this.GetResumeData.bind(this)
    }

    setLang(lang) {
        this.setState( {'lang': lang}, () => this.GetResumeData()) ;
         
    }

     GetResumeData (){
        let fname = '/public/resume.json';
        if(this.state.lang == 'ru') {
            fname = '/public/resume_ru.json';
        } 
        if(this.state.lang == 'isr'){
            fname = '/public/resume_isr.json';
        }
        var options = {
            method: 'GET',
            url: fname
          };    
      
        axios.request(options)
        .then((response) => {
          // handle success
          this.setState( {resumeData: response.data}, function() {});    
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    
        componentDidMount() {
            this.GetResumeData();    
        }
        // componentDidUpdate() {
        //     this.GetResumeData();    
        // }
    //childToParent={childToParent}
     render() {
         return (
             <div>
                 <LangSwitch data={
                     {
                         lang: this.state.lang, 
                        setLang: this.setLang.bind(this) 
                    }
                 } />
                 <Header  />

                 {/* <Banner  data={this.state.resumeData.main} lang={this.state.lang} />             */}
                 <Banner  data={this.state.resumeData.main} />            
            <About data={this.state.resumeData.main} /> 
            <Resume  data={this.state.resumeData.resume}   />
            <Footer data={this.state.resumeData.main} />
             </div>
         )
     }
 }
export default App