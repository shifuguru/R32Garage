import heroImage from './assets/garage-hero.jpg'
import featuredJag from './assets/featured-jag.jpg'
import featuredMitsi from './assets/featured-mitsi.jpg'
import featuredHolden from './assets/featured-holden.jpg'
import featuredDatsun from './assets/featured-datsun.jpg'
import featuredGtr from './assets/featured-gtr.jpg'
import featuredSupra from './assets/featured-supra.jpg'

const services = [
    { title: 'Buy Cars', description: 'Curated performance builds and vetted sellers.' },
    { title: 'Inventory', description: 'Fresh arrivals with verified specs and history.' },
    { title: 'Rentals', description: 'Short-term drives for track days or events.' },
    { title: 'Performance Parts', description: 'OEM+ and motorsport-grade upgrades.' },
    { title: 'Financing', description: 'Flexible plans tailored to your build.' },
]

const featuredCars = [
    { name: 'Jaguar XJ Performance', price: '$52,900', spec: 'Supercharged • RWD • Touring', image: featuredJag },
    { name: 'Mitsubishi Evolution', price: '$44,500', spec: 'Turbo AWD • 6-speed • Track Ready', image: featuredMitsi },
    { name: 'Holden Sedan', price: '$39,900', spec: 'V8 • RWD • Street Build', image: featuredHolden },
    { name: 'Nissan GT-R', price: '$119,000', spec: 'Twin Turbo • AWD • 6-speed', image: featuredGtr },
]

const inventoryCars = [
    { name: 'Datsun Classic', price: '$28,900', spec: 'Restomod • RWD • Manual', image: featuredDatsun },
    { name: 'Nissan GT-R', price: '$119,000', spec: 'Twin Turbo • AWD • 6-speed', image: featuredGtr },
    { name: 'Toyota Supra', price: '$63,500', spec: 'Turbo • RWD • 8-speed', image: featuredSupra },
    { name: 'Mitsubishi Evolution', price: '$44,500', spec: 'Turbo AWD • 6-speed • Track Ready', image: featuredMitsi },
    { name: 'Holden Sedan', price: '$39,900', spec: 'V8 • RWD • Street Build', image: featuredHolden },
    { name: 'Jaguar XJ Performance', price: '$52,900', spec: 'Supercharged • RWD • Touring', image: featuredJag },
]

const gtrCategories = ['Exhaust', 'Intake', 'Suspension', 'ECU']

const parts = [
    { name: 'Titanium Valved Exhaust', price: '$3,200', description: 'Track tone with adjustable street volume.', image: featuredSupra },
    { name: 'High-Flow Carbon Intake', price: '$1,350', description: 'Cold-air feed optimized for spool.', image: featuredGtr },
    { name: 'Adjustable Coilover Kit', price: '$2,800', description: 'Dialed damping for street and circuit.', image: featuredMitsi },
    { name: 'ECU Calibration Suite', price: '$1,950', description: 'Custom tune with data logging support.', image: featuredDatsun },
]

const faqItems = [
    { question: 'Do you source cars nationally?', answer: 'Yes. We work with trusted partners nationwide and handle logistics and inspection.' },
    { question: 'Can you build to a power target?', answer: 'Absolutely. We build around your goals and budget with staged upgrade paths.' },
    { question: 'Do you offer track support?', answer: 'We provide prep, setup, and on-site support for select events and customers.' },
]

function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-neutral-900 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                        <img
                            src={heroImage}
                            alt="Garage 32"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="leading-none">
                        <div className="text-[13px] font-semibold tracking-[0.18em] text-white">
                            GARAGE 32
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/55">
                            Performance • Sales • Parts
                        </div>
                    </div>
                </div>
                <nav className="flex flex-wrap gap-4 text-sm text-neutral-300">
                    <a className="transition hover:text-white" href="#home">Home</a>
                    <a className="transition hover:text-white" href="#featured">Featured</a>
                    <a className="transition hover:text-white" href="#inventory">Inventory</a>
                    <a className="transition hover:text-white" href="#services">Services</a>
                    <a className="transition hover:text-white" href="#parts">Parts</a>
                    <a className="transition hover:text-white" href="#about">About</a>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">Performance Car Garage</p>
                    <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                        Precision-built performance for drivers who demand more.
                    </h1>
                    <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                        Curated builds, vetted inventory, and motorsport-grade parts. From daily drivers to track machines, every detail is deliberate.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button className="rounded-md bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400">Get a Quote</button>
                        <button className="rounded-md border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500/60">View Inventory</button>
                    </div>
                    <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
                        <span>Certified Builds</span>
                        <span>Track Support</span>
                        <span>Nationwide Delivery</span>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 lg:col-span-5">
                    <img alt="Garage 32 performance cars" className="h-full w-full object-cover" src={heroImage} />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                </div>
            </div>
        </section>
    )
}

