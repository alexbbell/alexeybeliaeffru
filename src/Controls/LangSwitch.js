import React, { Component, useState} from 'react'

class LangSwitch extends React.Component {
  
    constructor(props) {
        super(props);

        this.state =  {
            "chosenLang": "selected"
        };
    }
    

    render() {
        return (
            
        <div className="langswitch">
            <div>
                
                <div className="langBar">
                    <a href="#" className='lng langSelected' data="en" onClick={(e) => {
                    this.props.data.setLang('en')
                    
                    }
                    }>EN</a> |&nbsp;
                    <a href="#" className='lng' data="rus" onClick={(e) => this.props.data.setLang('ru')}>RU</a> 
                    {/* | <a href="#" data="isr" onClick={(e) => this.props.data.setLang('isr')}>ISR</a> */}
                </div>

            </div>
        </div>
            
            )
    }
}

export default LangSwitch;