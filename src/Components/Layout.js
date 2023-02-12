import React, {}  from 'react';

import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../Controls/Footer';
import LangSwitch from '../Controls/LangSwitch'

const setActive =   ( {isActive}) => isActive ? 'active-link' : '' ;

export const Layout = () => {

  return (
    <div className='container'>
      <div className='row'>
        <header className="header_area">
          <div className='row'>
            <div className="col-lg-10"></div>
            <div className="col-lg-2 "><LangSwitch /></div>

          </div>

          <div className="main_menu  d-flex flex-column flex-md-row align-items-center ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand logo_h" href="/"><img src="/public/img/abblogo.png" alt="" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">

                  <ul className="nav navbar-nav menu_nav justify-content-end">
                    <li className="nav-item"><NavLink className={setActive} to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className={setActive} to="/experience">Work & education</NavLink></li>
                    <li className="nav-item"><NavLink className={setActive} to="/skills">Skills</NavLink></li>
                    <li className="nav-item"><NavLink className={setActive} to="/blog">Blog</NavLink></li>
                    {/* <li className="nav-item"><NavLink className={setActive} to="/blog">Blog</NavLink></li> */}

                  </ul>
                </div>
              </div>
            </nav>
          </div>

        </header>
      </div>

      <div className='row'>
        <div className="col-lg-10 offset-lg-1 pt-4">
          <Outlet></Outlet>
        </div>
      </div>
        
        
        <Footer></Footer>
      </div>
  )
}
