"use client";
import React, { useState } from 'react'
import { useData } from '@/app/contexts/VolunteerContext'

const RequestAssignModal = ({ isVisible, onClose }) => {
  const {vdata, vloading, verror} = useData();
  const [selectedVolnteer, setSelectedVolnteer] = useState("");

  if(vloading) return <div>Loading...</div>
  if(verror) return<div>Error: {verror}</div>
  if(!vdata || vdata.length === 0) return <div>No volunteers found</div>

  if(!isVisible) return null;
    
  return (
    <div 
      className="fixed inset-0 bg-blend-soft-light bg-trasparent backdrop-blur-xs flex justify-center items-center"
    >
        <div className="w-[400px] flex flex-col">
            <div className="bg-white shadow-2xl text-slate-900 p-2 rounded">
                <form action="#" className=" text-center w-full space-y-8 p-8">
                  <select 
                    id="volunteer" 
                    className="rounded-md border-2 border-slate-300  p-2"
                    onChange={ e => setSelectedVolnteer(e.target.value)} required>
                    <option>Select a volunteer</option>
                    {vdata.map((volunteer: {id:number; name:string})=> (
                        <option key={volunteer.id} value={volunteer.name}>{volunteer.name}</option>
                      ))
                    }
                  </select>
                  <div className="flex justify-center gap-2">
                    <button 
                      type="button" 
                      className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
                      onClick={() => onClose()}>Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded bg-royal cursor-pointer">Assign</button>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RequestAssignModal