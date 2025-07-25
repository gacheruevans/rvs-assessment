"use client";
import React, { useState } from 'react'
import { useApplicationsData } from '@/app/contexts/ApplicationsContext'
import { useData } from '@/app/contexts/VolunteerContext'

const VoulunteerApplication = () => {
  const {data, loading, error} = useApplicationsData();
  const [currentPage, setCurrentPage] = useState(1);
  const {vdata, vloading, verror} = useData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No Applications found.</div>;


  if (vloading) return <div>Loading...</div>;
  if (verror) return <div>Error: {error}</div>;
  if (!vdata || vdata.length === 0) return <div>No Volunteers found.</div>;

  /* Pagination logic */
  const itemsPerPage = 15;
  const totalPages = Math.ceil(vdata.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="h-screen">
      <h1 className="text-1xl font-semibold mb-4 text-right text-blue-500">Volunteer Applicant List</h1>
      <div className="text-slate-600 grid grid-cols-5 font-bold border rounded-t-md p-2 bg-slate-200 text-center">
        <div>#</div>
        <div className="text-start">Volunteer</div>
        <div className="text-start">Service</div>
        <div className="text-start">Status</div>
        <div>Action</div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {paginatedData.map((application: { id: number; volunteerId: number; serviceId: number, status: string }) => (
            <div key={application.id} className="grid grid-cols-5 border-b py-2">
            <div className="text-center">{application.id}</div>
            <div>
              {
                (() => {
                  const volunteerMap = vdata.reduce((acc: Record<number, string>, volunteer: { id: number; name: string }) => {
                  acc[volunteer.id] = volunteer.name;
                  return acc;
                  }, {});
                  return volunteerMap[application.volunteerId] || application.volunteerId;
                })()
              }
            </div>
            <div>
              {{
                1: "Hospital Support",
                2: "Community Support",
                3: "Emergency Support"
              }[application.serviceId] || "Unknown Service"}
            </div>
            <div className=
            {
              `${application.status == 'pending' 
                ? 'text-blue-600 font-semibold capitalize': application.status == 'rejected' 
                ? 'text-red-600 font-semibold capitalize': application.status == 'approved' 
                ?'text-green-600 font-semibold capitalize':''}`
              }>{application.status}
            </div>
            <div className="space-x-1 text-center">
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

export default VoulunteerApplication