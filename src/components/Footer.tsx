import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">B</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">Bankap</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Transformando recebíveis em liquidez imediata para sua empresa crescer sem burocracia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Antecipação de Recebíveis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Gestão de Cobrança
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Crédito Fumaça
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Institucional</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                >
                  Ouvidoria
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bankap. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">Made with clarity by Bankap</p>
        </div>
      </div>
    </footer>
  )
}
