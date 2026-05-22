export default function InsideSokara() {
  const areas = [
    {
      title: "The Bench",
      desc: "The marketing operators and strategic talent who power Sokara's clients.",
    },
    {
      title: "The Roster",
      desc: "The private list of companies Leah works with — across every market that moves.",
    },
    {
      title: "Sokara Build",
      desc: "Digital infrastructure for principals, family offices, and the firms they back.",
    },
    {
      title: "Private Equity",
      desc: "Strategic counsel and deal flow for PE firms operating at the top of the table.",
    },
    {
      title: "Coaching",
      desc: "High-touch executive coaching by referral. Principals only.",
    },
    {
      title: "Consulting",
      desc: "Targeted advisory across operations, growth, and competitive positioning.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      <span
        aria-hidden
        className="heading-monument absolute -left-20 -bottom-10 text-white/[0.025] select-none pointer-events-none leading-none"
        style={{ fontSize: "35rem" }}
      >
        S
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <p className="label-caps text-gold mb-4">Inside Sokara</p>
          <div className="gold-line mb-8" />
          <h2 className="heading-lg text-4xl md:text-6xl lg:text-7xl max-w-4xl">
            What we operate.
            <br />
            <span className="italic text-white/50">What we&apos;re building next.</span>
          </h2>
        </div>

        <div className="mb-16 md:mb-20">
          <p className="label-caps text-[10px] text-gold/70 mb-6 tracking-[0.3em]">
            What We Operate Now
          </p>
          <div className="relative border border-gold/40 p-10 md:p-14 bg-white/[0.03] overflow-hidden transition-all duration-500 hover:border-gold hover:bg-white/[0.05]">
            <span
              className="heading-monument absolute -top-4 right-8 text-gold/15 leading-none select-none pointer-events-none hidden md:block"
              style={{ fontSize: "14rem" }}
            >
              G
            </span>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <span className="label-caps text-[10px] text-gold tracking-[0.3em]">
                    Live Venture
                  </span>
                </div>

                <h3 className="heading-lg text-5xl md:text-7xl text-white mb-4">
                  Glory
                </h3>

                <p className="font-serif italic text-2xl md:text-3xl text-gold mb-6 leading-tight">
                  A luxury house movement. The category of one.
                </p>

                <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-xl">
                  The first venture Sokara built and brought into the world.
                  Designed around women, story, and access. Watch the rest
                  unfold.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://weareglory-us-v2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group label-caps text-[11px] px-8 py-4 bg-gold text-charcoal hover:bg-gold-light transition-colors duration-300 inline-flex items-center gap-3 tracking-[0.25em] whitespace-nowrap"
                >
                  Visit Glory
                  <span aria-hidden className="arrow-slide">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="label-caps text-[10px] text-gold/70 mb-6 tracking-[0.3em]">
            What We&apos;re Building Next
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {areas.map((area, i) => (
              <div
                key={area.title}
                className="tile-hover bg-charcoal p-8 md:p-10 min-h-[220px] flex flex-col hover:bg-charcoal/80"
              >
                <p className="label-caps text-[10px] text-gold/60 mb-6 tracking-[0.25em]">
                  {String(i + 1).padStart(2, "0")} · In Development
                </p>
                <h3 className="heading-lg text-3xl md:text-4xl text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm flex-grow">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/40 italic font-serif text-center mt-12 text-sm">
            Every room Sokara opens is built around one principal at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
