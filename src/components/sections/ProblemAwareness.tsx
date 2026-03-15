import { Reveal } from '@/components/ui/Reveal'

export function ProblemAwareness() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-[40px] font-bold text-brand-dark mb-6 leading-tight">
              O seu dinheiro não pode ficar preso no prazo
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-brand-gray leading-relaxed text-balance">
              Se você vende em 30, 60 ou 90 dias, você acaba "financiando" seus clientes sem querer.
              A Bankap existe para destravar o caixa que já é do seu negócio e devolver o controle
              do seu fluxo financeiro. Pare de adiar o crescimento por falta de liquidez imediata.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
