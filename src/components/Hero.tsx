import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/images/leah-hero.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <Image
            src="/images/sokara-s-mark-sm.webp"
            alt="Sokara"
            width={80}
            height={80}
            priority
            className="mb-4 opacity-90"
          />

          <h1 className="heading-xl text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-1">
            We don&apos;t pitch the room.
            <br />
            <span className="italic text-gold-light">We arrange it.</span>
          </h1>

          <p className="label-caps text-[11px] text-white/70 tracking-[0.25em]">
            An Elite Advisory Firm
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
    </section>
  );
}
