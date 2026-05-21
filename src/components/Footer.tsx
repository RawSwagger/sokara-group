import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white/30 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <Image
            src="/images/sokara-s-mark-sm.webp"
            alt="Sokara"
            width={56}
            height={56}
            className="mb-6 opacity-70"
          />
          <p className="label-caps text-[15px] text-white tracking-[0.3em] mb-6">
            Sokara
          </p>
          <p className="text-sm leading-relaxed max-w-md italic font-serif text-white/50">
            Sokara is the room behind the rooms.
            <br />
            A private advisory practice. By invitation.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-3xl mx-auto">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Sokara Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@sokaragroup.com"
              className="text-xs hover:text-gold transition-colors"
            >
              hello@sokaragroup.com
            </a>
            <a href="#contact" className="text-xs hover:text-gold transition-colors">
              Inquire privately
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
