import { createContext, useContext, useState, ReactNode } from 'react'
import * as React from 'react'

type ModalContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return React.createElement(
    ModalContext.Provider,
    { value: { isOpen, openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) } },
    children,
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
