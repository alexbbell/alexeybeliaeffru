import React, { useEffect, useState } from 'react'
import { type INewsAnons } from './../interfaces'
import styles from './../style/style.module.scss'
import { useAppSelector } from '../hooks'

const NewsLoader = (): JSX.Element => {
  const lang = useAppSelector(state => state.lang.lang)
  const [newsaons, setNewAnons] = useState<INewsAnons[]>([])
  // const setActive = ({ isActive }) => isActive ? 'active-link' : ''
  const LoadNews = async (lang: string): Promise<void> => {
    console.log('lang', lang)
    const newsFile = (lang === 'ru') ? '/public/mimrunews.json' : '/public/mimnews.json'
    const newsdata = await fetch(newsFile)
    const json: INewsAnons[] = await newsdata.json()
    setNewAnons(json)
  }
  useEffect(() => {
    void LoadNews(lang)
  }, [lang])
  const newscontent: JSX.Element = <>
  {
    newsaons.map((x: INewsAnons, index: number) => {
      return (
        <div key={x.title} className={styles.newsItem} >
          <h1><a href={x.link}>{x.title}</a></h1>
          <span className={styles.newsdate}>{x.date.toString().substring(0, 10).replaceAll('-', '.')}</span>
          <span dangerouslySetInnerHTML={{ __html: `${x.excerpt}` }}></span>
          <a href={x.link} target='blank'>{ (lang === 'ru' ? 'Читать далее' : 'Read more') }</a>
          <br />
        </div>
      )
    })
  }
  </>

  return (
 <>
          <h2 className={`${styles.h3} ${styles.uppercase}`}>{ (lang === 'ru') ? 'Новое из блога' : 'News from blog' }</h2>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {newscontent}
          </div>

 </>
  )
}

export default NewsLoader
