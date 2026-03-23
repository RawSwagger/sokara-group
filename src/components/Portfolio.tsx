export default function Portfolio() {
  const companies = [
    {
      name: "Portfolio Company",
      category: "Technology",
      status: "Active",
    },
    {
      name: "Portfolio Company",
      category: "Finance",
      status: "Active",
    },
    {
      name: "Portfolio Company",
      category: "Hospitality",
      status: "Active",
    },
    {
      name: "Portfolio Company",
      category: "Consumer",
      status: "Active",
    },
    {
      name: "Portfolio Company",
      category: "Healthcare",
      status: "Active",
    },
    {
      name: "Portfolio Company",
      category: "Media",
      status: "Active",
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-20">
          <p className="label-caps text-gold mb-4">Portfolio</p>
          <div className="gold-line mb-8" />
          <h2 className="heading-lg text-3xl md:text-4xl text-charcoal max-w-xl">
            Companies we partner with.
          </h2>
          <p className="text-charcoal/50 mt-4 max-w-lg">
            A select group of organizations trusted with our strategic counsel
            and advisory expertise.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-light-border">
          {companies.map((company, i) => (
            <div
              key={i}
              className="bg-white p-8 md:p-12 flex flex-col justify-between min-h-[200px] group hover:bg-warm-gray transition-colors duration-300"
            >
              <div>
                <p className="label-caps text-[10px] text-gold mb-4">
                  {company.category}
                </p>
                <h3 className="heading-lg text-xl text-charcoal/30">
                  {company.name}
                </h3>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
                  <span className="text-xs text-charcoal/30">
                    {company.status}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-charcoal/30 mt-12 italic">
          Portfolio details available upon request. Discretion is paramount.
        </p>
      </div>
    </section>
  );
}
