import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Package, Users, BarChart3, ShieldCheck, RefreshCw, Zap } from "lucide-react";

const ICON = (slug: string, color = "4f46e5") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const products = [
  {
    name: "TicketFlow",
    category: "IT Help Desk SaaS",
    badgeColor: "bg-indigo-50 text-indigo-700",
    desc: "A multi-tenant IT service desk platform for SMBs with ticket management, SLA tracking, knowledge base, and customer portal. Deployed on AWS with Stripe billing and white-label support.",
    stack: [
      { name: "Next.js",    icon: ICON("nextdotjs", "000000") },
      { name: "NestJS",     icon: ICON("nestjs", "E0234E") },
      { name: "PostgreSQL", icon: ICON("postgresql", "4169E1") },
      { name: "AWS",        icon: ICON("amazonaws", "FF9900") },
      { name: "Stripe",     icon: ICON("stripe", "008CDD") },
      { name: "Redis",      icon: ICON("redis", "DC382D") },
    ],
  },
  {
    name: "ContractHub",
    category: "Contract Management SaaS",
    badgeColor: "bg-violet-50 text-violet-700",
    desc: "An end-to-end contract lifecycle management SaaS covering creation, negotiation, digital signing, renewal tracking, and obligation management with automated reminders and audit trails.",
    stack: [
      { name: "React",      icon: ICON("react", "61DAFB") },
      { name: "Node.js",    icon: ICON("nodedotjs", "339933") },
      { name: "MongoDB",    icon: ICON("mongodb", "47A248") },
      { name: "Azure",      icon: ICON("microsoftazure", "0078D4") },
      { name: "Stripe",     icon: ICON("stripe", "008CDD") },
      { name: "TypeScript", icon: ICON("typescript", "3178C6") },
    ],
  },
  {
    name: "AssetTrack",
    category: "IT Asset Management SaaS",
    badgeColor: "bg-emerald-50 text-emerald-700",
    desc: "A cloud-native IT asset lifecycle SaaS covering procurement, deployment tracking, maintenance scheduling, and end-of-life disposal, with native ServiceNow and CMDB integration.",
    stack: [
      { name: "Next.js",    icon: ICON("nextdotjs", "000000") },
      { name: "FastAPI",    icon: ICON("fastapi", "009688") },
      { name: "PostgreSQL", icon: ICON("postgresql", "4169E1") },
      { name: "GCP",        icon: ICON("googlecloud", "4285F4") },
      { name: "Docker",     icon: ICON("docker", "2496ED") },
      { name: "Kubernetes", icon: ICON("kubernetes", "326CE5") },
    ],
  },
];

const benefits = [
  { icon: <Package size={20} />, title: "Cloud-native architecture", desc: "Built on AWS, GCP, or Azure with serverless and containerised components for cost efficiency and elastic scaling." },
  { icon: <Users size={20} />, title: "Multi-tenant by design", desc: "Proper tenant isolation, data segregation, and shared infrastructure management built in from the start, not retrofitted later." },
  { icon: <Zap size={20} />, title: "Fast MVP to market", desc: "We prioritise the features that validate your core value proposition, getting you to market quickly and iterating from real user feedback." },
  { icon: <RefreshCw size={20} />, title: "Subscription & billing", desc: "Stripe, Chargebee, or custom billing: subscription management, trial flows, and plan changes built into your product." },
  { icon: <ShieldCheck size={20} />, title: "Security & compliance", desc: "Data encryption, audit logging, role-based access, and compliance foundations (GDPR, SOC 2) built into the architecture." },
  { icon: <BarChart3 size={20} />, title: "Product analytics", desc: "Usage analytics, feature adoption tracking, and churn indicators give you the data to make smart product decisions." },
];

const bullets = [
  "Product discovery, feature prioritisation, and MVP scope definition",
  "SaaS architecture design (multi-tenancy, scalability, security)",
  "Frontend and backend development with cloud-native infrastructure",
  "Authentication, authorisation, and user management system",
  "Billing integration (Stripe, Chargebee) and subscription management",
  "CI/CD pipeline and DevOps setup for rapid, safe releases",
  "Post-launch monitoring, optimisation, and feature development",
];

export default function SaaSPage() {
  return (
    <>
      <PageHero
        badge="Digital Services"
        title="SaaS Solutions"
        highlight="from idea to product"
        description="Custom SaaS products built to scale, from MVP validation to enterprise-grade multi-tenant platforms."
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Building a SaaS product is more than writing code. It requires product thinking, scalable architecture, and a clear path from MVP to market. We design and build cloud-native, subscription-based software that eliminates infrastructure overhead for your customers, supports multi-tenancy, and scales reliably as your user base grows.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Why work with <span className="gradient-text">Clevitek</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card-soft p-6">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow">
                  {b.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">Portfolio</span>
            <h2 className="text-3xl font-bold text-slate-900">SaaS products we&apos;ve <span className="gradient-text">built</span></h2>
            <p className="mt-2 text-slate-500">Scalable, revenue-generating products built from the ground up.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="card-soft p-6 flex flex-col gap-4">
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${product.badgeColor}`}>
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{product.desc}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {product.stack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tech.icon} alt={tech.name} width={14} height={14} className="shrink-0" loading="lazy" />
                        <span className="text-xs font-medium text-slate-600 whitespace-nowrap">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">Our approach</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What we <span className="gradient-text">deliver</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We work with you as a product and engineering partner, helping you define the right MVP scope, design the architecture that will support growth, build iteratively, and launch. We stay involved after launch to support feature development, infrastructure scaling, and product evolution based on real user data.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle size={17} className="text-indigo-500 shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-3xl gradient-bg p-10 text-white text-center shadow-2xl max-w-sm w-full">
              <h3 className="text-2xl font-bold mb-3">Have a SaaS idea?</h3>
              <p className="text-indigo-200 text-sm mb-6">From napkin sketch to live product. Let&apos;s build it together.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
              >
                Start a project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
