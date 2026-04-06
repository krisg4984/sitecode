export default function Contact() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <h2 className="font-headline font-bold text-6xl mb-8">
            Get in <span className="italic font-body font-normal text-on-surface-variant">Touch</span>
          </h2>
          <p className="font-body text-xl text-on-surface-variant mb-12">
            I am currently exploring strategic opportunities and high-impact partnerships in Dubai and the wider UAE region.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="editorial-gradient p-3 rounded">
                <span className="material-symbols-outlined text-white" data-icon="mail">
                  mail
                </span>
              </div>
              <div>
                <p className="font-headline font-bold text-xs uppercase tracking-widest text-primary">Inquiries</p>
                <p className="font-body text-lg">kris.eden@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="editorial-gradient p-3 rounded">
                <span className="material-symbols-outlined text-white" data-icon="map">
                  map
                </span>
              </div>
              <div>
                <p className="font-headline font-bold text-xs uppercase tracking-widest text-primary">Location</p>
                <p className="font-body text-lg">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low p-12 rounded shadow-sm">
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input
                  className="w-full bg-transparent border-0 border-b border-outline py-4 focus:ring-0 focus:border-primary transition-all font-body text-lg placeholder:text-on-surface-variant/40"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="relative">
                <input
                  className="w-full bg-transparent border-0 border-b border-outline py-4 focus:ring-0 focus:border-primary transition-all font-body text-lg placeholder:text-on-surface-variant/40"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
            </div>
            <div className="relative">
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline py-4 focus:ring-0 focus:border-primary transition-all font-body text-lg placeholder:text-on-surface-variant/40 resize-none"
                placeholder="Your Message"
                rows="4"
              />
            </div>
            <button
              className="w-full editorial-gradient text-white font-headline font-bold text-sm uppercase tracking-widest py-6 rounded active:scale-[0.98] transition-all"
              type="submit"
            >
              Send Brief
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
