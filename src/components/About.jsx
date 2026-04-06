export default function About() {
  return (
    <section className="bg-surface-container-low py-32 px-8 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 border-[12px] border-surface-container-lowest shadow-xl">
            <img
              className="w-full h-auto"
              alt="A portrait of Kris Eden Gonzales in a professional setting, exuding confidence and elegance, with soft natural lighting and a minimalist background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8kdd9nIpqPFzVXh8WOO1KWQ8s28xJMQZ0Pat-mTw4WErYR1821zcQ6KzL4n2oRvmriIM0N8ND3wrvuOBJThcExN62d2Zm8En144-dhfSjBNTwywErYsmpzcqGWvmyiszQy9DAhULC7XW_j_cYB75P72Vco6ySpkBXpg-FOpzTzp89llUEfIiCQlrIkIoF3Ns8CG2PZf8FGu6to_i1lyvm5R46P-7Hk4elospOy2UvVmscKac7hvcNSTRrYlbD-J9YSpTsGodbe0A"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 bg-primary text-white font-headline font-bold text-sm uppercase tracking-widest hidden md:block">
            Established Resilience
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="font-headline uppercase tracking-[0.3em] text-xs text-primary mb-6 block font-bold">The Narrative</span>
          <h2 className="font-headline font-bold text-5xl mb-10 leading-tight">
            From Precision Healthcare to <span className="italic font-body font-normal">Market Leadership.</span>
          </h2>
          <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
            <p>
              My professional journey began with the rigorous discipline of military nursing in Saudi Arabia—a foundation that instilled an unwavering commitment to precision and crisis management under pressure.
            </p>
            <p>
              Transitioning to the dynamic landscape of the UAE, I translated these core values of resilience and strategic execution into the realms of events and business development. Today, I bridge the gap between operational excellence and creative growth, driving high-impact initiatives in the heart of Dubai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
