import { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`border-t border-white/10 px-6 py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl space-y-10">
        {(eyebrow || title || description) && (
          <div className="space-y-3 max-w-3xl">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{eyebrow}</p>
            ) : null}
            {title ? (
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
            ) : null}
            {description ? <p className="text-sm text-white/70 sm:text-base">{description}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
