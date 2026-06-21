import { motion } from 'framer-motion'

type ExpandableImageProps = {
  src: string
  alt: string
  caption: string
  className?: string
  defaultZ?: number
  aspect?: string
}

export function ExpandableImage({
  src,
  alt,
  caption,
  className = '',
  defaultZ = 1,
  aspect = 'aspect-[3/4]',
}: ExpandableImageProps) {
  return (
    <motion.figure
      className={`group relative ${aspect} ${className}`}
      initial={{ zIndex: defaultZ }}
      whileHover={{ scale: 1.12, zIndex: 30 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{ zIndex: defaultZ }}
    >
      <div className="relative h-full w-full overflow-hidden border border-forest/15 bg-parchment-deep shadow-[4px_8px_24px_rgba(26,35,24,0.12)]">
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <figcaption className="absolute bottom-0 left-0 right-0 translate-y-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-parchment transition-transform duration-500 group-hover:translate-y-0">
          {caption}
        </figcaption>
      </div>
    </motion.figure>
  )
}
