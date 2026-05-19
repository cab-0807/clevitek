import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight, CheckCircle } from "lucide-react";

const workflows = [
  {
    id: "it-workflow",
    label: "IT Workflow",
    color: "from-indigo-500 to-indigo-700",
    intro: "Automate and optimise the full spectrum of IT operations, from asset lifecycle and service delivery to infrastructure management and portfolio governance.",
    modules: [
      {
        title: "IT Service Management (ITSM)",
        desc: "ITIL-aligned incident, problem, change, and request management on a single platform. AI-powered routing, self-service portals, and SLA tracking help IT teams resolve issues faster and prevent recurring problems.",
        points: ["Incident & problem management", "Change & release management", "Service request catalogue", "AI-powered intelligent assignment"],
      },
      {
        title: "IT Asset Management (ITAM)",
        desc: "Full hardware and software asset lifecycle management, from procurement through disposal. Real-time inventory visibility, license compliance enforcement, and cost optimisation through automated reclamation of unused licences.",
        points: ["Hardware asset lifecycle tracking", "Software licence compliance", "Procurement integration", "Cost optimisation & reclamation"],
      },
      {
        title: "IT Operations Management (ITOM)",
        desc: "Discover, monitor, and manage your entire IT infrastructure and cloud environment. Automated service mapping, AI-powered event correlation, and cloud lifecycle management reduce outages and optimise spend.",
        points: ["Discovery & service mapping", "Event management & AIOps", "Cloud lifecycle management", "Operational automation"],
      },
      {
        title: "Software Asset Management (SAM)",
        desc: "Automate software licence tracking, compliance verification, and cost optimisation. AI-powered contract analysis extracts entitlements automatically, while SaaS management surfaces underutilised subscriptions.",
        points: ["Licence compliance automation", "SaaS licence management", "AI contract entitlement analysis", "Vendor spend optimisation"],
      },
      {
        title: "Strategic Portfolio Management (SPM)",
        desc: "Align IT resources with business strategy through portfolio governance and demand management. Gain executive visibility into portfolio health, risk exposure, and resource utilisation across competing initiatives.",
        points: ["Portfolio governance & demand management", "Enterprise architecture alignment", "Risk & compliance visibility", "Executive reporting & dashboards"],
      },
      {
        title: "Database Management & CMDB",
        desc: "Maintain an accurate, automated Configuration Management Database as the single source of truth for all IT assets and their relationships. Drive better incident analysis, change planning, and service optimisation from reliable configuration data.",
        points: ["Automated discovery & reconciliation", "CI relationship mapping", "CMDB health monitoring", "Business service mapping"],
      },
    ],
  },
  {
    id: "client-workflow",
    label: "Client Workflow",
    color: "from-violet-500 to-violet-700",
    intro: "Deliver exceptional customer and field service experiences, from omnichannel case management to intelligent field dispatch and proactive support.",
    modules: [
      {
        title: "Customer Service Management (CSM)",
        desc: "Unify customer interactions across email, phone, chat, and self-service into a single case management platform. AI automation handles routine requests, virtual agents provide 24/7 support, and proactive telemetry integration surfaces issues before customers report them.",
        points: ["Omnichannel case management", "AI virtual agents & self-service", "Proactive customer support", "Workforce management & scheduling"],
      },
      {
        title: "Field Service Management (FSM)",
        desc: "Optimise field operations with intelligent work order dispatching, mobile workforce management, and predictive maintenance. Match work orders to technicians by skills, location, and availability, and predict maintenance needs before failures occur.",
        points: ["Intelligent scheduling & dispatch", "Mobile technician management", "Predictive & preventive maintenance", "Asset & inventory management"],
      },
    ],
  },
  {
    id: "workflow-employer",
    label: "Workflow Employer",
    color: "from-cyan-500 to-cyan-700",
    intro: "Create intuitive, consumer-grade self-service experiences that empower employees to find information, submit requests, and resolve issues independently.",
    modules: [
      {
        title: "Service Portal & Employee Center",
        desc: "A modern, mobile-friendly self-service portal where employees access IT, HR, workplace, legal, and procurement services from one unified interface. Reduce support ticket volume, improve employee satisfaction, and free your support teams to focus on complex issues.",
        points: ["Multi-department unified portal", "Mobile-responsive self-service", "Service catalogue & knowledge base", "Request tracking & status visibility"],
      },
    ],
  },
  {
    id: "custom-workflow",
    label: "Custom Workflow",
    color: "from-slate-600 to-slate-800",
    intro: "Build anything on the Now Platform, from custom department applications to enterprise-wide automation that eliminates manual, repetitive work at scale.",
    modules: [
      {
        title: "App Engine",
        desc: "Low-code application development platform for building custom enterprise workflow applications without extensive coding. Combine visual Flow Designer, UI Builder, and pro-code scripting to create applications that live natively on the Now Platform, inheriting its security, data model, and integration capabilities.",
        points: ["Low-code & pro-code development", "Flow Designer & UI Builder", "Scoped, upgrade-safe applications", "Native platform data & security"],
      },
      {
        title: "Automation Engine",
        desc: "End-to-end process automation combining integration, Robotic Process Automation (RPA), process mining, and AI to eliminate manual work across systems. Automate processes that span multiple platforms, gain visibility into where bottlenecks occur, and continuously improve through data-driven insights.",
        points: ["Cross-system workflow automation", "RPA for UI-centric legacy tasks", "Process mining & bottleneck analysis", "AI-powered intelligent automation"],
      },
    ],
  },
];

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        badge="Expertise"
        title="ServiceNow"
        highlight="expertise"
        description="Deep, certified knowledge across every major ServiceNow workflow: IT, client, employee, and custom."
      />

      {/* Quick nav */}
      <section className="sticky top-16 z-40 bg-white border-b border-indigo-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {workflows.map((w) => (
              <a
                key={w.id}
                href={`#${w.id}`}
                className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
              >
                {w.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow sections */}
      {workflows.map((workflow, wi) => (
        <section
          key={workflow.id}
          id={workflow.id}
          className={`py-16 ${wi % 2 === 0 ? "bg-white" : "bg-gradient-to-b from-indigo-50/40 to-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-10">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${workflow.color} text-white text-xs font-bold uppercase tracking-wider mb-3`}>
                {workflow.label}
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{workflow.label} <span className="gradient-text">modules</span></h2>
              <p className="mt-2 text-slate-500 max-w-2xl">{workflow.intro}</p>
            </div>

            {/* Module cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflow.modules.map((mod) => (
                <div key={mod.title} className="card-soft p-6">
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{mod.desc}</p>
                  <ul className="space-y-1.5">
                    {mod.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle size={13} className="text-indigo-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-bg p-12 shadow-2xl">
            <h2 className="text-3xl font-extrabold text-white">Not sure which modules you need?</h2>
            <p className="mt-3 text-indigo-200">We'll assess your current setup and recommend the right path forward.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-white text-indigo-700 font-bold rounded-xl shadow hover:scale-105 transition-all"
            >
              Talk to an expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
