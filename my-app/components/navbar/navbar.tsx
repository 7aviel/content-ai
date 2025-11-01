import Link from "next/link";
import ThemeToggle from "../theme/themeToggle";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 py-4 px-10 w-full flex justify-center ">
      <div className="p-2 flex w-md items-center px-4 dark:bg-background/40 backdrop-blur-lg border-2 rounded-2xl flex-wrap  justify-between shadow-2xl">
        <a href="">Icon</a>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <ThemeToggle />
          <Button
            className="font-bold rounded-xl "
            variant={"destructive"}
            asChild
          >
            <Link href="/dashboard">Empezar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
