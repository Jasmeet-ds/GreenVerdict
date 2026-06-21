import { motion } from 'framer-motion'
import { ExpandableImage } from './ExpandableImage'
import { WhoWeAre } from './WhoWeAre'

const headlineWords = ['Environmental.', 'Sustainable.', 'Governance.']

const images = [
  {
    src: 'https://images.unsplash.com/photo-1664735717868-c243ec8f5ad1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sunlight filtering through a dense forest canopy',
    caption: 'Field Notes · Vol. I',
    className: 'absolute left-0 top-8 w-[58%]',
    defaultZ: 2,
    aspect: 'aspect-[3/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1507804024962-2455b6c25e19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2luZCUyMGZhcm18ZW58MHwxfDB8fHww',
    alt: 'Wind turbines across rolling green hills at dusk',
    caption: 'Energy Transition',
    className: 'absolute right-0 top-0 w-[52%]',
    defaultZ: 3,
    aspect: 'aspect-[2/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1754426323741-1969a0da2683?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Analyst reviewing corporate sustainability documents',
    caption: 'Report Analysis',
    className: 'absolute bottom-0 left-[22%] w-[56%]',
    defaultZ: 1,
    aspect: 'aspect-[3/5]',
  },
]

const editorialEase = [0.28, 1, 0.39, 0.39] as const

function fadeUpTransition(index: number) {
  return {
    delay: 0.15 + index * 0.12,
    duration: 0.7,
    ease: editorialEase,
  }
}

export function Hero() {
  return (
    <section className="grain relative min-h-svh overflow-hidden bg-parchment">
      <div className="pointer-events-none absolute -right-24 top-32 h-[520px] w-[520px] rounded-full bg-moss/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-clay/6 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-8 md:px-10 lg:px-14 lg:pb-24 lg:pt-10">
        {/* Masthead */}
        <motion.header
          className="mb-12 flex items-end justify-between border-b border-forest/15 pb-4 md:mb-16"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[16px] uppercase tracking-[0.28em] text-ink-muted">
              Issue № 001 · Spring 2026
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-sage">
              AI-powered ESG analysis for discerning investors
            </span>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-medium tracking-tight text-forest md:text-5xl">
              Green<span className="italic text-moss">Verdict</span>
            </p>
            <p className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-muted">
              The sustainable investor&apos;s journal
            </p>
          </div>
        </motion.header>

        {/* Editorial grid */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Copy column */}
          <div className="lg:col-span-7 lg:pt-4">
            <motion.p
              className="mb-6 max-w-md font-mono text-[13px] uppercase tracking-[0.24em] text-clay"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fadeUpTransition(0)}
            >
              A closer look at corporate green reports
            </motion.p>

            <h1 className="font-display font-light leading-[0.92] tracking-[-0.02em] text-forest">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="block text-[clamp(3rem,8vw,6.5rem)]"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={fadeUpTransition(i + 1)}
                >
                  {i === 2 ? (
                    <>
                      <span className="italic text-moss">Govern</span>
                      <span>ance.</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.div
              className="mt-10 max-w-lg lg:mt-50"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fadeUpTransition(4)}
            >
              <p className="text-lg leading-relaxed text-ink-muted md:text-xl md:leading-[1.65]">
                Our verdict on your potential investment company&apos;s Green
                reports.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href="#analyze"
                    className="group relative inline-flex items-center gap-3 overflow-hidden border border-forest bg-forest px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-parchment transition-colors hover:border-moss hover:bg-moss"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Analyze a Company</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                      aria-hidden
                    >
                      →
                    </motion.span>
                  </motion.a>

                  <motion.a
                    href="#articles"
                    className="inline-flex items-center border border-forest/25 bg-transparent px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-forest/80 transition-colors hover:border-forest/50 hover:text-forest"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read our Articles
                  </motion.a>
                </div>

                <p className="max-w-[240px] font-mono text-[12px] leading-relaxed uppercase tracking-[0.16em] text-sage">
                  Scroll to begin the investigation
                </p>
              </div>
            </motion.div>

            {/* Pull quote — magazine sidebar feel */}
            <motion.blockquote
              className="mt-14 hidden max-w-sm border-l-2 border-ochre pl-5 lg:block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fadeUpTransition(5)}
            >
              <p className="font-display text-2xl italic leading-snug text-moss">
                &ldquo;Every sustainability claim deserves scrutiny — not
                applause.&rdquo;
              </p>
              <cite className="mt-3 block font-mono text-[11px] not-italic uppercase tracking-[0.18em] text-ink-muted">
                — Editorial, GreenVerdict
              </cite>
              
            </motion.blockquote>
            <div className="mt-[2cm]">
              <WhoWeAre />
            </div>
          </div>

          {/* Image collage */}
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[620px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: editorialEase }}
          >
            {images.map((img) => (
              <ExpandableImage key={img.caption} {...img} />
            ))}

            <div className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
              <p
                className="font-mono text-[14px] uppercase tracking-[0.35em] text-sage/70"
                style={{ writingMode: 'vertical-rl' }}
              >
                Hover to explore
              </p>
            </div>
          </motion.div>
          
        </div>

        
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-16 flex flex-col gap-4 bg-forest px-6 py-8 text-parchment md:mt-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-10 lg:px-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-parchment/85">
          AI-powered ESG analysis for discerning investors
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.18em] text-parchment/70">
          <span>Environmental</span>
          <span className="text-ochre/80">·</span>
          <span>Sustainable</span>
          <span className="text-ochre/80">·</span>
          <span>Governance</span>
        </div>
      </motion.footer>
    </section>
  )
}
