import { ArrowRight } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/Reveal'

export function FinalCTA() {
  const { openModal } = useModal()

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-brand-gradStart to-brand-gradEnd">
      {/* Abstract geometric patterns for texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.8) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Retome o controle do seu financeiro hoje
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Se suas vendas estão indo bem, seu caixa também precisa acompanhar. Antecipe seus
              recebíveis com a Bankap, destrave seu capital e foque no crescimento.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={openModal}
                className="h-14 px-8 text-base bg-white text-brand-red hover:bg-gray-50 shadow-lg border-0 font-semibold"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10"
              >
                Saiba Mais
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
