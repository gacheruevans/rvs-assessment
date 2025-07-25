import React, {ReactNode} from 'react'
import { ServicesProvider } from '@/app/contexts/ServicesContext'
import Container from '@/app/container'

const ServicesLayout = ({children}: {children: ReactNode}) => {
  return (
    <ServicesProvider>
        <Container>
            {children}
        </Container>
    </ServicesProvider>
  )
}

export default ServicesLayout