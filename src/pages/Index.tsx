import { Hero } from '@/components/sections/Hero'
import { ProblemAwareness } from '@/components/sections/ProblemAwareness'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Differentiators } from '@/components/sections/Differentiators'
import { TargetAudience } from '@/components/sections/TargetAudience'
import { Benefits } from '@/components/sections/Benefits'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <ProblemAwareness />
      <HowItWorks />
      <Differentiators />
      <TargetAudience />
      <Benefits />
      <FinalCTA />
      <LeadCaptureModal />
    </div>
  )
}

export default Index
