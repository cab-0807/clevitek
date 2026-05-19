import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title="Built for you"
        description="Purpose-built solutions for every enterprise challenge."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-center">Content coming soon.</p>
        </div>
      </section>
    </>
  );
}
