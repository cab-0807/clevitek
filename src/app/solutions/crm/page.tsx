import ServicePageLayout from "@/components/ServicePageLayout";
import { Users, Zap, BarChart3, Globe, ShieldCheck, RefreshCw } from "lucide-react";

export default function CRMPage() {
  return (
    <ServicePageLayout
      badge="Solutions"
      title="ServiceNow CRM"
      highlight="customer-first service"
      description="Deliver omnichannel customer support, resolve cases faster, and turn every interaction into a loyalty-building moment."
      intro="ServiceNow Customer Service Management (CSM) unifies customer interactions across email, phone, chat, and self-service portals into a single case management platform. Powered by AI automation and deep integration with back-office workflows, CSM helps your service teams resolve cases faster, proactively identify issues before customers report them, and continuously improve the customer experience."
      benefits={[
        { icon: <Globe size={20} />, title: "Omnichannel support", desc: "Unify customer interactions across all channels (email, phone, chat, web portal) into a single, consistent case management interface." },
        { icon: <Zap size={20} />, title: "AI-powered case handling", desc: "Automated case routing, virtual agents, and AI-generated knowledge article suggestions reduce handle time and improve first-contact resolution." },
        { icon: <Users size={20} />, title: "Customer self-service", desc: "A modern self-service portal lets customers resolve standard issues independently, reducing agent workload and improving satisfaction." },
        { icon: <RefreshCw size={20} />, title: "Proactive support", desc: "IoT and telemetry integrations enable issue detection before the customer notices, shifting your model from reactive to proactive." },
        { icon: <ShieldCheck size={20} />, title: "Workforce management", desc: "Skills-based routing, scheduling, and performance tracking ensure the right agent handles the right case at the right time." },
        { icon: <BarChart3 size={20} />, title: "Analytics and SLA tracking", desc: "Real-time dashboards provide visibility into case volumes, resolution times, SLA compliance, and customer satisfaction scores." },
      ]}
      whatWeDo="We implement ServiceNow CSM to transform your customer service operations from reactive and siloed to proactive and unified. We configure omnichannel support, deploy AI automation, build self-service portals, and integrate CSM with your back-office systems so agents have the full context they need to resolve cases on the first contact."
      bullets={[
        "Omnichannel support configuration across email, phone, chat, and web",
        "AI-powered case routing, classification, and knowledge suggestion setup",
        "Virtual agent configuration for self-service deflection",
        "Customer portal design and service catalogue setup",
        "Back-office workflow integration for case-triggered operations",
        "SLA definition, escalation rules, and performance dashboards",
        "Workforce management and scheduling configuration",
      ]}
    />
  );
}