function FeaturedInventory() {
    return (
        <section id="featured" className="border-t border-white/10 px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-10">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Featured Inventory</h2>
                        <p className="text-sm text-white/70 sm:text-base">Limited selections ready for immediate delivery.</p>
                    </div>
                    <button className="rounded-md border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-red-500/60">View All</button>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {featuredCars.slice(0, 3).map((car) => (
                        <article key={car.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 transition duration-300 hover:-translate-y-1 hover:border-red-500/60">
                            <div className="relative">
                                <img alt={car.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" src={car.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
                            </div>
                            <div className="space-y-2 p-5">
                                <h3 className="text-sm font-semibold text-white">{car.name}</h3>
                                <p className="text-sm text-white/70">{car.spec}</p>
                                <p className="text-sm font-semibold text-white">{car.price}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServicesSection() {
    return (
        <section id="services" className="border-t border-white/10 px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <div className="space-y-2">
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Services</h2>
                    <p className="text-sm text-white/70 sm:text-base">Acquisition, upgrades, and ownership support.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5 transition hover:border-red-500/60">
                            <div className="text-sm font-semibold text-white">{service.title}</div>
                            <p className="mt-3 text-sm text-white/70">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-neutral-950 px-6 py-10 text-sm text-white/70 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-semibold text-white">Garage 32</p>
                    <p className="mt-1">contact@garage32.com</p>
                    <p>(+64)027 284 3200</p>
                </div>
                <div className="flex gap-4">
                    <span className="cursor-pointer transition hover:text-white">Instagram</span>
                    <span className="cursor-pointer transition hover:text-white">YouTube</span>
                    <span className="cursor-pointer transition hover:text-white">X</span>
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

                <section id="about" className="border-t border-white/10 px-6 py-24 lg:px-8">
                    <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Built for discerning drivers.</h2>
                            <p className="text-sm text-white/70 sm:text-base">
                                Garage 32 delivers transparent sourcing, meticulous inspections, and tailored performance plans. Every vehicle and part is validated to meet real-world and track standards.
                            </p>
                            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
                                <span className="rounded-full border border-white/10 px-3 py-1">Verified History</span>
                                <span className="rounded-full border border-white/10 px-3 py-1">Dyno-Proven</span>
                                <span className="rounded-full border border-white/10 px-3 py-1">Track Support</span>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6 space-y-3">
                                <h3 className="text-lg font-semibold text-white">Why Garage 32</h3>
                                <p className="text-sm text-white/70">Single point of accountability from sourcing to delivery. Premium partners, meticulous documentation, and bespoke tuning paths.</p>
                                <p className="text-sm text-white/70">Discreet consultations and private viewings available by request.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6 space-y-3">
                                <h3 className="text-lg font-semibold text-white">Highlighted Inventory</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {inventoryCars.slice(0, 2).map((car) => (
                                        <div key={car.name} className="rounded-xl border border-white/10 bg-neutral-900/80 p-4">
                                            <p className="text-sm font-semibold text-white">{car.name}</p>
                                            <p className="text-xs text-white/70">{car.spec}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cta" className="border-t border-white/10 px-6 py-24 lg:px-8">
                    <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-neutral-900/90 p-8 sm:p-10">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to commission your next build?</h2>
                                <p className="text-sm text-white/70">Tell us your targets and timelines. We’ll tailor options that fit.</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button className="rounded-md bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400">Book a Consultation</button>
                                <button className="rounded-md border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500/60">View Inventory</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App
