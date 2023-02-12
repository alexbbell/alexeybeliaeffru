import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { switchLang} from '../store/langSlice';

export default function LangSwitch()  {
  

    const langs = [  'en', 'ru', 'isr' ]
    const [selectedLang,  setSelectedLang ] = useState();
    
    const dispatch = useDispatch();
    const ml = useSelector( state => state.lang);

    const setlang = (lng) =>  {
        dispatch(switchLang(lng));
    }

        return (
            
    <div className="langswitch">
        <div>

            <div className="langBar">
                {
                    langs.map((lang, i) => {
                        return (
                            <span key={lang}>
                                <a className={lang == ml.lang ? 'lng selected' : 'lng'} data={lang} onClick={(e) => { e.preventDefault(); setlang(lang); }}>{lang.toUpperCase()}</a>&nbsp;|&nbsp;
                            </span>

                        )
                    })
                }
            </div>
        </div>
    </div>
            
            )

}

