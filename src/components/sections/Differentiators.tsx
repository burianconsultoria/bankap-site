import { Laptop, ShieldCheck, LineChart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/ui/Reveal'

const FEATURES = [
  {
    icon: Laptop,
    title: 'Digital de verdade (paperless)',
    description:
      'Sem papel, sem agência física, sem fricção. Você resolve quando precisa, direto no aplicativo, no ritmo do seu negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparência que dá segurança',
    description:
      'Taxas e condições 100% claras. Você entende o custo exato antes de fechar qualquer operação e decide com previsibilidade.',
  },
  {
    icon: LineChart,
    title: 'Extensão financeira da empresa',
    description:
      'A proposta não é só antecipar. É ajudar você a ganhar fôlego de caixa, reduzir incêndios e ter autonomia real para planejar o futuro.',
  },
]

export function Differentiators() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-[40px] font-bold text-brand-dark mb-6 leading-tight">
              Por que a Bankap é diferente de banco tradicional e factoring "raiz"
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-brand-gray">
              A Bankap une tecnologia avançada, simplicidade e estrutura de mercado de capitais para
              operar com seus recebíveis de forma profissional, ágil e focada na saúde do seu caixa.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Reveal key={index} delay={index * 150}>
              <Card className="h-full border border-gray-100 bg-white hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 text-brand-red mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
