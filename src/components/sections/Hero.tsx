import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import { Reveal } from '@/components/ui/Reveal'
import logoNegative from '@/assets/af_bankap-06-16d0d.png'

export function Hero() {
  const { openModal } = useModal()

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden flex items-center bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Split Screen Card */}
          <Reveal animation="slide-up">
            <div className="bg-gradient-to-br from-[#d60d37] to-[#a20d37] rounded-[2rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
                  Antecipe seus recebíveis e coloque o caixa na mão — simples, digital e sem
                  burocracia
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-10 font-sans leading-relaxed max-w-lg">
                  Acelere o crescimento da sua empresa com taxas justas e dinheiro na conta em
                  poucos cliques. Assuma o controle do seu fluxo de caixa hoje.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button
                    onClick={openModal}
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 rounded-full font-bold px-8 h-14 text-base w-full sm:w-auto transition-all hover:scale-105"
                  >
                    Simular Antecipação
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/90 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                    <span>Aprovação em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                    <span>Processo 100% Digital</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Image graphic */}
          <Reveal animation="slide-up" delay={200}>
            <div className="relative h-[450px] md:h-[650px] rounded-[2rem] overflow-hidden shadow-xl group">
              <img
                src="https://img.usecurling.com/p/800/1000?q=business%20meeting&dpr=2"
                alt="Empresários na mesa de reunião"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white max-w-sm transform translate-y-0 transition-transform duration-500">
                  <p className="font-bold text-xl mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Fluxo de caixa no verde
                  </p>
                  <p className="text-sm opacity-90 leading-relaxed font-sans">
                    Empreendedores inteligentes usam a Bankap para manter a operação girando sem
                    depender de prazos longos dos clientes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
