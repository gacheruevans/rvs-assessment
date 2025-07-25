"use client";
import React, { useState } from 'react'
import { useServicesData } from '@/app/contexts/ServicesContext';
import Modal from './modal'

const Services = () => {
  const { data, loading, error } = useServicesData();
  const [showModal, setShowModal] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No services found.</div>;

  return (
    <div className="h-screen py-2">
      <h1 className="text-1xl text-blue-500 font-semibold p-2 text-right">Core Volunteer Services</h1>
      <div className="bg-blue-50 border text-slate-600 rounded-t-md grid grid-cols-5 font-bold border-b p-2 text-center">
        <div>#</div>
        <div className="text-start">Title</div>
        <div className="text-start">Description</div>
        <div className="text-center">Needed Volnteer Slots</div>
        <div className="text-center">Actions</div>
      </div>
      <div className="text-slate-600 max-h-screen overflow-scroll grid grid-cols-1 gap-4">
        {data.map((service: { id: number; title: string; description: string, slots: number }) => (
          <div key={service.id} className="grid grid-cols-5 border-b border-slate-300 p-1 text-center">
            <div className="text-center">{service.id}</div>
            <div className="text-start">{service.title}</div>
            <div className="text-start">{service.description}</div>
            <div className="text-center">{service.slots}</div>
            <div className="text-center">
              <button 
                  className="text-xs font-semibold p-1 rounded-md bg-blue-500 text-white hover:bg-blue-300 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >Review</button>
            </div>
          </div>
        ))}
      </div>
      <Modal isVisible={showModal} onClose={()=> setShowModal(false)}/>
    </div>
  )
}

export default Services