import type { ReactNode } from 'react'

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  console.log("Profile rendered");
  return (
    <div className="">
        Profile Layout
        {children}
    </div>
  )
}

export default ProfileLayout