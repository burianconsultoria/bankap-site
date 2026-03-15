import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { LeadCaptureModal } from './LeadCaptureModal'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] selection:bg-brand-red/20 selection:text-brand-dark">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <LeadCaptureModal />
    </div>
  )
}
