import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <p className="label-caps text-gold mb-4">About</p>
          <div className="gold-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/leah-about.jpeg"
              alt=""
              fill
              className="object-cover"
              quality={85}
            />
          </div>

          <div>
            <h2 className="heading-lg text-3xl md:text-5xl text-charcoal mb-12">
              I&apos;m Leah Notarianni.
              <br />
              <span className="italic text-charcoal/70">I run Sokara.</span>
            </h2>

            <div className="space-y-6 text-charcoal/75 leading-relaxed text-lg">
              <p>
                For two decades I&apos;ve been the operator behind the rooms
                that move billions. Principals call me before they call their
                attorneys. Family offices brief me before they brief their
                boards. Founders send me the deck before they send it to anyone
                else.
              </p>
              <p>
                Sokara is the practice that holds that work. A network with
                reach in every market that moves. A client list deep enough to
                arrange almost any room. A rule we don&apos;t break — what
                happens in those rooms doesn&apos;t leave them.
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-charcoal pt-2 leading-snug">
                We&apos;re the firm the firms call. The advisor&apos;s advisor.
                The principal&apos;s principal.
              </p>
              <p className="text-charcoal font-medium italic font-serif text-xl pt-4 border-t border-light-border">
                If we&apos;re a fit, you&apos;ll know fast. If we&apos;re not,
                you&apos;ll know faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
