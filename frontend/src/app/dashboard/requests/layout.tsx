import React from 'react'
import { RequestsProvider } from '@/app/contexts/RequestsContext'
import Container from '@/app/container'

const RequestsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RequestsProvider>
      <Container>
       {children}
      </Container> 
    </RequestsProvider>
  )
}

export default RequestsLayout