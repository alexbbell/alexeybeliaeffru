import React, { Component, useEffect, useState } from 'react'
import { useSelector } from "react-redux";



const Image = (props) => {


   const[image, setImage] = useState()
   const[operationResult, setOperationResult] = useState()
   const[meTest, setmeTest] = useState('')
   
   const lang = useSelector( state => state.lang.lang)
   const className = (props.className) ? props.className : '';

   let blogUrl = 'https://markimarta.com';
   if(lang == 'ru')  {
       blogUrl = 'https://markimarta.ru';
   }

   useEffect( () => {
        const fetchData = async() => {
            GetImageInfo();   
        }
        fetchData();
    }, [operationResult])

    const GetImageInfo = async() => {
        let data, json;

        //data = await fetch('/image.json');
        data = await fetch(`${blogUrl}/wp-json/wp/v2/media/` + props.media)
        json = await data.json();
        
        setImage(json.media_details.sizes.thumbnail.source_url)

    }



    return (
        <>
            <img src={image} className={className} ></img>
        </>
    )

}

export default  Image;