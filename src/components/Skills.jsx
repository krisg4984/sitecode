export default function Skills() {
  return (
    <section className="py-32 bg-surface-container-low px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <span className="font-headline uppercase tracking-[0.3em] text-xs text-primary mb-6 block font-bold">Capabilities</span>
            <h2 className="font-headline font-bold text-5xl mb-8">
              Precision <br />
              <span className="italic font-body font-normal text-on-surface-variant">Tooling</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Proficiency in enterprise-grade platforms to ensure operational transparency and data-driven growth.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-outline-variant/30 rounded bg-surface group hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="database">
                database
              </span>
              <h4 className="font-headline font-bold text-xl mb-4 text-on-surface">Oracle NetSuite (ERP)</h4>
              <p className="font-body text-on-surface-variant">
                Expertise in managing complex enterprise resources, streamlining operations, and ensuring financial accuracy.
              </p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded bg-surface group hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="terminal">
                terminal
              </span>
              <h4 className="font-headline font-bold text-xl mb-4 text-on-surface">Strategic Workflow</h4>
              <p className="font-body text-on-surface-variant">
                Advanced proficiency in Microsoft Office and Google Workspace for analytical reporting and dynamic presentations.
              </p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded bg-surface group hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="groups">
                groups
              </span>
              <h4 className="font-headline font-bold text-xl mb-4 text-on-surface">Community &amp; Social</h4>
              <p className="font-body text-on-surface-variant">
                Strategic management of brand presence and community engagement across all major digital ecosystems.
              </p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded bg-surface group hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="event_note">
                event_note
              </span>
              <h4 className="font-headline font-bold text-xl mb-4 text-on-surface">Event Architecture</h4>
              <p className="font-body text-on-surface-variant">
                Comprehensive planning and execution of large-scale logistics with a focus on high-fidelity results.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img
            className="w-full h-64 object-cover"
            alt="A clean, minimalist workspace showing a laptop with data visualization charts, an iPad, and a high-end fountain pen, symbolizing technical proficiency"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-BRxWbkaQrQM5sOOHWIDdzGbxymjR-_RGcXnBgmoHG1stIJw-JYcMNtZ-u_1OnZjS-tbqiYvlIdvs6tt7N_ruToBbPqkG_BQlspY1v0eff6yjyQsHtTOgmoiV1ru0-68Vz-76viSmmOHo0lYAlZeDx6RAOzNW-0Pcaqd3oiSBlktAMXBU4ortCwlkp9XZod7vNDlyzw9RXHg6UgyWjzi8QGSBc-OhL1VWnFPAiNrIWGPVL_73LxvqVRQCyzLTBow2n52ijPlhvMU"
          />
        </div>
      </div>
    </section>
  );
}
