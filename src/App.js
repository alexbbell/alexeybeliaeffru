import React, { } from "react";
import { useState, useEffect } from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import { Layout } from './Components/Layout';

import Banner from "./Controls/Banner";
import Education from "./Components/Education";
import { useSelector } from "react-redux";
import Skills from "./Components/Skills";

const axios = require('axios').default;

 export function App () {
    
    const [resumeData, setResumeData ] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const lang = useSelector( state => state.lang)

 
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
        {isLoaded && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Banner data={resumeData.main} />}></Route>
              <Route path="/blog" element={<Banner data={resumeData.main} />}></Route>
              <Route path="/experience" element={<Education data={resumeData.resume} />}></Route>
              <Route path="/skills" element={<Skills data={resumeData.resume} />}></Route>
            </Route>
          </Routes>
          )}

      </>
    )
     
 }
