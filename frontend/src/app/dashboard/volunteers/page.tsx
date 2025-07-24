"use client";
import React from 'react'
import { useData } from '@/app/context/VolunteerContext'

const Volunteers = () => {
    const { data, loading, error } = useData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.length === 0) return <div>No volunteers found.</div>;
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Volunteers</h1>
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-3 font-bold border-b pb-2">
        <div>#</div>
        <div>Name</div>
        <div>Email</div>
      </div>
      {data.map((volunteer: { id: number; name: string; contact?: string }) => (
        <div key={volunteer.id} className="grid grid-cols-3 border-b py-2">
          <div>{volunteer.id}</div>
          <div>{volunteer.name}</div>
          <div>{volunteer.contact}</div>
        </div>
      ))}
    </div>
</div>
  )
}

export default Volunteers