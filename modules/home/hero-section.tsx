"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { SiteNavbar } from "./site-navbar";
import { FloatingStat } from "./floating-stat";
import { useState } from "react";

export function HeroSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const handleStartChatting = async () => {
    setLoading(true)
    const session = await authClient.getSession();

    if (session.data) {
      setLoading(false);
      router.push("/");
      return;
    }

    setLoading(false);
    router.push("/sign-in");
  };

  return (
    <section className="relative overflow-hidden bg-black pb-28 pt-2">
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-140 w-275 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.555 0.163 48.998 / 1), transparent 70%)",
        }}
      />

      {/* Orbit / globe grid lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 h-120 w-255 -translate-x-1/2 opacity-25"
        viewBox="0 0 920 480"
        fill="none"
      >
        <ellipse cx="460" cy="480" rx="440" ry="430" stroke="white" strokeOpacity="0.3" />
        <ellipse cx="460" cy="480" rx="310" ry="300" stroke="white" strokeOpacity="0.2" />
        <ellipse cx="460" cy="480" rx="180" ry="175" stroke="white" strokeOpacity="0.25" />
      </svg>

      <SiteNavbar />

      <div className="relative z-10 mx-auto mt-24 max-w-4xl px-6 text-center">
        <h1 className="text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Orchestrate Multiple LLMs
          <br />
          One Powerful Chat
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-white/55">
          Get better results by exploring multiple LLMs in one place. If it reaches its usage
          limit, automatically switch to another and keep the conversation going.
        </p>
        <Button
          size="lg"
          className="mt-7 rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90 disabled:bg-primary/80"
          onClick={handleStartChatting}
          disabled={loading}
        >
          {loading ? "Check session.." :"Start Chatting"}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <FloatingStat
        value="+620%"
        label="conversion lift"
        className="left-[12%] top-[34%]"
      />
      <FloatingStat
        value="10+"
        label="LLMs"
        reverse
        className="right-[16%] top-[57%]"
      />
    </section>
  );
}
