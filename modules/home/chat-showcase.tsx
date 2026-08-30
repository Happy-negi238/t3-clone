"use client";

import { useEffect, useRef, useState } from "react";
import {
  Megaphone,
  MessageSquareText,
  LineChart,
  Send,
  RotateCcw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

interface QuickReply {
  id: string;
  chip: string; // short label on the button
  question: string; // full text shown as the user's bubble
  answer: string; // canned assistant reply
}

interface Persona {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  greeting: string;
  quickReplies: QuickReply[];
}

const PERSONAS: Persona[] = [
  {
    id: "ads",
    name: "Ad Strategy",
    role: "Campaign assistant",
    icon: Megaphone,
    greeting: "Hi! Ask me anything about your ad performance.",
    quickReplies: [
      {
        id: "ctr",
        chip: "Boost my CTR",
        question: "How can I boost my CTR?",
        answer:
          "Tighten your headline to lead with the outcome, test a high-contrast thumbnail, and narrow targeting to your top 20% lookalike audience — accounts usually see a 15–25% CTR lift within a week.",
      },
      {
        id: "format",
        chip: "Best format for e-commerce",
        question: "What's the best ad format for e-commerce?",
        answer:
          "Short-form vertical video (9:16, under 15s) is converting best for product-led stores right now, paired with a carousel for retargeting warm visitors.",
      },
      {
        id: "budget",
        chip: "Optimize my budget",
        question: "How should I optimize my budget allocation?",
        answer:
          "Shift 60% of spend to your top 2 converting campaigns, keep 25% for testing new creative, and hold 15% back for retargeting — review the split every 2 weeks.",
      },
    ],
  },
  {
    id: "sales",
    name: "Sales Scripts",
    role: "Conversation coach",
    icon: MessageSquareText,
    greeting: "Need a script? I can draft one in your brand voice.",
    quickReplies: [
      {
        id: "opener",
        chip: "Write a cold call opener",
        question: "Can you write me a cold call opener?",
        answer:
          "\"Hi [Name], I'll keep this short — we helped a company like yours grow qualified leads by 40% in 60 days. Worth 10 minutes to see if it fits?\"",
      },
      {
        id: "objection",
        chip: "Handle price objections",
        question: "How do I handle price objections?",
        answer:
          "Acknowledge it, then reframe on ROI: \"I get it — let's look at the cost per lead you're paying now versus what we're projecting. Most clients break even inside 6 weeks.\"",
      },
      {
        id: "followup",
        chip: "Follow-up email template",
        question: "Give me a follow-up email template.",
        answer:
          "Subject: Quick follow-up — Hi [Name], following up on our chat. Here's the one-pager we discussed. Happy to jump on a call this week if it's useful?",
      },
    ],
  },
  {
    id: "growth",
    name: "Growth Analyst",
    role: "Reporting & insights",
    icon: LineChart,
    greeting: "I've got your latest campaign data. What do you want to know?",
    quickReplies: [
      {
        id: "spike",
        chip: "Why did conversions spike?",
        question: "Why did conversions spike this week?",
        answer:
          "Your retargeting campaign hit a fresh audience segment on Tuesday — conversion rate jumped from 3.1% to 5.4% and held for 4 days straight.",
      },
      {
        id: "channel",
        chip: "Best converting channel",
        question: "Which channel is converting best right now?",
        answer:
          "Paid social is leading at $18 cost-per-lead, followed by search at $27. Email is your best repeat-customer channel at 12% conversion.",
      },
      {
        id: "forecast",
        chip: "Forecast next month",
        question: "Can you forecast next month's leads?",
        answer:
          "Based on current trend, expect roughly 2,050–2,300 leads next month if spend stays flat — about a 12% increase over this month.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Chat message types                                                   */
/* ------------------------------------------------------------------ */

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
}

function initialMessages(persona: Persona): ChatMessage[] {
  return [{ id: "greeting", role: "assistant", content: persona.greeting }];
}

/* ------------------------------------------------------------------ */
/* Single chat panel                                                    */
/* ------------------------------------------------------------------ */

function ChatPanel({ persona }: { persona: Persona }) {
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    initialMessages(persona)
  );
  const [usedIds, setUsedIds] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const Icon = persona.icon;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  function handleQuickReply(reply: QuickReply) {
    if (isTyping) return;

    setMessages((prev) => [
      ...prev,
      { id: `${reply.id}-q`, role: "user", content: reply.question },
    ]);
    setUsedIds((prev) => [...prev, reply.id]);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `${reply.id}-a`, role: "assistant", content: reply.answer },
      ]);
      setIsTyping(false);
    }, 750);
  }

  function handleReset() {
    setMessages(initialMessages(persona));
    setUsedIds([]);
    setIsTyping(false);
  }

  const remainingReplies = persona.quickReplies.filter(
    (r) => !usedIds.includes(r.id)
  );

  return (
    <div className="flex h-110 flex-col rounded-2xl border border-white/10 bg-white/3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-medium text-white">{persona.name}</p>
            <p className="text-xs text-white/45">{persona.role}</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="text-white/35 transition-colors hover:text-white/70"
          aria-label="Reset conversation"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ",
                message.role === "user"
                  ? "rounded-tr-sm bg-primary text-primary-foreground rounded"
                  : "rounded-tl-sm border border-white/10 bg-white/5 text-white/85 rounded"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-full rounded-tl-sm border border-white/10 bg-white/5 px-3.5 py-3">
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick replies */}
      <div className="border-t border-white/8 p-3">
        {remainingReplies.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {remainingReplies.map((reply) => (
              <button
                key={reply.id}
                onClick={() => handleQuickReply(reply)}
                disabled={isTyping}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-white disabled:opacity-40"
              >
                {reply.chip}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs text-white/35">
            <span className="flex items-center gap-1.5">
              <Send className="h-3 w-3" />
              Ask a real question in the full app
            </span>
            <button
              onClick={handleReset}
              className="font-medium text-primary hover:text-primary/80"
            >
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                              */
/* ------------------------------------------------------------------ */

export function ChatShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.555 0.163 48.998 / 0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Talk to T3 Chat
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Chat with AI instantly
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-white/50">
          Ask a question, explore the responses, and get a feel for the experience.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {PERSONAS.map((persona) => (
          <ChatPanel key={persona.id} persona={persona} />
        ))}
      </div>
    </section>
  );
}
