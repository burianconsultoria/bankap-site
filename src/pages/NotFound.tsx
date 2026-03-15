import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 px-4 text-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Página não encontrada</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Button
        asChild
        className="bg-gradient-to-r from-[#d60d37] to-[#a20d37] hover:opacity-90 text-white rounded-full px-8"
      >
        <Link to="/">Voltar para a Home</Link>
      </Button>
    </div>
  )
}
