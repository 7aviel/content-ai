import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  items-center justify-center  dark:bg-background">
      <main className="flex h-2/4 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-background sm:items-start">
        <div className="flex flex-col gap-15 ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[2.5em] sm:">
              DESBLOQUEA TU POTENCIAL CREATIVO
            </h1>
            <h3>Deja que la IA se encargue del resto</h3>
          </div>
          <div className="flex justify-center">
            <Button variant="destructive" asChild>
              <Link href="/dashboard">Probar demo</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
