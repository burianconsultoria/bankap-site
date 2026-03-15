import { UploadCloud, Zap, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/ui/Reveal'

const STEPS = [
  {
    icon: UploadCloud,
    title: 'Envie suas notas fiscais',
    description:
      'Faça o envio pelo app ou portal web com total praticidade e rastreabilidade da sua carteira.',
  },
  {
    icon: Zap,
    title: 'Análise rápida e objetiva',
    description:
      'Avaliamos o recebível e o risco da operação com foco em agilidade, sem te empurrar burocracias desnecessárias.',
  },
  {
    icon: DollarSign,
    title: 'Dinheiro à vista na sua conta',
    description:
      'Com aprovação, você antecipa e usa o caixa para rodar a operação: comprar insumo, pagar folha e aproveitar descontos.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark mb-6 leading-[1.1] tracking-tight font-sans">
              Como funciona a antecipação de recebíveis na Bankap
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-brand-gray">
              Um processo 100% digital para você sair do "vai e volta" do banco e resolver em poucos
              passos, quando a urgência apertar.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 z-0" />

          {STEPS.map((step, index) => (
            <Reveal key={index} delay={index * 150} className="relative z-10">
              <Card className="h-full border-0 shadow-subtle hover:shadow-hover transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center pt-10">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-brand-light flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">{step.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
