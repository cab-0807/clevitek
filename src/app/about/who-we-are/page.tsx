import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Users, Zap, Target, Globe, BarChart3 } from "lucide-react";

const values = [
  { icon: <Shield size={20} />, title: "Integrity first", desc: "We say what we mean and deliver what we promise. Our reputation is built on honesty, not on what looks good in a proposal." },
  { icon: <Target size={20} />, title: "Business-first thinking", desc: "We start with your problem, not with technology. The right solution is the one that solves your challenge, not the one we know best." },
  { icon: <Zap size={20} />, title: "Agile & pragmatic", desc: "We move fast, iterate quickly, and adapt to your reality, not to a rigid methodology or a bloated project framework." },
  { icon: <Users size={20} />, title: "Partnership mindset", desc: "We don't disappear after go-live. We're a long-term partner invested in your continued success and platform health." },
  { icon: <Globe size={20} />, title: "Remote-first culture", desc: "Our team works remotely, bringing diverse perspectives and broad timezone coverage to every engagement." },
  { icon: <BarChart3 size={20} />, title: "Continuous improvement", desc: "We invest in certifications, stay ahead of platform changes, and share what we learn, so you benefit from a team that never stops growing." },
];

const stats = [
  { value: "0", label: "Projects delivered" },
  { value: "0", label: "Clients served" },
  { value: "10+", label: "Certifications" },
  { value: "3+", label: "Countries served" },
];

const howWeWork = [
  "ServiceNow-certified professionals (CSA, CAD, CIS) on every project",
  "Agile, sprint-based delivery with weekly progress reviews",
  "Remote-first with synchronous collaboration across timezones",
  "Transparent scope, timeline, and budget management throughout",
  "Dedicated project lead as your single point of contact",
  "Post go-live hypercare and flexible long-term support packages",
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Who we are"
        highlight="Clevitek"
        description="A team of certified experts building smarter workflows and better digital products."
      />

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-5">Our mission</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Technology that <span className="gradient-text">actually works</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Clevitek was founded on a simple belief: technology projects should deliver real business value, not just tick boxes. Too many implementations go over budget, miss deadlines, or fail to drive adoption because they prioritise the platform over the people using it.
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We do it differently. We combine deep ServiceNow expertise with modern digital engineering to help enterprises build smarter workflows, better digital products, and more connected systems, with a team that stays accountable long after the project is done.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-violet-50 border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-3">What drives us</span>
            <h2 className="text-3xl font-bold text-slate-900">Our <span className="gradient-text">values</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-soft p-6">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">How we work</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              A team you can <span className="gradient-text">rely on</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We work in small, senior-led teams: no juniors left unsupervised, no bloated project offices. Every engagement has a dedicated lead who understands your business and remains your primary point of contact from kick-off to post-launch.
            </p>
            <ul className="space-y-3">
              {howWeWork.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle size={17} className="text-indigo-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-3xl gradient-bg p-10 text-white text-center shadow-2xl max-w-sm w-full">
              <h3 className="text-2xl font-bold mb-3">Ready to work together?</h3>
              <p className="text-indigo-200 text-sm mb-6">
                Let&apos;s talk about your project and how we can help you get there.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
