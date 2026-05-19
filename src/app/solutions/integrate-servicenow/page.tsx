import ServicePageLayout from "@/components/ServicePageLayout";
import { Link2, Plug, RefreshCw, Globe, ShieldCheck, Layers } from "lucide-react";

export default function IntegrateServiceNowPage() {
  return (
    <ServicePageLayout
      badge="Solutions"
      title="Integrate ServiceNow"
      highlight="with your ecosystem"
      description="Break down system silos and connect ServiceNow to every tool in your enterprise, reliably and at scale."
      intro="Modern enterprises run on dozens of systems: monitoring tools, ERPs, HR platforms, security products, ticketing systems, and more. ServiceNow Integration Hub and its 180+ spokes let you connect all of them to a single platform. We design and build integrations that make ServiceNow the orchestration layer your business has been missing, ensuring data flows where it's needed and workflows span system boundaries automatically."
      benefits={[
        { icon: <Link2 size={20} />, title: "Unified data model", desc: "Integrations consolidate data from disparate systems into ServiceNow's CMDB and service model, creating a single source of truth." },
        { icon: <RefreshCw size={20} />, title: "Automated cross-system workflows", desc: "Trigger actions in external systems directly from ServiceNow workflows, with no manual handoffs or lost context." },
        { icon: <Globe size={20} />, title: "Cloud & on-premise coverage", desc: "We integrate both modern SaaS tools and legacy on-premise systems, bridging old and new technology stacks." },
        { icon: <Plug size={20} />, title: "Pre-built & custom spokes", desc: "We leverage existing Integration Hub spokes where available and build custom connectors for proprietary systems." },
        { icon: <ShieldCheck size={20} />, title: "Secure by design", desc: "All integrations implement modern authentication and encryption standards to protect data in transit and at rest." },
        { icon: <Layers size={20} />, title: "Scalable architecture", desc: "Integration patterns built to handle growing data volumes and additional system connections without redesign." },
      ]}
      whatWeDo="We start by mapping your integration landscape, identifying systems, data flows, and trigger events. We then architect an integration strategy, build and test each connection, and deploy to production with monitoring in place. You get a documented, maintainable integration layer that grows with your platform."
      bullets={[
        "Integration landscape assessment and dependency mapping",
        "Integration Hub configuration and spoke development",
        "Bidirectional data synchronisation between ServiceNow and external systems",
        "Event-driven workflow triggers across connected platforms",
        "Secure authentication and data encryption implementation",
        "Monitoring, alerting, and error handling setup",
        "Operational documentation and integration runbooks",
      ]}
    />
  );
}
