import ServicePageLayout from "@/components/ServicePageLayout";
import { Plug, Link2, RefreshCw, ShieldCheck, Layers, Zap } from "lucide-react";

export default function AppIntegrationPage() {
  return (
    <ServicePageLayout
      badge="Digital Services"
      title="App Integration"
      highlight="connect your stack"
      description="Link your applications, APIs, and platforms into one seamless ecosystem: automated, reliable, and maintainable."
      intro="Modern businesses run on dozens of tools: CRMs, ERPs, payment gateways, marketing platforms, analytics tools, and more. When these systems don't talk to each other, data gets duplicated, processes break down, and teams waste time on manual work. We design and build integration solutions that connect your applications, automate data flows, and give you a unified view of your business operations."
      benefits={[
        { icon: <Link2 size={20} />, title: "Third-party API integration", desc: "We connect your systems to payment providers (Stripe, PayPal), CRMs (Salesforce, HubSpot), mapping services, social platforms, and more." },
        { icon: <RefreshCw size={20} />, title: "Real-time data sync", desc: "Bidirectional data synchronisation keeps information consistent across all your connected systems without manual intervention." },
        { icon: <Zap size={20} />, title: "Workflow automation", desc: "Trigger actions across systems automatically. No more copy-pasting between tools or waiting for someone to manually update records." },
        { icon: <Plug size={20} />, title: "Middleware & API gateways", desc: "For complex integration landscapes, we design and deploy middleware solutions and API gateways that manage routing, transformation, and security." },
        { icon: <Layers size={20} />, title: "Legacy system connectivity", desc: "We connect legacy on-premise systems to modern cloud applications using adapters and transformation layers, with no rip-and-replace required." },
        { icon: <ShieldCheck size={20} />, title: "Secure data exchange", desc: "OAuth 2.0, API key management, payload encryption, and secure credential storage protect every integration endpoint." },
      ]}
      whatWeDo="We assess your existing systems and integration requirements, then design a solution that connects them efficiently. Whether it's a simple webhook between two SaaS tools or an enterprise-grade iPaaS deployment, we build integrations that are reliable in production, easy to monitor, and maintainable long-term."
      bullets={[
        "Integration landscape assessment and data flow mapping",
        "Third-party API integration and webhook configuration",
        "Custom API development and documentation",
        "Middleware and API gateway design and deployment",
        "ETL pipeline development for data migration and sync",
        "Authentication and secure credential management",
        "Monitoring, alerting, and error handling setup",
      ]}
    />
  );
}
