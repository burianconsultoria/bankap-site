import { ArrowRight, PlayCircle } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const { openModal } = useModal()

  return (
    <section className="relative bg-brand-light overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-brand-dark leading-[1.1] mb-6 text-balance">
                Antecipe seus recebíveis e tenha o caixa na mão —{' '}
                <span className="text-brand-red">simples, digital e sem burocracia</span>
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-brand-gray mb-8 leading-relaxed max-w-xl">
                A Bankap transforma vendas a prazo em dinheiro à vista para sua empresa seguir
                pagando fornecedores, folha e impostos em dia. Você envia suas notas fiscais, recebe
                análise rápida e antecipa com transparência, direto no app.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="h-14 px-8 text-base bg-gradient-to-r from-brand-gradStart to-brand-gradEnd text-white hover:opacity-90 border-0"
                >
                  Quero Antecipar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 to-transparent rounded-full blur-3xl" />
            <img
              src="https://img.usecurling.com/p/800/600?q=financial%20dashboard&color=red&dpr=2"
              alt="Dashboard Financeiro Bankap"
              className="relative z-10 rounded-2xl shadow-2xl border border-white/50 w-full object-cover aspect-video lg:aspect-[4/3]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
