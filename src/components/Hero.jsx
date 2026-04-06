export default function Hero() {
  return (
    <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <h1 className="font-headline font-extrabold text-[clamp(3.5rem,10vw,6rem)] leading-[0.9] tracking-tighter text-on-surface mb-8">
            Kris Eden <br /> Gonzales
          </h1>
          <p className="font-body text-2xl md:text-3xl text-on-surface-variant max-w-2xl leading-relaxed italic">
            High-impact events, strategic business development, and a foundation in precision healthcare.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="w-full aspect-[4/5] bg-surface-container-highest overflow-hidden rounded">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Sophisticated professional headshot of a woman with an architectural backdrop of Dubai, warm sunset lighting and elegant business attire"
              src="https://drive.google.com/file/d/1_TDpRc0tUGjKTJHiCZWQ5mxFmRklLrWT/view?usp=sharing"
            />
          </div>
          <div className="flex items-center gap-4 text-primary">
            <span className="material-symbols-outlined" data-icon="location_on">
              location_on
            </span>
            <span className="font-headline font-bold uppercase tracking-widest text-xs">Based in Dubai, UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
