import { Mail, MapPin, Phone } from 'lucide-react'
import logoPositive from '@/assets/design-sem-nome-9-d553a.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <img
              src={logoPositive}
              alt="Bankap"
              className="h-12 md:h-14 w-auto object-contain mb-6"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
              A Bankap transforma recebíveis em caixa na mão de forma rápida, simples e 100%
              digital, impulsionando o crescimento sustentável de pequenas e médias empresas em todo
              o Brasil.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:ml-auto">
            <h4 className="font-bold text-gray-900 mb-6 font-sans text-lg">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                  Vantagens
                </a>
              </li>
              <li>
                <a
                  href="#differentiators"
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                  Nossos Diferenciais
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:ml-auto">
            <h4 className="font-bold text-gray-900 mb-6 font-sans text-lg">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                  Segurança da Informação
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:ml-auto">
            <h4 className="font-bold text-gray-900 mb-6 font-sans text-lg">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:contato@bankap.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@bankap.com.br
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:08001234567" className="hover:text-primary transition-colors">
                  (11)&nbsp;4803-0473
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>R. Dr. Ramos de Azevedo, 159 - Centro, Guarulhos - SP, 07012-020</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-sans text-center md:text-left font-medium">
            &copy; {currentYear} Bankap Instituição de Pagamento S.A. Todos os direitos reservados.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
