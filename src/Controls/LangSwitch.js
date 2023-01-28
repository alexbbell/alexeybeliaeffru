import React, { Component, useState} from 'react'
import { useDispatch } from "react-redux";
import { switchLang} from '../store/langSlice';

export default function LangSwitch()  {
  

    
    const dispatch = useDispatch();
    const setlang = (lng) => dispatch(switchLang(lng))


        return (
            
        <div className="langswitch">
            <div>
                
                <div className="langBar">
                    <a className='lng ' data="en" onClick={(e) =>  setlang('en')  }>EN</a> |&nbsp;
                    <a  className='lng' data="rus" onClick={(e) => setlang('ru')}>RU</a> 
                    {/* | <a href="#" data="isr" onClick={(e) => this.props.data.setLang('isr')}>ISR</a> */}
                </div>

            </div>
        </div>
            
            )

}

