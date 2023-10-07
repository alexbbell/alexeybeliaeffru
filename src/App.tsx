/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import { MyLayout } from './Components/MyLayout'
import { Homepage } from './Components/Pages/Homepage'

import { lazy } from 'react'
import Fpslider from './Components/Fpslider'
const About = lazy(async () => await import('./Components/Pages/About'))
const Skills = lazy(async () => await import ('./Components/Pages/Skills'))
const Blog = lazy(async () => await import ('./Components/Pages/Blog'))
const LangMaster = lazy(async () => await import ('./Components/Pages/LangMaster/LangMaster'))

const App = (): JSX.Element => {
  // const { lang } = useParams()

  // const lang = useSelector(state => state) //
  return (
    <>

    <Routes>
    <Route path="/" element={<MyLayout />}>
      <Route path="/" element={<Fpslider title='FP Slider' />}></Route>
      <Route path="/:lng/" element={<Homepage />}></Route>
      <Route path="/:lng/blogs/" element={<Blog />}></Route>
      {/* <Route path="/" element={<Banner data={resumeData.main} />}></Route> */}
      <Route path="/:lng/about/" element={<About />}></Route>
      <Route path="/:lng/experience/" element={<Skills query='work' />}></Route>
      <Route path="/:lng/skills/" element={<Skills query='skills' />}></Route>
      <Route path="/:lng/lngmngr/" element={<LangMaster />}></Route>
    </Route>
  </Routes>
  </>

  )
}

export default App
