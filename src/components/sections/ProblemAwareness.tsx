import { Reveal } from '@/components/ui/Reveal'
import { Layers, Users, TrendingDown } from 'lucide-react'

const PROBLEMS = [
  {
    icon: Layers,
    title: 'DESORGANIZAÇÃO CUSTOSA',
    description:
      'Ativos espalhados em diversas instituições dificultam a visão global e impedem a otimização tributária e de rentabilidade.',
  },
  {
    icon: Users,
    title: 'CONFLITO DE INTERESSES',
    description:
      'Conselhos genéricos de gerentes de banco geralmente atendem às metas da instituição, não aos seus objetivos de vida.',
  },
  {
    icon: TrendingDown,
    title: 'RISCO SILENCIOSO',
    description:
      'Investir sem alinhar prazos e riscos ao seu momento de vida pode expor seu patrimônio a perdas desnecessárias.',
  },
]

export function ProblemAwareness() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] md:text-xs font-bold text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  O Problema Real
                </span>
                <div className="flex-1 h-px bg-blue-100 relative max-w-[200px]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-blue-700 rounded-sm"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-blue-700 rounded-sm"></div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight font-display">
                Seu patrimônio merece mais do que improviso
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                Sem um plano estratégico e acompanhamento real, o risco de perder dinheiro ou
                oportunidades crescem, e a tranquilidade financeira fica cada vez mais distante.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {PROBLEMS.map((problem, index) => (
                <Reveal key={index} delay={300 + index * 100}>
                  <div className="flex gap-5 bg-slate-50/70 hover:bg-slate-50 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
                    <div className="bg-white rounded-xl p-3 shadow-sm h-fit shrink-0 group-hover:shadow-md transition-shadow">
                      <problem.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                        {problem.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <Reveal delay={400} className="h-full">
            <div className="relative h-full min-h-[500px] lg:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://img.usecurling.com/p/800/1000?q=worried%20couple%20finances&color=blue&dpr=2"
                alt="Casal preocupado analisando documentos financeiros"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
