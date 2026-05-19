import ServicePageLayout from "@/components/ServicePageLayout";
import { Link2, Plug, RefreshCw, ShieldCheck, Layers, Zap } from "lucide-react";

export default function IntegrationPage() {
  return (
    <ServicePageLayout
      badge="ServiceNow"
      title="Integration"
      highlight="without complexity"
      description="Connect ServiceNow to every system in your enterprise, securely, reliably, and without heavy custom code."
      intro="ServiceNow Integration Hub provides 180+ pre-built spokes and a flexible framework for connecting to any system, modern or legacy. We integrate ServiceNow with your existing tools (ERP, ITSM, monitoring, HR, or proprietary applications) so data flows seamlessly and workflows span system boundaries without fragile point-to-point code."
      benefits={[
        { icon: <Link2 size={20} />, title: "180+ pre-built spokes", desc: "Ready-made connectors for Jira, Salesforce, Microsoft 365, AWS, and more, saving significant development time." },
        { icon: <Plug size={20} />, title: "Custom spoke development", desc: "For systems without a pre-built spoke, we develop reusable custom connectors using REST, SOAP, JDBC, or scripted approaches." },
        { icon: <RefreshCw size={20} />, title: "Real-time data sync", desc: "Bidirectional integrations keep data consistent across systems, eliminating manual rekeying and reducing errors." },
        { icon: <ShieldCheck size={20} />, title: "Secure authentication", desc: "We implement OAuth 2.0, API keys, mutual TLS, and other modern authentication methods to keep integrations protected." },
        { icon: <Layers size={20} />, title: "Managed error handling", desc: "Retry logic, dead-letter queues, and alerting ensure failures are caught and resolved before impacting business processes." },
        { icon: <Zap size={20} />, title: "Legacy system connectivity", desc: "We connect ageing on-premise systems to ServiceNow using middleware patterns and scripted adapters." },
      ]}
      whatWeDo="We begin every integration engagement with a system discovery and data mapping exercise, understanding what each system owns, what needs to flow where, and at what frequency. We then design, build, and test integrations that are reliable in production and maintainable long-term."
      bullets={[
        "System inventory and data flow mapping across your enterprise",
        "Integration Hub spoke configuration and custom spoke development",
        "REST and SOAP API design and implementation",
        "OAuth 2.0 and certificate-based authentication setup",
        "Error handling, retry logic, and alerting configuration",
        "End-to-end integration testing including failure scenario validation",
        "Monitoring dashboards and operational runbooks",
      ]}
    />
  );
}
