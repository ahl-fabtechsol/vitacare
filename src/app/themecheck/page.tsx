import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Next.js 15.2 with Dark Mode
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ModeToggle />
        </div>
      </div>

      <div className="mt-32 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Next.js with Dark Mode
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Card
            title="Light & Dark Mode"
            description="This project supports both light and dark themes. Try toggling the theme using the button in the top right."
          />
          <Card
            title="Next.js 15.2"
            description="Built with the latest Next.js features including the App Router and Server Components."
          />
          <Card
            title="Tailwind CSS"
            description="Styled with Tailwind CSS for responsive design and easy theme switching."
          />
          <Card
            title="shadcn/ui"
            description="Uses shadcn/ui components which have built-in dark mode support."
          />
        </div>
      </div>
    </main>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 transition-colors">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
