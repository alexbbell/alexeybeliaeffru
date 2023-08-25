import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyLayout } from './Components/MyLayout'
import { Homepage } from './Components/Pages/Homepage'
import { lazy } from 'react'
import LangManager from './Components/Pages/LangMaster/LangManager'

const About = lazy(async () => await import('./Components/Pages/About'))
const Skills = lazy(async () => await import ('./Components/Pages/Skills'))
const Blog = lazy(async () => await import ('./Components/Pages/Blog'))
const App = (): JSX.Element => {
//  const lang = useSelector(state => state) //

  return (

    <Routes>
    <Route path="/" element={<MyLayout />}>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/blogs" element={<Blog />}></Route>
      {/* <Route path="/" element={<Banner data={resumeData.main} />}></Route> */}
      <Route path="/about" element={<About />}></Route>
      <Route path="/experience" element={<Skills query='work' />}></Route>
      <Route path="/skills" element={<Skills query='skills' />}></Route>
      <Route path="/lngmngr" element={<LangManager />}></Route>

    </Route>
  </Routes>

  )
}

export default App
