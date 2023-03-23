import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

import { useSelector } from 'react-redux'
import { dateToDDmmYYYY } from '../../Middleware/Helpers'
import Image from './Image'
import { Row, Col, Divider, Pagination } from 'antd'

export default function Blog () {
  const [items, setItems] = useState([])
  const [operationResult, setOperationResult] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [totalPosts, setTotalPosts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const lang = useSelector(state => state.lang.lang)

  let blogUrl = 'https://markimarta.com'
  if (lang === 'ru') {
    blogUrl = 'https://markimarta.ru'
  }

  useEffect(() => {
    const fetchData = async () => {
      LoadPosts()
      setOperationResult(true)
    }
    fetchData()
  }, [operationResult, currentPage, lang])

  const LoadPosts = async () => {
    const mode = 'prod' // prod | dev
    let data, json

    // console.log(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=10&order=desc`)
    if (mode === 'dev') {
      // data = await fetch('/public/posts.json');
      data = await fetch(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=10&order=desc`)
      json = await data.json()
      setTotalPages(24)
      setTotalPosts(239)
    } else {
      data = await fetch(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=10&order=desc`)
      json = await data.json()
      setTotalPages(data.headers.get('x-wp-totalpages'))
      setTotalPosts(data.headers.get('x-wp-total'))
    }
    const myimages = []
    json.map(img => {
      return myimages.push({
        postId: img.id,
        imageId: img.featured_media,
        title: img.title.rendered,
        link: img.link,
        date: dateToDDmmYYYY(img.date),
        anons: parse(img.excerpt.rendered)
      })
    })
    setItems(myimages)
    return json
  }

  const RenderPosts = () => {
    if (items && items.length > 0) {
      return (

                <Anonspost data={items} />

      )
    } else return <div><div className="lds-circle"><div></div></div></div>
  }

  const Anonspost = () => {
    return (
            <>
            {/* <h1>{process.env.NODE_ENV}</h1> */}
            {items.map((item, index) => {
              return (
                        <div key={`anons${item.postId}${index}`} >

                        <div className='newsitem pt10 pb10'>
                                {item.imageId !== 0 && (
                                    <div className="newsImage">
                                        <Image media={item.imageId} className='radius' />
                                    </div>
                                )}
                                <div className="newsContent">
                            <h2 >{item.title}</h2>

                                <span><i>Date: {item.date}</i></span>
                                {item.anons}
                                <a href={item.link}>Read the full post</a>

                            </div>
                        </div>
                        <Divider orientation="horizontal"></Divider>
                        </div>

              )
            })
            }

            </>
    )
  }

  const onChange = (page, items) => {
    setCurrentPage(page)
  }

  return (

        <>
            <Row className='pb40'>
                <Col xs={0} md={1} lg={2}></Col>
                <Col xs={0} md={15} lg={15}>

                    <h1>Posts from my blog</h1>

                    <RenderPosts />
                </Col>
                <Col xs={0} md={1} lg={2}></Col>
            </Row>
        <br />
            <div>Total pages: {totalPages}</div>
            <div>Total posts: {totalPosts}</div>
            <Pagination defaultCurrent={currentPage + 1 } total={totalPages} onChange={onChange} />
            {/* <Paging totalPages={totalPages} totalPosts={totalPosts} /> */}

        </>
  )
}
