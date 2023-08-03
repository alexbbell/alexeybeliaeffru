import React from 'react'
import { useAppDispatch, useAppSelector } from './../hooks'
import { switchLang } from '../store/langSlice'
import styles from './../style/style.module.scss'

const LangSwitch = (): JSX.Element => {
  const langs = ['en', 'ru', 'he']

  const dispatch = useAppDispatch()

  const ml = useAppSelector(state => state.lang.lang)
  const setlang = (lng: string): void => {
    dispatch(switchLang(lng))
  }

  return (

    <div className={styles.langCtrl} >
    <ul>
        {
            langs.map((lang, i) => {
              return (
                    <span key={lang}>
                        &nbsp;<a href="#" className={lang === ml ? `${styles.lng}  ${styles.selected}` : `${styles.lng}`}
                        // data={lang}
                        onClick={(e) => { e.preventDefault(); setlang(lang) }}>{lang.toUpperCase()}</a>
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
