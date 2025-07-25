import React from 'react'
import { ApplicationsProvider } from '@/app/contexts/ApplicationsContext'
import Container from '@/app/container'
import { VolunteerProvider } from '@/app/contexts/VolunteerContext'

const ApplicationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VolunteerProvider>
      <ApplicationsProvider>
        <Container> {children} </Container>
      </ApplicationsProvider>
    </VolunteerProvider>
  )
}

export default ApplicationsLayout