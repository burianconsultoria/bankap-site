import { ArrowUpRight, MessageCircle, FileText, CheckCircle2 } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const { openModal } = useModal()

  return (
    <section className="px-4 pb-20 pt-4 md:pt-6 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
        {/* Left Content Card */}
        <Reveal className="h-full">
          <div className="bg-gradient-to-br from-[#d60d37] to-[#a20d37] rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl shadow-brand-red/20">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8 md:mb-12">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white tracking-wider uppercase">
                  Especialista em Antecipação
                </span>
              </div>

              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.05] mb-6 tracking-tight text-balance">
                Antecipe seus recebíveis e coloque o caixa na mão —{' '}
                <span className="text-white/70">simples, digital e sem burocracia.</span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-sans">
                A Bankap transforma vendas a prazo em dinheiro à vista para sua empresa seguir
                pagando fornecedores, folha e impostos em dia. Você envia suas notas fiscais, recebe
                análise rápida e antecipa com transparência, direto no app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="rounded-full bg-white text-[#d61e38] hover:bg-white/90 h-14 px-8 font-bold text-base shadow-lg hover:shadow-xl transition-all"
                >
                  Começar Agora
                  <ArrowUpRight className="ml-2 h-5 w-5" strokeWidth={2.5} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white h-14 px-8 font-bold text-base bg-transparent transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="relative z-10 flex items-start gap-4 mt-auto pt-8 border-t border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center h-12">
                <p className="text-white font-semibold text-sm md:text-base leading-snug">
                  Processo estruturado e documentado.
                </p>
                <p className="text-white/70 text-sm md:text-base leading-snug">
                  Atendimento digital e transparente.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Media Card */}
        <Reveal delay={200} className="h-full">
          <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden bg-gray-100 min-h-[500px] lg:min-h-full shadow-2xl shadow-black/5 group">
            <img
              src="https://img.usecurling.com/p/800/1000?q=professional%20business%20woman%20suit&dpr=2"
              alt="Especialista Bankap"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay for badge contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Social Proof Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-5 md:p-6 rounded-3xl shadow-2xl max-w-[280px]">
              <div className="flex -space-x-3 mb-4">
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=12"
                  alt="Avatar 1"
                  className="w-11 h-11 rounded-full border-2 border-white relative z-30 object-cover"
                />
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=45"
                  alt="Avatar 2"
                  className="w-11 h-11 rounded-full border-2 border-white relative z-20 object-cover"
                />
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=89"
                  alt="Avatar 3"
                  className="w-11 h-11 rounded-full border-2 border-white relative z-10 object-cover"
                />
                <div className="w-11 h-11 rounded-full border-2 border-white relative z-0 bg-[#d61e38] flex items-center justify-center text-xs font-bold text-white shadow-inner">
                  +150
                </div>
              </div>
              <p className="text-sm text-brand-gray font-medium leading-relaxed font-sans">
                <span className="text-brand-dark font-bold">+150 empresas</span> com caixa saudável
                e em crescimento constante.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
