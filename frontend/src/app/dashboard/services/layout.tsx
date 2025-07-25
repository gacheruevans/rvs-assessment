import React, {ReactNode} from 'react'
import { ServicesProvider } from '@/app/contexts/ServicesContext'
import { VolunteerProvider } from '@/app/contexts/VolunteerContext'
import Container from '@/app/container'

const ServicesLayout = ({children}: {children: ReactNode}) => {
  return (
    <VolunteerProvider>
      <ServicesProvider>
          <Container>
              {children}
          </Container>
      </ServicesProvider>
    </VolunteerProvider>
  )
}

export default ServicesLayout