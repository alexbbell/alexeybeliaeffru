import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchLang } from '../store/langSlice'

export default function LangSwitch () {
  const langs = ['en', 'ru', 'he']

  const dispatch = useDispatch()
  const ml = useSelector(state => state.lang)

  const setlang = (lng) => {
    dispatch(
      switchLang(lng)
    )
  }

  return (

    <div className="langCtrl">
    <ul>
        {
            langs.map((lang, i) => {
              return (
                    <span key={lang}>
                        &nbsp;<a className={lang === ml.lang ? 'lng selected' : 'lng'} data={lang} onClick={(e) => { e.preventDefault(); setlang(lang) }}>{lang.toUpperCase()}</a>
                        { (langs[i + 1]) ? ' | ' : '' }
                    </span>
              )
            })
        }
    </ul>
    </div>

  )
}
