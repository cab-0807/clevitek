import PageHero from "@/components/PageHero";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's talk"
        highlight="ServiceNow"
        description="Have a project in mind? We'd love to hear about it. Fill in the form and we'll get back to you within 24 hours."
      />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card-soft p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Send us a message</h2>
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
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Work email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl gradient-bg text-white font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Get in touch</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Whether you&apos;re exploring ServiceNow for the first time or looking to optimise an existing platform, our team is ready to help.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "contact@clevitek.com" },
                { icon: <MapPin size={18} />, label: "Location", value: "Dakar, Senegal" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">{item.label}</p>
                    <p className="text-sm font-medium text-slate-700 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-soft p-5 mt-2 bg-gradient-to-br from-indigo-50 to-violet-50">
              <p className="text-sm font-semibold text-slate-700">Response time</p>
              <p className="text-xs text-slate-500 mt-1">We typically respond within 24 hours on business days.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
