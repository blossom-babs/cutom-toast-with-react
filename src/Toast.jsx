import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";



const Toast = ({isOpen, closeModal }) => {  


    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            closeModal()
          }, 10000); // 2 seconds
    
          return () => {
            clearTimeout(timer);
          };
        }
      }, [isOpen]);

    return (
        <div onClick={closeModal} className='toast-container'>
            <div className="toast">
                <button> <AiOutlineClose /></button>
                <p>Email sent successfully</p>
                <div style={{ backgroundColor: 'green' }} className='progress-bar'></div>
            </div>
        </div>
    )
}

export default Toast