import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Search, Smartphone, ShieldCheck } from "lucide-react";

// Simple Icons CDN: https://cdn.simpleicons.org/{slug}/{hex-color}
const ICON = (slug: string, color = "4f46e5") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const stacks = [
  {
    category: "Frontend",
    color: "bg-indigo-50 border-indigo-100",
    labelColor: "text-indigo-600",
    techs: [
      { name: "Next.js",      icon: ICON("nextdotjs", "000000") },
      { name: "React",        icon: ICON("react", "61DAFB") },
      { name: "Vue.js",       icon: ICON("vuedotjs", "4FC08D") },
      { name: "Nuxt",         icon: ICON("nuxtdotjs", "00DC82") },
      { name: "Angular",      icon: ICON("angular", "DD0031") },
      { name: "Svelte",       icon: ICON("svelte", "FF3E00") },
      { name: "Astro",        icon: ICON("astro", "FF5D01") },
      { name: "TypeScript",   icon: ICON("typescript", "3178C6") },
      { name: "Tailwind CSS", icon: ICON("tailwindcss", "06B6D4") },
      { name: "Vite",         icon: ICON("vite", "646CFF") },
      { name: "Redux",        icon: ICON("redux", "764ABC") },
      { name: "GraphQL",      icon: ICON("graphql", "E10098") },
    ],
  },
  {
    category: "Backend",
    color: "bg-violet-50 border-violet-100",
    labelColor: "text-violet-600",
    techs: [
      { name: "Node.js",   icon: ICON("nodedotjs", "339933") },
      { name: "NestJS",    icon: ICON("nestjs", "E0234E") },
      { name: "Express",   icon: ICON("express", "000000") },
      { name: "Python",    icon: ICON("python", "3776AB") },
      { name: "FastAPI",   icon: ICON("fastapi", "009688") },
      { name: "Django",    icon: ICON("django", "092E20") },
      { name: "Go",        icon: ICON("go", "00ADD8") },
      { name: "Java",      icon: ICON("openjdk", "ED8B00") },
      { name: "Spring",    icon: ICON("spring", "6DB33F") },
      { name: "Laravel",   icon: ICON("laravel", "FF2D20") },
      { name: "PHP",       icon: ICON("php", "777BB4") },
      { name: "Rust",      icon: ICON("rust", "000000") },
    ],
  },
  {
    category: "Database",
    color: "bg-cyan-50 border-cyan-100",
    labelColor: "text-cyan-600",
    techs: [
      { name: "PostgreSQL",    icon: ICON("postgresql", "4169E1") },
      { name: "MySQL",         icon: ICON("mysql", "4479A1") },
      { name: "MongoDB",       icon: ICON("mongodb", "47A248") },
      { name: "Redis",         icon: ICON("redis", "DC382D") },
      { name: "Supabase",      icon: ICON("supabase", "3ECF8E") },
      { name: "Firebase",      icon: ICON("firebase", "FFCA28") },
      { name: "Elasticsearch", icon: ICON("elasticsearch", "005571") },
      { name: "SQLite",        icon: ICON("sqlite", "003B57") },
      { name: "PlanetScale",   icon: ICON("planetscale", "000000") },
      { name: "Prisma",        icon: ICON("prisma", "2D3748") },
    ],
  },
  {
    category: "Cloud & Hosting",
    color: "bg-sky-50 border-sky-100",
    labelColor: "text-sky-600",
    techs: [
      { name: "AWS",         icon: ICON("amazonaws", "FF9900") },
      { name: "GCP",         icon: ICON("googlecloud", "4285F4") },
      { name: "Azure",       icon: ICON("microsoftazure", "0078D4") },
      { name: "Vercel",      icon: ICON("vercel", "000000") },
      { name: "Netlify",     icon: ICON("netlify", "00C7B7") },
      { name: "Docker",      icon: ICON("docker", "2496ED") },
      { name: "Kubernetes",  icon: ICON("kubernetes", "326CE5") },
      { name: "Cloudflare",  icon: ICON("cloudflare", "F38020") },
      { name: "DigitalOcean",icon: ICON("digitalocean", "0080FF") },
      { name: "Heroku",      icon: ICON("heroku", "430098") },
    ],
  },
  {
    category: "CMS & Content",
    color: "bg-emerald-50 border-emerald-100",
    labelColor: "text-emerald-600",
    techs: [
      { name: "Sanity",      icon: ICON("sanity", "F03E2F") },
      { name: "Strapi",      icon: ICON("strapi", "4945FF") },
      { name: "Contentful",  icon: ICON("contentful", "2478CC") },
      { name: "WordPress",   icon: ICON("wordpress", "21759B") },
      { name: "Ghost",       icon: ICON("ghost", "15171A") },
      { name: "Payload CMS", icon: ICON("payloadcms", "000000") },
      { name: "Storyblok",   icon: ICON("storyblok", "09B3AF") },
    ],
  },
  {
    category: "Events & Messaging",
    color: "bg-orange-50 border-orange-100",
    labelColor: "text-orange-600",
    techs: [
      { name: "Apache Kafka",  icon: ICON("apachekafka", "231F20") },
      { name: "RabbitMQ",      icon: ICON("rabbitmq", "FF6600") },
      { name: "Socket.io",     icon: ICON("socketdotio", "010101") },
      { name: "AWS SQS",       icon: ICON("amazonsqs", "FF4F8B") },
      { name: "NATS",          icon: ICON("natsdotio", "27AAE1") },
      { name: "Bull / BullMQ", icon: ICON("bull", "FF0000") },
      { name: "Pusher",        icon: ICON("pusher", "300D4F") },
      { name: "Ably",          icon: ICON("ably", "E00091") },
    ],
  },
  {
    category: "CI/CD & DevOps",
    color: "bg-slate-50 border-slate-200",
    labelColor: "text-slate-600",
    techs: [
      { name: "GitHub Actions", icon: ICON("githubactions", "2088FF") },
      { name: "GitLab CI",      icon: ICON("gitlab", "FC6D26") },
      { name: "Jenkins",        icon: ICON("jenkins", "D24939") },
      { name: "Terraform",      icon: ICON("terraform", "7B42BC") },
      { name: "Ansible",        icon: ICON("ansible", "EE0000") },
      { name: "ArgoCD",         icon: ICON("argo", "EF7B4D") },
      { name: "SonarQube",      icon: ICON("sonarqube", "4E9BCD") },
      { name: "Grafana",        icon: ICON("grafana", "F46800") },
      { name: "Prometheus",     icon: ICON("prometheus", "E6522C") },
    ],
  },
  {
    category: "Auth & Security",
    color: "bg-rose-50 border-rose-100",
    labelColor: "text-rose-600",
    techs: [
      { name: "Auth0",      icon: ICON("auth0", "EB5424") },
      { name: "Clerk",      icon: ICON("clerk", "6C47FF") },
      { name: "Supabase",   icon: ICON("supabase", "3ECF8E") },
      { name: "Keycloak",   icon: ICON("keycloak", "4D4D4D") },
      { name: "Okta",       icon: ICON("okta", "007DC1") },
      { name: "JWT",        icon: ICON("jsonwebtokens", "000000") },
      { name: "Let's Encrypt", icon: ICON("letsencrypt", "003A70") },
    ],
  },
];

