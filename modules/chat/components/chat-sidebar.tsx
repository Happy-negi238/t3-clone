"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserButton from "@/modules/authentication/components/user-button";
import { X, PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ChatSidebar = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center border-b border-sidebar-border px-4 py-3">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>

      <div className="p-4">
        <Button asChild className="w-full">
          <Link href="/" className="flex items-center">
            <PlusIcon className="mr-2 h-4 w-4" />
            New Chat
          </Link>
        </Button>
      </div>

      <div className="px-4 pb-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search your thread.."
            className="pl-9 pr-8 bg-sidebar-accent border-sidebar-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X width={14} height={14} />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-2">{/* TODO */}</div>

        {/* FOOTER */}
        <div className="p-4 flex items-center gap-3 border-t border-sidebar-border">
          <UserButton user={user} />
          <span className="flex-1 text-sm text-sidebar-foreground truncate">
            {user.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
