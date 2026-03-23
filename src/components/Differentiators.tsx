export default function Differentiators() {
  return (
    <section className="py-24 md:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <p className="label-caps text-gold mb-4">Why Sokara</p>
            <div className="gold-line mb-8" />
            <h2 className="heading-lg text-3xl md:text-4xl text-charcoal">
              Not another
              <br />
              consulting firm.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-10">
            {[
              {
                title: "Senior Expertise",
                desc: "Work directly with senior advisors with decades of executive experience. No juniors. No handoffs.",
              },
              {
                title: "Complete Discretion",
                desc: "Your confidence is paramount. We maintain the highest standards of confidentiality in every engagement.",
              },
              {
                title: "Execution, Not Just Strategy",
                desc: "We don't deliver slide decks and disappear. We partner with you from insight through implementation.",
              },
              {
                title: "Access by Invitation",
                desc: "We take on a limited number of engagements to ensure every client receives our full attention and best work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-b border-light-border pb-8"
              >
                <h3 className="text-charcoal font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
