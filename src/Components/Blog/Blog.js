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
  const [perPage, setPerPage] = useState(10)
  const lang = useSelector(state => state.lang.lang)
  const words = useSelector(state => state.lang.words[lang])

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
  }, [operationResult, currentPage, perPage, lang])

  const LoadPosts = async () => {
    const mode = 'prod' // prod | dev
    let data, json

    if (mode === 'dev') {
      // data = await fetch('/public/posts.json');
      data = await fetch(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=${perPage}&order=desc`)
      json = await data.json()
      setTotalPages(24)
      setTotalPosts(239)
    } else {
      data = await fetch(`${blogUrl}/wp-json/wp/v2/posts?page=${currentPage}&per_page=${perPage}&order=desc`)
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
                                <a href={item.link}>{words.morelink}</a>

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
    console.log(page, items)
    page = (page === 0) ? page + 1 : page
    setCurrentPage(page)
    setPerPage(items)
  }

  return (

        <>
            <Row className='pt40 pb40'>
                <Col xs={0} md={1} lg={2}></Col>
                <Col xs={24} md={15} lg={15}>

                    <h1>Posts from my blog</h1>

                    <RenderPosts />
                </Col>
                <Col xs={0} md={1} lg={2}></Col>
            </Row>
            <Row className='pt10 p10'>
            <Col xs={0} md={1} lg={2}></Col>
            <Col xs={24} md={15} lg={15}>
            <Pagination defaultCurrent={currentPage + 1 } total={totalPosts} onChange={onChange} pageSizeOptions={[10, 20, 40]} />
            <br />
            </Col>
            <Col xs={0} md={1} lg={2}></Col>
            </Row>
            {/* <Paging totalPages={totalPages} totalPosts={totalPosts} /> */}

        </>
  )
}
