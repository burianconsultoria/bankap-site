import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useModal } from '@/contexts/ModalContext'
import { cn } from '@/lib/utils'
import logoPositive from '@/assets/design-sem-nome-9-d553a.png'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Problema', href: '#problema' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div
        className={cn(
          'max-w-5xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3 pointer-events-auto',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/50'
            : 'bg-white/90 backdrop-blur-sm shadow border border-slate-100',
        )}
      >
        <Link to="/" className="flex-shrink-0 z-50" onClick={() => setMobileMenuOpen(false)}>
          <img
            src={logoPositive}
            alt="Bankap Banco"
            className="h-12 sm:h-14 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#d60d37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={openModal}
            className="bg-gradient-to-r from-[#d60d37] to-[#a20d37] hover:opacity-90 transition-opacity text-white rounded-full px-6 font-semibold"
          >
            Fale com Especialista
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50 p-2 text-slate-700 hover:text-[#d60d37] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            'fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-slate-800 hover:text-[#d60d37] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              setMobileMenuOpen(false)
              openModal()
            }}
            className="bg-gradient-to-r from-[#d60d37] to-[#a20d37] hover:opacity-90 text-white rounded-full px-10 py-6 text-lg font-bold mt-4 shadow-lg"
          >
            Fale com Especialista
          </Button>
        </div>
      </div>
    </header>
  )
}
