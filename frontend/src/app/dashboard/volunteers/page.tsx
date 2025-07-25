"use client";
import React, { useState } from 'react'
import { useData } from '@/app/contexts/VolunteerContext'

const Volunteers = () => {
  const { vdata, vloading, verror } = useData();
  const [currentPage, setCurrentPage] = useState(1);

  if (vloading) return <div>Loading...</div>;
  if (verror) return <div>Error: {verror}</div>;
  if (!vdata || vdata.length === 0) return <div>No volunteers found.</div>;
  
  /* Pagination logic */
  const itemsPerPage = 10;
  const totalPages = Math.ceil(vdata.length / itemsPerPage);

  const paginatedData = vdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="h-screen">
      <div>
        <h1 className="text-1xl text-blue-500 font-semibold p-2 text-right">Active Volunteers</h1>
        <div className="bg-blue-50 border text-slate-600 rounded-t-md grid grid-cols-4 font-bold border-b p-2 text-center">
          <div>#</div>
          <div className="text-start">Name</div>
          <div className="text-start">Contact</div>
          <div>Action</div>
        </div>
      </div>   
      <div className="text-slate-600 max-h-screen overflow-scroll grid grid-cols-1 gap-4">
        {paginatedData.map((volunteer: { id: number; name: string; contact?: string }) => (
          <div key={volunteer.id} className="grid grid-cols-4 border-b border-slate-300 p-1 text-center">
            <div>{volunteer.id}</div>
            <div className="text-start">{volunteer.name}</div>
            <div className="text-start">{volunteer.contact ?? "N/A"}</div>
            <div className="space-x-1 text-center">
              <button className="text-xs font-semibold p-1 rounded-md bg-green-500 text-white hover:bg-green-300 cursor-pointer">Assign</button>
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
    </div>
  )
}

export default Volunteers