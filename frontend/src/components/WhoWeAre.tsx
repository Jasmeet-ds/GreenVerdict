import { motion } from 'framer-motion'

const editorialEase = [1, 1, 1, 1] as const

type WhoWeAreProps = {
  className?: string
}

export function WhoWeAre({ className = '' }: WhoWeAreProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '60px' }}
      transition={{ duration: 0.8, ease: editorialEase }}
    >
      <p className="mb-9 font-mono text-[13px] uppercase tracking-[0.29em] text-clay">
        Our Mission
      </p>

      <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[0.95] tracking-[-0.02em] text-forest">
        Built for Scrutiny.
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl md:leading-[1.65]">
        GreenVerdict exists for the individual investor who refuses to take a
        glossy sustainability report at face value — people who&apos;d rather
        study a company themselves than outsource their judgment to a rating
        agency. We built the same rigor for small firms who need clarity
        without an analyst team, and for institutions who expect nothing less
        than depth.
      </p>
    </motion.div>
  )
}
