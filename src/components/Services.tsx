export default function Services() {
  const services = [
    {
      number: "01",
      title: "Private Executive Coaching",
      subtitle: "Clarity, Resilience & Performance",
      description:
        "High-touch coaching for C-suite leaders and founders. This is a strategic partnership for the human behind the title — designed to protect your energy, sharpen your decision-making, and expand your capacity to lead.",
      details: [
        "Monthly 1:1 strategic sessions",
        "Real-time counsel between sessions",
        "Custom leadership frameworks",
        "Confidential thought partnership",
      ],
    },
    {
      number: "02",
      title: "Curated Events",
      subtitle: "Proximity Creates Possibility",
      description:
        "These are not conferences. They are intentional, invitation-led environments designed for senior executives, founders, and visionaries. We prioritize proximity and transformation over mass attendance.",
      details: [
        "Private executive dinners",
        "Industry roundtables",
        "Thought leadership forums",
        "Bespoke engagements",
      ],
    },
    {
      number: "03",
      title: "Strategic Partnerships",
      subtitle: "The Architecture of Growth",
      description:
        "Comprehensive strategic advisory for organizations navigating growth, transformation, and competitive challenges. We operate as your contracted executive advisory team — senior-level counsel when it matters most.",
      details: [
        "Organizational design & alignment",
        "Growth & revenue strategy",
        "Operational infrastructure",
        "Market positioning",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-20">
          <p className="label-caps text-gold mb-4">What We Do</p>
          <div className="gold-line mb-8" />
          <h2 className="heading-lg text-3xl md:text-4xl text-charcoal max-w-xl">
            Three pillars. One purpose.
            <br />
            <span className="italic text-charcoal/60">
              Elevating leaders who shape industries.
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 py-16 ${
                i !== services.length - 1
                  ? "border-b border-light-border"
                  : ""
              }`}
            >
              {/* Number + Title */}
              <div className="md:col-span-4">
                <span className="label-caps text-gold text-[11px]">
                  {service.number}
                </span>
                <h3 className="heading-lg text-2xl md:text-3xl text-charcoal mt-3 mb-2">
                  {service.title}
                </h3>
                <p className="label-caps text-[10px] text-charcoal/50">
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Details */}
              <div className="md:col-span-3">
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-charcoal/60 flex items-start gap-3"
                    >
                      <span className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="label-caps text-[11px] px-8 py-4 bg-charcoal text-white hover:bg-gold transition-colors duration-300 inline-block"
          >
            Explore How We Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