const benefits = [
  { icon: <Zap size={20} />, title: "Exceptional performance", desc: "Server-side rendering and static generation deliver near-instant loads and top Core Web Vitals scores." },
  { icon: <Search size={20} />, title: "SEO-optimised", desc: "Semantic HTML, structured data, sitemap generation, and metadata management built in from day one." },
  { icon: <Smartphone size={20} />, title: "Fully responsive", desc: "Designed and tested to work flawlessly across all devices, screen sizes, and browsers." },
  { icon: <ShieldCheck size={20} />, title: "Secure and maintainable", desc: "Clean, documented codebase with security best practices and dependency management from the start." },
];

const bullets = [
  "Discovery workshops and website architecture planning",
  "UX and visual design aligned to your brand identity",
  "Frontend & backend development with the right stack for your project",
  "Headless CMS integration and content migration",
  "Performance optimisation and Core Web Vitals tuning",
  "SEO technical setup and structured data implementation",
  "Deployment pipeline setup and post-launch support",
];

export default function WebsiteCreationPage() {
  return (
    <>
      <PageHero
        badge="Digital Services"
        title="Website Creation"
        highlight="built to perform"
        description="Modern, fast, and conversion-focused websites, engineered with the right stack for your project."
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            We build high-performance websites tailored to your goals, from marketing sites and corporate platforms to content-heavy portals. We choose the right technology for each project, not the other way around. Whatever your stack needs to be, we&apos;ve built with it.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">Tech stack</span>
            <h2 className="text-3xl font-bold text-slate-900">Our <span className="gradient-text">technology arsenal</span></h2>
            <p className="mt-2 text-slate-500">We work across the full stack, choosing the best tool for each job.</p>
          </div>

          <div className="space-y-10">
            {stacks.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${group.color} ${group.labelColor}`}>
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={18}
                        height={18}
                        className="shrink-0"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-700 whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Why work with <span className="gradient-text">Clevitek</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card-soft p-6">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow">
                  {b.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">Our approach</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What we <span className="gradient-text">deliver</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We handle every phase, from discovery and UX design through development, testing, and launch. We work closely with you to understand your audience, your goals, and your brand, then translate that into a website that genuinely performs in the real world.
            </p>
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
              <h3 className="text-2xl font-bold mb-3">Let&apos;s build your website</h3>
              <p className="text-indigo-200 text-sm mb-6">Tell us about your project and we&apos;ll recommend the right stack and approach.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:scale-105 transition-all shadow"
              >
                Start a project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
