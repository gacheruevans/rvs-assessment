import Container from "@/app/container"
import { VolunteerProvider } from "@/app/contexts/VolunteerContext"

const VolunteerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VolunteerProvider>
      <Container classNames="w-full">
        {children}
      </Container>
    </VolunteerProvider>
  )
}

export default VolunteerLayout