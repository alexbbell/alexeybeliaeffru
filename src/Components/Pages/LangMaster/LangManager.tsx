import React, { useEffect, useState } from 'react'
import { Row, Col, Space, Input, type CollapseProps, Collapse, Button } from 'antd'
import styles from './../../../style/style.module.scss'
import { useTranslation } from 'react-i18next'
import formstyles from './LangMaster.module.scss'
import { emptyObject, type Skill, type ISiteObjects, type WorkItem, type EducationItem } from './BLLangMaster'
import { GetLangContent, updateSkills } from './ApiRequests'
import LangSelector from './LangSelector'
import SkillsEditor from './SkillsEditor'
import TextArea from 'antd/es/input/TextArea'
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

  const jsxInputText = (fieldName: 'address' | 'beforename' | 'bio' | 'description' | 'email' | 'fullname' | 'greeting' | 'image' | 'name' | 'phone' | 'position' | 'resumedownload' | 'social' | 'titleAbout' | 'website'): JSX.Element => {
    let cValue = ''
    if (fieldName === 'address') cValue = content.main.address
    if (fieldName === 'beforename') cValue = content.main.beforename
    if (fieldName === 'bio') cValue = content.main.bio
    if (fieldName === 'description') cValue = content.main.description
    if (fieldName === 'email') cValue = content.main.email
    if (fieldName === 'fullname') cValue = content.fullname
    if (fieldName === 'greeting') cValue = content.main.greeting
    if (fieldName === 'image') cValue = content.main.image
    if (fieldName === 'name') cValue = content.main.name
    if (fieldName === 'phone') cValue = content.main.phone
    if (fieldName === 'position') cValue = content.main.position
    if (fieldName === 'resumedownload') cValue = content.main.resumedownload
    if (fieldName === 'website') cValue = content.main.website
    if (fieldName === 'titleAbout') cValue = content.main.titleAbout

    return (
      <div className={formstyles.formRow}>
      <div key={fieldName}>
    <label>{fieldName}</label></div>
    <div>
    <Input type='text' value={`${cValue}`} aria-label={fieldName} width={400}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
        const t = content
        if (fieldName === 'address') t.main.address = evt.currentTarget.value
        if (fieldName === 'beforename') t.main.beforename = evt.currentTarget.value
        if (fieldName === 'bio') t.main.bio = evt.currentTarget.value
        if (fieldName === 'description') t.main.description = evt.currentTarget.value
        if (fieldName === 'email') t.main.email = evt.currentTarget.value
        if (fieldName === 'fullname') t.fullname = evt.currentTarget.value
        if (fieldName === 'greeting') t.main.greeting = evt.currentTarget.value
        if (fieldName === 'image') t.main.image = evt.currentTarget.value
        if (fieldName === 'name') t.main.name = evt.currentTarget.value
        if (fieldName === 'phone') t.main.phone = evt.currentTarget.value
        if (fieldName === 'position') t.main.position = evt.currentTarget.value
        if (fieldName === 'resumedownload') t.main.resumedownload = evt.currentTarget.value
        if (fieldName === 'website') t.main.website = evt.currentTarget.value
        if (fieldName === 'titleAbout') t.main.titleAbout = evt.currentTarget.value
        setContent({ ...t })
      } } /></div>
      </div>
    )
  }

  const jsxLangComponent = (alldata: ISiteObjects): JSX.Element => (
    <div>
      <>{jsxInputText('fullname')}</>
      <br />

      <>{jsxInputText('image')}</>
      <br />
      <>{jsxInputText('image')}</>
      <>{jsxInputText('bio')}</>
      <>{jsxInputText('email')}</>
      <>{jsxInputText('phone')}</>
      <div key='description'>
        <label>description at the 1st page</label>
        <TextArea value={`${content.main.description}`} aria-label='description' rows={6}
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            const t = content
            t.main.description = evt.currentTarget.value
            setContent({ ...t })
          } } /></div>

<div key='about'>
        <label>about</label>
        <TextArea value={`${content.main.about}`} aria-label='about' rows={15}
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            const t = content
            t.main.about = evt.currentTarget.value
            setContent({ ...t })
          } } /></div>
    </div>
  )

  const jsxWork = (alldata: ISiteObjects): JSX.Element => <>
    <h1 key='h1edu'>Work</h1>
    <div onClick={ () => {
      const t = content
      const newWork: WorkItem = { company: '', description: '', title: '', years: '' }
      t.work.content.push(newWork)
      setContent({ ...t })
    }}><span style={{ fontSize: 20 }}>+</span>Add new row</div>
    {content.work.content.map((edu, index) => {
      return <div key={`j${index}`} className={formstyles.arrayItem}>

<div className={formstyles.remove} onClick={ () => {
  const newWorks = content
  newWorks.work.content.splice(index, 1)
  setContent({ ...newWorks })
}}><span>-</span> Remove row</div>
        Title: <input key={`dddeg${index}`} value={edu.title} className={formstyles.inputText}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            evt.preventDefault()
            const t = { ...content }
            t.work.content[index].title = evt.currentTarget.value
            setContent({ ...t })
          } } /><br />
        company <input key={'schoold'} value={String(edu.company)} className={formstyles.inputText}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            const t = { ...content }
            t.work.content[index].company = evt.currentTarget.value
            setContent({ ...t })
          } } /><br />
        years: <input key={'grad'} value={String(edu.years)} className={formstyles.inputText}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            const t = { ...content }
            // t.content[index].graduated = evt.currentTarget.value
            t.work.content[index].years = evt.currentTarget.value
            setContent({ ...t })
          } } /><br />
        <textarea key={'ddescr'} value={String(edu.description)} cols={65} rows={5}
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            const t = { ...content }
            t.work.content[index].description = evt.currentTarget.value
            setContent({ ...t })
          } } />
      </div>
    })}
  </>

  const jsxEducation = (alldata: ISiteObjects): JSX.Element => {
    return <>
    <h1 key='h1edu'>Education</h1>
    <div onClick={ () => {
      const t = content
      const newEdu: EducationItem = { degree: '', description: '', graduated: '', school: '' }
      t.education.content.push(newEdu)
      setContent({ ...t })
    }}><span style={{ fontSize: 20 }}>+</span>Add new row</div>
    {
      content.education.content.map((edu, index) => {
        return <div key={`j${index}`}>
<div className={formstyles.remove} onClick={ () => {
  const newEducations = content
  newEducations.education.content.splice(index, 1)
  setContent({ ...newEducations })
}}><span>-</span> Remove row</div>
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
        label: 'Main',
        children: <>{jsxLangComponent(content)}</>
      },
      {
        key: 'cp4',
        label: 'Work',
        children: <>{jsxWork(content)}</>
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
    <Collapse items={GetCollapseProps('ru')} defaultActiveKey={['cp4']} />
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
