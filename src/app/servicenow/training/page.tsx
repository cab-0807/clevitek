import ServicePageLayout from "@/components/ServicePageLayout";
import { GraduationCap, Users, BookOpen, Award, Target, Layers } from "lucide-react";

export default function TrainingPage() {
  return (
    <ServicePageLayout
      badge="ServiceNow"
      title="Training"
      highlight="that sticks"
      description="Hands-on ServiceNow training designed to make your teams self-sufficient, confident, and certified."
      intro="ServiceNow is a powerful platform, but only if your people know how to use it. We deliver role-based training that goes beyond slides. Sessions are hands-on, tailored to your specific configuration, and designed to build real competency, whether you're onboarding administrators, preparing developers for certification, or training end users ahead of go-live."
      benefits={[
        { icon: <Users size={20} />, title: "Role-based learning paths", desc: "Separate curricula for administrators, developers, process owners, and end users, so everyone learns what's relevant to their role." },
        { icon: <BookOpen size={20} />, title: "Tailored to your instance", desc: "We train on your actual ServiceNow environment and your actual processes, not generic demo data." },
        { icon: <Award size={20} />, title: "Certification preparation", desc: "Structured coaching for CSA, CAD, CIS, and other certifications, including exam practice and gap analysis." },
        { icon: <GraduationCap size={20} />, title: "Instructor-led & self-paced", desc: "Live workshops for hands-on practice, plus self-guided materials your team can revisit independently." },
        { icon: <Target size={20} />, title: "Go-live readiness", desc: "Pre-go-live training ensures end users are comfortable with the platform before it's switched on in production." },
        { icon: <Layers size={20} />, title: "Ongoing capability building", desc: "Refresher sessions, new feature walkthroughs, and admin upskilling as your platform evolves." },
      ]}
      whatWeDo="We assess your team's current ServiceNow knowledge, identify gaps, and design a training programme to address them. Delivery can be in-person, remote, or blended, structured around your team's availability. We provide materials and post-session support so learning doesn't stop when the session ends."
      bullets={[
        "Skills assessment and learning gap analysis per role",
        "Custom training curriculum aligned to your instance and processes",
        "Instructor-led workshops for admins, developers, and end users",
        "ServiceNow certification coaching (CSA, CAD, CIS tracks)",
        "Go-live readiness training and floor-walking support",
        "Training materials, exercises, and reference guides",
        "Post-training Q&A and follow-up sessions",
      ]}
    />
  );
}
