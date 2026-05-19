"use client";

import Link from "next/link";
import { useState } from "react";
import LogoBrand from "@/components/LogoBrand";
import { ChevronDown, Menu, X } from "lucide-react";

const nav = [
  {
    label: "About Us",
    href: "/about",
    type: "dropdown" as const,
    children: [
      { label: "Who Are We", href: "/about/who-we-are" },
      { label: "Our Partners", href: "/about/partners" },
      { label: "Contact Us", href: "/contact" },
      { label: "Join Us", href: "/about/join-us" },
    ],
  },
  {
    label: "ServiceNow",
    href: "/servicenow",
    type: "servicenow" as const,
    badge: "Core",
    services: [
      { label: "Implementation", href: "/servicenow/implementation" },
      { label: "Development", href: "/servicenow/development" },
      { label: "Integration", href: "/servicenow/integration" },
      { label: "Training", href: "/servicenow/training" },
      { label: "Managed Services", href: "/servicenow/managed-services" },
    ],
    expertise: [
      {
        title: "IT Workflow",
        href: "/expertise#it-workflow",
        items: [
          "Database Management Configuration",
          "IT Asset Management",
          "IT Operations Management",
          "IT Service Management",
          "Software Asset Management",
          "Strategic Portfolio Management",
        ],
      },
      {
        title: "Client Workflow",
        href: "/expertise#client-workflow",
        items: ["Customer Service Management", "Field Service Management"],
      },
      {
        title: "Workflow Employer",
        href: "/expertise#workflow-employer",
        items: ["Service Portal"],
      },
      {
        title: "Custom Workflow",
        href: "/expertise#custom-workflow",
        items: ["App Engine", "Automation Engine"],
      },
    ],
    solutions: [
      { label: "Nearshoring", href: "/solutions/nearshoring" },
      { label: "Integrate ServiceNow", href: "/solutions/integrate-servicenow" },
      { label: "ServiceNow ITSM", href: "/solutions/itsm" },
      { label: "ServiceNow CRM", href: "/solutions/crm" },
      { label: "Platform Analytics", href: "/solutions/platform-analytics" },
    ],
  },
  {
    label: "Digital Services",
    href: "/digital",
    type: "digital" as const,
    children: [
      { label: "Website Creation", href: "/digital/website-creation" },
      { label: "Application Development", href: "/digital/app-development" },
      { label: "SaaS Solutions", href: "/digital/saas" },
      { label: "App Integration", href: "/digital/app-integration" },
    ],
  },
  { label: "Customer Cases", href: "/customer-cases", type: "link" as const },
  { label: "Blog", href: "/blog", type: "link" as const },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-indigo-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
            <LogoBrand />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <div key={item.label} className="nav-item relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    item.type === "servicenow"
                      ? "text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {item.label}
                  {"badge" in item && item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-600 rounded-full leading-none">
                      {item.badge}
                    </span>
                  )}
                  {item.type !== "link" && (
                    <ChevronDown
                      size={13}
                      className="opacity-50 group-hover:rotate-180 transition-transform duration-200 shrink-0"
                    />
                  )}
                </Link>

                {/* ── ServiceNow mega-menu ── */}
                {item.type === "servicenow" && (
                  <div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-indigo-50 overflow-hidden">
                    <div className="px-6 py-2.5 bg-indigo-50/70 border-b border-indigo-100 flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">ServiceNow</span>
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-200 text-indigo-700 rounded-full leading-none">Core</span>
                    </div>
                    <div className="flex">
                      {/* Services */}
                      <div className="w-48 shrink-0 p-6 border-r border-indigo-50">
                        <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wider mb-4">Services</p>
                        <ul className="space-y-2">
                          {"services" in item && item.services.map((s) => (
                            <li key={s.label}>
                              <Link href={s.href} className="block py-1 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Expertise */}
                      <div className="flex-1 p-6 border-r border-indigo-50">
                        <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wider mb-4">Expertise</p>
                        <div className="grid grid-cols-4 gap-6">
                          {"expertise" in item && item.expertise.map((group) => (
                            <div key={group.title}>
                              <Link href={group.href} className="block text-sm font-semibold text-slate-800 hover:text-indigo-600 mb-2 transition-colors">
                                {group.title}
                              </Link>
                              <ul className="space-y-1.5">
                                {group.items.map((sub) => (
                                  <li key={sub} className="text-xs text-slate-500 hover:text-indigo-500 cursor-pointer transition-colors leading-snug">
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Solutions */}
                      <div className="w-48 shrink-0 p-6">
                        <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wider mb-4">Solutions</p>
                        <ul className="space-y-2">
                          {"solutions" in item && item.solutions.map((s) => (
                            <li key={s.label}>
                              <Link href={s.href} className="block py-1 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-6 py-3 bg-slate-50 border-t border-indigo-50">
                      <Link href="/servicenow" className="text-xs font-semibold text-indigo-600 hover:underline">
                        View all ServiceNow services →
                      </Link>
                    </div>
                  </div>
                )}

                {/* ── Digital Services panel ── */}
                {item.type === "digital" && (
                  <div className="nav-dropdown absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-indigo-50 overflow-hidden">
                    <div className="px-6 py-2.5 bg-violet-50/70 border-b border-violet-100 flex items-center gap-2">
                      <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Digital Services</span>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-1">
                        {"children" in item && item.children.map((child, i) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className={`block px-3 py-2.5 text-sm rounded-xl transition-colors ${
                                i === 0
                                  ? "text-indigo-600 font-medium hover:bg-indigo-50"
                                  : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 py-3 bg-slate-50 border-t border-indigo-50">
                      <Link href="/digital" className="text-xs font-semibold text-indigo-600 hover:underline">
                        View all digital services →
                      </Link>
                    </div>
                  </div>
                )}

                {/* ── About Us regular dropdown ── */}
                {item.type === "dropdown" && "children" in item && (
                  <div className="nav-dropdown absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-indigo-50 py-2 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center px-4 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-indigo-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-indigo-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.label}>
                <button
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    item.type === "servicenow"
                      ? "text-indigo-700 hover:bg-indigo-50"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {"badge" in item && item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-600 rounded-full leading-none">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {item.type !== "link" && (
                    <ChevronDown size={16} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  )}
                </button>

                {/* Mobile ServiceNow */}
                {mobileExpanded === item.label && item.type === "servicenow" && (
                  <div className="pl-3 mt-1 pb-2 space-y-4">
                    <div>
                      <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wide mb-1 px-2">Services</p>
                      {"services" in item && item.services.map((s) => (
                        <Link key={s.label} href={s.href}
                          className="block px-3 py-1.5 text-sm text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                    {"expertise" in item && item.expertise.map((group) => (
                      <div key={group.title}>
                        <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wide mb-1 px-2">{group.title}</p>
                        {group.items.map((sub) => (
                          <p key={sub} className="px-3 py-1 text-xs text-slate-400">{sub}</p>
                        ))}
                      </div>
                    ))}
                    <div>
                      <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wide mb-1 px-2">Solutions</p>
                      {"solutions" in item && item.solutions.map((s) => (
                        <Link key={s.label} href={s.href}
                          className="block px-3 py-1.5 text-sm text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Digital / About Us */}
                {mobileExpanded === item.label && (item.type === "digital" || item.type === "dropdown") && "children" in item && (
                  <div className="pl-4 mt-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}
                        className="block px-3 py-2 text-sm text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <Link href="/contact"
                className="flex items-center justify-center w-full px-4 py-3 rounded-xl gradient-bg text-white text-sm font-semibold"
                onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
