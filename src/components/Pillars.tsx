import Link from "next/link";

export default function Pillars() {
  const pillars = [
    {
      number: "01",
      title: "Counsel",
      tagline: "The call before the call.",
      body: "When a move can't go to committee, you call me. Boards meet quarterly. Consultants invoice hourly. I pick up on the second ring.",
      href: null,
    },
    {
      number: "02",
      title: "Convenings",
      tagline: "The yacht is the agenda.",
      body: "Charters off the Amalfi. Tuscan villa decks. Single-table dinners in the city you've already flown to. Eight seats. One night. One brief.",
      href: "/convenings",
    },
    {
      number: "03",
      title: "Ventures",
      tagline: "When the deal is too good to advise on.",
      body: "We've sat in enough rooms to know which ideas should exist. Sometimes we advise. Sometimes we build. Sometimes we hold the equity.",
      href: null,
    },
  ];

  return (
    <section id="pillars" className="py-24 md:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <p className="label-caps text-gold mb-4">The Work</p>
          <div className="gold-line mb-8" />
          <h2 className="heading-lg text-4xl md:text-6xl lg:text-7xl text-charcoal max-w-4xl">
            Three pillars.
            <br />
            <span className="italic text-charcoal/60">One operator.</span>{" "}
            <span className="italic text-gold">Every market that moves.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="pillar-card relative bg-white p-8 md:p-10 border-t-2 border-gold/30 flex flex-col"
            >
              <span
                className="heading-monument absolute top-4 right-6 text-gold/15 leading-none select-none pointer-events-none"
                style={{ fontSize: "5.5rem" }}
              >
                {pillar.number}
              </span>

              <p className="label-caps text-[10px] text-charcoal/40 mb-6 tracking-[0.25em]">
                Pillar {pillar.number}
              </p>

              <h3 className="heading-lg text-4xl md:text-5xl text-charcoal mb-3">
                {pillar.title}
              </h3>

              <p className="font-serif italic text-xl text-gold mb-6 leading-tight">
                {pillar.tagline}
              </p>

              <p className="text-charcoal/75 leading-relaxed text-base flex-grow">
                {pillar.body}
              </p>

              {pillar.href && (
                <Link
                  href={pillar.href}
                  className="mt-8 pt-6 border-t border-light-border label-caps text-[10px] text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2 tracking-[0.25em] group"
                >
                  Visit Convenings
                  <span aria-hidden className="arrow-slide">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
