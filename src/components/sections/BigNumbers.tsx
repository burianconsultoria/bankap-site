import { Reveal } from '@/components/ui/Reveal'

const BARCODE = [
  [0, 2],
  [3, 1],
  [5, 3],
  [9, 1],
  [11, 2],
  [15, 4],
  [20, 1],
  [22, 2],
  [26, 1],
  [29, 3],
  [33, 1],
  [35, 2],
  [38, 4],
  [43, 1],
  [45, 2],
  [48, 1],
  [51, 3],
  [55, 1],
  [58, 2],
  [62, 1],
  [64, 4],
  [69, 1],
  [71, 2],
  [74, 1],
  [76, 3],
  [80, 2],
  [84, 1],
  [86, 4],
  [91, 1],
  [94, 2],
  [97, 1],
  [99, 1],
]

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
                  {[1, 2, 3].map((seed, i) => (
                    <img
                      key={seed}
                      src={`https://img.usecurling.com/ppl/thumbnail?gender=${i === 1 ? 'male' : 'female'}&seed=${seed}`}
                      alt="Cliente"
                      className={`w-12 h-12 rounded-full border-4 border-brand-light object-cover relative shadow-sm ${i === 0 ? 'z-30' : i === 1 ? 'z-20' : 'z-10'}`}
                    />
                  ))}
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

                <div className="mt-12 sm:mt-16 mb-8 relative w-full flex justify-center z-10">
                  {/* Boleto representation graphic */}
                  <div className="w-[280px] sm:w-[340px] bg-gradient-to-br from-[#d60d37] to-[#a20d37] rounded-lg shadow-2xl transform rotate-[-12deg] group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-500 border border-white/20 p-4 sm:p-5 flex flex-col gap-3 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

                    {/* Header: Logo, Bank Code and Linha Digitável */}
                    <div className="border-b border-white/30 pb-2 relative z-10 flex flex-col gap-1.5">
                      <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-xl sm:text-2xl font-extrabold italic tracking-tighter text-white leading-none">
                            Bankap
                          </div>
                          <div className="h-5 sm:h-6 border-l-2 border-white/40"></div>
                          <div className="text-sm sm:text-base font-bold text-white leading-none">
                            341-7
                          </div>
                        </div>
                      </div>
                      <div className="text-[9px] sm:text-[11px] font-mono text-white/95 text-right w-full tracking-tighter sm:tracking-normal whitespace-nowrap overflow-hidden text-ellipsis">
                        34191.09008 10799.489181 23456.789000 1 89000000015000
                      </div>
                    </div>

                    {/* Body: Grid simulating standard boleto fields */}
                    <div className="flex flex-col border border-white/20 rounded-sm relative z-10 overflow-hidden bg-white/5">
                      {/* Row 1 */}
                      <div className="flex border-b border-white/20">
                        <div className="flex-1 p-1.5 sm:p-2 border-r border-white/20">
                          <div className="text-[7px] sm:text-[8px] text-white/70 uppercase mb-1 font-semibold tracking-wide">
                            Local de Pagamento
                          </div>
                          <div className="h-1.5 sm:h-2 w-3/4 bg-white/40 rounded-full"></div>
                        </div>
                        <div className="w-[88px] sm:w-[100px] p-1.5 sm:p-2 bg-white/10 shrink-0">
                          <div className="text-[7px] sm:text-[8px] text-white/70 uppercase mb-1 font-semibold tracking-wide">
                            Vencimento
                          </div>
                          <div className="h-1.5 sm:h-2 w-full bg-white/50 rounded-full"></div>
                        </div>
                      </div>
                      {/* Row 2 */}
                      <div className="flex border-b border-white/20">
                        <div className="flex-1 p-1.5 sm:p-2 border-r border-white/20">
                          <div className="text-[7px] sm:text-[8px] text-white/70 uppercase mb-1 font-semibold tracking-wide">
                            Beneficiário
                          </div>
                          <div className="h-1.5 sm:h-2 w-1/2 bg-white/40 rounded-full"></div>
                        </div>
                        <div className="w-[88px] sm:w-[100px] p-1.5 sm:p-2 shrink-0">
                          <div className="text-[7px] sm:text-[8px] text-white/70 uppercase mb-1 font-semibold tracking-wide">
                            Agência/Código
                          </div>
                          <div className="h-1.5 sm:h-2 w-full bg-white/40 rounded-full"></div>
                        </div>
                      </div>
                      {/* Row 3 */}
                      <div className="flex">
                        <div className="flex-1 p-1.5 sm:p-2 border-r border-white/20">
                          <div className="text-[7px] sm:text-[8px] text-white/70 uppercase mb-1 font-semibold tracking-wide">
                            Pagador
                          </div>
                          <div className="h-1.5 sm:h-2 w-2/3 bg-white/40 rounded-full mb-1.5"></div>
                          <div className="h-1.5 sm:h-2 w-1/3 bg-white/40 rounded-full"></div>
                        </div>
                        <div className="w-[88px] sm:w-[100px] p-1.5 sm:p-2 bg-white/20 backdrop-blur-md flex flex-col justify-center items-end shrink-0 shadow-inner border-l border-white/10">
                          <div className="text-[7px] sm:text-[8px] text-white/90 uppercase mb-1 w-full text-left font-bold tracking-wide">
                            Valor
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                            R$ ---
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Barcode */}
                    <div className="w-full relative z-10 pt-1">
                      <svg
                        viewBox="0 0 100 24"
                        className="w-full h-10 sm:h-12 fill-current text-white/95 drop-shadow-sm"
                        preserveAspectRatio="none"
                      >
                        {BARCODE.map(([x, w], i) => (
                          <rect key={i} x={x} y="0" width={w} height="24" />
                        ))}
                      </svg>
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
