// LEAH_PERSONAL_LINK — preview placement for Leah's review.
// To remove: delete the import + render in src/app/page.tsx and delete this file.

export default function LeahPersonalLink() {
  return (
    <section className="py-16 md:py-20 bg-warm-gray border-y border-light-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="label-caps text-gold text-[10px] mb-3 tracking-[0.3em]">
              From the Principal
            </p>
            <p className="heading-lg text-3xl md:text-4xl text-charcoal italic font-serif leading-tight mb-3">
              &ldquo;I&apos;m your unfair advantage.&rdquo;
            </p>
            <p className="text-sm text-charcoal/50">
              Leah on her own terms — separate from the firm, in her own voice.
            </p>
          </div>

          <a
            href="https://leahnotarianni.com"
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps text-[11px] px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 inline-flex items-center gap-3 tracking-[0.25em] whitespace-nowrap"
          >
            leahnotarianni.com
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
