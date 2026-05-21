/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const PreviewContext = createContext()

export function PreviewProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem('previewRequested') === 'true'
  })

  const openForm = () => setIsOpen(true)
  const closeForm = () => setIsOpen(false)
  const markSubmitted = () => {
    setSubmitted(true)
    localStorage.setItem('previewRequested', 'true')
  }

  return (
    <PreviewContext.Provider value={{ isOpen, submitted, openForm, closeForm, markSubmitted }}>
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreview = () => useContext(PreviewContext)
