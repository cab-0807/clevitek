interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, #7c3aed)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
          {title}{" "}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
