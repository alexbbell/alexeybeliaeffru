import React, { useState } from 'react'

const LangSelector = (props: any): JSX.Element => {
  const [swLang, setSwLang] = useState('en')

  const langs: string[] = ['ru', 'en', 'he', 'qq']
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    {
        langs.map((el) => {
          return <div key={`langs${el}`}
          onClick={ () => {
            setSwLang(el)
            props.data(el)
          }}
          style={{ width: '40px', fontWeight: (el === swLang) ? 'bold' : 'normal' }}
          >{el}</div>
        })
    }
     </div>
  )
}

export default LangSelector
