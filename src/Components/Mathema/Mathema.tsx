import React, { useEffect, useState } from 'react'
import { Simplemath } from '../../Middleware/mathfuncs'
import { type IExample } from './inttypes'
import styles from './../../style/style.module.scss'
import mathstyles from './Mathema.module.css'
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'antd'

const Mathema = (): JSX.Element => {
  const { t } = useTranslation()
  const mymaths = new Simplemath()
  const maxVal = 10
  const pr: IExample = {
    dig1: mymaths.randomIntFromInterval(0, maxVal),
    dig2: mymaths.randomIntFromInterval(0, maxVal)
  }

  const [myAnswers, setMyAnswers] = useState<number[]>([])

  const [example, setExample] = useState<IExample>(pr)
  const [errorAnswer, setErrorAnswer] = useState<boolean>(true)
  const [closedAnswers, setClosedAnswers] = useState<boolean[]>([false, false, false, false])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const createExample = (): void => {
    const pr: IExample = {
      dig1: mymaths.randomIntFromInterval(0, maxVal),
      dig2: mymaths.randomIntFromInterval(0, maxVal)
    }
    setExample(pr)
    let answers: number[] = []
    answers.push(pr.dig1 + pr.dig2)
    while (answers.length < 4) {
      const newValue = mymaths.randomIntFromInterval(0, maxVal * 2)
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
  <Col >
  <h1 style={{ paddingLeft: '40px' }} className={styles.trackingInExpand}>{t('theGame.gameTitle')}</h1>
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
          <div className={mathstyles.mathActionWrapper}><div> + </div></div>
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
                            if (x === (example.dig1 + example.dig2)) {
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
                                console.log({ tClosedAnswers })
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
    </>
  )
}

export default Mathema