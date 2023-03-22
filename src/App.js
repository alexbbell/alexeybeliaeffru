import React, { } from "react";
import { useState, useEffect } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { MyLayout } from './Components/Layout';
import Banner from "./Controls/Banner";
import Education from "./Components/Education";
import { useSelector } from "react-redux";
import Skills from "./Components/Skills";
import Blog from "./Components/Blog/Blog";
import About from "./Components/Pages/About";

const axios = require('axios').default;

 export function App () {
    
    const [resumeData, setResumeData ] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const lang = useSelector( state => state.lang); //
    const words = useSelector(state => state.lang.words)

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
            <Route path="/" element={<MyLayout />}>
              <Route path="/blog" element={<Blog/>}></Route>
              <Route path="/" element={<Banner data={resumeData.main} />}></Route>
              <Route path="/about" element={<About data={resumeData.main} />}></Route>
              <Route path="/experience" element={<Education data={resumeData.resume} />}></Route>
              <Route path="/skills" element={<Skills data={resumeData.resume} />}></Route>
            </Route>
          </Routes>
          )}

      </>
    )
     
 }
