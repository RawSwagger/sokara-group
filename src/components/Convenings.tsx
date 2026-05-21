import Image from "next/image";

export default function Convenings() {
  const formats = [
    {
      title: "Private Boards",
      desc: "Two-day, eight-seat strategic boards convened on charter or villa. One brief, one circle, no slides.",
    },
    {
      title: "Single-Table Dinners",
      desc: "Off-the-record dinners of ten or fewer in the city you're already in. Curated for one outcome.",
    },
    {
      title: "Long-Table Weekends",
      desc: "Three days, one location, returning each year. The same families. The compounding network.",
    },
    {
      title: "Bespoke Arrangements",
      desc: "When the room you need doesn't exist yet, we build it.",
    },
  ];

  return (
    <section
      id="convenings"
      className="py-24 md:py-32 bg-charcoal text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <p className="label-caps text-gold mb-4">Convenings</p>
          <div className="gold-line mb-8" />
          <h2 className="heading-lg text-3xl md:text-5xl max-w-3xl">
            Proximity is the product.
            <br />
            <span className="italic text-white/50">The room is the receipt.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-white/70 leading-relaxed mb-6 text-lg">
              Our convenings are not events. They are environments — designed so
              that the conversations that matter most can happen without being
              heard by the wrong people.
            </p>
            <p className="text-white/60 leading-relaxed mb-12">
              We program a small calendar each year: a private board off the
              Amalfi coast in spring, a single-table dinner in a city you
              already operate in, a long-table strategy weekend at a villa we
              hold each year for the same eight families.
            </p>
            <p className="text-white/60 leading-relaxed mb-12">
              Participation is by invitation. Outcomes are not published. The
              receipts are the relationships that walk out the door together.
            </p>

            <div className="space-y-8">
              {formats.map((format) => (
                <div
                  key={format.title}
                  className="border-l border-gold/30 pl-6"
                >
                  <h3 className="text-white font-medium mb-1">{format.title}</h3>
                  <p className="text-white/40 text-sm">{format.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/venue.jpeg"
                alt=""
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="text-white/80 italic leading-relaxed text-lg font-serif">
                &ldquo;The real product is access to people who can change your
                business. The event is just the container.&rdquo;
              </p>
            </blockquote>

            <div className="mt-auto pt-8">
              <a
                href="/#contact"
                className="label-caps text-[11px] px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 inline-block"
              >
                Inquire privately
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
