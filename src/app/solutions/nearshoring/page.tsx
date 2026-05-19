import ServicePageLayout from "@/components/ServicePageLayout";
import { MapPin, Users, DollarSign, Clock, Award, Zap } from "lucide-react";

export default function NearshoringPage() {
  return (
    <ServicePageLayout
      badge="Solutions"
      title="Nearshoring"
      highlight="ServiceNow talent"
      description="Access certified ServiceNow professionals with full timezone alignment, cultural fit, and cost efficiency."
      intro="Finding and retaining qualified ServiceNow talent is one of the hardest challenges for enterprise IT teams. Nearshoring with Clevitek gives you access to experienced, certified professionals in compatible time zones, giving you the collaboration quality of an on-site team at a fraction of the cost of domestic hiring. Whether you need to augment your existing team or staff an entire project, we can scale quickly."
      benefits={[
        { icon: <Award size={20} />, title: "Certified professionals", desc: "Our nearshore talent holds ServiceNow certifications (CSA, CAD, CIS) and comes with hands-on platform experience across ITSM, CSM, ITOM, and more." },
        { icon: <DollarSign size={20} />, title: "Cost-effective resourcing", desc: "Reduce hiring, infrastructure, and overhead costs significantly compared to domestic staffing, without compromising on quality." },
        { icon: <Clock size={20} />, title: "Timezone compatibility", desc: "Our teams operate in overlapping business hours with your organisation, enabling real-time collaboration and fast feedback loops." },
        { icon: <Users size={20} />, title: "Flexible team scaling", desc: "Scale your team up or down based on project demand, with no long-term hiring commitments or redundancy costs." },
        { icon: <MapPin size={20} />, title: "Cultural alignment", desc: "Geographic proximity and shared business culture reduce friction and improve communication compared to offshore models." },
        { icon: <Zap size={20} />, title: "Fast onboarding", desc: "Our talent pool is pre-vetted and ServiceNow-ready, cutting onboarding time from months to days." },
      ]}
      whatWeDo="We match your project requirements with certified ServiceNow professionals from our nearshore talent network. We handle recruitment, vetting, and onboarding, and you get integrated team members who work to your processes and standards. We provide ongoing quality assurance and management to ensure delivery stays on track."
      bullets={[
        "Talent requirements scoping and profile definition",
        "Candidate sourcing from our pre-vetted ServiceNow professional network",
        "Skills assessment and technical interview support",
        "Onboarding and integration with your existing team workflows",
        "Ongoing performance management and quality assurance",
        "Flexible engagement models: project-based, staff augmentation, or dedicated teams",
      ]}
    />
  );
}
