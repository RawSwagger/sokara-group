interface InterstitialProps {
  line1: string;
  line2?: string;
  bg?: "warm-gray" | "white" | "charcoal";
  watermark?: string;
}

export default function Interstitial({
  line1,
  line2,
  bg = "warm-gray",
  watermark = "S",
}: InterstitialProps) {
  const isDark = bg === "charcoal";
  const bgClass = {
    "warm-gray": "bg-warm-gray",
    white: "bg-white",
    charcoal: "bg-charcoal",
  }[bg];

  return (
    <section
      className={`relative ${bgClass} py-28 md:py-44 overflow-hidden`}
    >
      <span
        aria-hidden
        className={`heading-monument absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none ${
          isDark ? "text-white/[0.03]" : "text-gold/[0.06]"
        }`}
        style={{ fontSize: "clamp(20rem, 50vw, 42rem)" }}
      >
        {watermark}
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-6 mb-10 md:mb-14">
          <div className={`w-12 h-px ${isDark ? "bg-gold" : "bg-gold"}`} />
          <span
            className={`label-caps text-[10px] tracking-[0.3em] ${
              isDark ? "text-gold/70" : "text-gold"
            }`}
          >
            ⌐ Sokara
          </span>
        </div>

        <h2
          className={`heading-monument text-5xl md:text-7xl lg:text-8xl max-w-5xl ${
            isDark ? "text-white" : "text-charcoal"
          }`}
        >
          {line1}
          {line2 && (
            <>
              <br />
              <span className={isDark ? "text-gold/80" : "text-gold"}>
                {line2}
              </span>
            </>
          )}
        </h2>
      </div>
    </section>
  );
}
