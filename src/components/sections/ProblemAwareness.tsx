import { Reveal } from '@/components/ui/Reveal'
import { Clock, TrendingUp, ShieldCheck } from 'lucide-react'

export function ProblemAwareness() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section consolidating both concepts */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark mb-6 leading-[1.1] tracking-tight font-sans">
              O seu dinheiro não pode ficar <span className="text-brand-red">preso no prazo</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl md:text-2xl text-brand-gray font-light leading-relaxed font-sans">
              Mais controle, menos improviso. Assuma as rédeas do seu fluxo de caixa e pare de
              financiar os prazos dos seus clientes com o capital de giro da sua empresa.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <Reveal delay={200} className="order-2 lg:order-1 h-full">
            <div className="relative h-full min-h-[450px] lg:min-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
              <img
                src="https://img.usecurling.com/p/800/1000?q=business%20liquidity%20growth&dpr=2"
                alt="Controle Financeiro e Liquidez"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white transform translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl font-sans leading-tight">
                      Mais controle,
                      <br />
                      menos improviso
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed font-sans">
                    Tenha certeza de que as obrigações do mês serão pagas sem precisar recorrer a
                    linhas de crédito emergenciais ou estressar sua operação.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Features */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <Reveal delay={300}>
              <div className="p-8 rounded-3xl bg-brand-light border border-gray-100 hover:border-brand-red/20 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 font-sans">
                  O fim da espera
                </h3>
                <p className="text-brand-gray text-lg leading-relaxed font-sans">
                  Vender a prazo é o que atrai clientes, mas receber à vista é o que mantém a sua
                  empresa forte. Antecipe e transforme suas vendas futuras em saldo na conta hoje.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="p-8 rounded-3xl bg-brand-light border border-gray-100 hover:border-brand-red/20 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 font-sans">
                  Poder de negociação
                </h3>
                <p className="text-brand-gray text-lg leading-relaxed font-sans">
                  Com dinheiro no caixa, você paga fornecedores à vista, garante descontos
                  substanciais e melhora sua margem de lucro de forma inteligente e planejada.
                </p>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="p-8 rounded-3xl bg-brand-dark text-white shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 font-sans relative z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shrink-0" />
                  Fluxo de caixa contínuo
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed font-sans relative z-10">
                  Opere sua empresa sem sobressaltos. O que foi faturado já pode ser utilizado para
                  girar a operação, pagar impostos e expandir sua estrutura sem travas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
