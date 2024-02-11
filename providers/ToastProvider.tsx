'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface ChildrenProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: ChildrenProps) {
  return (
    <div className="h-full">
      {children}
      <ToastContainer />
    </div>
  )
}
