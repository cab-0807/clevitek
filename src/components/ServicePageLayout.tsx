import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { ReactNode } from "react";

export interface Benefit {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  intro: string;
  benefits: Benefit[];
  whatWeDo: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServicePageLayout({
  badge,
  title,
  highlight,
  description,
  intro,
  benefits,
  whatWeDo,
  bullets,
  ctaLabel = "Start a project with us",
  ctaHref = "/contact",
}: ServicePageLayoutProps) {
  return (
    <>
      <PageHero badge={badge} title={title} highlight={highlight} description={description} />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Key <span className="gradient-text">benefits</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
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

      {/* What we do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">Our approach</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What we <span className="gradient-text">deliver</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6">{whatWeDo}</p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle size={17} className="text-indigo-500 shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-3xl gradient-bg p-10 text-white text-center shadow-2xl max-w-sm w-full">
              <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
              <p className="text-indigo-200 text-sm mb-6">Let&apos;s talk about your project and how we can help.</p>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
              >
                {ctaLabel} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
