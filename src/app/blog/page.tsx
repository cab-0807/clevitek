import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights and updates"
        description="Expert articles on ServiceNow, workflows, and digital transformation."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-center">Content coming soon.</p>
        </div>
      </section>
    </>
  );
}
