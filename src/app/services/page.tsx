import PageHero from "@/components/PageHero";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Zap,
  Globe,
  Users,
  Shield,
  Monitor,
  Smartphone,
  Package,
  Plug,
} from "lucide-react";

const servicenowServices = [
  {
    icon: <Settings size={22} />,
    title: "Implementation",
    desc: "End-to-end ServiceNow platform deployment, from scoping and configuration to go-live and hypercare.",
    href: "/servicenow/implementation",
  },
  {
    icon: <Zap size={22} />,
    title: "Development",
    desc: "Custom applications and workflows built natively on the Now Platform using App Engine and scoped apps.",
    href: "/servicenow/development",
  },
  {
    icon: <Globe size={22} />,
    title: "Integration",
    desc: "Connect ServiceNow to your existing tools, ERPs, and third-party systems via REST, SOAP, and Integration Hub.",
    href: "/servicenow/integration",
  },
  {
    icon: <Users size={22} />,
    title: "Training",
    desc: "Role-based, hands-on ServiceNow training and certification preparation for your internal teams.",
    href: "/servicenow/training",
  },
  {
    icon: <Shield size={22} />,
    title: "Managed Services",
    desc: "Ongoing platform management, support, and proactive maintenance on a flexible retainer.",
    href: "/servicenow/managed-services",
  },
];

const digitalServices = [
  {
    icon: <Monitor size={22} />,
    title: "Website Creation",
    desc: "High-performance, SEO-optimised websites built with the right stack for your project and audience.",
    href: "/digital/website-creation",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Application Development",
    desc: "Custom web and mobile applications designed around your users and built to scale.",
    href: "/digital/app-development",
  },
  {
    icon: <Package size={22} />,
    title: "SaaS Solutions",
    desc: "Cloud-native, multi-tenant SaaS products, from MVP to enterprise-grade platforms.",
    href: "/digital/saas",
  },
  {
    icon: <Plug size={22} />,
    title: "App Integration",
    desc: "Connect your tools, APIs, and platforms into one seamless, automated ecosystem.",
    href: "/digital/app-integration",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="What we offer"
        highlight="end-to-end"
        description="From ServiceNow implementations to custom digital products, we cover the full technology stack your business needs."
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Clevitek operates across two pillars: <strong className="text-slate-800">ServiceNow</strong> (our core expertise) and <strong className="text-slate-800">Digital Services</strong>, where we build modern websites, web and mobile apps, SaaS products, and API integrations. Every engagement is led by senior specialists and delivered with a business-first mindset.
          </p>
        </div>
      </section>

      {/* ServiceNow */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wide">Core</span>
                <span className="text-xs text-slate-400">Our main expertise</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                ServiceNow <span className="gradient-text">Services</span>
              </h2>
              <p className="mt-1.5 text-slate-500 text-sm max-w-xl">
                End-to-end expertise across the Now Platform, from first deployment through long-term platform evolution and managed operations.
              </p>
            </div>
            <Link
              href="/servicenow"
              className="shrink-0 flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-2.5 transition-all"
            >
              ServiceNow overview <ArrowRight size={15} />
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
            <div className="rounded-2xl gradient-bg p-6 flex flex-col justify-between text-white shadow-lg">
              <div>
                <h3 className="font-bold text-lg mb-2">Not sure where to start?</h3>
                <p className="text-indigo-200 text-sm">Let our certified experts guide you to the right solution.</p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-white text-indigo-700 rounded-xl font-semibold text-sm hover:scale-105 transition-transform self-start"
              >
                Talk to us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full uppercase tracking-wide">Digital</span>
                <span className="text-xs text-slate-400">Beyond ServiceNow</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Digital <span className="gradient-text">Services</span>
              </h2>
              <p className="mt-1.5 text-slate-500 text-sm max-w-xl">
                Web, mobile, SaaS, and integration: we build the digital products your business needs to compete and grow.
              </p>
            </div>
            <Link
              href="/digital"
              className="shrink-0 flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-2.5 transition-all"
            >
              Digital overview <ArrowRight size={15} />
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
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-bg p-12 shadow-2xl">
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to get started?</h2>
            <p className="text-indigo-200 text-sm mb-6">Tell us about your project and we&apos;ll match you with the right service and team.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-indigo-700 font-bold rounded-xl shadow hover:scale-105 transition-all"
            >
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
