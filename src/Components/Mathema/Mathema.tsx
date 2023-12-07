import React, { useEffect, useState } from 'react'

import { Simplemath } from '../../Middleware/mathfuncs'
import { type IExample } from './inttypes'
import styles from './Mathema.module.css'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Mathema = () => {
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
  const createExample = () => {
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
    <div>
<div className={styles.correctResult} style={{ width: '100%', height: '100%', zIndex: 1000, visibility: errorAnswer ? 'hidden' : 'visible' }}>
<div>Hooray!</div>
</div>
        <div className={styles.primerWrapper}>

          <div className={styles.digit}>
            <div>
              {example.dig1}
            </div>
          </div>
          <div className={styles.mathActionWrapper}><div> + </div></div>
          <div className={styles.digit}>
            <div>
              {example.dig2}
            </div>
          </div>
          <div className={styles.mathActionWrapper}><div> = </div></div>
          <div className={errorAnswer ? `${styles.errorAnswer} ${styles.digit}` : `${styles.digit}`}>
            <div>
              {
                ((example.result == null) && <b>?</b>)
              }
              {
                ((example.result != null) && <b>{example.result} </b>)
              }
            </div>
          </div>

          <div className={styles.answersWrapper}>
            <div className={styles.titleAnswer}>{t('menu.chooseAnwer')}</div>
            <div className={`${styles.answers}` }>
              {
                myAnswers.map((x, index) => {
                  return (
                      <div className={ closedAnswers[index] ? `${styles.closedAnwer}` : ''}
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
        </div>

        <div className={styles.btnWrapper} onClick={() => {
          createExample()
          setClosedAnswers([])
        }}>
          <a href="#"><span>{t('menu.next')}</span></a>
        </div>
      </div>
  )
}

export default Mathema
