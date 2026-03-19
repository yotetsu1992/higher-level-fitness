"use client";

import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { useRef } from "react";

const messages = [
  {
    role: "user",
    text: "Ich möchte abnehmen, aber weiß nicht, wo ich anfangen soll.",
  },
  {
    role: "assistant",
    text: "Guter Entschluss. Lass mich dir ein paar Fragen stellen — dann weiß ich, was wirklich für dich passt.",
  },
  {
    role: "assistant",
    text: "Wie viel Zeit kannst du pro Woche für Training einplanen?",
  },
  {
    role: "user",
    text: "Vielleicht 3 mal, je 1 Stunde.",
  },
  {
    role: "assistant",
    text: "Perfekt. 3×60 Minuten reichen für echte Ergebnisse. Ich empfehle dir ein Erstgespräch — dann entwickeln wir gemeinsam deinen Plan.",
  },
];

export default function AIChat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="chat" ref={ref} className="relative py-32 bg-[#0B0B0B]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <SectionLabel label="KI-Agent" />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading text-7xl md:text-[6rem] text-white leading-[0.9] tracking-tight"
            >
              SEBASTIAN
              <br />
              <span className="text-gold">ANTWORTET</span>
              <br />
              IMMER.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#666] text-base leading-relaxed max-w-md"
            >
              Ein KI-Avatar, trainiert auf Sebastians Expertise und
              Persönlichkeit. Stell Fragen, bekomm echte Antworten — und wenn
              du bereit bist, geht es weiter zum persönlichen Gespräch.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              href="#bewerbung"
              className="inline-flex items-center gap-3 text-gold text-[11px] tracking-[0.25em] uppercase hover:gap-5 transition-all duration-300 w-fit"
            >
              Direkt anfragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.a>
          </div>

          {/* Right: Chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="border border-[#1A1A1A] bg-[#080808] overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1A1A1A]">
                <div className="w-9 h-9 bg-gold flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-[#080808] text-base leading-none">
                    S
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Sebastian · Higher Level Fitness
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <p className="text-[#444] text-[11px] tracking-wide">
                      Online — antwortet sofort
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 flex flex-col gap-3 min-h-[300px]">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.45 + i * 0.18, duration: 0.45 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gold text-[#080808] font-medium"
                          : "bg-[#161616] text-[#aaa]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-[#1A1A1A] px-5 py-4 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Stell Sebastian eine Frage…"
                  className="flex-1 bg-transparent text-[13px] text-[#444] placeholder-[#2A2A2A] outline-none"
                  disabled
                />
                <button className="w-8 h-8 bg-gold hover:bg-gold-light transition-colors flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12"
                      stroke="#080808"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-[#2A2A2A] text-[10px] tracking-[0.25em] text-center mt-4 uppercase">
              KI-Chat — Integration folgt bald
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
