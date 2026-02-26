import { ReactNode } from 'react'

type ButtonProps = {
  href?: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
  className?: string
}

const base =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-neutral-950'
const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-red-500 text-white hover:bg-red-400',
  ghost: 'border border-white/10 text-white hover:border-red-500/60',
}

export function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return <button className={classes}>{children}</button>
}
