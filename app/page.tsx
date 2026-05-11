import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-semibold">Poco Docs</h1>
      <p className="text-fd-muted-foreground">Choose your language.</p>
      <div className="flex gap-3">
        <Link className="text-fd-primary underline" href="/zh">
          中文
        </Link>
        <Link className="text-fd-primary underline" href="/en">
          English
        </Link>
      </div>
    </main>
  );
}
