import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import logoPositive from '@/assets/af_bankap-07-471dc.png'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Vantagens', href: '#benefits' },
    { name: 'Diferenciais', href: '#differentiators' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Pill-shaped navigation container */}
        <div className="flex items-center justify-between bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
          <a href="#" className="flex-shrink-0 flex items-center">
            <img src={logoPositive} alt="Bankap" className="h-8 md:h-9 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              onClick={openModal}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
            >
              Antecipe Agora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-800 p-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              openModal()
              setIsMobileMenuOpen(false)
            }}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-2 py-6 text-base"
          >
            Antecipe Agora
          </Button>
        </div>
      )}
    </header>
  )
}
