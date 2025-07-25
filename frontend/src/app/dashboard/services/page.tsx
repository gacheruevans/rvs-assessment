"use client";
import React from 'react'
import { useServicesData } from '@/app/contexts/ServicesContext';

const Services = () => {
    const { data, loading, error } = useServicesData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.length === 0) return <div>No services found.</div>;
  return (
    <div className="h-screen ">
      <h1 className="text-1xl text-blue-500 font-semibold p-2 text-right">Core Volunteer Services</h1>
      <div className="bg-blue-50 border text-slate-600 rounded-t-md grid grid-cols-4 font-bold border-b p-2 text-center">
        <div>#</div>
        <div className="text-start">Title</div>
        <div className="text-start">Description</div>
        <div className="text-center">Total Slots</div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.map((service: { id: number; title: string; description: string, slots: number }) => (
          <div key={service.id} className="grid grid-cols-4 border-b py-2">
            <div className="text-center">{service.id}</div>
            <div>{service.title}</div>
            <div>{service.description}</div>
            <div className="text-center">{service.slots}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services