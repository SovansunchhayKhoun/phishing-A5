import React from "react"
import Modal from "@mui/material/Modal"
import { useEffect, useRef } from "react"

export default function ModalSample({ children, setModalOpen, modalOpen, className }) {
  const modalContent = useRef(null)
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return
      setModalOpen(false)
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  })
  return (
    <Modal open={modalOpen}>
      <div className="flex w-full items-center justify-center h-full">
        <div ref={modalContent} className={`${className}`}>
          {children}
        </div>
      </div>
    </Modal>
  )
}

