import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Monitor, Smartphone, Package, Plug, Zap, Layers, RefreshCw } from "lucide-react";

const services = [
  {
    icon: <Monitor size={24} />,
    title: "Website Creation",
    desc: "High-performance, SEO-optimised websites built with the right stack for your project, from marketing sites and corporate platforms to content-heavy portals. We choose the technology based on your goals, not the other way around.",
    href: "/digital/website-creation",
    highlights: ["Next.js, React, Vue, Astro", "SEO & Core Web Vitals", "Headless CMS integration", "Responsive & accessible"],
  },
  {
    icon: <Smartphone size={24} />,
    title: "Application Development",
    desc: "Custom web and mobile applications designed around your users and your business logic. Cross-platform solutions built with React Native or Flutter deliver native-like experiences across iOS, Android, and the web from a single codebase.",
    href: "/digital/app-development",
    highlights: ["React Native & Flutter", "Progressive Web Apps", "Cloud-native backends", "Full lifecycle support"],
  },
  {
    icon: <Package size={24} />,
    title: "SaaS Solutions",
    desc: "Cloud-native, multi-tenant SaaS products built from the ground up, with the right architecture to support growth, billing integration, and secure tenant isolation. From MVP validation to enterprise-grade platforms.",
    href: "/digital/saas",
    highlights: ["Multi-tenant architecture", "Stripe / Chargebee billing", "GDPR & compliance-ready", "MVP to scale roadmap"],
  },
  {
    icon: <Plug size={24} />,
    title: "App Integration",
    desc: "Connect your tools, APIs, and platforms into one seamless, automated ecosystem. We design and build integration layers that eliminate manual data entry, reduce errors, and give your teams a single source of truth.",
    href: "/digital/app-integration",
    highlights: ["REST / GraphQL / Webhooks", "ETL & data pipelines", "Third-party API connectors", "Error handling & monitoring"],
  },
];

const differentiators = [
  { icon: <Zap size={20} />, title: "Stack agnostic", desc: "We choose the best tool for your project, not the one we know best. React, Vue, Python, Go: we work across the full stack." },
  { icon: <Layers size={20} />, title: "Built to scale", desc: "Every architecture decision is made with growth in mind: cloud-native, containerised, and designed to handle what comes next." },
  { icon: <RefreshCw size={20} />, title: "Post-launch partners", desc: "We don't disappear at launch. We provide ongoing maintenance, feature development, and performance monitoring as your product evolves." },
];

export default function DigitalPage() {
  return (
    <>
      <PageHero
        badge="Digital Services"
        title="Beyond ServiceNow"
        highlight="digital products"
        description="Web, mobile, SaaS, and integration: we build the digital products your business needs to compete and grow."
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Alongside our ServiceNow practice, Clevitek builds modern digital products: websites, applications, SaaS platforms, and integrations. We bring the same rigour, craftsmanship, and business-first thinking to every digital project, regardless of scale.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-gradient-to-b from-violet-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="card-soft p-6 flex flex-col sm:flex-row gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 shadow-sm">
                  {s.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-slate-800">{s.title}</h3>
                  <span className="shrink-0 text-xs font-semibold text-slate-400">0{i + 1}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-1.5 text-xs text-slate-600 bg-violet-50 px-2.5 py-1 rounded-lg">
                      <CheckCircle size={11} className="text-violet-400" /> {h}
                    </span>
                  ))}
                </div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-violet-600 text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-3">Our approach</span>
            <h2 className="text-2xl font-bold text-slate-900">How we <span className="gradient-text">build differently</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {differentiators.map((d) => (
              <div key={d.title} className="card-soft p-6 text-center">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow mx-auto">
                  {d.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-violet-50/40 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-bg p-12 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Have a digital project in mind?</h2>
            <p className="text-indigo-200 text-sm mb-6">Tell us what you&apos;re building and we&apos;ll tell you how to make it great.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
            >
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
