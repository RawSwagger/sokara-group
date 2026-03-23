"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <p className="label-caps text-gold mb-4">Connect</p>
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <h2 className="heading-lg text-3xl md:text-4xl mb-8">
              Ready to elevate
              <br />
              <span className="italic text-white/50">your leadership?</span>
            </h2>

            <p className="text-white/50 leading-relaxed mb-12 max-w-md">
              We work with a select number of leaders and organizations each
              year. If you&apos;re ready for a strategic partnership that creates
              real, lasting impact — let&apos;s start a conversation.
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
                  Response Time
                </p>
                <p className="text-white/60 text-sm">Within 24 business hours</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
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
                <h3 className="heading-lg text-2xl mb-3">Thank You</h3>
                <p className="text-white/50">
                  We&apos;ll be in touch within 24 business hours.
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
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Organization"
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
                    Service of Interest
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white/60 focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-charcoal">
                      Select a service
                    </option>
                    <option value="coaching" className="bg-charcoal">
                      Executive Coaching
                    </option>
                    <option value="events" className="bg-charcoal">
                      Events & Convenings
                    </option>
                    <option value="advisory" className="bg-charcoal">
                      Strategic Advisory
                    </option>
                    <option value="branding" className="bg-charcoal">
                      Brand Strategy
                    </option>
                    <option value="other" className="bg-charcoal">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="label-caps text-[10px] text-white/30 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="label-caps text-[11px] px-8 py-4 bg-gold text-white hover:bg-gold-light transition-colors duration-300 w-full mt-4"
                >
                  Start the Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
