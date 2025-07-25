"use client";
import React, {useState, useEffect} from 'react'
import ClientLink from '../clientlink';

const navigation = [
    { href: "profile", label: "Admin" },
    { href: "volunteers", label: "Volunteers" },
    { href: "requests", label: "Requests" },
    { href: "applications", label: "Applicants" },
    { href: "services", label: "Services" }
];

const DashboardSidebar = () => {
    const [activeHref, setActiveHref] = useState<string>(() => {
        if (typeof window !== "undefined") {
            const match = navigation.find(item => window.location.pathname.includes(item.href));
            return match ? match.href : "";
        }
        return "";
    });

    useEffect(() => {
        const handlePopState = () => {
            if (typeof window !== "undefined") {
                const match = navigation.find(item => window.location.pathname.includes(item.href));
                setActiveHref(match ? match.href : "");
            }
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

  return (
    <nav className="absolute h-full bg-slate-800 w-62 text-white ">
        <div>
            {
                navigation.map(({ href, label }) => {
                    const isActive = activeHref === href;
                    return (
                        <div
                            key={href}
                            className={`border-b-1 border-b-slate-400 p-6 hover:bg-slate-400 ${isActive ? "bg-slate-600 border-r-4 border-blue-300" : ""}`}
                            onClick={() => setActiveHref(href)}
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