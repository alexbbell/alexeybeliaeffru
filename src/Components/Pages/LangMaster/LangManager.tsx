import React, { useEffect, useState } from 'react'
import { Row, Col, Space, Input, type CollapseProps, Collapse, Button } from 'antd'
import styles from './../../../style/style.module.scss'
import { useTranslation } from 'react-i18next'
import formstyles from './LangMaster.module.scss'
import { emptyObject, type Skill, type ISiteObjects } from './BLLangMaster'
import { GetLangContent, updateSkills } from './ApiRequests'
import LangSelector from './LangSelector'
import SkillsEditor from './SkillsEditor'

const LangManager = (): JSX.Element => {
  const { t } = useTranslation()

  // const selectedLang = useAppSelector(state => state.lang.lang)
  const [selectedLang, setSelectedLang] = useState('en')
  const [content, setContent] = useState<ISiteObjects>(emptyObject)

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const switchLangEdit = (lang: string): void => {
    setSelectedLang(lang)
  }

  const readdata = async (): Promise<void> => {
    const siteData: ISiteObjects = await GetLangContent(selectedLang)
    // const eduData: ISiteObjects = await GetLangContent(selectedLang)
    setContent(siteData)
  }

  const reloadSkills = (newSkills: Skill[]): void => {
    const t = content
    t.skills.content = newSkills
    setContent({ ...t })
  }

  useEffect(() => {
    void readdata()
    setIsLoaded(true)
  }, [selectedLang])

  const jsxLangComponent = (alldata: ISiteObjects): JSX.Element => {
    return (
      <div className={formstyles.formRow}>
        <div key='fullname'>
          <label>fullname</label>
          <Input type='text' value={`${content.fullname}`} aria-label='Last name'
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              const t = content
              t.fullname = evt.currentTarget.value
              setContent({ ...t })
            }} /></div>

      </div>
    )
  }

  const jsxEducation = (alldata: ISiteObjects): JSX.Element => {
    return <>
    <h1 key='h1edu'>Education</h1>
    {
      content.education.content.map((edu, index) => {
        return <div key={`j${index}`}>
          Degree: <input key={`dddeg${index}`} value={edu.degree} className={formstyles.inputText}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              evt.preventDefault()
              const t = { ...content }
              t.education.content[index].degree = evt.currentTarget.value
              setContent({ ...t })
            }} /><br />
            School <input key={'schoold'} value={String(edu.school)} className={formstyles.inputText}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                const t = { ...content }
                t.education.content[index].school = evt.currentTarget.value
                setContent({ ...t })
              }} /><br />
            graduated: <input key={'grad'} value={String(edu.graduated)} className={formstyles.inputText}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                const t = { ...content }
                console.log('t', t)
                // t.content[index].graduated = evt.currentTarget.value
                t.education.content[index].graduated = evt.currentTarget.value
                setContent({ ...t })
              }} /><br />
            <textarea key={'ddescr'} value={String(edu.description)} cols={65} rows={5}
              onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                const t = { ...content }
                t.education.content[index].description = evt.currentTarget.value
                setContent({ ...t })
              }} />
        </div>
      })
    }
   <br />
  </>
  }
  const GetCollapseProps = (lang: string): CollapseProps['items'] => {
    const items: CollapseProps['items'] = [
      {
        key: 'cp1',
        label: 'Fio',
        children: <>{jsxLangComponent(content)}</>
      },
      {
        key: 'cp2',
        label: 'Skills',
        // children: <>{skillJSX(content)}</>
        children: <SkillsEditor data={content.skills.content} fnc={reloadSkills} />
      },
      {
        key: 'cp3',
        label: 'Education',
        // children: <EducationEditor data={education} fnc={reloadEdu} />
        children: <>{jsxEducation(content)}</>
      }

    ]
    return items
  }

  return (
<>
<Row className={`${styles.pb40} ${styles.pt40}`}>
    <Col xs={1} md={1} lg={1}></Col>
    <Col xs={21} md={21} lg={21}>
      <LangSelector data={switchLangEdit} />

    {
  !isLoaded &&
  (

    <div>...Loading  </div>
  )
  }

{
  isLoaded && (
    <>
    <h1>{t('main.titleAbout')}</h1>
    <Collapse items={GetCollapseProps('ru')} defaultActiveKey={['cp3']} />
    <Button type="primary" onClick={() => { updateSkills(selectedLang, content) }}>Update Skills {selectedLang}</Button>
    </>
  )
}

</Col>
    </Row>
    <Space></Space>

</>
  )
}
export default LangManager
