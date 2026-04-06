export default function Experience() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="experience">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
        <h2 className="font-headline font-bold text-5xl">
          Professional <span className="italic font-body font-normal text-on-surface-variant">Milestones</span>
        </h2>
        <div className="h-px bg-outline-variant/30 flex-grow mx-12 hidden lg:block"></div>
        <span className="font-headline uppercase tracking-widest text-xs font-bold text-primary">Dubai &amp; Beyond</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="group grid grid-cols-1 lg:grid-cols-12 p-12 bg-surface-container-low hover:bg-surface-bright transition-all duration-500 rounded relative overflow-hidden">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="font-headline font-black text-9xl text-primary">01</span>
          </div>
          <div className="lg:col-span-3 mb-6 lg:mb-0">
            <p className="font-headline font-bold text-sm uppercase tracking-widest text-primary">Present</p>
            <p className="font-body italic text-on-surface-variant">Dubai, UAE</p>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-headline font-bold text-2xl mb-2">Business Development Manager</h3>
            <p className="font-headline text-lg text-on-surface-variant font-medium">Here-O Donuts and Coffee</p>
          </div>
          <div className="lg:col-span-4 mt-6 lg:mt-0 font-body text-lg text-on-surface-variant">
            Driving market expansion and strategic partnerships in the competitive F&amp;B landscape of the Emirates.
          </div>
        </div>
        <div className="group grid grid-cols-1 lg:grid-cols-12 p-12 bg-surface-container-highest hover:bg-surface-bright transition-all duration-500 rounded relative overflow-hidden">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="font-headline font-black text-9xl text-primary">02</span>
          </div>
          <div className="lg:col-span-3 mb-6 lg:mb-0">
            <p className="font-headline font-bold text-sm uppercase tracking-widest text-primary">Previous</p>
            <p className="font-body italic text-on-surface-variant">UAE</p>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-headline font-bold text-2xl mb-2">Events &amp; Sales Manager</h3>
            <p className="font-headline text-lg text-on-surface-variant font-medium">Premium Event Management</p>
          </div>
          <div className="lg:col-span-4 mt-6 lg:mt-0 font-body text-lg text-on-surface-variant">
            Orchestrated large-scale corporate events and high-profile launches with a focus on seamless execution and ROI.
          </div>
        </div>
        <div className="group grid grid-cols-1 lg:grid-cols-12 p-12 bg-surface-container-low hover:bg-surface-bright transition-all duration-500 rounded relative overflow-hidden">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="font-headline font-black text-9xl text-primary">03</span>
          </div>
          <div className="lg:col-span-3 mb-6 lg:mb-0">
            <p className="font-headline font-bold text-sm uppercase tracking-widest text-primary">Foundation</p>
            <p className="font-body italic text-on-surface-variant">Saudi Arabia</p>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-headline font-bold text-2xl mb-2">Military Nurse</h3>
            <p className="font-headline text-lg text-on-surface-variant font-medium">Healthcare Services</p>
          </div>
          <div className="lg:col-span-4 mt-6 lg:mt-0 font-body text-lg text-on-surface-variant">
            Developing extreme discipline, rapid response capabilities, and clinical precision in a high-stakes environment.
          </div>
        </div>
      </div>
    </section>
  );
}
