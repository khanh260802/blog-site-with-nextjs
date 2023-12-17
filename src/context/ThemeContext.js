"use client"

import { useState } from "react"

const { createContext } = require("react")

export const ThemeContext = createContext()
export const ThemeProvider = ({children}) => { 
    const [mode, setMode] = useState('dark'); 
    const toggle = () => {
        setMode((prev) => prev === 'light' ? 'dark' : 'light'); 
    } 
    return <ThemeContext.Provider value={{toggle, mode}}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>
}











