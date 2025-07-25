import React from 'react'
import { RequestsProvider } from '@/app/contexts/RequestsContext'
import { VolunteerProvider } from '@/app/contexts/VolunteerContext'
import Container from '@/app/container'

const RequestsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VolunteerProvider>
      <RequestsProvider>
        <Container>
        {children}
        </Container> 
      </RequestsProvider>
    </VolunteerProvider>
  )
}

export default RequestsLayout