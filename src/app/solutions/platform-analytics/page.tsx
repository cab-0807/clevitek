import ServicePageLayout from "@/components/ServicePageLayout";
import { BarChart3, Target, Zap, RefreshCw, Layers, ShieldCheck } from "lucide-react";

export default function PlatformAnalyticsPage() {
  return (
    <ServicePageLayout
      badge="Solutions"
      title="Platform Analytics"
      highlight="data-driven decisions"
      description="Transform your ServiceNow data into strategic intelligence: real-time dashboards, KPI tracking, and process insights."
      intro="ServiceNow Platform Analytics gives you unified reporting, performance dashboards, and process mining capabilities across your entire platform. It surfaces the operational patterns, bottlenecks, and improvement opportunities hidden in your data, enabling IT leaders, service managers, and executives to make confident, evidence-based decisions rather than acting on gut feeling."
      benefits={[
        { icon: <BarChart3 size={20} />, title: "Real-time dashboards", desc: "Customisable dashboards display live KPIs with automated alerts when metrics deviate from defined thresholds." },
        { icon: <Target size={20} />, title: "KPI trending and targets", desc: "Performance Analytics tracks metric trends over time, compares actuals against targets, and highlights performance gaps with historical context." },
        { icon: <RefreshCw size={20} />, title: "Process mining", desc: "Uncover how your processes actually run versus how they're designed to run, identifying bottlenecks, deviations, and waste automatically." },
        { icon: <Layers size={20} />, title: "Cross-module reporting", desc: "A single data model spans ITSM, CSM, ITOM, ITAM, and more, enabling cross-functional reporting without complex data exports." },
        { icon: <Zap size={20} />, title: "Pre-built dashboards", desc: "Out-of-the-box dashboards for common areas including ITSM, CSM, and ITOM get you to insight quickly without starting from scratch." },
        { icon: <ShieldCheck size={20} />, title: "Role-based visibility", desc: "Configurable access controls ensure each stakeholder sees the data relevant to their role, from frontline agents to C-level executives." },
      ]}
      whatWeDo="We implement Platform Analytics to give your organisation clear, actionable visibility into service performance and operational efficiency. We define KPIs aligned to your business goals, build dashboards for each audience, implement process mining, and establish a reporting cadence that drives continuous improvement."
      bullets={[
        "Analytics strategy definition and KPI alignment to business objectives",
        "Performance Analytics module configuration and indicator setup",
        "Custom dashboard and report design per stakeholder group",
        "Process mining configuration for core service workflows",
        "Automated alerting and exception notification setup",
        "Executive reporting templates and scheduled distribution",
        "Analytics adoption enablement and user training",
      ]}
    />
  );
}
