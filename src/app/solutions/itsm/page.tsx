import ServicePageLayout from "@/components/ServicePageLayout";
import { Target, Zap, BarChart3, Users, ShieldCheck, RefreshCw } from "lucide-react";

export default function ITSMPage() {
  return (
    <ServicePageLayout
      badge="Solutions"
      title="ServiceNow ITSM"
      highlight="modernised IT"
      description="Streamline IT service delivery, reduce unplanned outages, and give your employees the support experience they deserve."
      intro="ServiceNow IT Service Management aligns with ITIL best practices to manage incident, problem, change, and service request workflows on a single platform. With AI-powered automation, intelligent routing, and self-service capabilities, your IT team resolves issues faster, prevents recurring problems, and spends less time on manual coordination and more time on work that matters."
      benefits={[
        { icon: <Zap size={20} />, title: "Faster incident resolution", desc: "Multi-channel incident logging, AI-driven intelligent assignment, and SLA tracking ensure consistent and rapid response times." },
        { icon: <Target size={20} />, title: "Problem management", desc: "Root cause analysis workflows identify the underlying drivers of recurring incidents, preventing future occurrences proactively." },
        { icon: <ShieldCheck size={20} />, title: "Change management", desc: "Streamlined planning, approval, and execution workflows reduce unplanned outages caused by poorly managed changes." },
        { icon: <Users size={20} />, title: "Employee self-service", desc: "An intuitive self-service portal lets employees log requests, track status, and resolve common issues without contacting IT." },
        { icon: <BarChart3 size={20} />, title: "AI-powered automation", desc: "Predictive intelligence automatically categorises and assigns tickets, while virtual agents handle routine requests 24/7." },
        { icon: <RefreshCw size={20} />, title: "Continuous service improvement", desc: "Built-in analytics surface trends, bottlenecks, and SLA compliance issues so you can continuously optimise service delivery." },
      ]}
      whatWeDo="We implement and optimise ServiceNow ITSM to deliver consistent, efficient IT support that meets your business SLA requirements. From process design and workflow configuration to AI automation and self-service portal setup, we build an ITSM environment that your IT team and employees will actually use."
      bullets={[
        "ITIL-aligned process design for incident, problem, change, and request management",
        "Workflow configuration and automation rule setup",
        "AI and predictive intelligence configuration for intelligent routing",
        "Self-service portal and knowledge base design and implementation",
        "SLA definition, escalation rules, and OLA configuration",
        "CMDB integration for accurate impact analysis and change planning",
        "Reporting dashboards and KPI tracking setup",
      ]}
    />
  );
}
