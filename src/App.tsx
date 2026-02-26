import heroImage from './assets/garage-hero.jpg'
import featuredJag from './assets/featured-jag.jpg'
import featuredHolden from './assets/featured-holden.jpg'
import featuredGtr from './assets/featured-gtr.jpg'
import { PricingEstimator } from './components/PricingEstimator'
import { Button } from './components/ui/Button'
import { Section } from './components/ui/Section'

type Service = {
  title: string
  description: string
  points: string[]
}

type PricingTier = {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
}

type WorkItem = {
  title: string
  blurb: string
  link?: string
  image: string
}

type ContactField = {
  label: string
  type: 'text' | 'email' | 'textarea'
  name: string
  placeholder: string
}

const brandName = 'Plainline Studio'

const services: Service[] = [
  {
    title: 'Website builds',
    description: 'New sites tailored to your business with clear copy and clean UX.',
    points: ['Discovery and sitemap', 'Design in Figma', 'Build with React / Vite'],
  },
  {
    title: 'Redesigns',
    description: 'Refresh an existing site without losing what works.',
    points: ['Modern UI update', 'Mobile-first clean up', 'SEO-friendly structure'],
  },
  {
    title: 'Hosting & maintenance',
    description: 'Keep your site fast, secure, and backed up.',
    points: ['Managed hosting', 'Uptime monitoring', 'Small content updates'],
  },
  {
    title: 'One-off fixes',
    description: 'Help with performance, bugs, or content changes.',
    points: ['Performance tuning', 'Bug fixes', 'Content edits'],
  },
]

const pricing: PricingTier[] = [
  {
    name: 'Starter',
    price: 'NZD 1,200',
    description: 'Simple one-page or landing site for a new service or campaign.',
    features: ['1-3 sections', 'Mobile-first layout', 'Basic contact form UI', '1 round of revisions'],
    cta: 'Book starter build',
  },
  {
    name: 'Standard',
    price: 'NZD 2,800',
    description: 'Multi-page site for a small business with clear calls-to-action.',
    features: ['Up to 6 pages', 'Light copy support', 'Performance pass', '2 rounds of revisions'],
    cta: 'Plan a standard site',
  },
  {
    name: 'Custom',
    price: 'From NZD 4,500',
    description: 'When you need something tailored: integrations, unique layouts, or migration.',
    features: ['Custom components', 'CMS or data hooks (future-ready)', 'Migration assistance', 'Ongoing support options'],
    cta: 'Discuss custom scope',
  },
]

const work: WorkItem[] = [
  {
    title: 'R32Garage',
    blurb: 'Performance parts retailer redesign: clearer hero, inventory highlights, faster load.',
    link: '#',
    image: featuredGtr,
  },
  {
    title: 'Holden Specialist',
    blurb: 'Service booking microsite with simple pricing and contact capture.',
    link: '#',
    image: featuredHolden,
  },
  {
    title: 'Local Builder',
    blurb: 'Brochure site with project gallery and enquiry form.',
    link: '#',
    image: featuredJag,
  },
]

const highlightedWork = work.slice(0, 2)

