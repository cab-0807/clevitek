import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Settings, Zap, Globe, Users, Shield, Target, BarChart3, Layers } from "lucide-react";

const services = [
  {
    icon: <Settings size={24} />,
    title: "Implementation",
    desc: "End-to-end ServiceNow platform deployment tailored to your business processes, from scoping and configuration to go-live and hypercare. We follow the ServiceNow Adaptive Implementation Framework (SAIF) to deliver on time and within scope.",
    href: "/servicenow/implementation",
    highlights: ["ITSM, ITOM, CSM, HR", "CMDB design & data quality", "Process alignment & adoption", "Go-live & hypercare support"],
  },
  {
    icon: <Zap size={24} />,
    title: "Development",
    desc: "Custom applications and automated workflows built natively on the Now Platform. Whether you need a lightweight scoped app or a complex multi-table solution, we build upgrade-safe and standards-compliant.",
    href: "/servicenow/development",
    highlights: ["App Engine Studio & Pro-code", "Scoped application architecture", "Flow Designer & IntegrationHub", "UI Builder & portals"],
  },
  {
    icon: <Globe size={24} />,
    title: "Integration",
    desc: "Connect ServiceNow to your existing tools and third-party systems: ERP, HRIS, monitoring, cloud, and more. We use REST APIs, SOAP, MID Servers, and Integration Hub spokes to build reliable, maintainable pipelines.",
    href: "/servicenow/integration",
    highlights: ["180+ pre-built spokes", "REST / SOAP / GraphQL", "OAuth 2.0 & certificate auth", "Error handling & retry logic"],
  },
  {
    icon: <Users size={24} />,
    title: "Training",
    desc: "Hands-on, role-based ServiceNow training that gets your teams to self-sufficiency quickly. We cover administrator fundamentals, developer workflows, and certification preparation for CSA, CAD, and CIS tracks.",
    href: "/servicenow/training",
    highlights: ["CSA / CAD / CIS prep", "Admin & developer tracks", "Custom workshop design", "On-site or remote delivery"],
  },
  {
    icon: <Shield size={24} />,
    title: "Managed Services",
    desc: "Flexible, retainer-based platform management, from day-to-day administration and incident support to twice-yearly upgrades and proactive health monitoring. We keep your instance running at peak performance.",
    href: "/servicenow/managed-services",
    highlights: ["Defined SLAs & response times", "Twice-yearly upgrade management", "Proactive health checks", "Dedicated platform team"],
  },
];

const whyServiceNow = [
  { icon: <Target size={20} />, title: "Single platform, unlimited potential", desc: "ServiceNow unifies IT, HR, customer service, and operations on one data model, eliminating silos and manual handoffs." },
  { icon: <BarChart3 size={20} />, title: "Measurable business outcomes", desc: "Faster resolution times, lower cost per ticket, improved employee and customer experience, all tracked in real time." },
  { icon: <Layers size={20} />, title: "Built to grow with you", desc: "Start with ITSM and expand to full enterprise service management as your needs evolve, with no rip-and-replace required." },
];

export default function ServiceNowPage() {
  return (
    <>
      <PageHero
        badge="ServiceNow"
        title="Our ServiceNow services"
        highlight="Now Platform"
        description="End-to-end expertise across the Now Platform, from first deployment to long-term managed operations."
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            ServiceNow is the world&apos;s leading enterprise service management platform. Getting the most out of it requires more than following the documentation. We bring certified expertise, real-world delivery experience, and a business-first mindset to every ServiceNow engagement.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="card-soft p-6 flex flex-col sm:flex-row gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shadow">
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
                    <span key={h} className="flex items-center gap-1.5 text-xs text-slate-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                      <CheckCircle size={11} className="text-indigo-400" /> {h}
                    </span>
                  ))}
                </div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why ServiceNow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">Why ServiceNow</span>
            <h2 className="text-2xl font-bold text-slate-900">The platform that <span className="gradient-text">transforms operations</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyServiceNow.map((w) => (
              <div key={w.title} className="card-soft p-6 text-center">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow mx-auto">
                  {w.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{w.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-bg p-12 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to start your ServiceNow journey?</h2>
            <p className="text-indigo-200 text-sm mb-6">Tell us where you are today and we&apos;ll show you what&apos;s possible.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
            >
              Talk to an expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
