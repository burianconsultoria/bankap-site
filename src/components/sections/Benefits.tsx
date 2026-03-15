import { CheckCircle2, Handshake, Growth } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const BENEFITS = [
  {
    icon: CheckCircle2,
    title: 'Pagar em dia e reduzir estresse',
    description:
      'Quite a folha de pagamento, pague fornecedores, impostos e contas essenciais sem precisar fazer "malabarismo" financeiro toda sexta-feira.',
  },
  {
    icon: Handshake,
    title: 'Negociar melhor com fornecedores',
    description:
      'Com dinheiro à vista na mão, você ganha poder de compra imediato, consegue melhores descontos e melhora suas condições de estoque.',
  },
  {
    icon: Growth, // Will use another icon as Growth might not be standard, using TrendingUp instead below
    title: 'Crescer com previsibilidade',
    description:
      'Mais caixa disponível significa menos dependência do calendário de recebimentos e muito mais autonomia para investir no negócio.',
  },
]

// Re-map icon for the 3rd one
import { TrendingUp as TrendingIcon } from 'lucide-react'
BENEFITS[2].icon = TrendingIcon

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-20 lg:py-32 bg-brand-dark text-white relative overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[50%] h-[50%] rounded-full bg-brand-red/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-[40px] font-bold mb-6 text-white">
                O que você consegue fazer com caixa hoje
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-gray-300 leading-relaxed">
                Caixa na mão vira poder de decisão. E decisão vira margem de lucro, reputação forte
                no mercado e tranquilidade para o empreendedor focar no que importa.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-8">
              {BENEFITS.map((item, index) => (
                <Reveal key={index} delay={200 + index * 100}>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                      <item.icon className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
