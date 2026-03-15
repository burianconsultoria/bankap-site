import { Building2, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

export function TargetAudience() {
  return (
    <section id="para-quem" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-[40px] font-bold text-brand-dark mb-6">
              Para quem a Bankap faz mais sentido
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-brand-gray">
              Ideal para micro, pequenas e médias empresas que vendem a prazo e precisam de liquidez
              rápida para manter a operação rodando saudável.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <Reveal delay={200}>
            <div className="bg-brand-light p-8 md:p-12 rounded-2xl h-full border border-transparent hover:border-brand-red/20 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                <Building2 className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Indústria e varejo B2B (prazo longo)
              </h3>
              <p className="text-brand-gray text-lg leading-relaxed">
                Quando o pagamento do seu cliente demora 60 ou 90 dias, o custo de ficar sem caixa
                logo aparece na forma de juros bancários, atrasos de impostos e oportunidades de
                negócio perdidas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-brand-light p-8 md:p-12 rounded-2xl h-full border border-transparent hover:border-brand-red/20 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                <TrendingUp className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Empresas em crescimento rápido
              </h3>
              <p className="text-brand-gray text-lg leading-relaxed">
                Vender muito e crescer rápido pode piorar seu caixa momentaneamente (a famosa "dor
                do crescimento"). Antecipar ajuda a acompanhar o ritmo das vendas fortes sem travar
                sua operação.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
