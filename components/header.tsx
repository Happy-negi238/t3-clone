import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="flex w-full h-12 flex-row justify-end items-center border-b border-border bg-sidebar px-4">
      <ModeToggle />
    </div>
  );
};

export default Header;
