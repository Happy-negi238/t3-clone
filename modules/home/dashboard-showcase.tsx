import type { ReactNode } from "react";
import {
  CheckCircle2,
  Users,
  Wallet,
  Circle,
  CircleDot,
  Folder,
  Download,
  Presentation,
  FileSpreadsheet,
  LayoutGrid,
  TrendingUp,
  Percent,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PROCESS_STEPS = [
  { label: "Market Analysis", status: "done" },
  { label: "Strategic Planning", status: "active" },
  { label: "Content Creation", status: "upcoming" },
  { label: "Launch & Scale", status: "upcoming" },
  { label: "Performance Review", status: "upcoming" },
] as const;

const REVIEWS = [
  {
    initial: "L",
    color: "bg-violet-500",
    name: "Liam Carter",
    quote: "Amazing insights — we doubled our conversions in weeks!",
  },
  {
    initial: "S",
    color: "bg-primary",
    name: "Sofia Mendes",
    quote: "Clear strategy, fast turnaround, and real results. Highly recommend.",
  },
] as const;

const TEAM_ACTIVITY = [
  { initial: "D", name: "Daniel", action: "Campaign Strategy Approved", time: "1min ago" },
  { initial: "E", name: "Emma", action: "Uploaded Sales Assets", time: "2h ago" },
] as const;

function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/8 bg-white/[0.03] p-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DashboardShowcase() {
  return (
    <section className="relative z-10 mx-auto -mt-13 max-w-6xl px-6 pb-24">
      <div
        className="
      [mask-image:linear-gradient(to_bottom,black_10%,black_75%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)]
    "
      >
        <Image
          src="/home2.png"
          alt="home"
          width={1200}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
    // <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-6 pb-24">
    //   <div className="grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-zinc-950 p-4 md:grid-cols-12">
    //     {/* Left: stats + process — spans both rows */}
    //     <Card className="md:col-span-3 md:row-span-2">
    //       <dl className="space-y-4">
    //         <div className="flex items-center justify-between">
    //           <dt className="text-xs text-white/50">Growth this week</dt>
    //           <dd className="flex items-center gap-1 text-sm font-semibold text-emerald-400">
    //             +88% <CheckCircle2 className="h-3.5 w-3.5" />
    //           </dd>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <dt className="text-xs text-white/50">New Leads today</dt>
    //           <dd className="flex items-center gap-1 text-sm font-semibold text-white">
    //             245 <Users className="h-3.5 w-3.5 text-white/40" />
    //           </dd>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <dt className="text-xs text-white/50">Budget used</dt>
    //           <dd className="flex items-center gap-1 text-sm font-semibold text-white">
    //             $1.6K <Wallet className="h-3.5 w-3.5 text-white/40" />
    //           </dd>
    //         </div>
    //       </dl>

    //       <div className="my-5 h-px bg-white/8" />

    //       <p className="mb-3 text-xs font-medium text-white/50">Process</p>
    //       <ul className="space-y-3">
    //         {PROCESS_STEPS.map((step) => (
    //           <li key={step.label} className="flex items-center gap-2.5 text-sm">
    //             {step.status === "done" && (
    //               <CircleDot className="h-3.5 w-3.5 shrink-0 text-primary" />
    //             )}
    //             {step.status === "active" && (
    //               <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 border-primary">
    //                 <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    //               </span>
    //             )}
    //             {step.status === "upcoming" && (
    //               <Circle className="h-3.5 w-3.5 shrink-0 text-white/25" />
    //             )}
    //             <span
    //               className={
    //                 step.status === "upcoming" ? "text-white/40" : "text-white/85"
    //               }
    //             >
    //               {step.label}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //     </Card>

    //     {/* Reviews */}
    //     <Card className="md:col-span-3">
    //       <p className="mb-4 text-sm font-medium text-white/70">Reviews</p>
    //       <div className="space-y-4">
    //         {REVIEWS.map((review) => (
    //           <div key={review.name} className="flex gap-3">
    //             <div
    //               className={cn(
    //                 "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white",
    //                 review.color
    //               )}
    //             >
    //               {review.initial}
    //             </div>
    //             <div>
    //               <p className="text-sm font-medium text-white">{review.name}</p>
    //               <p className="mt-0.5 text-xs leading-relaxed text-white/45">
    //                 &ldquo;{review.quote}&rdquo;
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </Card>

    //     {/* Folders + files */}
    //     <div className="flex flex-col gap-4 md:col-span-6">
    //       <div className="grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-br from-indigo-600/40 via-indigo-500/15 to-transparent p-5">
    //         {[
    //           { label: "Ad Creatives", count: "62 items" },
    //           { label: "Sales Scripts", count: "36 items" },
    //         ].map((folder) => (
    //           <div key={folder.label} className="flex flex-col items-start gap-3">
    //             <Folder className="h-9 w-9 text-white/90" />
    //             <div>
    //               <p className="text-sm font-medium text-white">{folder.label}</p>
    //               <p className="text-xs text-white/50">{folder.count}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="grid grid-cols-2 gap-4">
    //         <Card className="flex items-center justify-between">
    //           <div className="flex items-center gap-2.5">
    //             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-500/15 text-orange-400">
    //               <Presentation className="h-4 w-4" />
    //             </span>
    //             <div className="min-w-0">
    //               <p className="truncate text-sm font-medium text-white">
    //                 SalesPlan.pptx
    //               </p>
    //               <p className="text-xs text-white/40">4.9mb</p>
    //             </div>
    //           </div>
    //           <Download className="h-4 w-4 shrink-0 text-white/40" />
    //         </Card>
    //         <Card className="flex items-center justify-between">
    //           <div className="flex items-center gap-2.5">
    //             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-400">
    //               <FileSpreadsheet className="h-4 w-4" />
    //             </span>
    //             <div className="min-w-0">
    //               <p className="truncate text-sm font-medium text-white">
    //                 Report.xlsx
    //               </p>
    //               <p className="text-xs text-white/40">6.1mb</p>
    //             </div>
    //           </div>
    //           <Download className="h-4 w-4 shrink-0 text-white/40" />
    //         </Card>
    //       </div>
    //     </div>

    //     {/* Campaign summary */}
    //     <Card className="md:col-span-6">
    //       <div className="mb-4 flex items-center gap-2.5">
    //         <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/8 text-white/70">
    //           <LayoutGrid className="h-4 w-4" />
    //         </span>
    //         <div>
    //           <p className="text-sm font-medium text-white">
    //             Nexera Growth Partners
    //           </p>
    //           <p className="text-xs text-white/45">Lead Generation Campaign</p>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-3 gap-4">
    //         <div>
    //           <p className="flex items-center gap-1 text-sm font-semibold text-white">
    //             <TrendingUp className="h-3.5 w-3.5 text-primary" /> $418,200
    //           </p>
    //           <p className="text-xs text-white/40">Revenue generated</p>
    //         </div>
    //         <div>
    //           <p className="flex items-center gap-1 text-sm font-semibold text-white">
    //             <Percent className="h-3.5 w-3.5 text-primary" /> 85%
    //           </p>
    //           <p className="text-xs text-white/40">Conversion increase</p>
    //         </div>
    //         <div>
    //           <p className="flex items-center gap-1 text-sm font-semibold text-white">
    //             <UserPlus className="h-3.5 w-3.5 text-primary" /> +1,910
    //           </p>
    //           <p className="text-xs text-white/40">Leads</p>
    //         </div>
    //       </div>
    //     </Card>

    //     {/* Team activity */}
    //     <Card className="md:col-span-3">
    //       <p className="mb-4 text-sm font-medium text-white/70">Meet the team</p>
    //       <div className="space-y-4">
    //         {TEAM_ACTIVITY.map((member) => (
    //           <div key={member.name} className="flex items-center gap-3">
    //             <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
    //               {member.initial}
    //             </div>
    //             <div className="min-w-0 flex-1">
    //               <p className="text-sm font-medium text-white">{member.name}</p>
    //               <p className="truncate text-xs text-white/45">{member.action}</p>
    //             </div>
    //             <span className="shrink-0 text-[11px] text-white/30">
    //               {member.time}
    //             </span>
    //           </div>
    //         ))}
    //       </div>
    //     </Card>
    //   </div>
    // </section>
  );
}
