import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const Image = (props) => {
  const [image, setImage] = useState()
  const lang = useSelector(state => state.lang.lang)
  const className = (props.className) ? props.className : ''

  let blogUrl = 'https://markimarta.com'
  if (lang === 'ru') {
    blogUrl = 'https://markimarta.ru'
  }

  useEffect(() => {
    const fetchData = async () => {
      GetImageInfo()
    }
    fetchData()
  }, [])

  const GetImageInfo = async () => {
    const data = await fetch(`${blogUrl}/wp-json/wp/v2/media/` + props.media)
    const json = await data.json()
    setImage(json.media_details.sizes.thumbnail.source_url)
  }

  return (
        <>
            <img src={image} className={className} ></img>
        </>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  media: PropTypes.number
}

export default Image
