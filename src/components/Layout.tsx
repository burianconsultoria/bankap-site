import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { LeadCaptureModal } from './LeadCaptureModal'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <LeadCaptureModal />
    </div>
  )
}
