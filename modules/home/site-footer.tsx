import Image from "next/image";

const GITHUB_URL = "https://github.com/Happy-negi238/t3-clone";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          {/* <span className="flex h-5 w-4 overflow-hidden rounded-[3px]">
            <span className="w-1/2 bg-primary" />
            <span className="w-1/2 bg-white" />
          </span> */}
          <Image src="./logo.svg" alt="logo" width={80} height={80} />
          {/* <span className="font-heading font-semibold text-white/80">
              T3 Chat
            </span>{" "} */}
          © {new Date().getFullYear()}
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
        >
          <Image src="./github.svg" alt="github" width={25} height={25} />
          GitHub
        </a>
      </div>
    </footer>
  );
}
