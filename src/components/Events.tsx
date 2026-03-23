import Image from "next/image";

export default function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-20">
          <p className="label-caps text-gold mb-4">Events</p>
          <div className="gold-line mb-8" />
          <h2 className="heading-lg text-3xl md:text-4xl max-w-2xl">
            Collapsing decades into days
            <br />
            <span className="italic text-white/50">
              through curated proximity.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Philosophy */}
          <div>
            <p className="text-white/60 leading-relaxed mb-8">
              Our events are intentional, invitation-led environments where
              insight, strategy, and connection converge. We bring together
              senior executives, founders, and visionaries at pivotal moments
              of growth, influence, and transformation.
            </p>
            <p className="text-white/60 leading-relaxed mb-12">
              Participation is limited to preserve quality, trust, and candor.
              Every seat is earned. Every conversation matters.
            </p>

            {/* Event Formats */}
            <div className="space-y-8">
              {[
                {
                  title: "Private Executive Dinners",
                  desc: "Off-the-record dinners for intimate dialogue among senior leaders.",
                },
                {
                  title: "Industry Roundtables",
                  desc: "Facilitated conversations on shared challenges and emerging opportunities.",
                },
                {
                  title: "Thought Leadership Forums",
                  desc: "Strategic forums that surface ideas, shape narratives, and influence industries.",
                },
                {
                  title: "Bespoke Engagements",
                  desc: "Custom events tailored to organizational goals and vision.",
                },
              ].map((event) => (
                <div
                  key={event.title}
                  className="border-l border-gold/30 pl-6"
                >
                  <h3 className="text-white font-medium mb-1">
                    {event.title}
                  </h3>
                  <p className="text-white/40 text-sm">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image + Quote */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/venue.jpeg"
                alt="Sokara Group event venue"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="text-white/70 italic leading-relaxed text-lg">
                &ldquo;The real product is access to people who can change your
                business. The event is just the container.&rdquo;
              </p>
            </blockquote>

            <div className="mt-auto pt-8">
              <a
                href="#contact"
                className="label-caps text-[11px] px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 inline-block"
              >
                Request an Invitation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
