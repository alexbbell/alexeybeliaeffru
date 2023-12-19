import React, { useEffect, useState } from 'react'
import { Simplemath } from '../../Middleware/mathfuncs'
import { type IMathSettings, type IExample, AllMathActions } from './inttypes'
import styles from './../../style/style.module.scss'
import mathstyles from './Mathema.module.css'
import { useTranslation } from 'react-i18next'
import { Alert, Button, Col, Input, Modal, Row, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setMathSettings } from '../../store/langSlice'

const Mathema = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const mymaths = new Simplemath()
  const mathSettings: IMathSettings = useAppSelector(state => state.lang.mathSettings)

  const pr: IExample = {
    dig1: mymaths.randomIntFromInterval(mathSettings.minValue, mathSettings.maxValue),
    dig2: mymaths.randomIntFromInterval(mathSettings.minValue, mathSettings.maxValue)
  }

  const [myAnswers, setMyAnswers] = useState<number[]>([])

  const [example, setExample] = useState<IExample>(pr)
  const [errorAnswer, setErrorAnswer] = useState<boolean>(true)
  const [closedAnswers, setClosedAnswers] = useState<boolean[]>([false, false, false, false])
  const [settingsOpened, setSettingsOpened] = useState<boolean>(false)
  const [isAlertVisibe, setIsAlertVisibe] = useState<string>('none')
  const [localMathSettings, setLocalMathSettings] = useState<IMathSettings>(mathSettings)

  const mathActionOptions: any[] = []
  // eslint-disable-next-line array-callback-return
  AllMathActions.map(x => {
    mathActionOptions.push({ value: x, label: t(`theGame.${x}`), disabled: (x === 'multiplication' || x === 'division') })
  })

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const createExample = (): void => {
    const pr: IExample = {
      dig1: mymaths.randomIntFromInterval(mathSettings.minValue, mathSettings.maxValue),
      dig2: mymaths.randomIntFromInterval(mathSettings.minValue, mathSettings.maxValue)
    }

    if (pr.dig1 < pr.dig2) {
      [pr.dig1, pr.dig2] = [pr.dig2, pr.dig1]
    }
    let answers: number[] = []
    switch (mathSettings.mathAction) {
      case ('addition'):
        pr.correctResult = pr.dig1 + pr.dig2
        pr.sign = '+'
        answers.push(pr.correctResult)
        break
      case ('subtraction'):
        pr.correctResult = pr.dig1 - pr.dig2
        pr.sign = '-'
        answers.push(pr.correctResult)
        break
    }
    setExample(pr)

    while (answers.length < 4) {
      const newValue = mymaths.randomIntFromInterval(0, mathSettings.maxValue * 2)
      if (answers.filter(x => x === newValue).length === 0) answers.push(newValue)
    }
    answers = mymaths.shuffle(answers)
    setMyAnswers(answers)
  }
  useEffect(() => {
    createExample()
  }, [])

  return (
    <>
<Row className={` ${styles.pt40}`}>
  <Col xs={1} md={1} lg={1} ></Col>
  <Col xs={22} md={22} lg={22}>
    <div style={{ position: 'relative' }} >
      <h1 className={styles.trackingInExpand}>{t('theGame.gameTitle')}</h1>
      <h3>{t(`theGame.${mathSettings.mathAction}`)}. {mathSettings.minValue} &ndash; {mathSettings.maxValue}</h3>
      <div style={{ position: 'absolute', top: '0px', right: '0px' }}><Button className={mathstyles.btn} onClick={() => { setSettingsOpened(true) }}>{t('theGame.settings')}</Button></div>
    </div>
  </Col>
  <Col xs={1} md={1} lg={1} ></Col>
</Row>
<Row>
<div className={mathstyles.correctResult} style={{ width: '100%', height: '100%', zIndex: 1000, visibility: errorAnswer ? 'hidden' : 'visible' }}>
<div>Hooray!</div>
</div>
{/* */}
    <Col xs={1} md={1} lg={1} ></Col>
    <Col xs={22} md={22} lg={13} className={mathstyles.primerWrapper} >

          <div className={`${mathstyles.digit}  ${styles.pt40}`} >
            <div>
              {example.dig1}
            </div>
          </div>
          <div className={mathstyles.mathActionWrapper}><div> {example.sign} </div></div>
          <div className={mathstyles.digit}>
            <div>
              {example.dig2}
            </div>
          </div>
          <div className={mathstyles.mathActionWrapper}><div> = </div></div>
          <div className={errorAnswer ? `${mathstyles.errorAnswer} ${mathstyles.digit}` : `${mathstyles.digit}`}>
            <div>
              {
                ((example.result == null) && <b>?</b>)
              }
              {
                ((example.result != null) && <b>{example.result} </b>)
              }
            </div>
          </div>
</Col>
<Col xs={0} md={0} lg={1} ></Col>
<Col xs={1} md={1} lg={1}></Col>

<Col xs={22} md={24} lg={6}>
          <div className={mathstyles.answersWrapper}>
            <div className={mathstyles.titleAnswer}>{t('theGame.chooseAnwer')}</div>
            <div className={`${mathstyles.answers}` }>
              {
                myAnswers.map((x, index) => {
                  return (
                      <div className={ closedAnswers[index] ? `${mathstyles.closedAnwer}` : ''}
                          key={`ans${index}`}
                          onClick={() => {
                            if (x === (example.correctResult)) {
                              const newEx = { ...example }
                              newEx.result = x
                              setErrorAnswer(false)
                              setExample(newEx)
                              setTimeout(() => {
                                createExample()
                                setClosedAnswers([])
                                setErrorAnswer(true)
                              }, 3000)
                            } else {
                              if (!closedAnswers[index]) {
                                setErrorAnswer(true)
                                const newEx = { ...example }
                                newEx.result = x
                                const tClosedAnswers = [...closedAnswers]
                                tClosedAnswers[index] = true
                                setClosedAnswers(tClosedAnswers)
                                setExample(newEx)
                              }
                            }
                          }}><div>{x}</div></div>
                  )
                })
              }
            </div>
          </div>
          </Col>
    </Row>
    <Row className={`${styles.pb40} ${styles.pt40}`}>
      <Col>
        <div className={mathstyles.btnWrapper} onClick={() => {
          createExample()
          setClosedAnswers([])
        }}><a href="#"><span>{t('theGame.next')}</span></a></div>
        </Col>
    </Row>

          <Modal
            closable
            open={settingsOpened}
            onCancel={ () => { setSettingsOpened(false) }}
            onOk={ () => {
              dispatch(setMathSettings(localMathSettings))
              setSettingsOpened(false)
            }}
            >
            <Alert message={t('theGame.errorMinMaxText')} type="error" style={{ display: isAlertVisibe }} />

            <div>{t('theGame.minValue')}: <Input type='number' value={localMathSettings.minValue}
            onChange={(e) => {
              if (Number(e.currentTarget.value) > localMathSettings.maxValue) {
                setIsAlertVisibe('block')
                setTimeout(function () {
                  setIsAlertVisibe('none')
                }, 2.0 * 1000) // prints "zero,one,two" after 2 seconds
              } else {
                setLocalMathSettings({ ...localMathSettings, minValue: Number(e.currentTarget.value) })
              }
            }}></Input></div>
            <div>{t('theGame.maxValue')}: <Input type='number' value={localMathSettings.maxValue}
              onChange={(e) => {
                setLocalMathSettings({ ...localMathSettings, maxValue: Number(e.currentTarget.value) })
              }}></Input></div>
            <div>{t('theGame.action')}:&nbsp;<br />
              <Select style={{ width: 160 }} options={ mathActionOptions } value={ localMathSettings.mathAction}
              onSelect={(e) => {
                setLocalMathSettings({ ...localMathSettings, mathAction: e })
              }}>
              </Select>
            </div>
          </Modal>
    </>
  )
}

export default Mathema
