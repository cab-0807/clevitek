import PageHero from "@/components/PageHero";
import { ArrowRight, Globe, Zap, Users, Shield, MapPin, Briefcase, GraduationCap, Send } from "lucide-react";

const perks = [
  { icon: <Globe size={20} />, title: "Remote-first", desc: "Work from anywhere. We care about output, not presence." },
  { icon: <Zap size={20} />, title: "Challenging projects", desc: "Real enterprise work: ServiceNow platforms and digital products that matter." },
  { icon: <Users size={20} />, title: "Senior team", desc: "Work alongside certified experts who invest in each other's growth." },
  { icon: <Shield size={20} />, title: "Certifications covered", desc: "We fund ServiceNow certifications and training for every team member." },
];

const openings = [
  {
    title: "ServiceNow Consultant",
    type: "Full-time",
    location: "Remote",
    level: "Mid / Senior",
    desc: "Lead end-to-end ServiceNow implementations and customisations for enterprise clients. You'll own the discovery, design, and delivery phases.",
    requirements: [
      "2+ years of ServiceNow hands-on experience",
      "CSA certification (CAD or CIS is a plus)",
      "Strong understanding of ITSM, CMDB, or App Engine",
      "Excellent communication skills in English (French is a bonus)",
    ],
  },
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    level: "Mid / Senior",
    desc: "Build modern web and mobile applications for our digital services clients, from custom platforms to SaaS products.",
    requirements: [
      "Strong proficiency in React / Next.js and Node.js",
      "Experience with cloud infrastructure (AWS, GCP, or Azure)",
      "TypeScript as default, not an afterthought",
      "Comfortable working in agile, client-facing environments",
    ],
  },
];

const internships = [
  {
    title: "ServiceNow Intern",
    duration: "3–6 months",
    desc: "Get hands-on with the Now Platform under the guidance of certified consultants. Great for students in IT, computer science, or business IT tracks.",
  },
  {
    title: "Web Development Intern",
    duration: "3–6 months",
    desc: "Join our digital engineering team and contribute to real client projects. Ideal for students with a foundation in React, TypeScript, or Node.js.",
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Join us"
        highlight="grow with us"
        description="We're a small, ambitious team building something meaningful. If you want to do your best work, this is your place."
      />

      {/* Why join */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">Life at Clevitek</span>
            <h2 className="text-3xl font-bold text-slate-900">Why people <span className="gradient-text">join us</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="card-soft p-6 text-center">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow mx-auto">
                  {p.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-1.5">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={20} className="text-indigo-500" />
            <h2 className="text-2xl font-bold text-slate-900">Open positions</h2>
          </div>
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="card-soft p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                        <Briefcase size={11} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                        <MapPin size={11} /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full">
                        {job.level}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@clevitek.com?subject=Application – ${job.title}`}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold shadow hover:scale-105 transition-all"
                  >
                    Apply <ArrowRight size={14} />
                  </a>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{job.desc}</p>
                <ul className="space-y-1.5">
                  {job.requirements.map((r) => (
                    <li key={r} className="text-xs text-slate-500 flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={20} className="text-violet-500" />
            <h2 className="text-2xl font-bold text-slate-900">Internships</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {internships.map((intern) => (
              <div key={intern.title} className="card-soft p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-slate-800">{intern.title}</h3>
                  <span className="shrink-0 px-2.5 py-0.5 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full whitespace-nowrap">
                    {intern.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{intern.desc}</p>
                <a
                  href={`mailto:careers@clevitek.com?subject=Internship Application – ${intern.title}`}
                  className="inline-flex items-center gap-1.5 text-violet-600 text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Apply for this internship <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
              <Send size={24} className="text-indigo-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Don&apos;t see the right role? <span className="gradient-text">Apply anyway.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We always welcome talented people. Send us your CV and a note about what you&apos;re looking for. We&apos;ll keep it on file and reach out when the right opportunity opens up.
            </p>
          </div>
          <div className="card-soft p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">First name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                  placeholder="jane@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">What kind of role are you looking for?</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                  placeholder="e.g. ServiceNow developer, Frontend engineer, Internship..."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">LinkedIn or portfolio URL</label>
                <input
                  type="url"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Tell us about yourself</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all resize-none"
                  placeholder="A brief intro: your background, what you're great at, and what you're looking for..."
                />
              </div>
              <a
                href="mailto:careers@clevitek.com"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl gradient-bg text-white font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Send your application <ArrowRight size={16} />
              </a>
              <p className="text-xs text-slate-400 text-center">
                Attach your CV to the email. We read every application within 5 business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
