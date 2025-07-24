import Container from "@/app/container"
import { VolunteerProvider } from "@/app/context/VolunteerContext"

const VolunteerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VolunteerProvider>
      <Container>
        {children}
      </Container>
    </VolunteerProvider>
  )
}

export default VolunteerLayout