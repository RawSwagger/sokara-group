export default function ThePractice() {
  const standards = [
    {
      number: "01",
      title: "Principals only.",
      desc: "Our seat is at the principal's table. We don't advise staff. We advise the person whose name is on the building.",
    },
    {
      number: "02",
      title: "Discretion is the deliverable.",
      desc: "What happens in our rooms doesn't leave them. No case studies. No press. No name-dropping. The proof is who keeps calling us back.",
    },
    {
      number: "03",
      title: "One operator, not a team.",
      desc: "When you engage Sokara, you engage Sokara — not an associate, not a team lead, not a deck. The relationship is the contract.",
    },
    {
      number: "04",
      title: "By invitation. Always.",
      desc: "We take on a small number of new engagements each year. The list closes when it closes. There is no business-development desk.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="label-caps text-gold mb-4">The Practice</p>
            <div className="gold-line mb-8" />
            <h2 className="heading-lg text-3xl md:text-5xl text-charcoal">
              Four standards
              <br />
              <span className="italic text-charcoal/60">we don&apos;t negotiate.</span>
            </h2>
          </div>

          <div className="space-y-10">
            {standards.map((item) => (
              <div
                key={item.number}
                className="border-b border-light-border pb-8"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="label-caps text-gold text-[11px]">
                    {item.number}
                  </span>
                  <h3 className="text-charcoal font-medium text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-charcoal/50 text-sm leading-relaxed pl-10">
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
