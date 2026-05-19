import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, Layers, Zap, BarChart3, Users, ShieldCheck } from "lucide-react";

export default function ImplementationPage() {
  return (
    <ServicePageLayout
      badge="ServiceNow"
      title="Implementation"
      highlight="done right"
      description="End-to-end ServiceNow deployment that delivers real business value, on time, on scope, with lasting adoption."
      intro="A successful ServiceNow implementation is more than a technical deployment: it's a transformation. We follow proven methodologies including the ServiceNow Adaptive Implementation Framework (SAIF) to configure your platform to your processes, ensure data quality from day one, and drive user adoption across your organisation. The result is a foundation built to scale."
      benefits={[
        { icon: <Zap size={20} />, title: "Faster time-to-value", desc: "Guided setup and pre-built process templates accelerate deployment so your teams see results in weeks, not months." },
        { icon: <Layers size={20} />, title: "Minimal customisation", desc: "We prioritise out-of-the-box capabilities and best-practice configuration to reduce technical debt and upgrade friction." },
        { icon: <CheckCircle size={20} />, title: "CMDB quality from day one", desc: "Accurate Configuration Management Database records are established early, feeding reliable data into every downstream process." },
        { icon: <Users size={20} />, title: "High adoption rates", desc: "Change management, training, and stakeholder engagement are baked into delivery, not bolted on at the end." },
        { icon: <ShieldCheck size={20} />, title: "Risk-mitigated delivery", desc: "Structured governance, regular checkpoints, and rollback procedures keep your project on track and your business protected." },
        { icon: <BarChart3 size={20} />, title: "Measurable ROI", desc: "We align implementation scope to your business outcomes so you can demonstrate clear, quantifiable return on investment." },
      ]}
      whatWeDo="We handle the full implementation lifecycle, from initial discovery and process design through configuration, testing, and go-live. Our certified consultants translate business requirements into a ServiceNow environment that works the way you do. Post go-live, we stay close to ensure the platform continues to deliver value."
      bullets={[
        "Discovery workshops to map current processes and define future-state requirements",
        "Platform configuration aligned to ITIL best practices and your operational model",
        "Data migration planning, CMDB population, and discovery configuration",
        "User acceptance testing (UAT) support and defect resolution",
        "Go-live support and hypercare period management",
        "Post-implementation health checks and optimisation reviews",
      ]}
    />
  );
}
