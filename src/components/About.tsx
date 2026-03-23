import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-20">
          <p className="label-caps text-gold mb-4">About</p>
          <div className="gold-line" />
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/leah-about.jpeg"
              alt="Leah Notarianni, Founder & CEO of Sokara Group"
              fill
              className="object-cover"
              quality={85}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="heading-lg text-3xl md:text-4xl text-charcoal mb-4">
              Meet Leah Notarianni
            </h2>
            <p className="label-caps text-gold text-[11px] mb-8">
              Founder & CEO
            </p>

            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Leah Notarianni is the CEO and Founder of Sokara Group, a
                strategic advisory firm guiding organizations and leaders through
                growth, transformation, and critical moments of change.
              </p>
              <p>
                With deep expertise in leadership development and organizational
                alignment, she partners with visionary companies to streamline
                operations, unlock sustainable impact, and create access to the
                rooms that matter most.
              </p>
              <p>
                Sokara operates at the intersection of innovation and culture —
                delivering not just strategy, but execution. Measurable results.
                Durable value. Real relationships.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { label: "Integrity", desc: "Trust & discretion" },
                { label: "Resilience", desc: "Durable value" },
                { label: "Vision", desc: "Future-facing" },
              ].map((value) => (
                <div key={value.label}>
                  <p className="label-caps text-[11px] text-charcoal mb-1">
                    {value.label}
                  </p>
                  <p className="text-sm text-charcoal/50">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
