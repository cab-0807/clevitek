import ServicePageLayout from "@/components/ServicePageLayout";
import { ShieldCheck, RefreshCw, Zap, BarChart3, Users, Settings } from "lucide-react";

export default function ManagedServicesPage() {
  return (
    <ServicePageLayout
      badge="ServiceNow"
      title="Managed Services"
      highlight="always on"
      description="Proactive platform management, ongoing support, and continuous optimisation, so you can focus on what matters."
      intro="ServiceNow is a living platform. New releases arrive twice a year, processes evolve, and user needs change. Managed Services from Clevitek keeps your platform healthy, current, and continuously improving. We act as your dedicated ServiceNow team, handling day-to-day operations, resolving incidents, delivering enhancements, and providing strategic guidance on a predictable monthly engagement."
      benefits={[
        { icon: <ShieldCheck size={20} />, title: "Proactive platform health", desc: "Regular health assessments identify configuration drift, security risks, and performance bottlenecks before they become incidents." },
        { icon: <RefreshCw size={20} />, title: "Upgrade management", desc: "We manage twice-yearly ServiceNow releases by testing, communicating changes, and applying upgrades with minimal disruption." },
        { icon: <Zap size={20} />, title: "Fast incident resolution", desc: "Tiered support covering user queries to complex technical issues, with defined SLAs and clear escalation paths." },
        { icon: <Settings size={20} />, title: "Continuous enhancement", desc: "A managed backlog of improvements and new features delivered in regular sprint cycles." },
        { icon: <Users size={20} />, title: "Extended team model", desc: "We supplement your internal team's capability, cover leave periods, and provide specialist expertise on demand." },
        { icon: <BarChart3 size={20} />, title: "Visibility and reporting", desc: "Monthly service reports covering platform health, ticket trends, enhancement progress, and strategic recommendations." },
      ]}
      whatWeDo="Our Managed Services operate on a monthly retainer with clearly defined scope and SLAs. We start with a platform assessment to establish a baseline, then transition into ongoing operations. You get a named account manager, a dedicated support queue, and regular service reviews."
      bullets={[
        "Platform health assessment and baseline documentation",
        "Tiered incident and service request support with defined SLAs",
        "Twice-yearly upgrade planning, testing, and execution",
        "Enhancement delivery through managed sprint cadences",
        "User management, role governance, and access control reviews",
        "Security and compliance monitoring and remediation",
        "Monthly service reporting and strategic advisory calls",
      ]}
    />
  );
}