const contactFields: ContactField[] = [
  { label: 'Name', type: 'text', name: 'name', placeholder: 'Your name' },
  { label: 'Email', type: 'email', name: 'email', placeholder: 'you@example.com' },
  { label: 'Project', type: 'textarea', name: 'project', placeholder: 'What do you need help with?' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-neutral-900 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <img src={heroImage} alt={brandName} className="h-full w-full object-cover" />
          </div>
          <div className="leading-none">
            <div className="text-[13px] font-semibold tracking-[0.18em] text-white uppercase">{brandName}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/55">Web design & build</div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-neutral-300">
          <a className="transition hover:text-white" href="#home">Home</a>
          <a className="transition hover:text-white" href="#services">Services</a>
          <a className="transition hover:text-white" href="#pricing">Pricing</a>
          <a className="transition hover:text-white" href="#work">Work</a>
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="home" className="px-6 pb-24 pt-24 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="space-y-7 lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">Solo developer for NZ businesses</p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Websites that are clear, fast, and easy to keep updated.
          </h1>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            I design and build straightforward sites for small businesses. Simple pricing, honest delivery, and support when you need it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#contact">Book a call</Button>
            <Button href="#work" variant="ghost">See recent work</Button>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>Design & build</span>
            <span>Performance-first</span>
            <span>Ongoing support</span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 lg:col-span-5">
          <img alt="Project preview" className="h-full w-full object-cover" src={heroImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

function FeaturedInventory() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Recent examples"
      description="A few recent builds and redesigns. More references available on request."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {work.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 transition duration-300 hover:-translate-y-1 hover:border-red-500/60"
          >
            <div className="relative">
              <img alt={item.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.blurb}</p>
              <Button variant="ghost" className="px-0 py-0 text-xs font-semibold" href={item.link ?? '#'">
                View details
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Design, build, and support"
      description="Small business sites, redesigns, hosting, and one-off fixes. Clear scope, fast delivery, and no fluff."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5 transition hover:border-red-500/60">
            <div className="text-sm font-semibold text-white">{service.title}</div>
            <p className="mt-3 text-sm text-white/70">{service.description}</p>
            <ul className="mt-4 space-y-1 text-xs text-white/60">
              {service.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function PricingSection() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Straightforward pricing in NZD"
      description="Pick a tier that matches your scope. Custom work available when you need it."
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-neutral-900/80 p-6">
              <div className="space-y-3">
                <div className="text-sm font-semibold uppercase tracking-[0.1em] text-white/70">{plan.name}</div>
                <div className="text-2xl font-semibold text-white">{plan.price}</div>
                <p className="text-sm text-white/70">{plan.description}</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full" variant="ghost">{plan.cta}</Button>
              </div>
            </div>
          ))}
        </div>
        <PricingEstimator />
      </div>
    </Section>
  )
}

function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Hi, I'm a solo developer based in NZ"
      description="I work directly with owners and operators to ship sites that are easy to understand and maintain. No hand-offs, no layers of account managers."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="space-y-3 text-sm text-white/70">
          <p>I design and build in React/Vite with a focus on performance and clarity. If you need copy help, I’ll guide you through what matters for your audience.</p>
          <p>Most sites launch within 2-4 weeks. I stay available for hosting, content updates, and small improvements so you’re not left searching for another developer.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6 space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">What you can expect</p>
          <ul className="space-y-2">
            <li>• Clear scope and pricing before we start.</li>
            <li>• Fast iterations with Loom updates, not long waits.</li>
            <li>• Practical recommendations instead of jargon.</li>
            <li>• Ongoing support if you want it, or a clean handover.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell me about your site"
      description="No obligation. Share a bit about your business and I’ll reply with next steps."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <form className="space-y-4 rounded-2xl border border-white/10 bg-neutral-900/80 p-6">
          {contactFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor={field.name}>
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="min-h-[140px] w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-red-500 focus:outline-none"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-red-500 focus:outline-none"
                />
              )}
            </div>
          ))}
          <Button className="w-full">Send message</Button>
          <p className="text-xs text-white/50">No spam. I typically reply within one business day.</p>
        </form>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-neutral-900/80 p-6 text-sm text-white/70">
          <p className="font-semibold text-white">Prefer email?</p>
          <p>hello@plainline.studio</p>
          <p className="font-semibold text-white">Typical availability</p>
          <p>New builds: 2-4 weeks. Smaller fixes: within 2 business days.</p>
          <p className="font-semibold text-white">Based in</p>
          <p>Auckland, NZ • Available remote</p>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 py-10 text-sm text-white/70 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{brandName}</p>
          <p className="mt-1">hello@plainline.studio</p>
          <p>Auckland, NZ</p>
        </div>
        <div className="flex gap-4">
          <span className="cursor-pointer transition hover:text-white">LinkedIn</span>
          <span className="cursor-pointer transition hover:text-white">GitHub</span>
          <span className="cursor-pointer transition hover:text-white">Email</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      <main className="font-sans">
        <HeroSection />
        <FeaturedInventory />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
