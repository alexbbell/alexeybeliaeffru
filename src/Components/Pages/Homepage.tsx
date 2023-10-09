import React, { } from 'react'

import { Row, Col, Divider } from 'antd'
import { useNavigate, NavLink } from 'react-router-dom'
import styles from './../../style/style.module.scss'
import { useTranslation, Trans } from 'react-i18next'
import Newsloader from './../NewsLoader'
import AbbAnalogClock from './AbbAnaligClock'

export const Homepage = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  return (
<>
<Row className={styles.pb40}>
        <Col xs={14} md={15} lg={9} style={{ textAlign: 'center' }}>
            <div className={styles.trackingInExpand}>
                <img src='/img/abbfp.jpg' className={styles.image}
                alt={`${t('main.beforename')} {t('main.name')}`} />
            </div>
        </Col>
        <Col xs={24} md={9} lg={13} className={styles.about}>
            <h3><Trans i18nKey="main.greeting" /></h3>

            <h1 className={styles.trackingInExpand}>{t('main.beforename')} {t('main.name')}</h1>
            <p>{t('main.description')}</p>
            <p>
                <NavLink to={`/${i18n.language}/about/`} className={styles.more}>{t('morelink')}...</NavLink>
            </p>
<AbbAnalogClock size={200} />
        </Col>
    </Row>

    <Divider plain={true} className={`${styles.line} ${styles.pb10}`}></Divider>

    <Row className={`${styles.pb40}`} justify="space-between">
        <Col xs={1} md={0} lg={2}></Col>

        <Col xs={23} md={11} lg={8}>

        <div id='education' className={`${styles.fpadvert} ${styles.education}`}
        onClick={
            () => {
              navigate('./experience')
            }
        }
        >
                <NavLink to="./experience" className={`${styles.h3} ${styles.uppercase}`}>{t('menu.education')}</NavLink>
                </div>
        </Col>
        <Col xs={1} md={0} lg={2}></Col>
        <Col xs={23} md={11} lg={8}>
    <div id="skills" className={`${styles.fpadvert} ${styles.skills} ${styles.skills}`}
            onClick={
                () => {
                  navigate('./skills')
                }
            }
            >
            <NavLink to="" className={`${styles.h3} ${styles.uppercase}`}>{t('menu.skills')}</NavLink>
            </div>

            </Col>
            <Col xs={0} md={0} lg={2}></Col>
    </Row>
    <Row>
      <Col xs={1} md={1} lg={1}></Col>
      <Col xs={22} md={22} lg={22}>
        <Newsloader />
      </Col>
    </Row>
</>
  )
}
