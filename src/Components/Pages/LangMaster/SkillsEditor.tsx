import React, { useEffect, useState } from 'react'
import { type Skill } from './BLLangMaster'

const SkillsEditor = (props: any): JSX.Element => {
  const [swSkills, setSwSkills] = useState<Skill[]>([])
  useEffect(() => {
    setSwSkills(props.data)
  }, [props])

  return (
    <>

      <h1>Skills</h1>
      {
      swSkills.map((sk, index) => {
        return <>
          <input type='text' value={String(sk.name)}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              const t = swSkills
              t[index].name = evt.currentTarget.value
              props.fnc(t)
            }} />
          <br />
          <textarea key={`dd${sk.name}`} value={String(sk.description)} cols={65} rows={5}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
              const t = swSkills
              t[index].description = evt.currentTarget.value
              props.fnc(t)
            }} /><br />
        </>
      })
    }
     <br />
    </>
  )
}

export default SkillsEditor
