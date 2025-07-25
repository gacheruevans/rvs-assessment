"use client";
import React, { useState } from 'react'
import { useRequestsData } from '@/app/contexts/RequestsContext'
import Modal from './modal'

const VolunteerRequests = () => {
  const { data, loading, error } = useRequestsData();

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  if(loading) return <div>Loading...</div>
  if(error) return<div>Error: {error}</div>
  if(!data || data.length === 0) return <div>No requests found</div>

  /* Pagination logic */
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="h-screen py-2">
      <h1 className="text-1xl text-blue-500 font-semibold p-2 text-right">Volnteer Facility Requests</h1>
      <div className="bg-blue-50 border text-slate-600 rounded-t-md grid grid-cols-5 font-bold border-b p-2 text-center">
        <div>#</div>
        <div className="text-start">Facility</div>
        <div className="text-start">Slots</div>
        <div className="text-start">Service</div>
        <div className="text-center">Actions</div>
      </div>
      <div className="text-slate-600 max-h-screen overflow-scroll grid grid-cols-1 gap-4">
        {paginatedData.map((facilityrequest: { id: number; facility: string; slots: number, serviceId: number }) => (
          <div key={facilityrequest.id} className="grid grid-cols-5 border-b border-slate-300 p-1 text-center">
            <div className="text-center">{facilityrequest.id}</div>
            <div>{facilityrequest.facility}</div>
            <div>{facilityrequest.slots}</div>
            <div>{
              {
                1: "Hospital Support",
                2: "Community Support",
                3: "Emergency Support"
              }[facilityrequest.serviceId] || "Unknown Service"}
            </div>
            <div className="space-x-1 text-center">
              <button 
                className="text-xs font-semibold p-1 rounded-md bg-green-500 text-white hover:bg-green-300 cursor-pointer"
                onClick={() => setShowModal(true)}
              >Assign</button>
              <button className="text-xs font-semibold p-1 rounded-md bg-blue-500 text-white hover:bg-blue-300 cursor-pointer">Review</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <Modal isVisible={showModal} onClose={()=> setShowModal(false)}/>
    </div>
  )
}

export default VolunteerRequests