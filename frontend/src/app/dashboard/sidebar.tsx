"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import ClientLink from '../clientlink'

const navigation = [
    { href: "profile", label: "Admin" },
    { href: "volunteers", label: "Volunteers" },
    { href: "requests", label: "Requests" },
    { href: "applications", label: "Applicants" },
    { href: "services", label: "Services" }
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute h-full bg-slate-800 w-62 text-white ">
        <div>
            {
                navigation.map(({ href, label }) => {
                    const isActive = pathname.includes(href);
                    return (
                        <div
                            key={href}
                            className={`border-b-1 border-b-slate-400 p-6 hover:bg-slate-400 ${isActive ? "bg-slate-600 border-r-4 border-blue-300" : ""}`}
                        >
                            <ClientLink href={href}>
                                {label}
                            </ClientLink>
                        </div>
                    );
                })
            }
        </div>
    </nav>
  )
}

export default DashboardSidebar