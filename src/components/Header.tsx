import { useState, useEffect } from 'react'
import { Menu, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useModal } from '@/contexts/ModalContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Processo', href: '#processo' },
  { name: 'Especialista', href: '#especialista' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <header
        className={cn(
          'bg-white rounded-full flex items-center justify-between w-full max-w-6xl transition-all duration-300 border',
          isScrolled
            ? 'shadow-lg border-gray-200 py-2 px-2'
            : 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-transparent py-3 px-4 md:py-2 md:px-2',
        )}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 pl-2 md:pl-4">
          <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">B</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-dark hidden sm:block">
            Bankap
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-semibold transition-colors',
                i === 0 ? 'text-brand-dark' : 'text-brand-gray hover:text-brand-red',
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2 pr-1">
          <Button
            onClick={openModal}
            className="rounded-full bg-brand-red text-white hover:bg-brand-red/90 h-10 px-6 font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Começar Agora <ArrowUpRight className="ml-1.5 w-4 h-4" strokeWidth={2.5} />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden pr-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-brand-dark">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white border-l-0 flex flex-col pt-16"
            >
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        'text-2xl font-semibold transition-colors',
                        i === 0 ? 'text-brand-dark' : 'text-brand-gray hover:text-brand-red',
                      )}
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <SheetClose asChild>
                  <Button
                    onClick={openModal}
                    className="w-full rounded-full bg-brand-red text-white hover:bg-brand-red/90 h-14 text-lg font-bold shadow-lg"
                  >
                    Começar Agora <ArrowUpRight className="ml-2 w-5 h-5" strokeWidth={2.5} />
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}
