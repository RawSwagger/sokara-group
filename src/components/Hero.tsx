import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/leah-hero.jpeg"
          alt="Sokara Group"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <p className="label-caps text-gold mb-6 tracking-[0.2em] fade-in">
            Sokara Group
          </p>

          <h1
            className="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-8 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where Visionary Leaders
            <br />
            <span className="italic text-gold-light">Find Their Edge</span>
          </h1>

          <p
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Private executive coaching. Curated events.
            <br />
            Strategic partnerships that move industries.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="label-caps text-[11px] px-8 py-4 bg-gold text-white hover:bg-gold-light transition-colors duration-300 text-center"
            >
              Schedule a Conversation
            </a>
            <a
              href="#about"
              className="label-caps text-[11px] px-8 py-4 border border-white/30 text-white hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="label-caps text-[10px] text-white/40 tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
