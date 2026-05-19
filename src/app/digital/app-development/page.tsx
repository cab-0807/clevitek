import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Smartphone, Code, Zap, RefreshCw, ShieldCheck, Layers } from "lucide-react";

const ICON = (slug: string, color = "4f46e5") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const apps = [
  {
    name: "Field Service Portal",
    category: "Mobile Application",
    badgeColor: "bg-indigo-50 text-indigo-700",
    desc: "A cross-platform mobile app for field technicians with real-time work order management, GPS check-in, photo capture, and digital signatures. Cut dispatch time by 40%.",
    stack: [
      { name: "React Native", icon: ICON("react", "61DAFB") },
      { name: "Node.js",      icon: ICON("nodedotjs", "339933") },
      { name: "PostgreSQL",   icon: ICON("postgresql", "4169E1") },
      { name: "AWS",          icon: ICON("amazonaws", "FF9900") },
      { name: "Redis",        icon: ICON("redis", "DC382D") },
    ],
  },
  {
    name: "HR Onboarding Platform",
    category: "Web Application",
    badgeColor: "bg-violet-50 text-violet-700",
    desc: "A structured onboarding web app with task assignment, document signing, video training, and manager dashboards. Reduced onboarding time by 60%.",
    stack: [
      { name: "Next.js",    icon: ICON("nextdotjs", "000000") },
      { name: "NestJS",     icon: ICON("nestjs", "E0234E") },
      { name: "MongoDB",    icon: ICON("mongodb", "47A248") },
      { name: "Azure",      icon: ICON("microsoftazure", "0078D4") },
      { name: "TypeScript", icon: ICON("typescript", "3178C6") },
    ],
  },
  {
    name: "Operations Analytics Dashboard",
    category: "Web Application",
    badgeColor: "bg-cyan-50 text-cyan-700",
    desc: "A real-time operational intelligence dashboard with live KPIs, custom reports, and multi-source data pipelines, built for executive and operational teams.",
    stack: [
      { name: "React",      icon: ICON("react", "61DAFB") },
      { name: "FastAPI",    icon: ICON("fastapi", "009688") },
      { name: "PostgreSQL", icon: ICON("postgresql", "4169E1") },
      { name: "GCP",        icon: ICON("googlecloud", "4285F4") },
      { name: "GraphQL",    icon: ICON("graphql", "E10098") },
    ],
  },
  {
    name: "ServiceNow Mobile Companion",
    category: "Mobile Application",
    badgeColor: "bg-emerald-50 text-emerald-700",
    desc: "A native mobile extension for ServiceNow: approve requests, manage incidents, and view dashboards directly from iOS or Android, even with offline support.",
    stack: [
      { name: "React Native", icon: ICON("react", "61DAFB") },
      { name: "Node.js",      icon: ICON("nodedotjs", "339933") },
      { name: "Firebase",     icon: ICON("firebase", "FFCA28") },
      { name: "TypeScript",   icon: ICON("typescript", "3178C6") },
      { name: "Redux",        icon: ICON("redux", "764ABC") },
    ],
  },
];

const benefits = [
  { icon: <Smartphone size={20} />, title: "Cross-platform development", desc: "Reach iOS, Android, and web from a single codebase, maximising coverage while minimising build and maintenance costs." },
  { icon: <Code size={20} />, title: "Modern tech stack", desc: "React, React Native, Flutter, Node.js, and cloud-native backends: frameworks with the best long-term foundation." },
  { icon: <Zap size={20} />, title: "Rapid iteration", desc: "Agile sprints with frequent demos keep you in control of priorities and let us respond quickly to changing requirements." },
  { icon: <Layers size={20} />, title: "Scalable architecture", desc: "Cloud-native design ensures your application handles growing user loads without costly rewrites." },
  { icon: <RefreshCw size={20} />, title: "Full lifecycle support", desc: "From concept through launch and ongoing maintenance, we stay with you as your application evolves." },
  { icon: <ShieldCheck size={20} />, title: "Security first", desc: "Authentication, authorisation, data encryption, and OWASP best practices built into every application from day one." },
];

const bullets = [
  "Product discovery and requirement definition workshops",
  "UX/UI design and interactive prototyping",
  "Web and mobile application development",
  "Backend API development and database design",
  "Cloud infrastructure setup and CI/CD pipeline configuration",
  "Performance testing and security review",
  "App store submission (iOS/Android) and post-launch support",
];

export default function AppDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="Digital Services"
        title="Application Development"
        highlight="built around your users"
        description="Custom web and mobile applications designed for your business logic, built with modern frameworks, and engineered to scale."
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Off-the-shelf software rarely fits your business perfectly. We design and develop custom applications (web apps, mobile apps, and progressive web apps) tailored to your exact requirements, using proven frameworks to deliver cross-platform solutions that maximise reach and minimise costs.
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
            <h2 className="text-3xl font-bold text-slate-900">Applications we&apos;ve <span className="gradient-text">built</span></h2>
            <p className="mt-2 text-slate-500">Real-world projects delivering measurable results for our clients.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apps.map((app) => (
              <div key={app.name} className="card-soft p-6 flex flex-col gap-4">
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${app.badgeColor}`}>
                    {app.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">{app.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{app.desc}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {app.stack.map((tech) => (
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
              We take your idea from concept to production. We run discovery workshops to define requirements, design intuitive interfaces, develop iteratively with your feedback, and deploy to scalable cloud infrastructure.
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
              <h3 className="text-2xl font-bold mb-3">Got an app idea?</h3>
              <p className="text-indigo-200 text-sm mb-6">Tell us what you want to build and we&apos;ll show you how to make it real.</p>
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
