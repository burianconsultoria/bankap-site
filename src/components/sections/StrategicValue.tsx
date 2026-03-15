import { Reveal } from '@/components/ui/Reveal'

export function StrategicValue() {
  return (
    <section className="py-16 bg-brand-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#d61e38 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h3 className="text-2xl md:text-[32px] font-bold text-brand-dark mb-4">
              Mais controle, menos improviso
            </h3>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base md:text-lg text-brand-gray leading-relaxed">
              Antecipar não é "fazer dívida por desespero". É organizar o ciclo de caixa para
              decidir com calma, negociar melhor com seus fornecedores e crescer sem sufoco. Tenha a
              previsibilidade que sua empresa merece.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
