import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        badge="Development"
        title="Build what you need"
        description="Custom apps and workflows built natively on the Now Platform."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-center">Content coming soon.</p>
        </div>
      </section>
    </>
  );
}
