import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyLayout } from './Components/MyLayout'
import { Homepage } from './Components/Pages/Homepage'
import { About } from './Components/Pages/About'
import { Skills } from './Components/Pages/Skills'
import Blog from './Components/Pages/Blog'

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
      {/* <Route path="/gallery" element={<Gallery />}></Route>  */}

    </Route>
  </Routes>

  )
}

export default App
