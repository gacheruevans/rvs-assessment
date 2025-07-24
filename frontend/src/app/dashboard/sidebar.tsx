import React from 'react'
import ClientLink from '../clientlink'

const DashboardSidebar = () => {
    console.log("Dashboard Sidebar rendered");
  return (
    <nav>
        <ul>
            <li>
                <ClientLink href="profile">
                    Profile
                </ClientLink>
            </li>
            <li>
                <ClientLink href="volunteers">
                    Volunteers
                </ClientLink>
            </li>
            <li>
                <ClientLink href="requests">
                    Requests
                </ClientLink>
            </li>
            <li>
                <ClientLink href="applications">
                    Applicants
                </ClientLink>
            </li>
            <li>
                <ClientLink href="services">
                    Services
                </ClientLink>
            </li>
        </ul>
    </nav>
  )
}

export default DashboardSidebar