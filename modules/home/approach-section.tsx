import type { ReactNode } from "react";
import { FileText, Sparkles, Target, Camera, Code, FlipHorizontal, LineChart } from "lucide-react";
import { FloatingStat } from "./floating-stat";
import { LlmFreeModelsCard } from "./llm-free-models-card";

const BRAND = "oklch(0.555 0.163 48.998)";

function RevenueCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
      <p className="text-lg font-semibold text-white">Openrouter focused models</p>

      <div className="my-3 h-24 w-full">
        <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={BRAND} stopOpacity="0.45" />
              <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 L25,38 L50,42 L75,20 L100,28 L125,15 L150,25 L175,10 L200,18 L200,60 L0,60 Z"
            fill="url(#revenueFill)"
          />
          <path
            d="M0,45 L25,38 L50,42 L75,20 L100,28 L125,15 L150,25 L175,10 L200,18"
            fill="none"
            stroke={BRAND}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="125" cy="15" r="3" fill={BRAND} />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-white">Powered by leading AI models</h3>
      <p className="mt-1.5 text-sm text-white/45">
        Explore models from different providers and find the right balance of speed, quality, and capability
      </p>
    </div>
  );
}

function AdSpendStat({
  amount,
  change,
  label,
  icon,
  badgeClassName,
}: {
  amount: string;
  change: string;
  label: string;
  icon: ReactNode;
  badgeClassName: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-base font-semibold text-white">
        {amount}{" "}
        <span className="text-xs font-medium text-emerald-400">{change}</span>
      </p>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-white/50">
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full ${badgeClassName}`}
        >
          {icon}
        </span>
        {label}
      </div>
    </div>
  );
}

function CampaignFileCard() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-orange-500/15 text-orange-400">
          <Code className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">Code generation</p>
          <p className="text-xs text-white/40"></p>
        </div>
      </div>
      <button className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white">
        Preview
      </button>
    </div>
  );
}

function AiOptimizationCard() {
  return (
    <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-white/3 p-5">
      <div className="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm text-white border ">
        <Sparkles className="h-4 w-4 shrink-0" />
        
        <span className="text-white/70">Name project</span>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">
          AI-powered optimization
        </h3>
        <p className="mt-1.5 text-sm text-white/45">
          Leverage AI to unlock insights, predict user behavior, and optimize
          your marketing in real-time. Smarter decisions, better results.
        </p>
      </div>
    </div>
  );
}

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.555 0.163 48.998 / 0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Multi model
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          A model for every task
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-white/50">
          Range of AI models and find the one that works best for your needs
        </p>
      </div>

      <FloatingStat
        value="10+"
        label="Model support"
        reverse
        className="right-[10%] top-[16%]"
      />

      <div className="relative z-10 mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 px-6 md:grid-cols-3">
        {/* Column 1: revenue chart + ad spend stats */}
        <div className="flex flex-col gap-4">
          <RevenueCard />
          <div className="grid grid-cols-2 gap-4">
            <AdSpendStat
              amount="50+"
              change="Growing"
              label="AI Models"
              icon={<Target className="h-3 w-3 text-blue-400" />}
              badgeClassName="bg-blue-500/15"
            />
            <AdSpendStat
              amount="10+"
              change="Providers"
              label="AI Providers"
              icon={<Camera className="h-3 w-3 text-pink-400" />}
              badgeClassName="bg-pink-500/15"
            />
          </div>
        </div>

        {/* Column 2: free LLM showcase (live from OpenRouter) */}
        <LlmFreeModelsCard />

        {/* Column 3: campaign file + AI optimization */}
        <div className="flex flex-col gap-4">
          <CampaignFileCard />
          <AiOptimizationCard />
        </div>
      </div>
    </section>
  );
}
