"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="label-caps text-gold mb-4">Inquire privately</p>
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <h2 className="heading-lg text-3xl md:text-5xl mb-10">
              A small number of clients.
              <br />
              <span className="italic text-white/50">A long line of inquiries.</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-12 max-w-md">
              Sokara accepts a limited number of engagements each year.
              Inquiries are read by the principal, returned within a week, and
              assessed on fit before fee.
            </p>

            <div className="space-y-6">
              <div>
                <p className="label-caps text-[10px] text-white/30 mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@sokaragroup.com"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  hello@sokaragroup.com
                </a>
              </div>
              <div>
                <p className="label-caps text-[10px] text-white/30 mb-1">
                  Response
                </p>
                <p className="text-white/60 text-sm">Within one week.</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="heading-lg text-2xl mb-3">Received.</h3>
                <p className="text-white/50">
                  Your inquiry has been logged. We will respond within one week.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="label-caps text-[10px] text-white/30 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-[10px] text-white/30 mb-2 block">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Company or family office"
                    />
                  </div>
                </div>

                <div>
                  <label className="label-caps text-[10px] text-white/30 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="label-caps text-[10px] text-white/30 mb-2 block">
                    Matter
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white/60 focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-charcoal">
                      Select
                    </option>
                    <option value="counsel" className="bg-charcoal">
                      Counsel
                    </option>
                    <option value="convenings" className="bg-charcoal">
                      Convenings
                    </option>
                    <option value="ventures" className="bg-charcoal">
                      Ventures
                    </option>
                    <option value="other" className="bg-charcoal">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="label-caps text-[10px] text-white/30 mb-2 block">
                    Context
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="A sentence or two on what you're considering."
                  />
                </div>

                <button
                  type="submit"
                  className="label-caps text-[11px] px-8 py-4 bg-gold text-white hover:bg-gold-light transition-colors duration-300 w-full mt-4"
                >
                  Inquire privately
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
