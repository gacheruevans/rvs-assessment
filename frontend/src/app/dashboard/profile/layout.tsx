import type { ReactNode } from 'react'
import Container from '@/app/container'

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
        Profile Layout
        {children}
    </Container>
  )
}

export default ProfileLayout