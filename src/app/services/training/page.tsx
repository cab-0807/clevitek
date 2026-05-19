import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        badge="Training"
        title="Empower your teams"
        description="Hands-on ServiceNow training to make your team self-sufficient."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-center">Content coming soon.</p>
        </div>
      </section>
    </>
  );
}
