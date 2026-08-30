"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = ["Chat with AI", "Models", "Pricing"] as const;

export function SiteNavbar() {
  const [active, setActive] = useState<(typeof NAV_LINKS)[number]>("Chat with AI");

  return (
    <header className="relative z-20 max-w-6xl mx-auto flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        {/* <span className="flex h-6 w-5 overflow-hidden rounded-[4px]">
          <span className="w-1/2 bg-primary" />
          <span className="w-1/2 bg-white" />
        </span>
        <span className="font-heading text-lg font-bold tracking-wide text-white">
          T3-chat
        </span> */}
        <Image src="./logo.svg" alt="logo" width={100} height={100}/>
      </div>

      {/* Nav links */}
      <nav className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={cn(
              "relative pb-1 text-sm font-medium transition-colors",
              active === link
                ? "text-white"
                : "text-white/50 hover:text-white/80"
            )}
          >
            {link}
            {active === link && (
              <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
            )}
          </button>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-white/80"
          >
            <Image src="./github.svg" alt="github" width={20} height={20} />
            Sign-in
          </Button>
        </Link>
      </div>
    </header>
  );
}
