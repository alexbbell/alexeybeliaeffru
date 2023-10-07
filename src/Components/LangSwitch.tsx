import React from 'react'
import { useAppDispatch, useAppSelector } from './../hooks'
import { switchLang } from '../store/langSlice'
import styles from './../style/style.module.scss'
import { NavLink } from 'react-router-dom'

const LangSwitch = (): JSX.Element => {
  const langs = ['en', 'ru', 'he']

  const dispatch = useAppDispatch()

  const ml = useAppSelector(state => state.lang.lang)
  const setlang = (lng: string): void => {
    dispatch(switchLang(lng))
  }
  // const currentUrl = window.location.pathname
  // console.log({ currentUrl })

  return (

    <div className={styles.langCtrl} >
    <ul>
        {
            langs.map((lang, i) => {
              return (

                    <span key={lang}>
                        &nbsp;<NavLink to={`/${lang}/`} className={lang === ml ? `${styles.lng}  ${styles.selected}` : `${styles.lng}`}
                        // data={lang}
                        onClick={(e) => { setlang(lang) }}>{lang.toUpperCase()}</NavLink>
                        { (langs[i + 1] !== '') ? ' | ' : '' }
                    </span>
              )
            })
        }
    </ul>
    </div>

  )
}

export default LangSwitch
