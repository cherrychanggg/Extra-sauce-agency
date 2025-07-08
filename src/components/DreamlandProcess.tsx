import React from "react";
import { CheckCircle, TrendingUp, MessageCircle, Send, Users } from "lucide-react";

const steps = [
  {
    title: "Becoming an extension of you",
    description: "Schedule the kick-off call to get access to your client portal and a communication portal with us.",
    icon: Users,
  },
  {
    title: "Enter The MarketFit Spinner™",
    description: "We optimize the omnichannel presence to showcase a compelling offer your audience feels dumb to say no to.",
    icon: TrendingUp,
  },
  {
    title: "Begin A Scroll-Stopping Engine",
    description: "We begin sharing your thought leadership in an insightful and entertaining way that makes your audience want to binge-watch.",
    icon: CheckCircle,
  },
  {
    title: "Begin Our Social Selling Strategy",
    description: "We increase response rates for your sales efforts by starting conversations with people in your realm of influence.",
    icon: MessageCircle,
  },
  {
    title: "Watch your DMs start to blow up",
    description: "You start to notice your DMs with more active conversations from qualified pipeline.",
    icon: Send,
  },
];

const DreamlandProcess = () => (
  <section className="relative py-24 px-4 bg-gradient-to-br from-[#fff4f0] via-[#ffe0e0] to-[#f9e6ff] overflow-hidden">
    {/* Dreamy background shapes */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl z-0" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-20 rounded-full blur-3xl z-0" />
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2d1a3a] tracking-tight drop-shadow-lg">
        What Happens When You Get the Sauce
      </h2>
      <p className="text-lg md:text-xl text-[#7c4d2b] mb-12 max-w-2xl mx-auto">
        Your journey to founder-led growth, influence, and pipeline—made binge-worthy.
      </p>
      <div className="flex flex-col md:flex-row md:justify-center gap-8 mb-12">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex-1 bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-[#ff6b6b] hover:scale-105 transition-transform duration-300"
            style={{ minWidth: 220, maxWidth: 300 }}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#fff4f0] mb-4 shadow-md">
              <step.icon className="w-8 h-8 text-[#ff6b6b]" />
            </div>
            <div className="text-2xl font-bold text-[#ff6b6b] mb-2">{idx + 1}</div>
            <h3 className="text-lg font-semibold mb-2 text-[#2d1a3a]">{step.title}</h3>
            <p className="text-sm text-[#7c4d2b]">{step.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 px-8 py-4 bg-[#ff6b6b] text-white rounded-full text-lg font-bold shadow-lg hover:bg-[#ff4d4d] transition-colors">
        Book a Strategy Call
      </button>
    </div>
  </section>
);

export default DreamlandProcess; 