import { Reveal } from '@/components/ui/Reveal'

export function BigNumbers() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold text-brand-dark mb-6 leading-[1.1] tracking-tight font-sans">
              Confiança traduzida em números
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl md:text-2xl text-brand-gray font-light leading-relaxed font-sans">
              Milhares de clientes, bilhões em transações e crescendo.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 h-full">
            <Reveal delay={200} className="flex-1 flex flex-col">
              <div className="flex-1 w-full bg-brand-light rounded-[2rem] p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-subtle hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <h3 className="text-[28px] sm:text-4xl lg:text-[28px] xl:text-4xl 2xl:text-[40px] font-extrabold text-brand-dark mb-3 tracking-tight">
                  +R$10.000.000.000
                </h3>
                <p className="text-brand-gray text-lg font-sans">em créditos para empresas</p>
              </div>
            </Reveal>

            <Reveal delay={300} className="flex-1 flex flex-col">
              <div className="flex-1 w-full bg-brand-light rounded-[2rem] p-8 md:p-10 flex flex-col justify-center items-center text-center shadow-subtle hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <h3 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-extrabold text-brand-dark mb-3 tracking-tight">
                  +1.700
                </h3>
                <p className="text-brand-gray text-lg font-sans mb-6">clientes impactados</p>
                <div className="flex -space-x-4">
                  <img
                    src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1"
                    alt="Cliente"
                    className="w-12 h-12 rounded-full border-4 border-brand-light object-cover relative z-30 shadow-sm"
                  />
                  <img
                    src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2"
                    alt="Cliente"
                    className="w-12 h-12 rounded-full border-4 border-brand-light object-cover relative z-20 shadow-sm"
                  />
                  <img
                    src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3"
                    alt="Cliente"
                    className="w-12 h-12 rounded-full border-4 border-brand-light object-cover relative z-10 shadow-sm"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4 flex flex-col min-h-[400px] lg:min-h-0">
            <Reveal delay={400} className="flex-1 flex flex-col">
              <div className="flex-1 w-full bg-brand-light rounded-[2rem] overflow-hidden relative group">
                <img
                  src="https://img.usecurling.com/p/800/1000?q=confident%20smiling%20business%20person&dpr=2"
                  alt="Profissional da área financeira"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Reveal delay={500} className="flex-1 flex flex-col">
              <div className="flex-1 w-full bg-brand-dark text-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-between text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-xl">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24 pointer-events-none"></div>

                <div className="pt-8 relative z-10">
                  <h3 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-3 tracking-tight text-white">
                    +8.000
                  </h3>
                  <p className="text-white/80 text-lg font-sans">sacados negociados</p>
                </div>

                <div className="mt-16 mb-8 relative w-full flex justify-center z-10">
                  {/* Abstract representation of a card */}
                  <div className="w-56 h-36 bg-gradient-to-br from-[#d60d37] to-[#a20d37] rounded-xl shadow-2xl transform rotate-[-12deg] group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-500 border border-white/20 p-5 flex flex-col justify-between backdrop-blur-sm">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-7 bg-white/20 rounded-md backdrop-blur-md"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white/30"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full h-2 bg-white/20 rounded-full"></div>
                      <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
