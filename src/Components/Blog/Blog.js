import React from "react";
import parse from 'html-react-parser'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import  {dateToDDmmYYYY} from '../../Middleware/Helpers';
import Image from './Image';
import Pagination from 'react-bootstrap/Pagination';
import { Paging}  from "./Paging";


export default function Blog() {
    const [items, setItems] = useState([]);
    const [operationResult, setOperationResult] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    
    const currentPage = useSelector( state => state.lang.selectedPage.selectedPage)
    const lang = useSelector( state => state.lang.lang)
    const [images, loadImages] = useState([]);
    
    let blogUrl = 'https://markimarta.com';
    if(lang == 'ru')  {
        blogUrl = 'https://markimarta.ru';
    }

    useEffect( () => {
        const fetchData = async() => {
            LoadPosts();
            setOperationResult(true)    
        }
        fetchData();
    }, [operationResult])




    const LoadPosts = async () => {        
        const mode = "dev"; // prod
        let data, json;

        console.log(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=10&order=desc`)
        if(mode === "dev") {
            //data = await fetch('/public/posts.json');
            data = await fetch(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=10&order=desc`);
            json = await data.json();
            setTotalPages(24)
            setTotalPosts(239)
            
        }
        else {
             data = await fetch(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=10&order=desc`);
             json = await data.json();
            setTotalPages(data.headers.get('x-wp-totalpages'))
            setTotalPosts(data.headers.get('x-wp-total'))
        }
        let myimages = [];
        json.map( img => {
            myimages.push(  {
                postId: img.id,
                imageId: img.featured_media,
                title: img.title.rendered,
                link: img.link,
                date: dateToDDmmYYYY(img.date),
                anons: parse(img.excerpt.rendered)
            });
        })
        setItems(myimages);
        return json;
    }


    const RenderPosts = () => {

        if(items && items.length > 0) {            
            return <Anonspost data={items} />
        }
        else return <div>Loading....</div>
    }





    const Anonspost = () => {
        return (
            <>
            {/* <h1>{process.env.NODE_ENV}</h1> */}
            {items.map( (item, index) => {
  
                    return (
                        <div key={`anons${item.postId}`} className='row'>
                            <h2 key={'cat' + item.postId}>{item.title}</h2>
                            <div>
                                {item.imageId != 0 && (
                                    <Image media={item.imageId} className='img-thumbnail float-start px-2 mx-2' />
                                )}
                                 
                                <span><i>Date: {item.date}</i></span>
                                {item.anons}
                                <a href={item.link}>Read the full post</a>
                            </div>
                        </div>
 
                    )
                } )
            }


            </>
        )
    }

    return (

        <>
        <h1>Posts from my blog</h1>
        
        <RenderPosts />
        <br />
            {/* <div>Total pages: {totalPages}</div>
            <div>Total posts: {totalPosts}</div> */}
            <Pagination>
                {totalPages > 0 && (
                    <Paging totalPages={totalPages} totalPosts={totalPosts} />
                    )
                 }
            </Pagination>

        </>
    )




}