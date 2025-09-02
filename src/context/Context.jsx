import React from 'react'
import { useState,useEffect } from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'

export const navContext = createContext()
export const navcolorContext = createContext()

function Context({children}) {
    const [open, setopen] = useState(false)
    const [navColor, setNavColor] = useState('white')

    const locate = useLocation().pathname;

    useEffect(() => {
        if(locate === '/Projects' || locate === '/Agents'){
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

  return (
    <>
    <div>
            <navContext.Provider value={[open, setopen]}>
                <navcolorContext.Provider value={[navColor,setNavColor]}>
                    {children}
                </navcolorContext.Provider>
            </navContext.Provider>
        </div>
    </>
  )
}

export default Context
