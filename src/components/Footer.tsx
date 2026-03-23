export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white/30 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="label-caps text-[15px] text-white tracking-[0.2em] mb-4">
              Sokara
            </p>
            <p className="text-sm leading-relaxed max-w-sm">
              An elite advisory firm guiding visionary leaders through growth,
              transformation, and the moments that define legacies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-caps text-[10px] text-white/50 mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Events", href: "#events" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-caps text-[10px] text-white/50 mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@sokaragroup.com"
                  className="text-sm hover:text-gold transition-colors"
                >
                  hello@sokaragroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Sokara Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs hover:text-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
