import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period?: string;
  featuresLabel: string;
  features: string[];
  featured?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    description:
      "Your growth partner. Unlock instant campaign insights with a simple monthly plan.",
    price: "Free",
    featuresLabel: "Get started with",
    features: [
      "Create account and start chat",
      "Basic ad analytics",
      "5 creative templates",
      "Standard reporting",
      "Community support",
    ],
  },
  {
    name: "Pro Plan",
    description:
      "Your growth partner. Unlock full-funnel optimization with a simple monthly fee.",
    price: "$49",
    period: "/month",
    featuresLabel: "Everything in Starter",
    features: [
      "Unlimited campaigns",
      "AI-powered optimization",
      "Advanced ad analytics",
      "Real-time reporting",
      "Custom creative library",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Team Plan",
    description:
      "Your team's growth partner. Unlock collaborative campaign management with a simple monthly fee.",
    price: "$129",
    period: "/month",
    featuresLabel: "Everything in Pro",
    features: [
      "Centralized team billing",
      "Team-wide campaign settings",
      "Role-based permissions",
      "Real-time feedback system",
      "Advanced analytics tools",
      "Dedicated account manager",
    ],
  },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-6 transition-transform",
        tier.featured
          ? "border-primary/40 bg-white/[0.05] shadow-2xl shadow-black/40 md:-translate-y-3"
          : "border-white/10 bg-white/[0.02]"
      )}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
          Most popular
        </span>
      )}

      <h3 className="font-heading text-lg font-semibold text-white">
        {tier.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/45">
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-white">{tier.price}</span>
        {tier.period && (
          <span className="text-sm text-white/40">{tier.period}</span>
        )}
      </div>

      <button
        disabled
        aria-disabled="true"
        className="mt-5 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white/40"
      >
        <Clock className="h-3.5 w-3.5" />
        Coming soon
      </button>

      <div className="my-6 h-px bg-white/8" />

      <p className="mb-4 text-xs font-medium uppercase tracking-wide text-white/35">
        {tier.featuresLabel}
      </p>
      <ul className="space-y-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-white/75"
          >
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="h-2.5 w-2.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.555 0.163 48.998 / 0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Pricing
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Plans built to scale with you
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-white/50">
          Simple, transparent pricing. Paid plans are launching soon — join
          the waitlist to lock in early access.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  );
}
