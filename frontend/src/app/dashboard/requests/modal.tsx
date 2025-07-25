import React from 'react'

const RequestAssignModal = ({ isVisible, onClose }) => {
    if(!isVisible) return null;
  return (
    <div 
      className="fixed inset-0 bg-black opacity-25 backdrop-blur-sm flex justify-center items-center cursor-pointer"
      onClick={()=> onClose()}>
        <div className="w-[600px] flex flex-col">
            <button 
              className="text-white text-xl place-self-end" 
              onClick={() => onClose()}> X</button>
            <div className="bg-white text-slate-900 p-2 rounded">
                Modal
            </div>
        </div>
    </div>
  )
}

export default RequestAssignModal