import ServicePageLayout from "@/components/ServicePageLayout";
import { Code, Zap, Layers, ShieldCheck, RefreshCw, Puzzle } from "lucide-react";

export default function DevelopmentPage() {
  return (
    <ServicePageLayout
      badge="ServiceNow"
      title="Custom Development"
      highlight="on the Now Platform"
      description="Purpose-built applications and workflows designed around your business, not the other way around."
      intro="ServiceNow App Engine is one of the most powerful low-code platforms for enterprise development. We build custom applications that solve the specific challenges your organisation faces, from internal tooling gaps to unique approval workflows and department-specific portals. Our developers combine no-code, low-code, and pro-code techniques to deliver the right solution at the right speed."
      benefits={[
        { icon: <Code size={20} />, title: "Low-code & pro-code combined", desc: "We use Flow Designer, UI Builder, and scripting together, choosing the right approach for each requirement." },
        { icon: <Zap size={20} />, title: "Fast delivery cycles", desc: "App Engine compresses timelines from months to weeks. We work in short sprints with regular demos so you stay in control." },
        { icon: <Layers size={20} />, title: "Native platform integration", desc: "Custom apps live on the same platform as your ITSM and CSM data, with no silos or integration overhead." },
        { icon: <ShieldCheck size={20} />, title: "Enterprise security built in", desc: "Every app inherits ServiceNow's security model, role-based access controls, and audit logging out of the box." },
        { icon: <RefreshCw size={20} />, title: "Upgrade-safe architecture", desc: "We follow scoped application best practices so your customisations survive platform upgrades without breaking." },
        { icon: <Puzzle size={20} />, title: "Reusable components", desc: "We build modular, reusable flows and components that your internal team can extend independently." },
      ]}
      whatWeDo="From architecture design to deployment and documentation, we manage the full development lifecycle on the Now Platform. We assess requirements, propose the optimal technical approach, build iteratively with your feedback, and hand over well-documented, maintainable code. Our goal is to leave your team empowered, not dependent on us."
      bullets={[
        "Requirements analysis and application architecture design",
        "Scoped application development using App Engine best practices",
        "Custom UI development with UI Builder and modern widget frameworks",
        "Flow Designer automation and business rule development",
        "Integration with third-party systems via Integration Hub",
        "Code review, security hardening, and performance testing",
        "Documentation and knowledge transfer to your internal team",
      ]}
    />
  );
}
