/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const PreviewContext = createContext()

export function PreviewProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem('previewRequested') === 'true'
  })

  const openForm = useCallback(() => setIsOpen(true), [])
  const closeForm = useCallback(() => setIsOpen(false), [])
  const markSubmitted = useCallback(() => {
    setSubmitted(true)
    localStorage.setItem('previewRequested', 'true')
  }, [])

  const value = useMemo(
    () => ({ isOpen, submitted, openForm, closeForm, markSubmitted }),
    [isOpen, submitted, openForm, closeForm, markSubmitted],
  )

  return (
    <PreviewContext.Provider value={value}>
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreview = () => useContext(PreviewContext)
