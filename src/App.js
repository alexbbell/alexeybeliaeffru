import React, {Component } from "react";
import { useState, useEffect } from 'react';

import Header from "./Controls/Header";
import Footer  from "./Controls/Footer";
import Banner from "./Controls/Banner";
import About from "./Controls/About";
import Resume from "./Components/Resume";
import LangSwitch from "./Controls/LangSwitch";
import { useSelector } from "react-redux";


const axios = require('axios').default;

 export function App () {
    
    //const[chLang, setLang] = useState('en'); 

    

    const [chLang, setLang] = useState();

    const [resumeData, setResumeData ] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const lang = useSelector( state => state.lang)

    //setLang(lang);


    const GetResumeData =  () => {
        setLoaded(false);
        let fname = `/public/resume_${lang.lang}.json`;
        var options = {
            method: 'GET',
            url: fname
          };    
      
        axios.request(options)
        .then((response) => {
          setResumeData (response.data)
          setLoaded(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    
    useEffect( () => {
        setResumeData(GetResumeData());

    }, [lang]);
    
    
    

         return (
            
            <>
                <Header />

                <LangSwitch  />
            {isLoaded  && (
                <>
                
                    
                 <Banner  data={resumeData.main} />
                 <About data={resumeData.main} /> 
                 <Resume  data={resumeData.resume}   />
                 <Footer data={resumeData.main} />
                 </>


            )}
          </>

         )
     
 }
