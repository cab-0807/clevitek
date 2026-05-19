import Link from "next/link";
import { Share2, Mail, MapPin } from "lucide-react";
import LogoBrand from "@/components/LogoBrand";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top CTA band */}
      <div className="gradient-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to transform your workflows?</h3>
            <p className="text-indigo-200 mt-1">Let&apos;s talk about your ServiceNow journey.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <LogoBrand />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your technology partner for ServiceNow and beyond. We implement, build, and integrate, from enterprise workflows to custom web apps, mobile solutions, and SaaS products.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://linkedin.com/company/clevitek" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
              <span className="text-xs font-bold">in</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
              <Share2 size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {[
              ["Implementation", "/servicenow/implementation"],
              ["Development", "/servicenow/development"],
              ["Integration", "/servicenow/integration"],
              ["Training", "/servicenow/training"],
              ["Managed Services", "/servicenow/managed-services"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-indigo-400 transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {[
              ["Nearshoring", "/solutions/nearshoring"],
              ["Integrate ServiceNow", "/solutions/integrate-servicenow"],
              ["ServiceNow ITSM", "/solutions/itsm"],
              ["ServiceNow CRM", "/solutions/crm"],
              ["Platform Analytics", "/solutions/platform-analytics"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-indigo-400 transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0 text-indigo-400" />
              <a href="mailto:contact@clevitek.com" className="hover:text-indigo-400 transition-colors">contact@clevitek.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-indigo-400" />
              <span>Dakar, Senegal</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Clevitek. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
