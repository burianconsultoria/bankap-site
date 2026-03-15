import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useModal } from '@/contexts/ModalContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const NAV_LINKS = [
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Para Quem', href: '#para-quem' },
  { name: 'Benefícios', href: '#beneficios' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">B</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-brand-dark">Bankap</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-gray hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="outline"
            className="border-brand-red text-brand-red hover:bg-brand-red/5"
          >
            Acessar Portal
          </Button>
          <Button
            onClick={openModal}
            className="bg-gradient-to-r from-brand-gradStart to-brand-gradEnd text-white hover:opacity-90 border-0"
          >
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-brand-dark">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l-0">
            <div className="flex flex-col h-full mt-8">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-brand-dark hover:text-brand-red py-2 border-b border-gray-100"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4 pb-8">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full border-brand-red text-brand-red">
                    Acessar Portal
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    onClick={openModal}
                    className="w-full bg-gradient-to-r from-brand-gradStart to-brand-gradEnd text-white"
                  >
                    Começar Agora
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
