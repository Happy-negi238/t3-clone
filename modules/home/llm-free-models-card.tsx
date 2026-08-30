import {
  Infinity as InfinityIcon,
  Sparkles,
  Gem,
  Cpu,
  Brain,
  Wind,
  type LucideIcon,
} from "lucide-react";

interface FreeModel {
  name: string;
  provider: string;
  icon: LucideIcon;
  badgeClassName: string;
}

// A curated, static sample of models that are free on OpenRouter's
// `:free` tier. This is display-only — nothing here calls an API or
// hits a specific model at runtime.
const FEATURED_FREE_MODELS: FreeModel[] = [
  { name: "Llama 3.3 70B", provider: "Meta", icon: InfinityIcon, badgeClassName: "bg-blue-500/15 text-blue-400" },
  { name: "Qwen3 Coder", provider: "Alibaba", icon: Sparkles, badgeClassName: "bg-cyan-500/15 text-cyan-400" },
  { name: "Gemma 3 27B", provider: "Google", icon: Gem, badgeClassName: "bg-emerald-500/15 text-emerald-400" },
  { name: "Nemotron 3 Nano", provider: "NVIDIA", icon: Cpu, badgeClassName: "bg-lime-500/15 text-lime-400" },
  { name: "GPT-OSS 20B", provider: "OpenAI", icon: Brain, badgeClassName: "bg-slate-400/15 text-slate-300" },
  { name: "Mistral Small", provider: "Mistral", icon: Wind, badgeClassName: "bg-orange-500/15 text-orange-400" },
];

export function LlmFreeModelsCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-5">
      <div className="grid grid-cols-3 gap-3">
        {FEATURED_FREE_MODELS.map((model) => {
          const Icon = model.icon;
          return (
            <div
              key={model.name}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-white/8 bg-white/2 p-3 text-center transition-colors hover:border-white/20"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${model.badgeClassName}`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <p className="w-full truncate text-[11px] font-medium text-white/85">
                {model.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">Choose your own LLM</h3>
        <p className="mt-1.5 text-sm text-white/45">
          A few of the free-tier models available through OpenRouter — swap
          providers anytime, no vendor lock-in.
        </p>
      </div>

      <p className="mt-auto pt-4 text-xs text-white/30">
        Showing 6 of the free models on OpenRouter
      </p>
    </div>
  );
}
