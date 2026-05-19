import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, Globe, Handshake, Zap, Users } from "lucide-react";

const partnerBenefits = [
  { icon: <Globe size={20} />, title: "Extend your reach", desc: "Tap into our network of enterprise clients worldwide and bring your solutions to new markets." },
  { icon: <Zap size={20} />, title: "Technical collaboration", desc: "Co-develop integrations, joint solutions, or bundled offerings that create mutual value." },
  { icon: <Users size={20} />, title: "Referral programme", desc: "Earn referral benefits for every client introduction that leads to a successful engagement." },
  { icon: <Handshake size={20} />, title: "Shared expertise", desc: "Cross-train teams, co-author content, and grow together through a genuine knowledge-sharing partnership." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        badge="Partners"
        title="Our partners"
        highlight="together"
        description="We're building our partner ecosystem. If you share our values and complement our expertise, we'd love to connect."
      />

      {/* No partners yet */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center mx-auto mb-6">
            <Handshake size={36} className="text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            No partners listed yet. <span className="gradient-text">Be the first.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg">
            We&apos;re actively building our partner ecosystem with technology providers, consultancies, and service companies that share our commitment to delivering real value. If that sounds like you, let&apos;s talk.
          </p>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">Partnership</span>
            <h2 className="text-3xl font-bold text-slate-900">Why partner with <span className="gradient-text">Clevitek</span></h2>
            <p className="mt-2 text-slate-500 max-w-xl mx-auto">We believe in partnerships that create genuine mutual value, not just logo placement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerBenefits.map((b) => (
              <div key={b.title} className="card-soft p-6">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow">
                  {b.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-bg p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Become a Clevitek partner</h3>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto">
              Tell us about your company and what a partnership could look like. We&apos;ll respond within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
