import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  BarChart3,
  Settings,
  CheckCircle,
  Star,
  Monitor,
  Smartphone,
  Package,
  Plug,
  MapPin,
  Link2,
  Target,
  Briefcase,
} from "lucide-react";

const servicenowServices = [
  {
    icon: <Settings size={22} />,
    title: "Implementation",
    desc: "End-to-end ServiceNow platform deployment tailored to your business processes.",
    href: "/servicenow/implementation",
  },
  {
    icon: <Zap size={22} />,
    title: "Development",
    desc: "Custom applications and workflows built natively on the Now Platform.",
    href: "/servicenow/development",
  },
  {
    icon: <Globe size={22} />,
    title: "Integration",
    desc: "Connect ServiceNow with your existing tools and third-party systems seamlessly.",
    href: "/servicenow/integration",
  },
  {
    icon: <Users size={22} />,
    title: "Training",
    desc: "Empower your teams with hands-on ServiceNow training and certifications.",
    href: "/servicenow/training",
  },
  {
    icon: <Shield size={22} />,
    title: "Managed Services",
    desc: "24/7 support and proactive management to keep your platform running at peak.",
    href: "/servicenow/managed-services",
  },
];

const digitalServices = [
  {
    icon: <Monitor size={22} />,
    title: "Website Creation",
    desc: "Modern, performant websites designed to convert and built to last.",
    href: "/digital/website-creation",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Application Development",
    desc: "Web and mobile apps crafted around your users and your business goals.",
    href: "/digital/app-development",
  },
  {
    icon: <Package size={22} />,
    title: "SaaS Solutions",
    desc: "Custom SaaS products built to scale, from MVP to enterprise-grade.",
    href: "/digital/saas",
  },
  {
    icon: <Plug size={22} />,
    title: "App Integration",
    desc: "Connect your tools, APIs, and platforms into one seamless ecosystem.",
    href: "/digital/app-integration",
  },
];

const solutions = [
  { title: "Nearshoring", icon: <MapPin size={22} />, desc: "Flexible talent, lower cost, full timezone overlap." },
  { title: "Integrate ServiceNow", icon: <Link2 size={22} />, desc: "Break silos and connect every system to your Now Platform." },
  { title: "ServiceNow ITSM", icon: <Target size={22} />, desc: "Streamline IT operations and deliver faster, smarter service." },
  { title: "ServiceNow CRM", icon: <Briefcase size={22} />, desc: "Unify customer workflows and boost satisfaction scores." },
  { title: "Platform Analytics", icon: <BarChart3 size={22} />, desc: "Turn platform data into actionable business insights." },
];

const whyUs = [
  "ServiceNow-certified experts",
  "Agile, transparent delivery",
  "Business-first approach",
  "Nearshore & hybrid teams",
  "Long-term partnership mindset",
  "Post-go-live support included",
];

const stats = [
  { value: "0", label: "Projects delivered" },
  { value: "0", label: "Clients served" },
  { value: "10+", label: "Certifications" },
  { value: "3+", label: "Countries served" },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
        {/* decorative blobs */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1, #7c3aed)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4, #4f46e5)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-14">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              ServiceNow Experts
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Smart workflows,{" "}
              <span className="gradient-text">real results.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl">
              Clevitek helps enterprises unlock the full power of ServiceNow, from implementation to custom development, integration, and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-bg text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Get started <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-indigo-100 text-slate-700 font-semibold shadow hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="card-soft p-6 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Now Platform</p>
                    <p className="text-xs text-slate-400">Workflow Automation</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["ITSM", "App Engine", "Integration Hub", "Analytics"].map((tag, i) => (
                    <div key={tag} className="flex items-center justify-between p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors cursor-default">
                      <span className="text-sm font-medium text-slate-700">{tag}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${i % 2 === 0 ? "bg-green-100 text-green-700" : "bg-violet-100 text-violet-700"}`}>
                        {i % 2 === 0 ? "Active" : "Custom"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-50 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle size={14} className="text-green-500" />
                  All systems operational
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 z-20">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="text-xs font-semibold text-slate-700">5.0 rated</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-3 py-2 z-20">
                <p className="text-xs font-semibold text-slate-700">Just getting started</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-14 bg-white border-y border-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* ServiceNow (primary) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wide">Core</span>
                  <span className="text-xs text-slate-400">Our main expertise</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  ServiceNow <span className="gradient-text">Services</span>
                </h2>
                <p className="mt-1.5 text-slate-500 text-sm">End-to-end expertise on the Now Platform, from first deployment to long-term evolution.</p>
              </div>
              <Link href="/servicenow" className="shrink-0 flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-2.5 transition-all">
                All ServiceNow services <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicenowServices.map((s) => (
                <Link key={s.title} href={s.href} className="card-soft p-6 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-indigo-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
              {/* CTA card */}
              <div className="rounded-2xl gradient-bg p-6 flex flex-col justify-between text-white shadow-lg">
                <div>
                  <h3 className="font-bold text-lg mb-2">Not sure where to start?</h3>
                  <p className="text-indigo-200 text-sm">Let our experts guide you to the right solution.</p>
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-white text-indigo-700 rounded-xl font-semibold text-sm hover:scale-105 transition-transform self-start">
                  Talk to us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Digital Services (secondary) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full uppercase tracking-wide">Digital</span>
                  <span className="text-xs text-slate-400">Beyond ServiceNow</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Digital <span className="gradient-text">Services</span>
                </h2>
                <p className="mt-1.5 text-slate-500 text-sm">Web, mobile, SaaS, and integration: we build the digital products your business needs.</p>
              </div>
              <Link href="/digital" className="shrink-0 flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-2.5 transition-all">
                All digital services <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {digitalServices.map((s) => (
                <Link key={s.title} href={s.href} className="card-soft p-5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-4 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-violet-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── WHY CLEVITEK ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-3">Why us</span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              A partner that <span className="gradient-text">gets it right</span>
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed max-w-lg">
              We don&apos;t just implement. We understand your business, design the right solution, and stay with you through every step.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle size={17} className="text-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about/who-we-are" className="mt-8 inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:gap-3 transition-all">
              Learn about Clevitek <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: <BarChart3 size={20} />, title: "Data-driven", desc: "Every decision backed by platform insights." },
              { icon: <Shield size={20} />, title: "Certified", desc: "ServiceNow-certified professionals only." },
              { icon: <Zap size={20} />, title: "Agile", desc: "Sprint-based delivery, fast iterations." },
              { icon: <Users size={20} />, title: "People-first", desc: "We invest in your team, not just the tech." },
            ].map((card) => (
              <div key={card.title} className="card-soft p-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
                  {card.icon}
                </div>
                <h4 className="font-semibold text-slate-800 text-sm">{card.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ─── */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-white text-indigo-700 text-xs font-semibold rounded-full shadow mb-3">Solutions</span>
            <h2 className="text-4xl font-bold text-slate-900">The right fit for <span className="gradient-text">your challenge</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {solutions.map((sol) => (
              <div key={sol.title} className="card-soft p-5 text-center group">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow group-hover:scale-110 transition-transform">
                  {sol.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1.5">{sol.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-bg p-12 shadow-2xl">
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-3 text-indigo-200 text-lg">Tell us about your project and we&apos;ll take it from there.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-indigo-700 font-bold rounded-xl shadow hover:scale-105 transition-all"
              >
                Contact us <ArrowRight size={16} />
              </Link>
              <Link
                href="/customer-cases"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
